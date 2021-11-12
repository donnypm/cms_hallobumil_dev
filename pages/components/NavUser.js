import styles from "../../styles/Component.module.scss";
import Image from "next/dist/client/image";
import { useRouter } from "next/dist/client/router";

const NavUser = () => {
  const router = useRouter();

  return (
    <nav className={styles.nav__main}>
      <a onClick={(e) => router.push("/User")}>
        <img
          src="/logover2.png"
          height="65"
          width="180"
          style={{ marginTop: "5px", marginLeft: "30px" }}
        />
      </a>
      <ul>
        <li className={styles.nav__item}>
          <a style={{ display: "flex" }}>
            <img
              src="/user-solid.png"
              height="30"
              style={{ marginRight: "10px" }}
            />
            Nama
          </a>
          <div className={styles.nav__content}>
            <div className={styles.nav__sub}>
              <ul>
                <li>
                  <a onClick={(e) => router.push("../../User/EditUser")}>
                    Edit Profile
                  </a>
                </li>
                <li>
                  <a>Log Out</a>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavUser;
