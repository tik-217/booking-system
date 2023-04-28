import Link from "next/link";
import Image from "next/image";

import { Checkbox, Layout } from "antd";

import plus from "@/assets/icons/plus.svg";

import styles from "@/styles/Account/Profile.module.scss";

import AccountWrapper from "@/components/parts/Account/AccountWrapper";
import { useState } from "react";
import { CheckboxChangeEvent } from "antd/lib/checkbox";
import Head from "next/head";

const { Content } = Layout;

export default function Profile() {
  const [man, setMan] = useState(false);
  const [woman, setWoman] = useState(false);

  function changeMan(e: CheckboxChangeEvent) {
    if (e.target.checked) setMan(e.target.checked);
    if (!man) setWoman(man);
  }

  function changeWoman(e: CheckboxChangeEvent) {
    if (e.target.checked) setWoman(e.target.checked);
    if (!woman) setMan(woman);
  }

  return (
    <AccountWrapper>
      <>
        <Head>
          <title>Профиль</title>
        </Head>
        <Content className={styles.content}>
          <div>
            <div className={styles.personalData}>
              <h4>Личные данные</h4>
              <div>
                <div>
                  <div>
                    <label htmlFor="name">Имя</label>
                    <input type="text" id="name" />
                  </div>
                  <div>
                    <label htmlFor="secondName">Фамилия</label>
                    <input type="text" id="secondName" />
                  </div>
                </div>
                <div>
                  <div>
                    <label htmlFor="dateOfBirth">Дата рождения</label>
                    <input type="text" id="dateOfBirth" />
                  </div>
                  <div>
                    <label htmlFor="phone">Телефон</label>
                    <input type="text" id="phone" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.checkbox}>
              <Checkbox checked={man} onChange={(e) => changeMan(e)}>
                Мужчина
              </Checkbox>
              <Checkbox checked={woman} onChange={(e) => changeWoman(e)}>
                Женщина
              </Checkbox>
            </div>
            <div className={styles.cards}>
              <h4>Карты</h4>
              <div className={styles.cards__list}>
                <div>
                  <h6>tinkoff</h6>
                  <div className={styles.cards__list_meta}>
                    <p>3221 0928 1293 7364</p>
                    <div>
                      <span>02/25</span>
                      <span>tigran gabulyan</span>
                    </div>
                  </div>
                </div>
                <div className={styles.card__placeholder}>
                  <Image height={30} width={30} src={plus} alt="plus" />
                </div>
              </div>
            </div>
            <div className={styles.changePassword}>
              <h4>Сменить пароль</h4>
              <div>
                <div>
                  <label htmlFor="oldPassword">Старый пароль</label>
                  <input type="password" id="oldPassword" />
                </div>
                <div>
                  <label htmlFor="passwordAgain">Новый пароль</label>
                  <input type="password" id="passwordAgain" />
                </div>
                <div>
                  <label htmlFor="newPasswordAgain">
                    Повторно старый пароль
                  </label>
                  <input type="password" id="newPasswordAgain" />
                </div>
                <Link href={"/"}>Не помню пароль</Link>
              </div>
            </div>
            <div className={styles.profileBtn}>
              <button>Сохранить</button>
            </div>
            <div className={styles.deleteBtn}>
              <Link href={"/"}>Удалить аккаунт</Link>
            </div>
          </div>
        </Content>
      </>
    </AccountWrapper>
  );
}
