import React from "react";

import styles from "../../../styles/Home.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.footer__top}>
          <ul>
            <li>Клиентам</li>
            <li>
              <Link href={"#"}>Часто задаваемые вопросы</Link>
            </li>
            <li>
              <Link href={"#"}>Контакты</Link>
            </li>
            <li>
              <Link href={"#"}>Отзывы</Link>
            </li>
          </ul>
          <ul>
            <li>Правовые документы</li>
            <li>
              <Link href={"#"}>Политика конфиденциальности</Link>
            </li>
            <li>
              <Link href={"#"}>Правовая информация</Link>
            </li>
          </ul>
          <div className={styles.footer__icons}>
            <Link href={"https://apple.com"} target="_blank">
              <Image
                height={18}
                width={15}
                src={"/icons/apple-logo.svg"}
                alt={"apple logo"}
              />
            </Link>
            <Link href={"https://google.com"} target="_blank">
              <Image
                height={18}
                width={15}
                src={"/icons/google-play.svg"}
                alt={"apple logo"}
              />
            </Link>
          </div>
        </div>
        <div className={styles.footer__bottom}>
          <Link href={"/"} className={styles.header__top_logo}>
            <h2>Mrava Sar</h2>
          </Link>
          <div className={styles.footer__bottom_copyright}>
            <p>© 2023 MRAVA SAR</p>
            <span>Все права защищены</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
