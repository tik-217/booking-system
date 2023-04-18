import React, { Fragment, useState } from "react";

import styles from "../../../styles/AddingObject.module.scss";
import { Checkbox, Col, Divider, Space, Tag } from "antd";

import { CheckboxValueType } from "antd/es/checkbox/Group";
import { useAppDispatch } from "@/store/store";
import { setPageNumber } from "@/store/reducers";

const arr = [
  "Отели, меблированные комнаты",
  "Хостелы, жилые помещения",
  "Апартаменты",
  "Апарт-отели",
  "Гостевые дома",
  "Коттеджи, виллы, бунгало",
  "Кемпинги",
  "Глэмпинги",
];

export default function ThirdStep() {
  const [checkedElem, setCheckedElem] = useState<CheckboxValueType[]>([]);

  const dispatch = useAppDispatch();

  const getServicesList = (items: CheckboxValueType[]) => {
    setCheckedElem(items);
  };

  function deleteItem(e: React.MouseEvent<HTMLElement>) {
    const clickedItem: HTMLSpanElement | null = (
      e.target as HTMLElement
    ).closest("span .ant-tag");

    const isClickedEl = clickedItem ? clickedItem.innerText : "";

    setCheckedElem((checkedElem) =>
      checkedElem.filter((el) => el !== isClickedEl)
    );
  }

  return (
    <div className={styles.secondStep__servicesList}>
      <div className={styles.servicesList}>
        <div>
          <h4>Удобства в отеле</h4>
          <p>Необходимо указать до 10 удобств в вашем отеле</p>
        </div>
        <div className={styles.servicesList__tags}>
          <Divider orientation="left">Выбранные</Divider>
          <Space wrap>
            {checkedElem?.length !== 0 &&
              checkedElem?.map((el, i) => {
                return (
                  <Fragment key={`${el}${i}`}>
                    <Tag color="geekblue" onClose={(e) => deleteItem(e)}>
                      {el}
                    </Tag>
                  </Fragment>
                );
              })}
          </Space>
        </div>
        <div className={styles.servicesList__items}>
          <Checkbox.Group onChange={getServicesList}>
            <div>
              <h5>Услуги</h5>
              {arr.map((el, i) => {
                return (
                  <Col key={el + i}>
                    <Checkbox value={el} checked={true}>
                      {el}
                    </Checkbox>
                  </Col>
                );
              })}
              <Col>
                <p>Услуги нет в списке</p>
              </Col>
            </div>
            <div>
              <h5>Услуги</h5>
              {arr.map((el, i) => {
                return (
                  <Col key={el + i}>
                    <Checkbox value={el} checked={true}>
                      {el}
                    </Checkbox>
                  </Col>
                );
              })}
              <Col>
                <p>Услуги нет в списке</p>
              </Col>
            </div>
            <div>
              <h5>Услуги</h5>
              {arr.map((el, i) => {
                return (
                  <Col key={el + i}>
                    <Checkbox value={el} checked={true}>
                      {el}
                    </Checkbox>
                  </Col>
                );
              })}
              <Col>
                <p>Услуги нет в списке</p>
              </Col>
            </div>
            <div>
              <h5>Услуги</h5>
              {arr.map((el, i) => {
                return (
                  <Col key={el + i}>
                    <Checkbox value={el} checked={true}>
                      {el}
                    </Checkbox>
                  </Col>
                );
              })}
              <Col>
                <p>Услуги нет в списке</p>
              </Col>
            </div>
            <div>
              <h5>Услуги</h5>
              {arr.map((el, i) => {
                return (
                  <Col key={el + i}>
                    <Checkbox value={el} checked={true}>
                      {el}
                    </Checkbox>
                  </Col>
                );
              })}
              <Col>
                <p>Услуги нет в списке</p>
              </Col>
            </div>
          </Checkbox.Group>
        </div>
      </div>
      <div className={styles.nextBtn}>
        <button onClick={() => dispatch(setPageNumber(4))}>Далее</button>
      </div>
    </div>
  );
}
