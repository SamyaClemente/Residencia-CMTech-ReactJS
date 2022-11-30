import styles from './recuperarsenha.module.css'

const RecuperarSenha = () => (
  <div className={styles.teste}>

    <div className={styles.recuperar}>
      <h1>Recuperar Senha</h1>
    </div>
    
    <form method="post" className={styles.espaco}>
      <div>
        <label for="email" id="NomeEmail"className={styles.NomeEmail}>Email de recuperção:</label><br/>
        <input type="text" id="email" placeholder="example@email.com" className={styles.email}/>

      </div>
  </form>

  <div className={styles.botoes}>
     <button className={styles.cancelar}>Cancelar</button>
      <button className={styles.enviar}>Enviar</button>
  </div>
  </div>
);

export default RecuperarSenha;
