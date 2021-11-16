import React, { useEffect, useState } from "react";
import styles from "../styles/users.module.scss";
import Image from "next/image";
import { getUsers } from "../redux/actions/userActions";
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
import Head from "next/dist/shared/lib/head";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";


(Modal, AdminDetail, EditAdmin).setAppElement();

const Users = () => {

  //Get Data
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.Users);
  const { loading, error, users } = allUsers;

  //Load Data
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  
  return (
    <div>
      <Head>
        <title>Users Data</title>
      </Head>

      <Layout />

      <section className="article">
        <h1 style={{ fontSize: "30px", fontFamily: "comfortaa", fontWeight: "bold"}}>
          User
        </h1>

        <div className={styles.header}>
          <div className={styles.search}>
            <form style={{ width: "500px" }}>
              <input
                name="Search"
                type="text"
                placeholder="Search User..."
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
                  : users.map((a) => (
                      <tr key={a.id}>
                        <th scope="row">{a.id}</th>
                        <td>{a.email}</td>
                        <td>{a.username}</td>
                        <td>{a.phone}</td>
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
                                  deleteAdmin(u.id),
                                  Swal.fire(
                                    "Berhasil Menghapus!",
                                    "Admin " +
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

export default Users;
