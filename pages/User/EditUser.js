import NavUser from "../components/NavUser";
import Head from "next/dist/shared/lib/head";
import styles from "../../styles/User.module.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const EditUser = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div>
      <Head>
        <title>Edit User</title>
      </Head>

      <NavUser />
      <h1 style={{ textAlign: "center", fontSize: "32px", marginTop: "100px" }}>
        Edit Profile
      </h1>

      <section className={styles.section}>
        <div className={styles.imgBox}>
          <img src="/avatar.png" />
        </div>
        <div className={styles.contentBox}>
          <div className={styles.formBox}>
            <form>
              <div className={styles.spanUp}>
                <span>FistName</span>
                <span style={{ width: "280px" }}>LastName</span>
              </div>
              <div className={styles.formName}>
                <div className={styles.form__input}>
                  <input
                    type="text"
                    name="firstname"
                    placeholder="firstname"
                    className={styles.inputBoxUp}
                  />
                </div>
                <div className={styles.form__input}>
                  <input
                    type="text"
                    name="lastname"
                    placeholder="lastname"
                    className={styles.inputBoxUp}
                  />
                </div>
              </div>
              <div className={styles.spanUp}>
                <span>Username</span>
                <span style={{ width: "280px" }}>Number Phone</span>
              </div>
              <div className={styles.formName}>
                <div className={styles.form__input}>
                  <input
                    type="text"
                    name="username"
                    placeholder="username"
                    className={styles.inputBoxUp}
                  />
                </div>
                <div className={styles.form__input}>
                  <input
                    type="number"
                    name="numberphone"
                    placeholder="number phone"
                    className={styles.inputBoxUp}
                  />
                </div>
              </div>
              <span>Email</span>
              <div className={styles.form__input}>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className={styles.inputBox}
                />
              </div>
              <span>Password</span>
              <div className={styles.form__input}>
                <input
                  type={passwordShown ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className={styles.inputBox}
                />
                <i className={styles.iconVisible}>
                  <FontAwesomeIcon
                    icon={passwordShown ? faEye : faEyeSlash}
                    onClick={togglePassword}
                  />
                </i>
              </div>
              <div className={styles.button__action}>
                <button
                  type="submit"
                  className={styles.btn__submit}
                  style={{ backgroundColor: "#F16362", color: "white" }}
                >
                  Cancel
                </button>
                <button type="submit" className={styles.btn__submit}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EditUser;
