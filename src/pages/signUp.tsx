import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

import apple from "@/assets/icons/apple-logo-black.svg";
import google from "@/assets/icons/google.svg";
import yandex from "@/assets/icons/yandex.svg";

import styles from "@/styles/SignUp.module.scss";

const authFormValidate = Yup.object().shape({
  login: Yup.string().required("*"),
  email: Yup.string().email("Invalid email").required("*"),
  password: Yup.string()
    .required("*")
    .matches(/^(?=.{8,})/, "8 символов")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])/, "1 маленька, 1 большая")
    .matches(/^(?=.*[0-9])/, "1 число")
    .matches(/^(?=.*[!@#\$%\^&\*])/, "Специльный символ"),
  repeatPassword: Yup.string()
    .required("*")
    .matches(/^(?=.{8,})/, "8 символов")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])/, "1 маленька, 1 большая")
    .matches(/^(?=.*[0-9])/, "1 число")
    .matches(/^(?=.*[!@#\$%\^&\*])/, "Специльный символ")
    .oneOf([Yup.ref("password"), ""], "Пароли должны совпадать"),
  name: Yup.string().required("*"),
  tel: Yup.string()
    .required("*")
    .matches(/^8[1-9]\d{9}\b/, "Начало номера с 8, не > 11 цифр"),
});

const initialValues = {
  login: "",
  email: "",
  password: "",
  repeatPassword: "",
  name: "",
  tel: "",
};

export default function SignUp() {
  const [formData, setFormData] = useState([initialValues]);
  const [nextAuthStage, setNextAuthStage] = useState(false);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div className={styles.signUp}>
      <div className={styles.signUp__wrapper}>
        <Link href={"/"} className={styles.signUp__title}>
          <h2>Mrava Sar</h2>
        </Link>
        <Formik
          initialValues={initialValues}
          validationSchema={authFormValidate}
          onSubmit={(values) => {
            setFormData([values]);
          }}
        >
          {({ errors, isValid }) => (
            <Form>
              <div className={styles.signUp__stages}>
                <div
                  className={styles.signUp__stages_firstStage}
                  style={nextAuthStage ? { right: "500px" } : { right: "0px" }}
                >
                  <div>
                    <label htmlFor="login">
                      Login
                      {errors.login ? (
                        <small className="form__requiredText">
                          {errors.login}
                        </small>
                      ) : null}
                    </label>
                    <Field type="text" id="login" name="login" />
                  </div>
                  <div>
                    <label htmlFor="email">
                      Email
                      {errors.email ? (
                        <small className="form__requiredText">
                          {errors.email}
                        </small>
                      ) : null}
                    </label>
                    <Field type="text" id="email" name="email" />
                  </div>
                  <div>
                    <label htmlFor="password">
                      Пароль
                      {errors.password ? (
                        <small className="form__requiredText">
                          {errors.password}
                        </small>
                      ) : null}
                    </label>
                    <Field type="password" id="password" name="password" />
                  </div>
                  <div>
                    <label htmlFor="repeatPassword">
                      Повторите пароль
                      {errors.repeatPassword ? (
                        <small className="form__requiredText">
                          {errors.repeatPassword}
                        </small>
                      ) : null}
                    </label>
                    <Field
                      type="password"
                      id="repeatPassword"
                      name="repeatPassword"
                    />
                  </div>
                  <input
                    type="button"
                    value="Далее"
                    onClick={() => setNextAuthStage(!nextAuthStage)}
                  />
                  <div className={styles.signUp__moreAction}>
                    <span>
                      Есть аккаунт? <Link href="/login">Войти</Link>
                    </span>
                  </div>
                  <div className={styles.signUp__icons}>
                    <Link href={"https://apple.com/"}>
                      <Image
                        height={20}
                        width={20}
                        src={apple}
                        alt={"apple logo"}
                      />
                    </Link>
                    <Link href={"https://google.com/"}>
                      <Image
                        height={20}
                        width={20}
                        src={google}
                        alt={"apple logo"}
                      />
                    </Link>
                    <Link href={"https://ya.ru/"}>
                      <Image
                        height={20}
                        width={20}
                        src={yandex}
                        alt={"apple logo"}
                      />
                    </Link>
                  </div>
                </div>
                <div
                  className={styles.signUp__stages_secondStage}
                  style={!nextAuthStage ? { left: "500px" } : { left: "0px" }}
                >
                  <div>
                    <label htmlFor="name">
                      Имя
                      {errors.name ? (
                        <small className="form__requiredText">
                          {errors.name}
                        </small>
                      ) : null}
                    </label>
                    <Field type="text" id="name" name="name" />
                  </div>
                  <div>
                    <label htmlFor="tel">
                      Телефон{" "}
                      {errors.tel ? (
                        <small className="form__requiredText">
                          {errors.tel}
                        </small>
                      ) : null}
                    </label>
                    <Field type="tel" id="tel" name="tel" />
                  </div>
                  <p>
                    Нажимая на «Зарегистрироваться», вы даёте своё согласие на
                    обработку персональных данных.
                  </p>
                  <input type="submit" value="Зарегистрироваться" />
                  {!isValid && (
                    <div className="form__requiredText">
                      Не все поля заполнены
                    </div>
                  )}
                  <div className={styles.signUp__backBtn}>
                    <span onClick={() => setNextAuthStage(!nextAuthStage)}>
                      &#171; Назада
                    </span>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
