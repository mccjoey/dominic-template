import styles from "./styles.module.scss";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import {
  AiOutlineEyeInvisible,
  AiOutlineEye,
  AiOutlineMail,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoIosLogIn } from "react-icons/io";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useCallback, useState } from "react";

const Login: NextPage = () => {
  const { back: goBack } = useRouter();
  const [passwordType, setPasswordType] = useState("password");
  const [cpasswordType, setCPasswordType] = useState("password");
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const changeSlider = useCallback((number: number) => {
    setCurrentSlide(number);
  }, []);

  return (
    <main className={styles.loginPage}>
      <section className={styles.content}>
        <Carousel
          className={styles.formSlider}
          showIndicators={false}
          showStatus={false}
          showArrows={false}
          showThumbs={false}
          transitionTime={0}
          centerSlidePercentage={100}
          selectedItem={currentSlide}
          infiniteLoop={false}
          swipeable={false}
          centerMode
          dynamicHeight
        >
          <form onSubmit={(e) => e.preventDefault()}>
            <h1>Entrar</h1>
            <small>Use uma das opções para fazer login</small>
            <ul>
              <li onClick={() => changeSlider(1)}>
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
              <li onClick={() => changeSlider(3)}>
                <IoIosLogIn />
                <small>Entrar com e-mail e senha</small>
              </li>
            </ul>
          </form>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              changeSlider(2);
            }}
          >
            <h1>Entrar</h1>
            <small>Por favor informe seu email</small>
            <div className={styles.formInput}>
              <input type="email" required placeholder="Ex: jose@email.com" />
            </div>
            <div className={styles.buttons}>
              <button
                className={styles.back}
                type="button"
                onClick={() => changeSlider(0)}
              >
                Voltar
              </button>
              <button type="submit">Confirmar</button>
            </div>
          </form>
          <form onSubmit={(e) => e.preventDefault()}>
            <h1>Entrar</h1>
            <small>Informe a chave de acesso</small>
            <p>
              Agora é só informar o código recebido em:{" "}
              <span>email@email.com</span>
            </p>
            <div className={styles.formInput}>
              <input type="text" required />
            </div>
            <div className={styles.buttons}>
              <button
                className={styles.back}
                type="button"
                onClick={() => changeSlider(1)}
              >
                Voltar
              </button>
              <button type="submit">Entrar</button>
            </div>
          </form>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <h1>Entrar</h1>
            <small>Entrar com email e senha</small>
            <div className={styles.formInput}>
              <label>Seu email</label>
              <input type="email" required />
            </div>
            <div className={styles.formInput}>
              <label>Senha</label>
              <input type={passwordType} required />
              {passwordType === "password" ? (
                <AiOutlineEye onClick={() => setPasswordType("text")} />
              ) : (
                <AiOutlineEyeInvisible
                  onClick={() => setPasswordType("password")}
                />
              )}
            </div>
            <div className={styles.buttons}>
              <button
                className={styles.back}
                type="button"
                onClick={() => changeSlider(0)}
              >
                Voltar
              </button>
              <button type="submit">Entrar</button>
            </div>
            <div className={styles.formInput}>
              <small onClick={() => changeSlider(4)}>
                Esqueceu sua senha de acesso?
              </small>
              <small onClick={() => changeSlider(4)}>
                Não tem conta? Registre-se
              </small>
            </div>
          </form>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              changeSlider(5);
            }}
          >
            <h1>Entrar</h1>
            <small>Por favor informe seu email</small>
            <div className={styles.formInput}>
              <input type="email" required />
            </div>
            <div className={styles.buttons}>
              <button
                className={styles.back}
                type="button"
                onClick={() => changeSlider(3)}
              >
                Voltar
              </button>
              <button type="submit">Confirmar</button>
            </div>
          </form>
          <form onSubmit={(e) => e.preventDefault()}>
            <h1>Entrar</h1>
            <small>Cadastrar nova senha</small>
            <p>Enviaremos uma chave de validação para seu e-mail</p>
            <div className={styles.formInput}>
              <label>Nova senha</label>
              <input type={passwordType} required />
              {passwordType === "password" ? (
                <AiOutlineEye onClick={() => setPasswordType("text")} />
              ) : (
                <AiOutlineEyeInvisible
                  onClick={() => setPasswordType("password")}
                />
              )}
            </div>
            <div className={styles.formInput}>
              <label>Confirmar nova senha</label>
              <input type={cpasswordType} required />
              {cpasswordType === "password" ? (
                <AiOutlineEye onClick={() => setCPasswordType("text")} />
              ) : (
                <AiOutlineEyeInvisible
                  onClick={() => setCPasswordType("password")}
                />
              )}
            </div>
            <div className={styles.warning}>
              <p>Sua senha deve ter:</p>
              <small>- Mínimo de 8 caracteres</small>
              <small>- 1 número</small>
              <small>- 1 letra minúscula</small>
              <small>- 1 letra maiúscula</small>
            </div>
            <div className={styles.buttons}>
              <button
                className={styles.back}
                type="button"
                onClick={() => changeSlider(4)}
              >
                Voltar
              </button>
              <button type="submit">Cadastrar nova senha</button>
            </div>
          </form>
        </Carousel>
      </section>
    </main>
  );
};

export default Login;
