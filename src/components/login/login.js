import styles from "./login.module.css";
import Link from "react-router-dom";

const login = () => {
  return (
    <div>
      <form className={styles.formulario}>
        <h1 className={styles.titulo}>LOGIN</h1>

        <div className={styles.compartilhar}></div>

        <label className={styles.labeltext}>E-mail: </label>
        <input  type="text" name="email" placeholder="Insira seu E-mail" className={styles.dadostext} ></input>

        <br></br>
        <br></br>
        <label className={styles.labeltext}>Senha: </label>
        <input type="password" name="senha" placeholder="Insira sua Senha" className={styles.dadostext}></input>

        <br></br>
        <input type="checkbox" name="marcar" className={styles.marcar}></input>
        <label className={styles.labeltextmarcar}>Lembrar minha senha</label>

        <br></br>
        <br></br>

        <button type="submit" className={styles.buttontext}>
          Entrar
        </button>
      </form>
    </div>
  );
};

export default login;
