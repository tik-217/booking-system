import Link from "next/link";
import Image from "next/image";
import { Layout } from "antd";

import styles from "@/styles/Account/Messages/Dialog.module.scss";

import AccountWrapper from "@/components/parts/Account/AccountWrapper";

import calendar from "@/assets/icons/calendar.svg";
import door from "@/assets/icons/door.svg";
import arrowLeft from "@/assets/icons/arrow-left-blue.svg";

const { Content } = Layout;

export default function Dialog() {
  return (
    <AccountWrapper>
      <Content className={styles.content}>
        <div>
          <div className={styles.dialog}>
            <div className={styles.dialog__backBtn}>
              <Image
                height={10}
                width={10}
                src={arrowLeft}
                alt={"arrow left"}
              />
              <Link href={"/account/messages"}>Назад</Link>
            </div>
            <div className={styles.dialog__meta}>
              <h5>Галина Новикова</h5>
              <div>
                <Image height={10} width={10} src={calendar} alt={"calendar"} />
                <span>1 февраля 2023</span>
              </div>
              <div>
                <Image height={10} width={10} src={door} alt={"door"} />
                <span>Четырехместный номер Стандарт</span>
              </div>
            </div>
            <div className={styles.dialog__messages}>
              <div className={styles.messages}>
                <div>
                  <div className={styles.messages__left}>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit, porro officia quia officiis, provident in ad
                      molestias amet deleniti saepe minus! Laboriosam
                      consequatur quas possimus quibusdam aperiam, doloribus
                      soluta ducimus.
                    </p>
                  </div>
                  <div className={styles.messages__right}>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit, porro officia quia officiis, provident in ad
                      molestias amet deleniti saepe minus! Laboriosam
                      consequatur quas possimus quibusdam aperiam, doloribus
                      soluta ducimus.
                    </p>
                  </div>
                  <div className={styles.messages__left}>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit, porro officia quia officiis, provident in ad
                      molestias amet deleniti saepe minus! Laboriosam
                      consequatur quas possimus quibusdam aperiam, doloribus
                      soluta ducimus.
                    </p>
                  </div>
                  <div className={styles.messages__right}>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit, porro officia quia officiis, provident in ad
                      molestias amet deleniti saepe minus! Laboriosam
                      consequatur quas possimus quibusdam aperiam, doloribus
                      soluta ducimus.
                    </p>
                  </div>
                  <div className={styles.messages__left}>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit, porro officia quia officiis, provident in ad
                      molestias amet deleniti saepe minus! Laboriosam
                      consequatur quas possimus quibusdam aperiam, doloribus
                      soluta ducimus.
                    </p>
                  </div>
                  <div className={styles.messages__right}>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit, porro officia quia officiis, provident in ad
                      molestias amet deleniti saepe minus! Laboriosam
                      consequatur quas possimus quibusdam aperiam, doloribus
                      soluta ducimus.
                    </p>
                  </div>
                  <div className={styles.messages__left}>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit, porro officia quia officiis, provident in ad
                      molestias amet deleniti saepe minus! Laboriosam
                      consequatur quas possimus quibusdam aperiam, doloribus
                      soluta ducimus.
                    </p>
                  </div>
                  <div className={styles.messages__right}>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit, porro officia quia officiis, provident in ad
                      molestias amet deleniti saepe minus! Laboriosam
                      consequatur quas possimus quibusdam aperiam, doloribus
                      soluta ducimus.
                    </p>
                  </div>
                  <div className={styles.messages__left}>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit, porro officia quia officiis, provident in ad
                      molestias amet deleniti saepe minus! Laboriosam
                      consequatur quas possimus quibusdam aperiam, doloribus
                      soluta ducimus.
                    </p>
                  </div>
                  <div className={styles.messages__right}>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit, porro officia quia officiis, provident in ad
                      molestias amet deleniti saepe minus! Laboriosam
                      consequatur quas possimus quibusdam aperiam, doloribus
                      soluta ducimus.
                    </p>
                  </div>
                  <div className={styles.messages__left}>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit, porro officia quia officiis, provident in ad
                      molestias amet deleniti saepe minus! Laboriosam
                      consequatur quas possimus quibusdam aperiam, doloribus
                      soluta ducimus.
                    </p>
                  </div>
                  <div className={styles.messages__right}>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit, porro officia quia officiis, provident in ad
                      molestias amet deleniti saepe minus! Laboriosam
                      consequatur quas possimus quibusdam aperiam, doloribus
                      soluta ducimus.
                    </p>
                  </div>
                  <div className={styles.messages__left}>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit, porro officia quia officiis, provident in ad
                      molestias amet deleniti saepe minus! Laboriosam
                      consequatur quas possimus quibusdam aperiam, doloribus
                      soluta ducimus.
                    </p>
                  </div>
                  <div className={styles.messages__right}>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit, porro officia quia officiis, provident in ad
                      molestias amet deleniti saepe minus! Laboriosam
                      consequatur quas possimus quibusdam aperiam, doloribus
                      soluta ducimus.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.messageSending}>
                <textarea placeholder="Введите сообщение" rows={2} />
                <button>Отправить</button>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </AccountWrapper>
  );
}
