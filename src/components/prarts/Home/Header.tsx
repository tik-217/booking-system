// react/next
import React from "react";
import Image from "next/image";

// style
import styles from "../../../styles/Home.module.scss";

// antd
import { Form, DatePicker, Space } from "antd";

// antd – time
import HeaderTop from "@/components/HeaderTop";

const { RangePicker } = DatePicker;

export default function Header({ nextScreen }: { nextScreen: any }) {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Finish:", values);
  };

  function scrollToNextScreen() {
    if (!nextScreen.current) return;

    window.scrollTo({
      top: (nextScreen.current as HTMLImageElement).offsetTop,
      behavior: "smooth",
    });
  }

  return (
    <header className={styles.header}>
      <HeaderTop />
      <div className={styles.header__booking}>
        <div>
          <div className={styles.header__booking_title}>
            <h3>Отдых вместе с Mrava Sar</h3>
            <h5>Бронирование по все России</h5>
          </div>
          <form
            className={styles.header__booking_form}
            onSubmit={(value) => onFinish(value)}
          >
            <RangePicker
              size={"large"}
              className={styles.header__booking_calendar}
            />
            <div className={styles.header__booking_guests}>
              <input
                type="number"
                name=""
                id=""
                min={1}
                max={8}
                defaultValue={1}
              />
            </div>
            <div className={styles.header__booking_children}>
              <input
                type="number"
                name=""
                id=""
                min={0}
                max={8}
                defaultValue={0}
              />
            </div>
            <button type="submit" className={styles.header__booking_btn}>
              Подобрать
            </button>
          </form>
        </div>
      </div>
      <div className={styles.header__arrowBottom}>
        <Image
          width={40}
          height={70}
          src="/icons/arrow-bottom-2-colors.svg"
          alt="arrow bottom"
          onClick={() => scrollToNextScreen()}
          style={{ width: "3%", height: "fit-content" }}
        />
      </div>
    </header>
  );
}
