import React, { useEffect, useState } from "react";
import styles from "../styles/CmsUsers.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPen,
  faWindowClose,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import ModalUserCms from "react-modal";
import UsersDetail from "react-modal";
import EditUsers from "react-modal";
import Swal from "sweetalert2";
import Layout from "./components/Layout";
import Head from "next/dist/shared/lib/head";
import { useDispatch, useSelector } from "react-redux";
import { getCmsuser } from "../redux/actions/cmsUserActions";

(ModalUserCms, UsersDetail, EditUsers).setAppElement();

const CmsUsers = () => {
  // MODAL
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [descModalIsOpen, setdescModalIsOpen] = useState(false);
  const [editModalIsOpen, seteditModalIsOpen] = useState(false);

  //Get Data
  const dispatch = useDispatch();
  const allCmsUsers = useSelector((state) => state.CmsUsers);
  const { loading, error, cmsUsers } = allCmsUsers;

  //Load Data
  useEffect(() => {
    dispatch(getCmsuser());
  }, []);
  
  return (
   <div>
      <Head>
        <title>CMS User</title>
      </Head>

      <Layout />

      {/* MODAL CREATE CMS_USER */}
      <section className="modal-cont">
        <ModalUserCms
          isOpen={modalIsOpen}
          ariaHideApp={false}
          style={{
            content: {
              top: "90px",
              left: "230px",
              right: "40px",
              bottom: "40px",
              backgroundColor: "rgba(245, 140, 139, 1)",
            },
            overlay: { backgroundColor: "#C4C4C4" },
          }}
        >
          <button
            onClick={() => setModalIsOpen(false)}
            style={{ float: "right" }}
            className={styles.btnAction}
          >
            <FontAwesomeIcon
              icon={faWindowClose}
              size="2x"
              style={{ color: "black" }}
            />
          </button>
          <h1>New CMS_Users</h1>
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
        </ModalUserCms>
      </section>

      <section className={styles.article}>
      <h1 style={{ fontSize: "30px", fontFamily: "comfortaa", fontWeight: "bold"}}>
          CMS User
      </h1>

        <div className="header">
          <button className="btnCreate" onClick={() => setModalIsOpen(true)}>
            New CMS User
          </button>

          <div className="search">
            <form style={{ width: "500px" }}>
              <input
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
          <div style={{ overflowX: "auto" }}>
            <table class="table table-borderless" style={{ width: "1000px" }}>
              <thead>
                <tr
                  style={{
                    backgroundColor: "#fbd3c4",
                  }}
                >
                  <th scope="col">No</th>
                  <th scope="col">Email</th>
                  <th scope="col">Username</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {loading
                  ? "Loading..."
                  : error
                  ? error.message
                  : cmsUsers.map((u) => (
                      <tr key={u.id}>
                        <th scope="row">{u.id}</th>
                        <td>{u.email}</td>
                        <td>{u.username}</td>
                        <td>{u.phone}</td>
                        <td>
                          <div className={styles.column}>
                            {/* DETAIL  */}
                            <button className={styles.btnAction}>
                              <FontAwesomeIcon
                                icon={faInfoCircle}
                                size="1x"
                                style={{ color: "black" }}
                              />
                            </button>

                            {/* EDIT  */}
                            <button className={styles.btnAction}>
                              <FontAwesomeIcon
                                icon={faPen}
                                size="1x"
                                style={{ color: "black" }}
                              />
                            </button>

                            {/* DELETE  */}
                            <button
                              className={styles.btnAction}
                              onClick={() =>
                                dispatch(
                                  deleteUsers(u.id),
                                  Swal.fire(
                                    "Berhasil Menghapus!",
                                    "User " +
                                      u.username +
                                      " Berhasil di Hapus!",
                                    "success"
                                  )
                                )
                              }
                            >
                              <FontAwesomeIcon
                                icon={faTrash}
                                size="1x"
                                style={{ color: "black" }}
                              />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </section>
      </section>
      </section>
  </div>
  );
};

export default CmsUsers;
