import styles from "../../styles/Component.module.scss";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import Cookies from "js-cookie";
import { logoutUser } from "../../redux/actions/loginActions";
import { useDispatch } from "react-redux";

const Sidebar = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const x = router.pathname;
  console.log(x);

  const logout = () => {
    // e.preventDefault;
    dispatch(logoutUser());
    router.push("/");
    Cookies.remove("token");
    window.location.reload();
  };

  return (
    <div className="Navigation-bar">
      {/* TOP NAV */}
      <nav className={styles.nav__main__cms}>
        <ul>
          <li
            className={styles.nav__item}
            style={{ marginTop: "0", marginRight: "200px" }}
          >
            <a style={{ display: "flex" }}>
              <img
                src="/avatar.png"
                height="30"
                style={{ marginRight: "10px" }}
              />
              Nama
            </a>
            <div className={styles.nav__content}>
              <div className={styles.nav__sub}>
                <ul>
                  <li>
                    <a onClick={logout}>Log Out</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </nav>

      {/* SIDE NAV */}
      <div className={styles.sidenav}>
        <div className={styles.logo}>
          <Image src="/icon.png" width={180} height={87} />
        </div>
        <li>
          <a onClick={(e) => router.push("../CmsAdmin")}>CMS_Admin</a>
        </li>
        <li>
          <a onClick={(e) => router.push("../CmsUsers")}>CMS_User</a>
        </li>
        <li>
          <a onClick={(e) => router.push("../users")}>user</a>
        </li>
        <br />
      </div>
    </div>
  );
};

export default Sidebar;
