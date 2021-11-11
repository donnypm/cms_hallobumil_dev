import styles from "../../styles/Component.module.scss";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="Navigation-bar">
      {/* TOP NAV */}
      <ul className={styles.navbar} style={{ marginTop: "0" }}>
        <div className="dropdown" style={{ marginRight: "70px" }}>
          <button className="dropbtn">
            <img
              src="/avatar.png"
              height="30"
              styles={{ marginTop: "5px", marginRight: "3px" }}
            />
            Nama
          </button>
          <div
            className="dropdown-content"
            style={{ marginRight: "0px", right: "0px" }}
          >
            <a href="#" style={{ margin: "0px" }}>
              Log Out
            </a>
          </div>
        </div>
      </ul>
      {/* SIDE NAV */}
      <div className={styles.sidenav}>
        <div className={styles.logo}>
          <Image src="/icon.png" width={180} height={87} />
        </div>
        <a href="../CmsAdmin">CMS_Admin</a>
        <a href="../CmsUsers">CMS_User</a>
        <a href="../user">user</a>
        <br />
      </div>
    </div>
  );
};

export default Sidebar;
