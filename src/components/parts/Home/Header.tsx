// react/next
import React from "react";
import Image from "next/image";

import arrow from "@/assets/icons/arrow-bottom-2-colors.svg";

// style
import styles from "@/styles/Home.module.scss";

// antd
import { DatePicker } from "antd";

// antd – time
import HeaderTop from "@/components/HeaderTop";
import { useRouter } from "next/router";

const { RangePicker } = DatePicker;

export default function Header({ nextScreen }: { nextScreen: any }) {
  const router = useRouter();

  const onFinish = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/search-rooms");
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
            <h3>Бронирование по всей России</h3>
          </div>
          <form
            className={styles.header__booking_form}
            onSubmit={(e) => onFinish(e)}
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
          src={arrow}
          alt="arrow bottom"
          onClick={() => scrollToNextScreen()}
          style={{ width: "3%", height: "fit-content" }}
        />
      </div>
    </header>
  );
}
