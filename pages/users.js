import React, { useEffect, useState } from "react";
import styles from "../styles/users.module.scss";
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
import Head from "next/dist/shared/lib/head";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsers, getUsers } from "../redux/actions/userActions";

(Modal, AdminDetail, EditAdmin).setAppElement();

const Users = () => {
  // Get Data
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.Users);
  const { loading, error, users } = allUsers;

  // LOAD DATA
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  // SEARCH DATA
  const [inputSearch, setInputSearch] = useState("");
  const handleChangeSearch = (e) => {
    e.preventDefault();
    setInputSearch(e.target.value);
  };

  return (
    <div>
      <Head>
        <title>Users Data</title>
      </Head>

      <Layout />

      <section className="article">
        <div className={styles.header}>
          <div className={styles.search}>
            <form style={{ width: "500px" }}>
              <input
                name="Search"
                type="text"
                placeholder="Search User..."
                name={inputSearch}
                onChange={handleChangeSearch}
                value={inputSearch}
                className="input-search"
              />
            </form>
          </div>
        </div>

        <section className={styles.users}>
          <div style={{ overflowX: "auto" }}>
            <table
              className="table table-borderless"
              style={{ width: "1000px" }}
            >
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
                {loading ? (
                  <tr>
                    <td>Loading...</td>
                  </tr>
                ) : error ? (
                  error.message
                ) : (
                  users
                    .filter((u) => {
                      if (inputSearch === "") {
                        return u;
                      } else if (
                        (u.username
                          .toLowerCase()
                          .includes(inputSearch.toLowerCase()),
                        u.email
                          .toLowerCase()
                          .includes(inputSearch.toLowerCase()))
                      ) {
                        return u;
                      }
                    })
                    .map((u) => (
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
                                Swal.fire({
                                  title: "Are you sure?",
                                  text: "You won't be able to revert this!",
                                  icon: "warning",
                                  showCancelButton: true,
                                  confirmButtonColor: "#3085d6",
                                  cancelButtonColor: "#d33",
                                  confirmButtonText: "Yes, delete it!",
                                }).then((result) => {
                                  if (result.isConfirmed) {
                                    dispatch(
                                      deleteUsers(u.id),
                                      Swal.fire(
                                        "Deleted!",
                                        "Your file has been deleted.",
                                        "success"
                                      )
                                    );
                                  }
                                })
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
                    ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Users;
