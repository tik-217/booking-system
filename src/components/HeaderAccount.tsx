// react/next
import Link from "next/link";
import Image from "next/image";

// styles
import styles from "@/styles/HeaderAccount.module.scss";

import user from "@/assets/icons/user.svg";

export default function HeaderAccount() {
  return (
    <>
      <div className={styles.header__top}>
        <div>
          <Link href={"/"} className={styles.header__top_logo}>
            <h2>Mrava Sar</h2>
          </Link>
        </div>
        <div>
          <Image height={50} width={50} src={user} alt={"user"} />
        </div>
      </div>
    </>
  );
}
