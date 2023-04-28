import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/Home.module.scss";

import image1 from "@/assets/img/bcd5e734ddcbc69e2d6de33597a635a6.jpg";
import image2 from "@/assets/img/9b32bc4ab953979521ba7449387222a2_original.jpg";
import image3 from "@/assets/img/8.jpg";
import image4 from "@/assets/img/d60fe7f04eb587caf20ead6ea271a6bc.jpg";
import image5 from "@/assets/img/main-background.jpg";
import image6 from "@/assets/img/1651004117_38-vsegda-pomnim-com-p-dom-u-morya-sochi-foto-43.jpg";
import image7 from "@/assets/img/full_kz1C56N6.jpg";
import image8 from "@/assets/img/1661634640_60-celes-club-p-osobnyak-v-sochi-krasivo-61.jpg";
import image9 from "@/assets/img/1651004065_56-vsegda-pomnim-com-p-dom-u-morya-sochi-foto-61.jpg";
import image10 from "@/assets/img/1636625132_147-na-dache-pro-p-sochi-chastnie-doma-foto-162.jpg";
import { useState } from "react";

export default function TopHotels() {
  const [moreCards, setMoreCards] = useState(false);

  return (
    <div className={styles.main__topHotels}>
      <h4>Топ 10 домов для отдыха</h4>
      <div className={styles.main__topHotels_list}>
        <div className={styles.hotelCard}>
          <div className={styles.hotelCard__imgWrapper}>
            <Image
              src={image1}
              alt={"hotel card"}
              fill
              sizes={`(max-width: 768px) 100vw,
              (max-width: 1200px) 40vw,
              26vw`}
            />
          </div>
          <div className={styles.hotelCard__description}>
            <h6>Аппартаменты Resotte</h6>
            <p>Старый город, Польша, Kraków</p>
            <span>От 8 635 ₽</span>
            <div className={styles.hotelCard__rewiew}>8.5</div>
          </div>
        </div>
        <div className={styles.hotelCard}>
          <div className={styles.hotelCard__imgWrapper}>
            <Image
              src={image2}
              alt={"hotel card"}
              fill
              sizes={`
              26vw`}
            />
          </div>
          <div className={styles.hotelCard__description}>
            <h6>Аппартаменты Resotte</h6>
            <p>Старый город, Польша, Kraków</p>
            <span>От 8 635 ₽</span>
            <div className={styles.hotelCard__rewiew}>8.5</div>
          </div>
        </div>
        <div className={styles.hotelCard}>
          <div className={styles.hotelCard__imgWrapper}>
            <Image
              src={image3}
              alt={"hotel card"}
              fill
              sizes={`(max-width: 768px) 100vw,
              (max-width: 1200px) 40vw,
              26vw`}
            />
          </div>
          <div className={styles.hotelCard__description}>
            <h6>Аппартаменты Resotte</h6>
            <p>Старый город, Польша, Kraków</p>
            <span>От 8 635 ₽</span>
            <div className={styles.hotelCard__rewiew}>8.5</div>
          </div>
        </div>
        <div className={styles.hotelCard}>
          <div className={styles.hotelCard__imgWrapper}>
            <Image
              src={image4}
              alt={"hotel card"}
              priority
              fill
              sizes={`(max-width: 768px) 100vw,
              (max-width: 1200px) 40vw,
              26vw`}
            />
          </div>
          <div className={styles.hotelCard__description}>
            <h6>Аппартаменты Resotte</h6>
            <p>Старый город, Польша, Kraków</p>
            <span>От 8 635 ₽</span>
            <div className={styles.hotelCard__rewiew}>8.5</div>
          </div>
        </div>
        <div className={styles.hotelCard}>
          <div className={styles.hotelCard__imgWrapper}>
            <Image
              src={image5}
              alt={"hotel card"}
              fill
              sizes={`(max-width: 768px) 100vw,
              (max-width: 1200px) 40vw,
              26vw`}
            />
          </div>
          <div className={styles.hotelCard__description}>
            <h6>Аппартаменты Resotte</h6>
            <p>Старый город, Польша, Kraków</p>
            <span>От 8 635 ₽</span>
            <div className={styles.hotelCard__rewiew}>8.5</div>
          </div>
        </div>
        {moreCards && (
          <>
            <div className={styles.hotelCard}>
              <div className={styles.hotelCard__imgWrapper}>
                <Image
                  src={image6}
                  alt={"hotel card"}
                  fill
                  sizes={`(max-width: 768px) 100vw,
              (max-width: 1200px) 40vw,
              26vw`}
                />
              </div>
              <div className={styles.hotelCard__description}>
                <h6>Аппартаменты Resotte</h6>
                <p>Старый город, Польша, Kraków</p>
                <span>От 8 635 ₽</span>
                <div className={styles.hotelCard__rewiew}>8.5</div>
              </div>
            </div>
            <div className={styles.hotelCard}>
              <div className={styles.hotelCard__imgWrapper}>
                <Image
                  src={image7}
                  priority
                  alt={"hotel card"}
                  fill
                  sizes={`(max-width: 768px) 100vw,
              (max-width: 1200px) 40vw,
              26vw`}
                />
              </div>
              <div className={styles.hotelCard__description}>
                <h6>Аппартаменты Resotte</h6>
                <p>Старый город, Польша, Kraków</p>
                <span>От 8 635 ₽</span>
                <div className={styles.hotelCard__rewiew}>8.5</div>
              </div>
            </div>
            <div className={styles.hotelCard}>
              <div className={styles.hotelCard__imgWrapper}>
                <Image
                  src={image8}
                  alt={"hotel card"}
                  fill
                  sizes={`(max-width: 768px) 100vw,
              (max-width: 1200px) 40vw,
              26vw`}
                />
              </div>
              <div className={styles.hotelCard__description}>
                <h6>Аппартаменты Resotte</h6>
                <p>Старый город, Польша, Kraków</p>
                <span>От 8 635 ₽</span>
                <div className={styles.hotelCard__rewiew}>8.5</div>
              </div>
            </div>
            <div className={styles.hotelCard}>
              <div className={styles.hotelCard__imgWrapper}>
                <Image
                  src={image9}
                  priority
                  alt={"hotel card"}
                  fill
                  sizes={`(max-width: 768px) 100vw,
              (max-width: 1200px) 40vw,
              26vw`}
                />
              </div>
              <div className={styles.hotelCard__description}>
                <h6>Аппартаменты Resotte</h6>
                <p>Старый город, Польша, Kraków</p>
                <span>От 8 635 ₽</span>
                <div className={styles.hotelCard__rewiew}>8.5</div>
              </div>
            </div>
            <div className={styles.hotelCard}>
              <div className={styles.hotelCard__imgWrapper}>
                <Image
                  src={image10}
                  alt={"hotel card"}
                  fill
                  sizes={`(max-width: 768px) 100vw,
              (max-width: 1200px) 40vw,
              26vw`}
                />
              </div>
              <div className={styles.hotelCard__description}>
                <h6>Аппартаменты Resotte</h6>
                <p>Старый город, Польша, Kraków</p>
                <span>От 8 635 ₽</span>
                <div className={styles.hotelCard__rewiew}>8.5</div>
              </div>
            </div>
          </>
        )}
      </div>
      <div className={styles.main__topHotels_btn}>
        {!moreCards && <button onClick={() => setMoreCards(true)}>Еще</button>}
      </div>
    </div>
  );
}
