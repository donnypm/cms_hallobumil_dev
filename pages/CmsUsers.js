import React, {useEffect, useState } from "react";
import styles from "../styles/CmsUsers.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPen,
  faWindowClose,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import UsersDetail from "react-modal";
import EditUsers from "react-modal";
import Swal from "sweetalert2";

(Modal, UsersDetail, EditUsers).setAppElement();


const CmsUsers = () => {

    return (
      <section className={styles.article}>
        <h1 style={{ lineHeight: "10px", fontFamily: "comfortaa"}}> CMS User </h1>

        <div className="search">
          <form>
            {" "}
            <input name="Search"
                   type="text"
                   placeholder="Search CMS User..."
                  //  onChange={}
                  // value={}
                   className="input-search"
            />
          </form>
        </div>
      </div>

      <section>
      <section className={styles.users}>
        <title>CMS Users</title>

        <div className={styles.tblUsers}>
          <div className={styles.column1}>
            <span>Email</span>
          </div>

          <div className={styles.column2}>
            <span>Username</span>
          </div>

          <div className={styles.column3}>
            <div>
              <span>Phone</span>
            </div>
          </div>

          <div className={styles.column4}>
            <div>
              <span>Action</span>
            </div>
            </div>
          </div>
                <div className={styles.column}>
                      {/* DETAIL PRODUCT */}
                      <button
                        className={styles.btnAction}
                      >
                        <FontAwesomeIcon
                          icon={faInfoCircle}
                          size="1x"
                          style={{ color: "black" }}
                        />
                      </button>

                      {/* EDIT PRODUCT */}
                      <button
                        className={styles.btnAction}
                      >
                        <FontAwesomeIcon
                          icon={faPen}
                          size="1x"
                          style={{ color: "black" }}
                        />
                      </button>

                      {/* DELETE PRODUCT */}
                      <button
                        className={styles.btnAction}
                      >
                        <FontAwesomeIcon
                          icon={faTrash}
                          size="1x"
                          style={{ color: "black" }}
                        />
                      </button>
                    </div>
      </section>
    </section>
  </section>
);
};

export default CmsUsers;
