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
import { deleteCmsUser, getCmsUser } from "../redux/actions/cmsUserActions";

(ModalUserCms, UsersDetail, EditUsers).setAppElement();

const CmsUsers = () => {
  // MODAL
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [descModalIsOpen, setdescModalIsOpen] = useState(false);
  const [editModalIsOpen, seteditModalIsOpen] = useState(false);

  // Get Data
  const dispatch = useDispatch();
  const allCmsUsers = useSelector((state) => state.CmsUsers);
  const { loading, error, cmsUsers } = allCmsUsers;

  // LOAD DATA
  useEffect(() => {
    dispatch(getCmsUser());
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

      <section className="article">
        <div className="header">
          <button className="btnCreate" onClick={() => setModalIsOpen(true)}>
            New CMS User
          </button>

          <div className="search">
            <form style={{ width: "500px" }}>
              <input
                type="text"
                placeholder="Search CMS User..."
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
              style={{ width: "1000px", marginTop: "10px" }}
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
                  cmsUsers
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
                                      deleteCmsUser(u.id),
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

export default CmsUsers;
