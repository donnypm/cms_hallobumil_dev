import Head from "next/head";
import styles from "../styles/Login.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div>
      <Head>
        <title>Login </title>
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
              <div className={styles.form__input}>
                <span className={styles.icon}>
                  <FontAwesomeIcon icon={faUser} size="2x" />
                </span>
                <input
                  type="text"
                  name="username"
                  placeholder="username"
                  className={styles.inputBox}
                />
              </div>
              <br />
              <div className={styles.form__input}>
                <span className={styles.icon}>
                  <FontAwesomeIcon icon={faLock} size="2x" />
                </span>
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
                  Login
                </button>
              </div>
              <div>
                <p style={{ textAlign: "center" }}>
                  do you haven't account?{" "}
                  <a href="/Register" style={{ fontWeight: "bold" }}>
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
