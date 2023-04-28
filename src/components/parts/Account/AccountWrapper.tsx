import React, { useEffect, useState } from "react";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";

import Link from "next/link";

import styles from "@/styles/Account/MyOrders.module.scss";

type MenuItem = Required<MenuProps>["items"][number];

const { Header, Footer, Sider } = Layout;

function getItem(
  label: React.ReactNode,
  key: React.Key,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    children,
    label,
  } as MenuItem;
}

const items: MenuProps["items"] = [
  getItem("Поездки", "1", [
    getItem(<Link href={"/account/my-orders"}>Мои заказы</Link>, "2"),
    getItem(<Link href={"/account/history"}>История заказов</Link>, "3"),
    getItem(<Link href={"/account/favorites"}>Избранные</Link>, "4"),
    getItem(<Link href={"/account/profile"}>Профиль</Link>, "5"),
  ]),
  getItem("Объект", "6", [
    getItem(<Link href={"/account/rooms"}>Комнаты</Link>, "7"),
    getItem(<Link href={"/account/booking"}>Бронирования</Link>, "8"),
    getItem(<Link href={"/account/messages"}>Сообщения</Link>, "9"),
    getItem(<Link href={"/account/profile-object"}>Профиль</Link>, "10"),
  ]),
];

export default function AccountWrapper({
  children,
}: {
  children: React.ReactElement;
}) {
  const [title, setTitle] = useState<string>();
  const [menuIsClicked, setMenuIsClicked] = useState(true);

  useEffect(() => {
    const titleName = document.querySelector("title");
    setTitle(titleName?.innerText);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Layout
        hasSider
        style={{ fontFamily: "var(--noto-serif)" }}
        className={styles.siteLayout}
      >
        <Sider
          className={styles.sidebar}
          breakpoint="md"
          collapsed={menuIsClicked}
          collapsedWidth="0"
          onCollapse={(collapsed) => {
            setMenuIsClicked(collapsed);
          }}
        >
          <h2>
            <Link href={"/"}>MravaSar</Link>
          </h2>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={items}
          />
        </Sider>
        <Layout className={styles.layout}>
          <Header className={styles.header}>{title}</Header>
          {children}
          <Footer style={{ textAlign: "center" }}>©2023 MravaSar</Footer>
        </Layout>
      </Layout>
    </>
  );
}
