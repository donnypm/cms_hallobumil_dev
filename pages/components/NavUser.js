import styles from "../../styles/Component.module.scss";
import Image from "next/dist/client/image";
import { useRouter } from "next/dist/client/router";

const NavUser = () => {
  const router = useRouter();

  return (
    <>
      <nav className={styles.nav} style={{ marginLeft: "0px" }}>
        <ul className={styles.nav__list}>
          <li className={styles.nav__listlogo}>
            <a onClick={(e) => router.push("/User")}>
              <img
                src="/logover2.png"
                height="65"
                width="180"
                style={{ marginTop: "5px", marginLeft: "30px" }}
              />
            </a>
          </li>
          <li className={styles.nav__listitem} style={{ marginRight: "10px" }}>
            <img
              src="/avatar.png"
              height="30"
              style={{ marginRight: "10px" }}
            />
            Nama
            <ul className={styles.nav__listitemdrop}>
              <li>
                <a onClick={(e) => router.push("../../User/EditUser")}>
                  Edit Profile
                </a>
              </li>
              <li>
                <a>Log Out</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavUser;
