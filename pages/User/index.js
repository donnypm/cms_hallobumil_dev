import NavUser from "../components/NavUser";
import Head from "next/dist/shared/lib/head";
import styles from "../../styles/User.module.scss";
import Image from "next/dist/client/image";

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
      
      <div className={styles.center}>
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <h1>TESTTTTTTTTT</h1>
            </div>
            <div class="carousel-item">
              <h1>TESTTTTTTTTT 2</h1>
            </div>
            <div class="carousel-item">
              <h1>TESTTTTTTTTT 3</h1>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
