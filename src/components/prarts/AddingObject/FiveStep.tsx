import Link from "next/link";
import styles from "../../../styles/AddingObject.module.scss";
import { Checkbox, Col } from "antd";

export default function FiveStep() {
  return (
    <div className={styles.fiveStep}>
      <h4>Соглашения и договор</h4>
      <Checkbox.Group className={styles.fiveStep__contracts}>
        <Col>
          <Checkbox
            value={
              "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries"
            }
          >
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries
            <small>
              <Link href={"/"}> Link</Link>
            </small>
          </Checkbox>
        </Col>
        <Col>
          <Checkbox
            value={
              " used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
            }
          >
            used in the graphic, print, and publishing industries for previewing
            layouts and visual mockups.
            <small>
              <Link href={"/"}> Link</Link>
            </small>
          </Checkbox>
        </Col>
        <Col>
          <Checkbox
            value={
              "Lorem ipsum is placeholder  in the graphic, print, and publishing industries for previewing layouts and visual mockups."
            }
          >
            Lorem ipsum is placeholder in the graphic, print, and publishing
            industries for previewing layouts and visual mockups.
            <small>
              <Link href={"/"}> Link</Link>
            </small>
          </Checkbox>
        </Col>
      </Checkbox.Group>
      <div className={styles.nextBtn}>
        <p>
          Принимая все вышеперечисленные документы, Вы подтверждаете, что Вы
          являетесь владельцем указанного объекта, у Вас имеются все необходимые
          документы и разрешения для ведения этого бизнеса, а так же Вы
          обязуетесь передать компании “Mrava Sar” любую информацию об указанном
          объекте в случае необходимости.{" "}
        </p>
        <Link href={"/"}>
          <button>Далее</button>
        </Link>
      </div>
    </div>
  );
}
