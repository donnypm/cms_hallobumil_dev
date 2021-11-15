import React, { useEffect, useState } from "react";
import styles from "../styles/CmsAdmin.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPen,
  faWindowClose,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import AdminDetail from "react-modal";
import EditAdmin from "react-modal";
import Swal from "sweetalert2";
import Layout from "./components/Layout";
import Head from "next/dist/shared/lib/head";

(Modal, AdminDetail, EditAdmin).setAppElement();

const CmsAdmin = () => {
  return (
    <>
      <Head>
        <title>CMS Admin</title>
      </Head>
      <Layout />

      <section className="article">
        <h1 style={{ lineHeight: "10px", fontFamily: "comfortaa" }}>
          CMS Admin
        </h1>

        {/* <AdminDetail
        isOpen={descModalIsOpen}
        ariaHideApp={false}
        className={styles.mdlDetail}
      >
        <button
          onClick={() => setdescModalIsOpen(false)}
          style={{ float: "right" }}
          className="button-ud"
        >
        <FontAwesomeIcon
            icon={faWindowClose}
            size="2x"
            style={{ color: "black" }}
        />
        </button>
      </AdminDetail> */}

        <div className={styles.header}>
          <button className="btnCreate">New CMS Admin</button>

          <div className="search">
            <form style={{ width: "500px" }}>
              <input
                type="text"
                placeholder="Search CMS Admin..."
                //  onChange={}
                // value={}
                className="input-search"
              />
            </form>
          </div>
        </div>

        <section className={styles.admin}>
          <title>CMS Admin</title>

          <div className={styles.tblAdmin}>
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
            <button className={styles.btnAction}>
              <FontAwesomeIcon
                icon={faInfoCircle}
                size="1x"
                style={{ color: "black" }}
              />
            </button>

            {/* EDIT PRODUCT */}
            <button className={styles.btnAction}>
              <FontAwesomeIcon
                icon={faPen}
                size="1x"
                style={{ color: "black" }}
              />
            </button>

            {/* DELETE PRODUCT */}
            <button className={styles.btnAction}>
              <FontAwesomeIcon
                icon={faTrash}
                size="1x"
                style={{ color: "black" }}
              />
            </button>
          </div>
        </section>
      </section>
    </>
  );
};

export default CmsAdmin;
