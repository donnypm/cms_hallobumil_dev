import Head from "next/head";
import Cookies from "js-cookie";
import { requireAuthentication } from "../utils/useAuth";
import { logoutUser } from "../redux/actions/loginActions";
import { useDispatch } from "react-redux";
import { useRouter } from "next/dist/client/router";
import Layout from "./components/Layout";

export default function CMSHome(props) {
  const dispatch = useDispatch();
  const router = useRouter();

  const logout = () => {
    // e.preventDefault;
    dispatch(logoutUser());
    router.push("/");
    Cookies.remove("token");
    // window.location.reload();
  };

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <Layout />

      <div className="center__page">
        <img src="/avatar.png" />
        <p style={{ fontSize: "20px" }}>Welcome Admin (Nama Admin)</p>
      </div>
    </div>
  );
}

// export default CMSHome;

export const getServerSideProps = requireAuthentication((context) => {
  return {
    props: {
      data: [],
    },
  };
});
