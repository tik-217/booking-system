import Image from "next/image";
import Link from "next/link";

import { Layout } from "antd";

import styles from "@/styles/Account/History.module.scss";

import image1 from "@/assets/img/theatre-jpg.jpg";
import star from "@/assets/icons/star.svg";

import AccountWrapper from "@/components/parts/Account/AccountWrapper";
import Head from "next/head";

const { Content } = Layout;

export default function History() {
  return (
    <AccountWrapper>
      <>
        <Head>
          <title>История заказов</title>
        </Head>
        <Content className={styles.content}>
          <div>
            <div className={styles.history__card}>
              <div className={styles.history__card_image}>
                <div className={styles.history__card_rewiew}>8.6</div>
                <div className={styles.history__image_list}>
                  <div>
                    <Image
                      src={image1}
                      quality={100}
                      fill
                      priority
                      alt={"history image"}
                      sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                    />
                  </div>{" "}
                  <div>
                    <Image
                      src={image1}
                      quality={100}
                      fill
                      priority
                      alt={"history image"}
                      sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                    />
                  </div>{" "}
                  <div>
                    <Image
                      src={image1}
                      quality={100}
                      fill
                      priority
                      alt={"history image"}
                      sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.history__card_title}>
                <h3>Ti amore</h3>
                <div>
                  <Image height={15} width={15} src={star} alt={"star"} />
                  <Image height={15} width={15} src={star} alt={"star"} />
                  <Image height={15} width={15} src={star} alt={"star"} />
                  <Image height={15} width={15} src={star} alt={"star"} />
                  <Image height={15} width={15} src={star} alt={"star"} />
                </div>
              </div>
              <div className={styles.history__card_name}>
                <h4>Двухместный номер Стандарт</h4>
              </div>
              <div className={styles.history__card_moreActions}>
                <Link href={"/"}>Пдробнее</Link>
                <Link href={"/"}>Чек</Link>
              </div>
            </div>
          </div>
        </Content>
      </>
    </AccountWrapper>
  );
}
