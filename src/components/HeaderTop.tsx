import Link from "next/link";
import Image from "next/image";
import React from "react";

import apple from "@/assets/icons/apple-logo.svg";
import googlePlay from "@/assets/icons/google-play.svg";
import menu from "@/assets/icons/menu.svg";
import colse from "@/assets/icons/close.svg";

import styles from "@/styles/Home.module.scss";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { setIsOpenMenu } from "@/store/reducers";

export default function HeaderTop() {
  const isOpenMenu = useAppSelector((state) => state.isOpenMenu);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.header__topWrapper}>
      <div>
        <div>
          <Link href={"/"} className={styles.header__top_logo}>
            <h2>Mrava Sar</h2>
          </Link>
        </div>
        <div className={styles.header__top_descktop}>
          <div className={styles.header__top_icons}>
            <Link href={"https://apple.com"} target="_blank">
              <Image height={18} width={15} src={apple} alt={"apple logo"} />
            </Link>
            <Link href={"https://google.com"} target="_blank">
              <Image
                height={18}
                width={15}
                src={googlePlay}
                alt={"goole play logo"}
              />
            </Link>
          </div>
          <ul
            className={`${styles.header__navigate} ${
              isOpenMenu ? styles.header__menu_dispabled : ""
            }`}
          >
            <li>
              <Link href={"/"}>Главная</Link>
            </li>
            <li>
              <Link href={"/adding-object"}>Зарегистрировать объект</Link>
            </li>
            <li>
              <Link href={"/blog"}>Блог</Link>
            </li>
            <li>
              <Link href={"#"}>Контакты</Link>
            </li>
            <li>
              <Link href={"/login"}>Войти</Link>
            </li>
          </ul>
        </div>

        <div
          className={styles.header__topWrapper_menu}
          onClick={() => dispatch(setIsOpenMenu(true))}
        >
          <Image height={30} width={30} src={menu} alt={"menu"} />
        </div>
        <div
          className={`${
            !isOpenMenu
              ? styles.header__menu_dispabled
              : styles.header__top_mobileIcons
          }`}
        >
          <div
            className={styles.close__icons}
            onClick={() => dispatch(setIsOpenMenu(false))}
          >
            <Image height={30} width={30} src={colse} alt="close" />
          </div>
          <div>
            <Link href={"https://apple.com"} target="_blank">
              <Image height={18} width={15} src={apple} alt={"apple logo"} />
            </Link>
            <Link href={"https://google.com"} target="_blank">
              <Image
                height={18}
                width={15}
                src={googlePlay}
                alt={"google play logo"}
              />
            </Link>
          </div>
          <ul className={styles.header__navigate}>
            <li>
              <Link href={"/"}>Главная</Link>
            </li>
            <li>
              <Link href={"/adding-object"}>Зарегистрировать объект</Link>
            </li>
            <li>
              <Link href={"/blog"}>Блог</Link>
            </li>
            <li>
              <Link href={"#"}>Контакты</Link>
            </li>
            <li>
              <Link href={"/login"}>Войти</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
