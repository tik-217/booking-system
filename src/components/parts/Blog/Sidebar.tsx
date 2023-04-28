import Image from "next/image";

import styles from "@/styles/Blog.module.scss";

import glasess from "@/assets/icons/glasess.svg";
import heart from "@/assets/icons/heart.svg";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.search}>
        <input type="text" placeholder="Найти" />
      </div>
      <div className={styles.shortNews}>
        <h4>Последние новости</h4>
        <div className={styles.shortNews__list}>
          <div className={styles.news}>
            <div className={styles.news__top}>
              <p>Появился список удивительных озёр России</p>
              <span>03.01.2023</span>
            </div>
            <div className={styles.news__content}>
              <p>
                Международный сервис Picodi.com провёл исследование цен на
                автобусы, метро и прочий транспорт в 45 крупных городах мира.
                Эксперты соотнесли стоимость проезда с зарплатой местных.
              </p>
              <div>
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
          </div>
          <div className={styles.news}>
            <div className={styles.news__top}>
              <p>Появился список удивительных озёр России</p>
              <span>03.01.2023</span>
            </div>
            <div className={styles.news__content}>
              <p>
                Международный сервис Picodi.com провёл исследование цен на
                автобусы, метро и прочий транспорт в 45 крупных городах мира.
                Эксперты соотнесли стоимость проезда с зарплатой местных.
              </p>
              <div>
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
          </div>
          <div className={styles.news}>
            <div className={styles.news__top}>
              <p>Появился список удивительных озёр России</p>
              <span>03.01.2023</span>
            </div>
            <div className={styles.news__content}>
              <p>
                Международный сервис Picodi.com провёл исследование цен на
                автобусы, метро и прочий транспорт в 45 крупных городах мира.
                Эксперты соотнесли стоимость проезда с зарплатой местных.
              </p>
              <div>
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
          </div>
          <div className={styles.news}>
            <div className={styles.news__top}>
              <p>Появился список удивительных озёр России</p>
              <span>03.01.2023</span>
            </div>
            <div className={styles.news__content}>
              <p>
                Международный сервис Picodi.com провёл исследование цен на
                автобусы, метро и прочий транспорт в 45 крупных городах мира.
                Эксперты соотнесли стоимость проезда с зарплатой местных.
              </p>
              <div>
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
          </div>
        </div>
      </div>
    </aside>
  );
}
