// react/next
import React from "react";
import Link from "next/link";
import Image from "next/image";

// styles
import styles from "@/styles/Blog.module.scss";

// images
import antonio from "@/assets/img/antonio-gabola-6ua5_yFLDSw-unsplash.jpg";
import glasess from "@/assets/icons/glasess.svg";
import heart from "@/assets/icons/heart.svg";

// components
import Sidebar from "@/components/parts/Blog/Sidebar";
import Parser from "rss-parser";

export default function Blog() {
  return (
    <div className={styles.blog}>
      <header className={styles.header}>
        <div className={styles.header__title}>
          <h3>Блог исследователя</h3>
          <h5>Кому не сидится на месте</h5>
        </div>
        <div className={styles.header__logoTitle}>
          <Link href={"/"}>
            <h1>Mrava Sar</h1>
          </Link>
        </div>
      </header>
      <div className={styles.content}>
        <main className={styles.main}>
          <div className={styles.tags}>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum almsd</p>
            <p>Lorem</p>
            <p>Lorem ipsum mmsd sdsasda</p>
            <p>Lorem ipsum asddsddsd</p>
            <p>Lorem ipsum aaa dasdddd d</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
          </div>
          <article className={styles.articles}>
            <div>
              <article className={styles.article__big}>
                <div className={styles.article__image}>
                  <Link href={"/article"}>
                    <Image
                      height={250}
                      width={250}
                      src={antonio}
                      alt={"blog article"}
                    />
                  </Link>
                </div>
                <div className={styles.article__meta}>
                  <Link href={"/article"}>
                    <span className={styles.travelersBlog__description_date}>
                      03.01.2023
                    </span>
                  </Link>
                  <div className={styles.travelersBlog__description_meta}>
                    <div>
                      <Link href={"/article"}>
                        <Image
                          height={20}
                          width={22}
                          src={glasess}
                          alt={"viewers"}
                        />
                        <span>1200</span>
                      </Link>
                    </div>
                    <div>
                      <Link href={"/article"}>
                        <Image
                          height={15}
                          width={17}
                          src={heart}
                          alt={"likes"}
                        />
                        <span>8</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <p>
                  <Link href={"/article"}>
                    <strong>Туристическую</strong> визу в Эфиопию будут
                    оформлять только в аэропорту прилета
                  </Link>
                </p>
                <div className={styles.article__text}>
                  <p>
                    <Link href={"/article"}>
                      <strong>Туристическую</strong> ipsum dolor sit amet
                      consectetur adipisicing elit. Expedita eaque, eius alias
                      est explicabo, aut ratione unde laudantium assumenda minus
                      at tempore maiores distinctio repudiandae officia sequi
                      corrupti fuga pariatur?
                    </Link>
                  </p>
                  <p>
                    <Link href={"/article"}>
                      <strong>Туристическую</strong> ipsum dolor sit amet
                      consectetur adipisicing elit. Expedita eaque, eius alias
                      est explicabo, aut ratione unde laudantium assumenda minus
                      at tempore maiores distinctio repudiandae officia sequi
                      corrupti fuga pariatur?
                    </Link>
                  </p>
                </div>
              </article>
              <article className={styles.article__small}>
                <div className={styles.article__image}>
                  <Link href={"/article"}>
                    <Image
                      height={250}
                      width={250}
                      src={antonio}
                      alt={"blog article"}
                    />
                  </Link>
                </div>
                <div className={styles.article__meta}>
                  <Link href={"/article"}>
                    <span className={styles.travelersBlog__description_date}>
                      03.01.2023
                    </span>
                  </Link>
                  <div className={styles.travelersBlog__description_meta}>
                    <div>
                      <Link href={"/article"}>
                        <Image
                          height={20}
                          width={22}
                          src={glasess}
                          alt={"viewers"}
                        />
                        <span>1200</span>
                      </Link>
                    </div>
                    <div>
                      <Link href={"/article"}>
                        <Image
                          height={15}
                          width={17}
                          src={heart}
                          alt={"likes"}
                        />
                        <span>8</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <p>
                  <Link href={"/article"}>
                    <strong>Туристическую</strong> визу в Эфиопию будут
                    оформлять только в аэропорту прилета
                  </Link>
                </p>
              </article>
              <article className={styles.article__small}>
                <div className={styles.article__image}>
                  <Link href={"/article"}>
                    <Image
                      height={250}
                      width={250}
                      src={antonio}
                      alt={"blog article"}
                    />
                  </Link>
                </div>
                <div className={styles.article__meta}>
                  <Link href={"/article"}>
                    <span className={styles.travelersBlog__description_date}>
                      03.01.2023
                    </span>
                  </Link>
                  <div className={styles.travelersBlog__description_meta}>
                    <div>
                      <Link href={"/article"}>
                        <Image
                          height={20}
                          width={22}
                          src={glasess}
                          alt={"viewers"}
                        />
                        <span>1200</span>
                      </Link>
                    </div>
                    <div>
                      <Link href={"/article"}>
                        <Image
                          height={15}
                          width={17}
                          src={heart}
                          alt={"likes"}
                        />
                        <span>8</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <p>
                  <Link href={"/article"}>
                    <strong>Туристическую</strong> визу в Эфиопию будут
                    оформлять только в аэропорту прилета
                  </Link>
                </p>
              </article>
              <article className={styles.article__small}>
                <div className={styles.article__image}>
                  <Link href={"/article"}>
                    <Image
                      height={250}
                      width={250}
                      src={antonio}
                      alt={"blog article"}
                    />
                  </Link>
                </div>
                <div className={styles.article__meta}>
                  <Link href={"/article"}>
                    <span className={styles.travelersBlog__description_date}>
                      03.01.2023
                    </span>
                  </Link>
                  <div className={styles.travelersBlog__description_meta}>
                    <div>
                      <Link href={"/article"}>
                        <Image
                          height={20}
                          width={22}
                          src={glasess}
                          alt={"viewers"}
                        />
                        <span>1200</span>
                      </Link>
                    </div>
                    <div>
                      <Link href={"/article"}>
                        <Image
                          height={15}
                          width={17}
                          src={heart}
                          alt={"likes"}
                        />
                        <span>8</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <p>
                  <Link href={"/article"}>
                    <strong>Туристическую</strong> визу в Эфиопию будут
                    оформлять только в аэропорту прилета
                  </Link>
                </p>
              </article>
              <article className={styles.article__small}>
                <div className={styles.article__meta}>
                  <Link href={"/article"}>
                    <span className={styles.travelersBlog__description_date}>
                      03.01.2023
                    </span>
                  </Link>
                  <div className={styles.travelersBlog__description_meta}>
                    <div>
                      <Link href={"/article"}>
                        <Image
                          height={20}
                          width={22}
                          src={glasess}
                          alt={"viewers"}
                        />
                        <span>1200</span>
                      </Link>
                    </div>
                    <div>
                      <Link href={"/article"}>
                        <Image
                          height={15}
                          width={17}
                          src={heart}
                          alt={"likes"}
                        />
                        <span>8</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <p>
                  <Link href={"/article"}>
                    <strong>Туристическую</strong> визу в Эфиопию будут
                    оформлять только в аэропорту прилета
                  </Link>
                </p>
              </article>
              <article className={styles.article__small}>
                <div className={styles.article__meta}>
                  <Link href={"/article"}>
                    <span className={styles.travelersBlog__description_date}>
                      03.01.2023
                    </span>
                  </Link>
                  <div className={styles.travelersBlog__description_meta}>
                    <div>
                      <Link href={"/article"}>
                        <Image
                          height={20}
                          width={22}
                          src={glasess}
                          alt={"viewers"}
                        />
                        <span>1200</span>
                      </Link>
                    </div>
                    <div>
                      <Link href={"/article"}>
                        <Image
                          height={15}
                          width={17}
                          src={heart}
                          alt={"likes"}
                        />
                        <span>8</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <p>
                  <Link href={"/article"}>
                    <strong>Туристическую</strong> визу в Эфиопию будут
                    оформлять только в аэропорту прилета
                  </Link>
                </p>
              </article>
              <article className={styles.article__small}>
                <div className={styles.article__meta}>
                  <Link href={"/article"}>
                    <span className={styles.travelersBlog__description_date}>
                      03.01.2023
                    </span>
                  </Link>
                  <div className={styles.travelersBlog__description_meta}>
                    <div>
                      <Link href={"/article"}>
                        <Image
                          height={20}
                          width={22}
                          src={glasess}
                          alt={"viewers"}
                        />
                        <span>1200</span>
                      </Link>
                    </div>
                    <div>
                      <Link href={"/article"}>
                        <Image
                          height={15}
                          width={17}
                          src={heart}
                          alt={"likes"}
                        />
                        <span>8</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <p>
                  <Link href={"/article"}>
                    <strong>Туристическую</strong> визу в Эфиопию будут
                    оформлять только в аэропорту прилета
                  </Link>
                </p>
              </article>
            </div>
          </article>
        </main>
        <Sidebar />
      </div>
    </div>
  );
}
