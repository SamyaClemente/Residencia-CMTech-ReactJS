import styles from './trocarSenha.module.css'

const TrocarSenha = () => (
  <div className={styles.teste}>

    <div className={styles.alterar}>
      <h1>Alterar Senha</h1>
    </div>
    
    <form method="post" className={styles.espaco}>
      <div>
        <label for="email" id="SenhaAtual"className={styles.SenhaAtual}>Senha Atual:</label><br/>
        <input type="password" id="senha" className={styles.senha}/>

      </div>
      
      <div>
        <label for="email" id="SenhaAtt"className={styles.SenhaAtt}>Nova Senha:</label><br/>
        <input type="password" id="SenhaBox" className={styles.SenhaBox}/>
        </div>
        <div>
        <label for="email" id="SenhaF"className={styles.SenhaF}>Confirme a nova senha:</label><br/>
        <input type="password" id="SenhaBox_2" className={styles.SenhaBox_2}/>
      </div>
  </form>

    <div className={styles.botoes}>
        <button className={styles.cancelar}>Cancelar</button>
        <button className={styles.enviar}>Enviar</button>
    </div>
  </div>
);

export default TrocarSenha;