import React, {useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/CmsAdmin.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPen,
  faWindowClose,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import ModalAdmin from "react-modal";
import AdminDetail from "react-modal";
import EditAdmin from "react-modal";
import Swal from "sweetalert2";

(ModalAdmin, AdminDetail, EditAdmin).setAppElement();


const CmsAdmin = () => {

   // MODAL
   const [modalIsOpen, setModalIsOpen] = useState(false);
   const [descModalIsOpen, setdescModalIsOpen] = useState(false);
   const [editModalIsOpen, seteditModalIsOpen] = useState(false);
 

    return (
      <section className={styles.article}>
        <h1 style={{ lineHeight: "10px", fontFamily: "comfortaa"}}> CMS Admin </h1>

        {/* MODAL CREATE ADMIN */}
      <section className="modal-cont">
        <ModalAdmin
          isOpen={modalIsOpen}
          ariaHideApp={false}
          style={{
            content: {
              width: "80%",
              top:"50px",
              left: "230px",
              right: "40px",
              bottom: "40px",
              backgroundColor: "rgba(245, 140, 139, 1)",
            },
          }}
        >
          <button
            onClick={() => setModalIsOpen (false)}
            style={{ float: "right"}}
            className={styles.btnAction}
          >
            <FontAwesomeIcon
              icon={faWindowClose}
              size="2x"
              style={{ color: "black" }}
            />
          </button>
              <h1>New CMS_Admin</h1>
              <div className="form-cont">
                <form id="form" className="form">
                  <div className="form-group">
                      <input 
                        type="input"
                        className="input-form"
                        placeholder="firstname"
                        name="Fname"
                        // onChange={}
                        // value={}
                      />

                      <input 
                        type="input"
                        className="input-form"
                        placeholder="lastname"
                        name="lastname"
                        // onChange={}
                        // value={}
                      />
                  </div>
                  <div className="form-group">
                      <input 
                        type="input"
                        className="input-form"
                        placeholder="username"
                        name="username"
                        // onChange={}
                        // value={}
                      />

                      <input 
                        type="input"
                        className="input-form"
                        placeholder="phone"
                        name="phone"
                        // onChange={}
                        // value={}
                      />
                  </div>
                  <div className="form-group">
                      <input 
                        type="input"
                        className="input-form1"
                        placeholder="email"
                        name="email"
                        // onChange={}
                        // value={}
                      />
                  </div>
                  <div className="form-group">
                      <input 
                        type="input"
                        className="input-form1"
                        placeholder="password"
                        name="password"
                        // onChange={}
                        // value={}
                      />
                  </div>
                  <div className="form-group">
                      <input 
                        type="input"
                        className="input-form1"
                        placeholder="avatar"
                        name="avatar"
                        // onChange={}
                        // value={}
                      />
                  </div>
                  <div className="form-group">
                    <div className="button">
                    <button
                      className="btnCreate" 
                      type="button"
                      // onClick={handleSubmit}
                    >
                      <span className="bn54span">Submit</span>
                    </button>
                  </div>
                  </div>
                </form>
              </div>
      </ModalAdmin>
      </section>
    
      <div className={styles.header}>
        <button className="btnCreate" onClick={() => setModalIsOpen(true)}>
          New CMS Admin
        </button>

        <div className="search">
          <form>
            {" "}
            <input name="Search"
                   type="text"
                   placeholder="Search CMS Admin..."
                  //  onChange={}
                  // value={}
                   className="input-search"
            />
          </form>
        </div>
      </div>

      <section>
      <section className={styles.admin}>
        
        <title>CMS Admin</title>
        <img rel="icon" href="/icon.png" />

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

export default CmsAdmin;
