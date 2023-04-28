import React from "react";
import Image from "next/image";

import styles from "@/styles/SearchRooms.module.scss";

import search from "@/assets/icons/search-icon.svg";

import { Checkbox, Col } from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";

export default function Sidebar() {
  const onChange = (checkedElem: CheckboxValueType[]) => {
    console.log(checkedElem);
  };

  return (
    <>
      <div className={`${styles.sidebar} ${styles.sidebar__mobile}`}>
        <form className={styles.sidebar__search}>
          <div>
            <input type="text" placeholder="Отель, номер ..." />
            <Image height={15} width={15} src={search} alt="search icon" />
          </div>
          <input type="submit" value="Найти" />
        </form>
        <div className={styles.sidebar__services}>
          <div className={styles.sidebar__services_list}>
            <h5>Тип размещения</h5>
            <Checkbox.Group
              onChange={onChange}
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Col>
                <Checkbox value={"Отели, меблированные комнаты"}>
                  Отели, меблированные комнаты
                </Checkbox>
              </Col>
              <Col>
                <Checkbox value={"Хостелы, жилые помещения"}>
                  Хостелы, жилые помещения
                </Checkbox>
              </Col>
              <Col>
                <Checkbox value={"Апартаменты"}>Апартаменты</Checkbox>
              </Col>
              <Col>
                <Checkbox value={"Апарт-отели"}>Апарт-отели</Checkbox>
              </Col>
              <Col>
                <Checkbox value={"Гостевые дома"}>Гостевые дома</Checkbox>
              </Col>
              <Col>
                <Checkbox value={"Коттеджи, виллы, бунгало"}>
                  Коттеджи, виллы, бунгало
                </Checkbox>
              </Col>
              <Col>
                <Checkbox value={"Кемпинги"}>Кемпинги</Checkbox>
              </Col>
              <Col>
                <Checkbox value={"Глэмпинги"}>Глэмпинги</Checkbox>
              </Col>
            </Checkbox.Group>
          </div>
          <div className={styles.sidebar__services_list}>
            <h5>Тип размещения</h5>
            <Checkbox.Group
              onChange={onChange}
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Col>
                <Checkbox value={"Отели, меблированные комнаты"}>
                  Отели, меблированные комнаты
                </Checkbox>
              </Col>
              <Col>
                <Checkbox value={"Хостелы, жилые помещения"}>
                  Хостелы, жилые помещения
                </Checkbox>
              </Col>
              <Col>
                <Checkbox value={"Апартаменты"}>Апартаменты</Checkbox>
              </Col>
              <Col>
                <Checkbox value={"Апарт-отели"}>Апарт-отели</Checkbox>
              </Col>
              <Col>
                <Checkbox value={"Гостевые дома"}>Гостевые дома</Checkbox>
              </Col>
              <Col>
                <Checkbox value={"Коттеджи, виллы, бунгало"}>
                  Коттеджи, виллы, бунгало
                </Checkbox>
              </Col>
              <Col>
                <Checkbox value={"Кемпинги"}>Кемпинги</Checkbox>
              </Col>
              <Col>
                <Checkbox value={"Глэмпинги"}>Глэмпинги</Checkbox>
              </Col>
            </Checkbox.Group>
          </div>
        </div>
        <div className={styles.sidebar__reset}>
          <span>Сбросить</span>
        </div>
      </div>
    </>
  );
}
