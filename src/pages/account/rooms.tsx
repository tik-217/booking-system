import { Layout } from "antd";

import styles from "@/styles/Account/Rooms.module.scss";

import AccountWrapper from "@/components/parts/Account/AccountWrapper";

import Link from "next/link";
import Image from "next/image";

import image1 from "@/assets/img/theatre-jpg.jpg";
import star from "@/assets/icons/star.svg";
import Head from "next/head";

const { Content } = Layout;

export default function Rooms() {
  return (
    <AccountWrapper>
      <>
        <Head>
          <title>Комнаты</title>
        </Head>
        <div className={styles.rooms__list}>
          <Content className={styles.content}>
            <div>
              <div className={styles.room__card}>
                <div className={styles.room__card_image}>
                  <div className={styles.room__card_rewiew}>8.6</div>
                  <div className={styles.room__image_list}>
                    <div>
                      <Image
                        src={image1}
                        quality={100}
                        fill
                        priority
                        alt={"room image"}
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
                        alt={"room image"}
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
                        alt={"room image"}
                        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.room__card_title}>
                  <h3>Ti amore</h3>
                  <div>
                    <Image height={15} width={15} src={star} alt={"star"} />
                    <Image height={15} width={15} src={star} alt={"star"} />
                    <Image height={15} width={15} src={star} alt={"star"} />
                    <Image height={15} width={15} src={star} alt={"star"} />
                    <Image height={15} width={15} src={star} alt={"star"} />
                  </div>
                </div>
                <div className={styles.room__card_name}>
                  <h4>Двухместный номер Стандарт</h4>
                </div>
                <div className={styles.room__card_btn}>
                  <Link href={"/"}>Изменить</Link>
                </div>
                <div className={styles.room__card_cost}>
                  <div>
                    <p>12000₽</p>
                  </div>
                </div>
              </div>
            </div>
          </Content>
          <Content className={styles.content}>
            <div>
              <div className={styles.room__card}>
                <div className={styles.room__card_image}>
                  <div className={styles.room__card_rewiew}>8.6</div>
                  <div className={styles.room__image_list}>
                    <div>
                      <Image
                        src={image1}
                        quality={100}
                        fill
                        priority
                        alt={"room image"}
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
                        alt={"room image"}
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
                        alt={"room image"}
                        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.room__card_title}>
                  <h3>Ti amore</h3>
                  <div>
                    <Image height={15} width={15} src={star} alt={"star"} />
                    <Image height={15} width={15} src={star} alt={"star"} />
                    <Image height={15} width={15} src={star} alt={"star"} />
                    <Image height={15} width={15} src={star} alt={"star"} />
                    <Image height={15} width={15} src={star} alt={"star"} />
                  </div>
                </div>
                <div className={styles.room__card_name}>
                  <h4>Двухместный номер Стандарт</h4>
                </div>
                <div className={styles.room__card_btn}>
                  <Link href={"/"}>Изменить</Link>
                </div>
                <div className={styles.room__card_cost}>
                  <div>
                    <p>12000₽</p>
                  </div>
                </div>
              </div>
            </div>
          </Content>
        </div>
      </>
    </AccountWrapper>
  );
}
