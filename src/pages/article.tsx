import Link from "next/link";
import Image from "next/image";
import React from "react";

import homeStyles from "@/styles/Home.module.scss";
import addingObjectStyles from "@/styles/AddingObject.module.scss";
import styles from "@/styles/Article.module.scss";

import image1 from "@/assets/img/main-background.jpg";
import user from "@/assets/icons/user.svg";

export default function Article() {
  return (
    <div className={styles.articleContent}>
      <header
        className={`${homeStyles.header__topWrapper} ${addingObjectStyles.header__topWrapper}`}
      >
        <Link href={"/"} className={homeStyles.header__top_logo}>
          <h2>Mrava Sar</h2>
        </Link>
      </header>
      <article className={styles.article}>
        <div className={styles.article__title}>
          <h3>
            Туристическую визу в Эфиопию будут оформлять только в аэропорту
          </h3>
          <div className={styles.article__meta}>
            <span>03.01.2023</span>
            <span>Author</span>
          </div>
        </div>
        <div className={styles.article__content}>
          <div>
            <div className={styles.article__content_img}>
              <Image
                src={image1}
                alt={"image 1"}
                fill
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              aspernatur, sed suscipit sint fugiat, qui, recusandae maiores
              iusto earum explicabo asperiores rem veritatis inventore. Quae aut
              hic aliquam suscipit sunt! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Iure aspernatur, sed suscipit sint fugiat, qui,
              recusandae maiores iusto earum explicabo asperiores rem veritatis
              inventore. Quae aut hic aliquam suscipit sunt!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              aspernatur, sed suscipit sint fugiat, qui, recusandae maiores
              iusto earum explicabo asperiores rem veritatis inventore. Quae aut
              hic aliquam suscipit sunt! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Iure aspernatur, sed suscipit sint fugiat, qui,
              recusandae maiores iusto earum explicabo asperiores rem veritatis
              inventore. Quae aut hic aliquam suscipit sunt!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              aspernatur, sed suscipit sint fugiat, qui, recusandae maiores
              iusto earum explicabo asperiores rem veritatis inventore. Quae aut
              hic aliquam suscipit sunt! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Iure aspernatur, sed suscipit sint fugiat, qui,
              recusandae maiores iusto earum explicabo asperiores rem veritatis
              inventore. Quae aut hic aliquam suscipit sunt!
            </p>
            <div className={styles.article__content_img}>
              <Image
                src={image1}
                alt={"image 1"}
                fill
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              aspernatur, sed suscipit sint fugiat, qui, recusandae maiores
              iusto earum explicabo asperiores rem veritatis inventore. Quae aut
              hic aliquam suscipit sunt! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Iure aspernatur, sed suscipit sint fugiat, qui,
              recusandae maiores iusto earum explicabo asperiores rem veritatis
              inventore. Quae aut hic aliquam suscipit sunt!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              aspernatur, sed suscipit sint fugiat, qui, recusandae maiores
              iusto earum explicabo asperiores rem veritatis inventore. Quae aut
              hic aliquam suscipit sunt! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Iure aspernatur, sed suscipit sint fugiat, qui,
              recusandae maiores iusto earum explicabo asperiores rem veritatis
              inventore. Quae aut hic aliquam suscipit sunt!
            </p>
          </div>
          <div className={styles.article__author}>
            <Image height={50} width={50} src={user} alt="user" />
            <div>
              <h6>Андрей Гладков</h6>
              <span>The Times</span>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
