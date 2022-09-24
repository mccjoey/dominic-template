import type { NextPage } from "next";
import { useRouter } from "next/router";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GrClose } from "react-icons/gr";
import { IoIosLogIn } from "react-icons/io";
import styles from "./styles.module.scss";

const Login: NextPage = () => {
  const { push: route } = useRouter();

  return (
    <main className={styles.loginPage}>
      <section
        className={styles.content}
        style={{ backgroundImage: "url(/images/placeholder_background.jpeg)" }}
      >
        <form onSubmit={(e) => e.preventDefault()}>
          <GrClose className={styles.closeLogin} onClick={() => route("/")} />
          <h1>Entrar</h1>
          <small>Use uma das opções para fazer login</small>
          <ul>
            <li>
              <AiOutlineMail />
              <small>Entrar apenas com e-mail</small>
            </li>
            <li>
              <FcGoogle />
              <small>Entrar com Google</small>
            </li>
            <li>
              <FaFacebookF />
              <small>Entrar com FaceBook</small>
            </li>
            <li>
              <IoIosLogIn />
              <small>Entrar com e-mail e senha</small>
            </li>
          </ul>
        </form>
      </section>
    </main>
  );
};

export default Login;
