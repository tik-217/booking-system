import Image from "next/image";
import Link from "next/link";

import styles from "../../../styles/Home.module.scss";

import image1 from "../../../../public/img/oskars-sylwan-ES2pgFojCBU-unsplash.jpg";
import image3 from "../../../../public/img/main-background.jpg";
import image4 from "../../../../public/img/oskars-sylwan-ES2pgFojCBU-unsplash.jpg";

export default function TopHotels() {
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
              src={image3}
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
              src={image3}
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
              src={image4}
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
              src={image3}
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
              src={image3}
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
      </div>
    </div>
  );
}
