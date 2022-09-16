import { InvalidEvent } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF, FaPinterest } from "react-icons/fa";
import styles from "./styles.module.scss";

export const Newsletter = () => {
  return (
    <section className={styles.newsletter}>
      <h1>Newsletter</h1>
      <p>Cadastre-se para receber nossas novidades.</p>
      <form id="newsletter" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Nome"
          required
          onInvalid={(e: InvalidEvent<HTMLInputElement>) =>
            e.target.setCustomValidity("Preencha seu nome aqui!")
          }
          onInput={(e: InvalidEvent<HTMLInputElement>) =>
            e.target.setCustomValidity("")
          }
        />
        <div className={styles.submit}>
          <input
            type="email"
            required
            placeholder="E-mail"
            onInvalid={(e: InvalidEvent<HTMLInputElement>) =>
              e.target.setCustomValidity("Insira um email válido!")
            }
            onInput={(e: InvalidEvent<HTMLInputElement>) =>
              e.target.setCustomValidity("")
            }
          />
          <button type="submit" form="newsletter">
            Ok
          </button>
        </div>
        <div className={styles.socials}>
          <AiOutlineInstagram />
          <FaPinterest />
          <FaFacebookF />
          <BsYoutube />
        </div>
      </form>
    </section>
  );
};
