import Image from "next/image";

import { Badge, BadgeProps, Calendar, Layout } from "antd";
import type { CellRenderInfo } from "rc-picker/lib/interface";
import { Dayjs } from "dayjs";

import image1 from "@/assets/img/theatre-jpg.jpg";
import star from "@/assets/icons/star.svg";

import styles from "@/styles/Account/Booking.module.scss";

import AccountWrapper from "@/components/parts/Account/AccountWrapper";
import Link from "next/link";
import Head from "next/head";

const { Content } = Layout;

const getListData = (value: Dayjs) => {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: "warning", content: "This is warning event." },
        { type: "success", content: "This is usual event." },
      ];
      break;
    case 10:
      listData = [
        { type: "warning", content: "This is warning event." },
        { type: "success", content: "This is usual event." },
        { type: "error", content: "This is error event." },
      ];
      break;
    case 15:
      listData = [
        { type: "warning", content: "This is warning event" },
        { type: "success", content: "This is very long usual event。。...." },
        { type: "error", content: "This is error event 1." },
        { type: "error", content: "This is error event 2." },
        { type: "error", content: "This is error event 3." },
        { type: "error", content: "This is error event 4." },
      ];
      break;
    default:
  }
  return listData || [];
};

const getMonthData = (value: Dayjs) => {
  if (value.month() === 8) {
    return 1394;
  }
};

export default function Booking() {
  const monthCellRender = (value: Dayjs) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge
              status={item.type as BadgeProps["status"]}
              text={item.content}
            />
          </li>
        ))}
      </ul>
    );
  };

  const cellRender = (current: Dayjs, info: CellRenderInfo<Dayjs>) => {
    if (info.type === "date") return dateCellRender(current);
    if (info.type === "month") return monthCellRender(current);
    return info.originNode;
  };

  return (
    <AccountWrapper>
      <>
        <Head>
          <title>Бронирования</title>
        </Head>
        <Content className={styles.content}>
          <div>
            <div className={styles.calendar}>
              <h5>Календарь</h5>
              <Calendar cellRender={cellRender} />
            </div>
            <h5>29 января</h5>
            <div className={styles.rooms__list}>
              <div className={styles.room__card}>
                <div className={styles.room__card_image}>
                  <div className={styles.room__card_rewiew}>8.6</div>
                  <div className={styles.room__image_list}>
                    <div>
                      <Image
                        src={image1}
                        quality={100}
                        fill
                        priority
                        alt={"room image"}
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
                        alt={"room image"}
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
                        alt={"room image"}
                        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.room__card_name}>
                  <h4>Двухместный номер Стандарт</h4>
                </div>
                <div className={styles.room__card_period}>
                  <h6>14 дней</h6>
                  <div>
                    <p>с 10 по 12 августа</p>
                  </div>
                </div>
                <div className={styles.room__card_cost}>
                  <p>12000₽</p>
                </div>
              </div>
              <div className={styles.room__card}>
                <div className={styles.room__card_image}>
                  <div className={styles.room__card_rewiew}>8.6</div>
                  <div className={styles.room__image_list}>
                    <div>
                      <Image
                        src={image1}
                        quality={100}
                        fill
                        priority
                        alt={"room image"}
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
                        alt={"room image"}
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
                        alt={"room image"}
                        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.room__card_name}>
                  <h4>Двухместный номер Стандарт</h4>
                </div>
                <div className={styles.room__card_period}>
                  <h6>14 дней</h6>
                  <div>
                    <p>с 10 по 12 августа</p>
                  </div>
                </div>
                <div className={styles.room__card_cost}>
                  <p>12000₽</p>
                </div>
              </div>
              <div className={styles.room__card}>
                <div className={styles.room__card_image}>
                  <div className={styles.room__card_rewiew}>8.6</div>
                  <div className={styles.room__image_list}>
                    <div>
                      <Image
                        src={image1}
                        quality={100}
                        fill
                        priority
                        alt={"room image"}
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
                        alt={"room image"}
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
                        alt={"room image"}
                        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.room__card_name}>
                  <h4>Двухместный номер Стандарт</h4>
                </div>
                <div className={styles.room__card_period}>
                  <h6>14 дней</h6>
                  <div>
                    <p>с 10 по 12 августа</p>
                  </div>
                </div>
                <div className={styles.room__card_cost}>
                  <p>12000₽</p>
                </div>
              </div>
            </div>
          </div>
        </Content>
      </>
    </AccountWrapper>
  );
}
