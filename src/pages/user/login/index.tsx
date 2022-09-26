import styles from "./styles.module.scss";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GrClose } from "react-icons/gr";
import { IoIosLogIn } from "react-icons/io";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useCallback, useState } from "react";

const Login: NextPage = () => {
  const { back: goBack } = useRouter();
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const changeSlider = useCallback((number: number) => {
    setCurrentSlide(number);
  }, []);

  // home -------------------------- OK
  // Login com Token - EMAIL; ------ OK
  // Login com Token - Token; ------ OK
  // Login com email e senha;
  // Esqueci minha senha;
  // Cadastrar;

  return (
    <main className={styles.loginPage}>
      <section
        className={styles.content}
        style={{ backgroundImage: "url(/images/placeholder_background.jpeg)" }}
      >
        <Carousel
          className={styles.formSlider}
          showIndicators={false}
          showStatus={false}
          showArrows={false}
          showThumbs={false}
          transitionTime={500}
          centerSlidePercentage={100}
          selectedItem={currentSlide}
          infiniteLoop={false}
          swipeable
          centerMode
          dynamicHeight
        >
          <form onSubmit={(e) => e.preventDefault()}>
            <GrClose className={styles.closeLogin} onClick={() => goBack()} />
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
            <GrClose className={styles.closeLogin} onClick={() => goBack()} />
            <h1>Entrar</h1>
            <small>Por favor informe seu email</small>
            <div className={styles.formInput}>
              <input type="email" required placeholder="Ex: jose@email.com" />
            </div>
            <div className={styles.buttons}>
              <button type="button" onClick={() => changeSlider(0)}>
                Voltar
              </button>
              <button type="submit">Confirmar</button>
            </div>
          </form>
          <form onSubmit={(e) => e.preventDefault()}>
            <GrClose className={styles.closeLogin} onClick={() => goBack()} />
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
              <button type="button" onClick={() => changeSlider(1)}>
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
            <GrClose className={styles.closeLogin} onClick={() => goBack()} />
            <h1>Entrar</h1>
            <small>Entrar com email e senha</small>
            <div className={styles.formInput}>
              <label>Seu email</label>
              <input type="email" required />
            </div>
            <div className={styles.formInput}>
              <label>Senha</label>
              <input type="password" required />
            </div>
            <div className={styles.formInput}>
              <small onClick={() => changeSlider(4)}>Esqueci minha senha</small>
              <small onClick={() => changeSlider(4)}>
                Não tem uma senha? Cadastre agora
              </small>
            </div>
            <div className={styles.buttons}>
              <button type="button" onClick={() => changeSlider(0)}>
                Voltar
              </button>
              <button type="submit">Entrar</button>
            </div>
          </form>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              changeSlider(5);
            }}
          >
            <GrClose className={styles.closeLogin} onClick={() => goBack()} />
            <h1>Entrar</h1>
            <small>Por favor informe seu email</small>
            <div className={styles.formInput}>
              <input type="email" required />
            </div>
            <div className={styles.buttons}>
              <button type="button" onClick={() => changeSlider(3)}>
                Voltar
              </button>
              <button type="submit">Confirmar</button>
            </div>
          </form>
          <form onSubmit={(e) => e.preventDefault()}>
            <GrClose className={styles.closeLogin} onClick={() => goBack()} />
            <h1>Entrar</h1>
            <small>Cadastrar nova senha</small>
            <p>Enviaremos uma chave de validação para seu e-mail</p>
            <div className={styles.formInput}>
              <label>Nova senha</label>
              <input type="password" required />
            </div>
            <div className={styles.formInput}>
              <label>Confirmar nova senha</label>
              <input type="password" required />
            </div>
            <div className={styles.warning}>
              <p>Sua senha deve ter:</p>
              <small>- Mínimo de 8 caracteres</small>
              <small>- 1 número</small>
              <small>- 1 letra minúscula</small>
              <small>- 1 letra maiúscula</small>
            </div>
            <div className={styles.buttons}>
              <button type="button" onClick={() => changeSlider(4)}>
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
