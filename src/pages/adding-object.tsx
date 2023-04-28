// react/next
import Link from "next/link";

// styles
import homeStyles from "@/styles/Home.module.scss";
import styles from "@/styles/AddingObject.module.scss";

// components
import FirstStep from "@/components/parts/AddingObject/FirstStep";

// store
import { useAppSelector } from "@/store/store";
import SecondStep from "@/components/parts/AddingObject/SecondStep";
import ThirdStep from "@/components/parts/AddingObject/ThirdStep";
import FourthStep from "@/components/parts/AddingObject/FourthStep";
import FiveStep from "@/components/parts/AddingObject/FiveStep";

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
