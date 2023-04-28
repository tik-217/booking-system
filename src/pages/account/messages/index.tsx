import Link from "next/link";
import Image from "next/image";
import { Layout } from "antd";

import styles from "@/styles/Account/Messages/Messages.module.scss";

import AccountWrapper from "@/components/parts/Account/AccountWrapper";

import calendar from "@/assets/icons/calendar.svg";
import door from "@/assets/icons/door.svg";
import Head from "next/head";

const { Content } = Layout;

export default function Messages() {
  return (
    <AccountWrapper>
      <>
        <Head>
          <title>Сообщения</title>
        </Head>
        <Content className={styles.content}>
          <div>
            <h4>Сообщения (5)</h4>
            <div className={styles.messages}>
              <div className={styles.messages__meta}>
                <Link href={"/account/messages/1"}>
                  <h5>Галина Новикова</h5>
                </Link>
                <div>
                  <Image
                    height={10}
                    width={10}
                    src={calendar}
                    alt={"calendar"}
                  />
                  <span>1 февраля 2023</span>
                </div>
                <div>
                  <Image height={10} width={10} src={door} alt={"door"} />
                  <span>Четырехместный номер Стандарт</span>
                </div>
              </div>
              <div className={styles.messages__lastMsg}>
                <Link href={"/account/messages/1"}>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum laudantium id a reiciendis labore ullam facilis
                    fugiat veritatis praesentium quas? At hic magnam distinctio
                    numquam, nostrum omnis ipsam autem magni?
                  </p>
                </Link>
              </div>
            </div>
            <div className={styles.messages}>
              <div className={styles.messages__meta}>
                <Link href={"/account/messages/1"}>
                  <h5>Галина Новикова</h5>
                </Link>
                <div>
                  <Image
                    height={10}
                    width={10}
                    src={calendar}
                    alt={"calendar"}
                  />
                  <span>1 февраля 2023</span>
                </div>
                <div>
                  <Image height={10} width={10} src={door} alt={"door"} />
                  <span>Четырехместный номер Стандарт</span>
                </div>
              </div>
              <div className={styles.messages__lastMsg}>
                <Link href={"/account/messages/1"}>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum laudantium id a reiciendis labore ullam facilis
                    fugiat veritatis praesentium quas? At hic magnam distinctio
                    numquam, nostrum omnis ipsam autem magni?
                  </p>
                </Link>
              </div>
            </div>
            <div className={styles.messages}>
              <div className={styles.messages__meta}>
                <Link href={"/account/messages/1"}>
                  <h5>Галина Новикова</h5>
                </Link>
                <div>
                  <Image
                    height={10}
                    width={10}
                    src={calendar}
                    alt={"calendar"}
                  />
                  <span>1 февраля 2023</span>
                </div>
                <div>
                  <Image height={10} width={10} src={door} alt={"door"} />
                  <span>Четырехместный номер Стандарт</span>
                </div>
              </div>
              <div className={styles.messages__lastMsg}>
                <Link href={"/account/messages/1"}>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum laudantium id a reiciendis labore ullam facilis
                    fugiat veritatis praesentium quas? At hic magnam distinctio
                    numquam, nostrum omnis ipsam autem magni?
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </Content>
      </>
    </AccountWrapper>
  );
}
