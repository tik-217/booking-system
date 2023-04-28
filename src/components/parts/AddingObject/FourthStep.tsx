import { useState } from "react";

import { Upload, UploadFile, UploadProps } from "antd";
import ImgCrop from "antd-img-crop";

import styles from "@/styles/AddingObject.module.scss";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { RcFile } from "antd/es/upload";
import { setPageNumber } from "@/store/reducers";

export default function FourthStep() {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const userIsRegistered = useAppSelector((state) => state.userIsRegistered);

  const dispatch = useAppDispatch();

  const onChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as RcFile);
        reader.onload = () => resolve(reader.result as string);
      });
    }
  };

  return (
    <div className={styles.rooms}>
      <h4>Номера</h4>
      <div>
        <div className={styles.rooms__photo}>
          <h5>Фото</h5>
          <ImgCrop>
            <Upload
              listType="picture-card"
              fileList={fileList}
              onChange={onChange}
              onPreview={onPreview}
            >
              {fileList.length < 20 && "+"}
            </Upload>
          </ImgCrop>
        </div>
        <div
          className={`${styles.addingObject__inputs} ${
            styles.addingObject__inputStyle
          } ${!userIsRegistered && styles.addingObject__inputs_unactive}`}
        >
          <div>
            <label htmlFor="objectType">Название номера</label>
            <input
              type="text"
              id="objectType"
              name="objectType"
              disabled={!userIsRegistered}
            />
          </div>
          <div className={styles.rooms__twoColumns}>
            <div>
              <label htmlFor="objectType">Квадратура (м2)</label>
              <input
                type="text"
                id="objectType"
                name="objectType"
                disabled={!userIsRegistered}
              />
            </div>
            <div>
              <label htmlFor="objectName">Вместимость гостей</label>
              <input
                type="text"
                id="objectName"
                name="objectName"
                disabled={!userIsRegistered}
              />
            </div>
          </div>
          <div className={styles.rooms__twoColumns}>
            <div>
              <label htmlFor="objectType">Стоимость в сутки</label>
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
        </div>
        <div className={styles.nextBtn}>
          <button
            disabled={!userIsRegistered}
            onClick={() => dispatch(setPageNumber(5))}
          >
            Далее
          </button>
          <p>Добавить еще</p>
        </div>
      </div>
    </div>
  );
}
