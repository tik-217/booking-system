import styles from "../../../styles/AddingObject.module.scss";

// store
import { useAppDispatch, useAppSelector } from "@/store/store";
import { setPageNumber } from "@/store/reducers";
import Link from "next/link";

export default function SecondStep() {
  const userIsRegistered = useAppSelector((state) => state.userIsRegistered);
  const dispatch = useAppDispatch();

  return (
    <div
      className={`${styles.addingObject__inputs} ${
        !userIsRegistered && styles.addingObject__inputs_unactive
      }`}
    >
      {!userIsRegistered && (
        <div className={styles.addingObject__actions}>
          <p>Перед тем, как зарегистрировать объект, войдите в систему</p>
          <div>
            <Link href={"/login"}>
              <button>Войти</button>
            </Link>
            <Link href={"/signUp"}>
              <button>Зарегистрироваться</button>
            </Link>
          </div>
        </div>
      )}
      <div
        className={`${styles.addingObject__inputStyle} ${
          !userIsRegistered && styles.addingObject__inputs_unactive
        } ${styles.secondStep}`}
      >
        <div className={styles.secondStep__twoColumns}>
          <div>
            <label htmlFor="objectType">Звездность отеля</label>
            <input
              type="text"
              id="objectType"
              name="objectType"
              disabled={!userIsRegistered}
            />
          </div>
          <div>
            <label htmlFor="objectName">Количество номеров</label>
            <input
              type="text"
              id="objectName"
              name="objectName"
              disabled={!userIsRegistered}
            />
          </div>
        </div>
        <div className={styles.secondStep__twoColumns}>
          <div>
            <label htmlFor="objectType">Email для гостей</label>
            <input
              type="text"
              id="objectType"
              name="objectType"
              disabled={!userIsRegistered}
            />
          </div>
          <div>
            <label htmlFor="objectName">Телефон для гостей</label>
            <input
              type="text"
              id="objectName"
              name="objectName"
              disabled={!userIsRegistered}
            />
          </div>
        </div>
        <div className={styles.secondStep__oneColumn}>
          <label htmlFor="objectType">Сайт отеля</label>
          <input
            type="text"
            id="objectType"
            name="objectType"
            disabled={!userIsRegistered}
          />
        </div>
        <div className={styles.secondStep__oneColumn}>
          <label htmlFor="objectName">Адрес объекта</label>
          <input
            type="text"
            id="objectName"
            name="objectName"
            disabled={!userIsRegistered}
          />
        </div>
        <div className={styles.nextBtn}>
          <button onClick={() => dispatch(setPageNumber(3))}>Далее</button>
        </div>
      </div>
    </div>
  );
}
