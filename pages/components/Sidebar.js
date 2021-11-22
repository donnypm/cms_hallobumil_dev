import styles from "../../styles/Component.module.scss";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import Cookies from "js-cookie";
import { logoutUser } from "../../redux/actions/loginActions";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Sidebar = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const x = router.pathname;

  const logout = () => {
    // e.preventDefault;
    dispatch(logoutUser());
    router.push("/");
    Cookies.remove("token");
    window.location.reload();
  };

  return (
    <>
      {/* TOP NAV */}
      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          <li className={styles.nav__listlogo} style={{ fontSize: "24px" }}>
            {x === "/CmsAdmin"
              ? "CMS Admin"
              : x === "/CmsUsers"
              ? "CMS User"
              : x === "/users"
              ? "Users"
              : ""}
          </li>
          <li className={styles.nav__listitem} style={{ marginRight: "220px" }}>
            <img
              src="/avatar.png"
              height="30"
              style={{ marginRight: "10px" }}
            />
            Nama
            <ul className={styles.nav__listitemdrop}>
              <li>
                <a onClick={logout}>Log Out</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      {/* SIDE NAV */}
      <div className={styles.sidenav}>
        <div className={styles.logo}>
          <Image src="/icon.png" width={180} height={87} />
        </div>
        <li>
          <a
            onClick={(e) => router.push("../CmsAdmin")}
            className={
              router.pathname === "/CmsAdmin"
                ? styles.activeNav
                : styles.nonactiveNav
            }
          >
            CMS_Admin
          </a>
        </li>
        <li>
          <a
            onClick={(e) => router.push("../CmsUsers")}
            className={
              router.pathname === "/CmsUsers"
                ? styles.activeNav
                : styles.nonactiveNav
            }
          >
            CMS_User
          </a>
        </li>
        <li>
          <a
            onClick={(e) => router.push("../users")}
            className={
              router.pathname === "/users"
                ? styles.activeNav
                : styles.nonactiveNav
            }
          >
            user
          </a>
        </li>
        <br />
      </div>
    </>
  );
};

export default Sidebar;
