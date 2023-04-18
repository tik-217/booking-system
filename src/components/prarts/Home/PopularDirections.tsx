// react/next
import Image from "next/image";

// styles
import styles from "../../../styles/Home.module.scss";
import { useEffect, useRef } from "react";

import image1 from "../../../../public/img/1667585659_69-sportishka-com-p-baikal-ostrov-instagram-74.png";
import image2 from "../../../../public/img/antonio-gabola-6ua5_yFLDSw-unsplash.jpg";
import image3 from "../../../../public/img/eberhard-grossgasteiger-y2azHvupCVo-unsplash.jpg";

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
              src={image1}
              alt="first direction"
              fill
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
                src={image2}
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
          <h3>Адлер</h3>
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
      </div>
    </div>
  );
}
