import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "@/styles/Login.module.scss";
import { Field, Form, Formik } from "formik";

import apple from "@/assets/icons/apple-logo-black.svg";
import google from "@/assets/icons/google.svg";
import yandex from "@/assets/icons/yandex.svg";

import * as Yup from "yup";

const authFormValidate = Yup.object().shape({
  login: Yup.string().required("*"),
  password: Yup.string().required("*"),
});

const initialValues = {
  login: "",
  password: "",
};

export default function Login() {
  return (
    <div className={styles.logo}>
      <div className={styles.login}>
        <Link href={"/"} className={styles.login__title}>
          <h2>Mrava Sar</h2>
        </Link>
        <Formik
          initialValues={initialValues}
          validationSchema={authFormValidate}
          onSubmit={(values) => {
            console.log([values]);
          }}
        >
          <Form>
            <div>
              <label htmlFor="login">Email/login</label>
              <Field type="text" id="login" name="login" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Field type="password" id="password" name="password" />
            </div>
            <Link href={"/account"}>
              <input type="submit" value="Войти" />
            </Link>
          </Form>
        </Formik>
        <div className={styles.login__moreAction}>
          <a href="#">Забыли пароль?</a>
          <Link href="/signUp">Создать аккаунт</Link>
        </div>
        <div className={styles.login__icons}>
          <Link href={"https://apple.com"}>
            <Image height={20} width={20} src={apple} alt={"apple logo"} />
          </Link>
          <Link href={"https://google.com/"}>
            <Image
              height={20}
              width={20}
              src={google}
              alt={"google play logo"}
            />
          </Link>
          <Link href={"https://ya.ru/"}>
            <Image height={20} width={20} src={yandex} alt={"apple logo"} />
          </Link>
        </div>
      </div>
    </div>
  );
}
