import NavUser from "../components/NavUser";
import Head from "next/dist/shared/lib/head";
import styles from "../../styles/User.module.scss";

const User = () => {
  return (
    <div>
      <Head>
        <title>User</title>
      </Head>

      <NavUser />

      <div className={styles.center}>
        <img src="/avatar.png" className={styles.avatarHome} />
        <h1 style={{ fontSize: "20px" }}>
          Hai Bumil, Selamat datang besok lahiran ya
        </h1>
      </div>
    </div>
  );
};

export default User;
