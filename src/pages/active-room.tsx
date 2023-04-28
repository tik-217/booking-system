import Image from "next/image";

import { DatePicker } from "antd";
import { useRouter } from "next/router";

import styles from "@/styles/ActiveRoom.module.scss";

import HeaderTop from "@/components/HeaderTop";
import RoomCard from "@/components/parts/ActiveRoom/RoomCard";
import Footer from "@/components/parts/Home/Footer";

import image1 from "@/assets/img/theatre-jpg.jpg";
import star from "@/assets/icons/star.svg";
import like from "@/assets/icons/like-red.svg";
import calendar from "@/assets/icons/calendar.svg";
import door from "@/assets/icons/door.svg";
import plusGreen from "@/assets/icons/plus-green.svg";
import plusRed from "@/assets/icons/plus-red.svg";

const { RangePicker } = DatePicker;

export default function ActiveRoom() {
  const router = useRouter();

  const onFinish = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/search-rooms");
  };

  return (
    <div>
      <HeaderTop />
      <div className={styles.activeRoom}>
        <div>
          <h4>Фасад</h4>
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
            <div className={styles.front__card_like}>
              <Image height={20} width={20} src={like} alt="like" />
            </div>
          </div>
        </div>
        <div className={styles.changeDate}>
          <div className={styles.changeDate__booking}>
            <div>
              <form
                className={styles.changeDate__booking_form}
                onSubmit={(e) => onFinish(e)}
              >
                <RangePicker
                  size={"large"}
                  className={styles.changeDate__booking_calendar}
                />
                <div className={styles.changeDate__booking_guests}>
                  <input
                    type="number"
                    name=""
                    id=""
                    min={1}
                    max={8}
                    defaultValue={1}
                  />
                </div>
                <div className={styles.changeDate__booking_children}>
                  <input
                    type="number"
                    name=""
                    id=""
                    min={0}
                    max={8}
                    defaultValue={0}
                  />
                </div>
                <button
                  type="submit"
                  className={styles.changeDate__booking_btn}
                >
                  Изменить
                </button>
              </form>
            </div>
          </div>
        </div>
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <div className={styles.comments}>
          <div className={styles.comments__wrapper}>
            <div>
              <div className={styles.comments__meta}>
                <h5>Галина Новикова</h5>
                <div>
                  <Image
                    height={10}
                    width={10}
                    src={calendar}
                    alt={"calendar"}
                  />
                  <span>1 февраля 2023</span>
                </div>
                <div>
                  <Image height={10} width={10} src={door} alt={"door"} />
                  <span>Четырехместный номер Стандарт</span>
                </div>
                <div className={styles.comments_rewiew}>8</div>
              </div>
              <div className={styles.comments__text}>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione nesciunt cumque cum ipsam aut fuga unde tempore
                    necessitatibus rerum, natus omnis iure dignissimos ullam
                    assumenda exercitationem deleniti doloribus maiores
                    voluptatibus!
                  </p>
                </div>
                <div>
                  <Image height={20} width={20} src={plusGreen} alt="plus" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione nesciunt cumque cum ipsam aut fuga unde tempore
                    necessitatibus rerum, natus omnis iure dignissimos ullam
                    assumenda exercitationem deleniti doloribus maiores
                    voluptatibus!
                  </p>
                </div>
                <div>
                  <Image height={20} width={20} src={plusRed} alt="plus" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione nesciunt cumque cum ipsam aut fuga unde tempore
                    necessitatibus rerum, natus omnis iure dignissimos ullam
                    assumenda exercitationem deleniti doloribus maiores
                    voluptatibus!
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.comments__meta}>
                <h5>Галина Новикова</h5>
                <div>
                  <Image
                    height={10}
                    width={10}
                    src={calendar}
                    alt={"calendar"}
                  />
                  <span>1 февраля 2023</span>
                </div>
                <div>
                  <Image height={10} width={10} src={door} alt={"door"} />
                  <span>Четырехместный номер Стандарт</span>
                </div>
                <div className={styles.comments_rewiew}>8</div>
              </div>
              <div className={styles.comments__text}>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione nesciunt cumque cum ipsam aut fuga unde tempore
                    necessitatibus rerum, natus omnis iure dignissimos ullam
                    assumenda exercitationem deleniti doloribus maiores
                    voluptatibus!
                  </p>
                </div>
                <div>
                  <Image height={20} width={20} src={plusGreen} alt="plus" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione nesciunt cumque cum ipsam aut fuga unde tempore
                    necessitatibus rerum, natus omnis iure dignissimos ullam
                    assumenda exercitationem deleniti doloribus maiores
                    voluptatibus!
                  </p>
                </div>
                <div>
                  <Image height={20} width={20} src={plusRed} alt="plus" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione nesciunt cumque cum ipsam aut fuga unde tempore
                    necessitatibus rerum, natus omnis iure dignissimos ullam
                    assumenda exercitationem deleniti doloribus maiores
                    voluptatibus!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p>еще</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
