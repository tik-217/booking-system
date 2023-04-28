// react/next
import Image from "next/image";

// styles
import styles from "@/styles/Home.module.scss";
import { useEffect, useRef } from "react";

import image1 from "@/assets/img/1618706382_49-funart_pro-p-krasnaya-ploshchad-kreml-krasivie-mesta-fo-49.jpg";
import image2 from "@/assets/img/63bd5f9e82759d63f131e380.jpg";
import image3 from "@/assets/img/elina-sitnikova-FQJsoUhnteQ-unsplash.jpg";
import image4 from "@/assets/img/original.jpg";
import image5 from "@/assets/img/1667560270_53-sportishka-com-p-gelendzhik-dostoprimechatelnosti-krasivo-56.jpg";
import image6 from "@/assets/img/2019.jpg";

export default function PopularDirections({
  catcherNextScreen,
}: {
  catcherNextScreen: Function;
}) {
  const nextScreen = useRef(null);

  useEffect(() => {
    catcherNextScreen(nextScreen);
    // eslint-disable-next-line
  }, [nextScreen]);

  return (
    <div className={styles.main__popularDirections}>
      <h4 ref={nextScreen}>Популярные направления</h4>
      <div className={styles.popularDirections__elements}>
        <div>
          <h3>Сочи</h3>
          <div className={styles.popularDirections__elements_image}>
            <Image
              src={image4}
              alt="first direction"
              fill
              quality={100}
              sizes={`(max-width: 768px) 100vw,
              (max-width: 1200px) 40vw,
              26vw`}
            />
          </div>
          <span>Смотреть отели</span>
        </div>
        <div>
          <h3>Анапа</h3>
          <div>
            <div className={styles.popularDirections__elements_image}>
              <Image
                src={image2}
                alt="first direction"
                fill
                quality={100}
                sizes={`(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              26vw`}
              />
            </div>
          </div>
          <span>Смотреть отели</span>
        </div>
        <div>
          <h3>Геленджик</h3>
          <div>
            <div className={styles.popularDirections__elements_image}>
              <Image
                src={image5}
                alt="first direction"
                fill
                quality={100}
                sizes={`(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              26vw`}
              />
            </div>
          </div>
          <span>Смотреть отели</span>
        </div>
        <div>
          <h3>Москва</h3>
          <div>
            <div className={styles.popularDirections__elements_image}>
              <Image
                src={image1}
                alt="first direction"
                fill
                sizes={`(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              26vw`}
              />
            </div>
          </div>
          <span>Смотреть отели</span>
        </div>
        <div>
          <h3>Казань</h3>
          <div>
            <div className={styles.popularDirections__elements_image}>
              <Image
                src={image3}
                alt="first direction"
                fill
                sizes={`(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              26vw`}
              />
            </div>
          </div>
          <span>Смотреть отели</span>
        </div>
        <div>
          <h3>Новосибирск</h3>
          <div>
            <div className={styles.popularDirections__elements_image}>
              <Image
                src={image6}
                alt="first direction"
                fill
                sizes={`(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              26vw`}
              />
            </div>
          </div>
          <span>Смотреть отели</span>
        </div>
      </div>
    </div>
  );
}
