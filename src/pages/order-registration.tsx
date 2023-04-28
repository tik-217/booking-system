import Head from "next/head";
import Image from "next/image";

import styles from "@/styles/OrderRegistration.module.scss";

import HeaderTop from "@/components/HeaderTop";

import image1 from "@/assets/img/theatre-jpg.jpg";
import star from "@/assets/icons/star.svg";
import sircle from "@/assets/icons/sircle.svg";
import timer from "@/assets/icons/timer.svg";
import bed from "@/assets/icons/bed.svg";
import { useState } from "react";
import { DatePicker } from "antd";
import { Dayjs } from "dayjs";
import { CalendarMode } from "antd/es/calendar/generateCalendar";
import { useRouter } from "next/router";
import Footer from "@/components/parts/Home/Footer";

const { RangePicker } = DatePicker;

export default function OrderRegistration() {
  const [isComments, setIsComments] = useState(false);
  const router = useRouter();

  const onFinish = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/search-rooms");
  };

  return (
    <>
      <Head>
        <title>Оформление заказа</title>
      </Head>
      <HeaderTop />
      <div className={styles.order}>
        <div>
          <div className={styles.front__card}>
            <div className={styles.front__card_image}>
              <div className={styles.front__card_rewiew}>8.6</div>
              <div className={styles.front__image_list}>
                <div>
                  <Image
                    src={image1}
                    quality={100}
                    fill
                    priority
                    alt={"front image"}
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
                    alt={"front image"}
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
                    alt={"front image"}
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
                    alt={"front image"}
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
                    alt={"front image"}
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
                    alt={"front image"}
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                  />
                </div>
              </div>
            </div>
            <div className={styles.front__card_title}>
              <h3>Ti amore</h3>
              <div>
                <Image height={15} width={15} src={star} alt={"star"} />
                <Image height={15} width={15} src={star} alt={"star"} />
                <Image height={15} width={15} src={star} alt={"star"} />
                <Image height={15} width={15} src={star} alt={"star"} />
                <Image height={15} width={15} src={star} alt={"star"} />
              </div>
            </div>
            <div className={styles.front__card_name}>
              <h4>Двухместный номер Стандарт</h4>
              <div>
                <p>Две кровати</p>
                <Image height={6} width={6} src={sircle} alt="sircle" />
                <p>Одна комната</p>
              </div>
            </div>
            <div className={styles.front__card_byProximity}>
              <h5>По близости</h5>
              <div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M16 6v8h3v8h2V2c-2.76 0-5 2.24-5 4zm-5 3H9V2H7v7H5V2H3v7c0 2.21 1.79 4 4 4v9h2v-9c2.21 0 4-1.79 4-4V2h-2v7z" />
                  </svg>
                  <p>Завтрак включен</p>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enableBackground="new 0 0 24 24"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#000000"
                  >
                    <g>
                      <rect fill="none" height="24" width="24" />
                      <path d="M19 14V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zm-2 0H3V6h14v8zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm13 0v11c0 1.1-.9 2-2 2H4v-2h17V7h2z" />
                    </g>
                  </svg>
                  <p>Отмена бронирования</p>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enableBackground="new 0 0 24 24"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#000000"
                  >
                    <g>
                      <rect fill="none" height="24" width="24" />
                    </g>
                    <g>
                      <g>
                        <path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M12,20c-4.42,0-8-3.58-8-8 s3.58-8,8-8s8,3.58,8,8S16.42,20,12,20z" />
                        <path d="M7.1,10.18c0.26,0.56,0.39,1.16,0.4,1.8c0.01,0.63-0.13,1.25-0.4,1.86l1.37,0.62c0.37-0.81,0.55-1.65,0.54-2.5 c-0.01-0.84-0.19-1.65-0.54-2.4L7.1,10.18z" />
                        <path d="M13.33,7.33c0.78,1.57,1.18,3.14,1.18,4.64c0,1.51-0.4,3.09-1.18,4.69l1.35,0.66c0.88-1.81,1.33-3.61,1.33-5.35 c0-1.74-0.45-3.53-1.33-5.31L13.33,7.33z" />
                        <path d="M10.2,8.72c0.53,1.07,0.8,2.21,0.8,3.4c0,1.17-0.26,2.23-0.78,3.15l1.3,0.74c0.65-1.15,0.98-2.45,0.98-3.89 c0-1.42-0.32-2.79-0.96-4.07L10.2,8.72z" />
                      </g>
                    </g>
                  </svg>
                  <p>Оплата на сайте</p>
                </div>
              </div>
            </div>
            <div className={styles.front__card_hotelRules}>
              <div>
                <h4>Правила отеля</h4>
              </div>
              <div className={styles.hotelRules__meta}>
                <div>
                  <div>
                    <Image height={15} width={15} src={timer} alt="timer" />
                    <h5>Заезд и выезд</h5>
                  </div>
                  <span>Заезд с 14:00. Выезд до 12:00</span>
                </div>
                <div>
                  <div>
                    <Image height={15} width={15} src={bed} alt="bed" />
                    <h5>Дополнительные кровати</h5>
                  </div>
                  <span>
                    Допускается размещение дополнительных мест. Проверьте
                    вместимость номера для дополнительной кровати
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.orderRegistration}>
          <h4>Оформление заказа</h4>
          <form className={styles.orderRegistration__form}>
            <div className={styles.orderRegistration__form__inputs}>
              <div>
                <input type="text" placeholder="Имя" />
                <input type="text" placeholder="Фамилия" />
              </div>
              <div>
                <input type="text" placeholder="Телефон" />
                <input type="text" placeholder="Почта" />
              </div>
            </div>
            {isComments && (
              <textarea
                name=""
                id=""
                cols={3}
                rows={3}
                placeholder="Комментарий"
              />
            )}
            {!isComments && (
              <p onClick={() => setIsComments(!isComments)}>
                Добавить комментарий
              </p>
            )}
            {isComments && (
              <p onClick={() => setIsComments(false)}>Скрыть комментарий</p>
            )}
            <div className={styles.orderRegistration__form_action}>
              <div>
                <RangePicker
                  size={"middle"}
                  bordered={false}
                  className={styles.header__booking_calendar}
                />
                <p>24.500₽</p>
              </div>
              <button>Оформить</button>
            </div>
          </form>
          <div className={styles.orderRegistration__addGuests}>
            <p>Добавить гостя</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
