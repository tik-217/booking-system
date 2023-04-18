// react/next
import Link from "next/link";

// styles
import homeStyles from "../styles/Home.module.scss";
import styles from "../styles/AddingObject.module.scss";

// components
import FirstStep from "@/components/prarts/AddingObject/FirstStep";

// store
import { useAppSelector } from "@/store/store";
import SecondStep from "@/components/prarts/AddingObject/SecondStep";
import ThirdStep from "@/components/prarts/AddingObject/ThirdStep";
import FourthStep from "@/components/prarts/AddingObject/FourthStep";
import FiveStep from "@/components/prarts/AddingObject/FiveStep";

export default function AddingObject() {
  const pageNumber = useAppSelector((state) => state.pageNumber);

  return (
    <>
      <header
        className={`${homeStyles.header__topWrapper} ${styles.header__topWrapper}`}
      >
        <Link href={"/"} className={homeStyles.header__top_logo}>
          <h2>Mrava Sar</h2>
        </Link>
      </header>
      <main className={styles.addingObject}>
        <div>
          <h3>Регистрация объекта</h3>
          {pageNumber === 1 && <FirstStep />}
          {pageNumber === 2 && <SecondStep />}
          {pageNumber === 3 && <ThirdStep />}
          {pageNumber === 4 && <FourthStep />}
          {pageNumber === 5 && <FiveStep />}
        </div>
      </main>
    </>
  );
}
