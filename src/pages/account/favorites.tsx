import Image from "next/image";

import { Layout } from "antd";

import AccountWrapper from "@/components/parts/Account/AccountWrapper";

import styles from "@/styles/Account/Favorites.module.scss";

import image1 from "@/assets/img/theatre-jpg.jpg";
import star from "@/assets/icons/star.svg";
import like from "@/assets/icons/like-red.svg";
import Head from "next/head";

const { Content } = Layout;

export default function Favorites() {
  return (
    <AccountWrapper>
      <>
        <Head>
          <title>Бронирования</title>
        </Head>
        <Content className={styles.content}>
          <div>
            <div className={styles.object__card}>
              <div className={styles.object__card_image}>
                <div className={styles.object__card_rewiew}>8.6</div>
                <div className={styles.object__image_list}>
                  <div>
                    <Image
                      src={image1}
                      quality={100}
                      fill
                      priority
                      alt={"object image"}
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
                      alt={"object image"}
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
                      alt={"object image"}
                      sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.object__card_title}>
                <h3>Ti amore</h3>
                <div>
                  <Image height={15} width={15} src={star} alt={"star"} />
                  <Image height={15} width={15} src={star} alt={"star"} />
                  <Image height={15} width={15} src={star} alt={"star"} />
                  <Image height={15} width={15} src={star} alt={"star"} />
                  <Image height={15} width={15} src={star} alt={"star"} />
                </div>
              </div>
              <div className={styles.object__card_name}>
                <h4>Двухместный номер Стандарт</h4>
              </div>
              <div className={styles.object__card_city}>
                <p>Москва</p>
              </div>
              <div className={styles.object__card_like}>
                <Image height={20} width={20} src={like} alt="like" />
              </div>
            </div>
          </div>
          <div>
            <div className={styles.object__card}>
              <div className={styles.object__card_image}>
                <div className={styles.object__card_rewiew}>8.6</div>
                <div className={styles.object__image_list}>
                  <div>
                    <Image
                      src={image1}
                      quality={100}
                      fill
                      priority
                      alt={"object image"}
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
                      alt={"object image"}
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
                      alt={"object image"}
                      sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.object__card_title}>
                <h3>Ti amore</h3>
                <div>
                  <Image height={15} width={15} src={star} alt={"star"} />
                  <Image height={15} width={15} src={star} alt={"star"} />
                  <Image height={15} width={15} src={star} alt={"star"} />
                  <Image height={15} width={15} src={star} alt={"star"} />
                  <Image height={15} width={15} src={star} alt={"star"} />
                </div>
              </div>
              <div className={styles.object__card_name}>
                <h4>Двухместный номер Стандарт</h4>
              </div>
              <div className={styles.object__card_city}>
                <p>Москва</p>
              </div>
              <div className={styles.object__card_like}>
                <Image height={20} width={20} src={like} alt="like" />
              </div>
            </div>
          </div>
        </Content>
      </>
    </AccountWrapper>
  );
}
