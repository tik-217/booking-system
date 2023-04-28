import Image from "next/image";

import antonio from "@/assets/img/antonio-gabola-6ua5_yFLDSw-unsplash.jpg";
import glasess from "@/assets/icons/glasess.svg";
import heart from "@/assets/icons/heart.svg";

import styles from "@/styles/Home.module.scss";
import { useState } from "react";

export default function TravelerBlog() {
  const [moreArticles, setMoreArticles] = useState(false);

  return (
    <div className={styles.main__travelersBlog}>
      <h4>Блог путешествий</h4>
      <div className={styles.main__travelersBlog_list}>
        <div className={styles.travelersBlog}>
          <div className={styles.travelersBlog__imgWrapper}>
            <Image
              height={250}
              width={250}
              src={antonio}
              alt={"blog article"}
            />
          </div>
          <div className={styles.travelersBlog__description}>
            <div>
              <span className={styles.travelersBlog__description_date}>
                03.01.2023
              </span>
              <div className={styles.travelersBlog__description_meta}>
                <div>
                  <Image height={20} width={22} src={glasess} alt={"viewers"} />
                  <span>1200</span>
                </div>
                <div>
                  <Image height={15} width={17} src={heart} alt={"likes"} />
                  <span>8</span>
                </div>
              </div>
            </div>
            <p>
              <strong>Туристическую</strong> визу в Эфиопию будут оформлять
              только в аэропорту прилета
            </p>
          </div>
        </div>
        <div className={styles.travelersBlog}>
          <div className={styles.travelersBlog__imgWrapper}>
            <Image
              height={250}
              width={250}
              src={antonio}
              alt={"blog article"}
            />
          </div>
          <div className={styles.travelersBlog__description}>
            <div>
              <span className={styles.travelersBlog__description_date}>
                03.01.2023
              </span>
              <div className={styles.travelersBlog__description_meta}>
                <div>
                  <Image height={20} width={22} src={glasess} alt={"viewers"} />
                  <span>1200</span>
                </div>
                <div>
                  <Image height={15} width={17} src={heart} alt={"likes"} />
                  <span>8</span>
                </div>
              </div>
            </div>
            <p>
              <strong>Туристическую</strong> визу в Эфиопию будут оформлять
              только в аэропорту прилета
            </p>
          </div>
        </div>
        <div className={styles.travelersBlog}>
          <div className={styles.travelersBlog__imgWrapper}>
            <Image
              height={250}
              width={250}
              src={antonio}
              alt={"blog article"}
            />
          </div>
          <div className={styles.travelersBlog__description}>
            <div>
              <span className={styles.travelersBlog__description_date}>
                03.01.2023
              </span>
              <div className={styles.travelersBlog__description_meta}>
                <div>
                  <Image height={20} width={22} src={glasess} alt={"viewers"} />
                  <span>1200</span>
                </div>
                <div>
                  <Image height={15} width={17} src={heart} alt={"likes"} />
                  <span>8</span>
                </div>
              </div>
            </div>
            <p>
              <strong>Туристическую</strong> визу в Эфиопию будут оформлять
              только в аэропорту прилета
            </p>
          </div>
        </div>
        <div className={styles.travelersBlog}>
          <div className={styles.travelersBlog__imgWrapper}>
            <Image
              height={250}
              width={250}
              src={antonio}
              alt={"blog article"}
            />
          </div>
          <div className={styles.travelersBlog__description}>
            <div>
              <span className={styles.travelersBlog__description_date}>
                03.01.2023
              </span>
              <div className={styles.travelersBlog__description_meta}>
                <div>
                  <Image height={20} width={22} src={glasess} alt={"viewers"} />
                  <span>1200</span>
                </div>
                <div>
                  <Image height={15} width={17} src={heart} alt={"likes"} />
                  <span>8</span>
                </div>
              </div>
            </div>
            <p>
              <strong>Туристическую</strong> визу в Эфиопию будут оформлять
              только в аэропорту прилета
            </p>
          </div>
        </div>
        {moreArticles && (
          <>
            <div className={styles.travelersBlog}>
              <div className={styles.travelersBlog__imgWrapper}>
                <Image
                  height={250}
                  width={250}
                  src={antonio}
                  alt={"blog article"}
                />
              </div>
              <div className={styles.travelersBlog__description}>
                <div>
                  <span className={styles.travelersBlog__description_date}>
                    03.01.2023
                  </span>
                  <div className={styles.travelersBlog__description_meta}>
                    <div>
                      <Image
                        height={20}
                        width={22}
                        src={glasess}
                        alt={"viewers"}
                      />
                      <span>1200</span>
                    </div>
                    <div>
                      <Image height={15} width={17} src={heart} alt={"likes"} />
                      <span>8</span>
                    </div>
                  </div>
                </div>
                <p>
                  <strong>Туристическую</strong> визу в Эфиопию будут оформлять
                  только в аэропорту прилета
                </p>
              </div>
            </div>
            <div className={styles.travelersBlog}>
              <div className={styles.travelersBlog__imgWrapper}>
                <Image
                  height={250}
                  width={250}
                  src={antonio}
                  alt={"blog article"}
                />
              </div>
              <div className={styles.travelersBlog__description}>
                <div>
                  <span className={styles.travelersBlog__description_date}>
                    03.01.2023
                  </span>
                  <div className={styles.travelersBlog__description_meta}>
                    <div>
                      <Image
                        height={20}
                        width={22}
                        src={glasess}
                        alt={"viewers"}
                      />
                      <span>1200</span>
                    </div>
                    <div>
                      <Image height={15} width={17} src={heart} alt={"likes"} />
                      <span>8</span>
                    </div>
                  </div>
                </div>
                <p>
                  <strong>Туристическую</strong> визу в Эфиопию будут оформлять
                  только в аэропорту прилета
                </p>
              </div>
            </div>
            <div className={styles.travelersBlog}>
              <div className={styles.travelersBlog__imgWrapper}>
                <Image
                  height={250}
                  width={250}
                  src={antonio}
                  alt={"blog article"}
                />
              </div>
              <div className={styles.travelersBlog__description}>
                <div>
                  <span className={styles.travelersBlog__description_date}>
                    03.01.2023
                  </span>
                  <div className={styles.travelersBlog__description_meta}>
                    <div>
                      <Image
                        height={20}
                        width={22}
                        src={glasess}
                        alt={"viewers"}
                      />
                      <span>1200</span>
                    </div>
                    <div>
                      <Image height={15} width={17} src={heart} alt={"likes"} />
                      <span>8</span>
                    </div>
                  </div>
                </div>
                <p>
                  <strong>Туристическую</strong> визу в Эфиопию будут оформлять
                  только в аэропорту прилета
                </p>
              </div>
            </div>
            <div className={styles.travelersBlog}>
              <div className={styles.travelersBlog__imgWrapper}>
                <Image
                  height={250}
                  width={250}
                  src={antonio}
                  alt={"blog article"}
                />
              </div>
              <div className={styles.travelersBlog__description}>
                <div>
                  <span className={styles.travelersBlog__description_date}>
                    03.01.2023
                  </span>
                  <div className={styles.travelersBlog__description_meta}>
                    <div>
                      <Image
                        height={20}
                        width={22}
                        src={glasess}
                        alt={"viewers"}
                      />
                      <span>1200</span>
                    </div>
                    <div>
                      <Image height={15} width={17} src={heart} alt={"likes"} />
                      <span>8</span>
                    </div>
                  </div>
                </div>
                <p>
                  <strong>Туристическую</strong> визу в Эфиопию будут оформлять
                  только в аэропорту прилета
                </p>
              </div>
            </div>
          </>
        )}
      </div>
      <div className={styles.main__topHotels_btn}>
        {!moreArticles && (
          <button onClick={() => setMoreArticles(true)}>Еще</button>
        )}
      </div>
    </div>
  );
}
