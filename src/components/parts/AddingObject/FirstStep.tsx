import styles from "@/styles/AddingObject.module.scss";
import Link from "next/link";

// store
import { useAppDispatch, useAppSelector } from "@/store/store";
import { setPageNumber, setUserIsRegistered } from "@/store/reducers";
import { useEffect } from "react";

export default function FirstStep() {
  const userIsRegistered = useAppSelector((state) => state.userIsRegistered);
  const pageNumber = useAppSelector((state) => state.pageNumber);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setUserIsRegistered(true));
    // dispatch(setPageNumber(5));
    // eslint-disable-next-line
  }, []);

  return (
    <>
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
        className={`${styles.addingObject__inputs} ${
          styles.addingObject__inputStyle
        } ${!userIsRegistered && styles.addingObject__inputs_unactive}`}
      >
        <div>
          <label htmlFor="objectType">Тип объекта</label>
          <input
            type="text"
            id="objectType"
            name="objectType"
            disabled={!userIsRegistered}
          />
        </div>
        <div>
          <label htmlFor="objectName">Название объекта</label>
          <input
            type="text"
            id="objectName"
            name="objectName"
            disabled={!userIsRegistered}
          />
        </div>
        <div>
          <label htmlFor="objectCity">Город объекта</label>
          <input
            type="text"
            id="objectCity"
            name="objectCity"
            disabled={!userIsRegistered}
          />
        </div>
        <div>
          <label htmlFor="objectAddress">Адрес объекта</label>
          <input
            type="text"
            id="objectAddress"
            name="objectAddress"
            disabled={!userIsRegistered}
          />
        </div>
        <div className={styles.nextBtn}>
          <button
            disabled={!userIsRegistered}
            onClick={() => dispatch(setPageNumber(2))}
          >
            Далее
          </button>
        </div>
      </div>
    </>
  );
}
