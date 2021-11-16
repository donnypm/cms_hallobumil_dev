import Head from "next/head";
import styles from "../styles/Register.module.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div>
      <Head>
        <title>Register </title>
      </Head>

      <section className={styles.section}>
        <div className={styles.imgBox}>
          <img src="../logo/logo login bumil.jpg" />
        </div>
        <div className={styles.contentBox}>
          <div className={styles.formBox}>
            <div className={styles.logo__login}>
              <img
                src="../logo/login 1.png"
                style={{ height: "100px", width: "100px" }}
              />
            </div>
            <form>
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
              <div className={styles.form__input}>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className={styles.inputBox}
                />
              </div>
              <br />
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
              <div style={{ textAlign: "center" }}>
                <button type="submit" className={styles.btn__submit}>
                  Register
                </button>
              </div>
              <div>
                <p style={{ textAlign: "center" }}>
                  do you haven account? <a href="/">Login</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
