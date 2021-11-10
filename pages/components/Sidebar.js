import styles from "../../styles/Component.module.scss";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="Navigation-bar">
      <div className={styles.navbar}>
        <a href=""><Image className={styles.imgnav} src="/usericon.png" width={34} height={35}/>nama</a>
      </div>

      <div className={styles.sidenav}>
        <div className={styles.logo}>
          <Image src="/icon.png" width={208} height={87} />
        </div>

        <a href="../CmsAdmin">CMS_Admin</a>
        <a href="../CmsUsers">CMS_User</a>
        <a href="../user">user</a>
        <br />
        {/* <a href="#contact" style={{ color: "red" }}>
          Log Out
        </a> */}
      </div>
    </div>
  );
};

export default Sidebar;
