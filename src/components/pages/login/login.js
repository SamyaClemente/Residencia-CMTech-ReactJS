import styles from "./login.module.css";
import logo from "./CMTECH.png"
import {Link} from 'react-router-dom'

const Login = () => (
<div className={styles.principal}>

    <div className={styles.leftIcon}>
    <img src={logo} className={styles.logo}/>
    </div>
    
    <div className={styles.quadro}>
    <p className={styles.user}>Login</p>
    <forms method="post" className={styles.forms}>
        <div>
        <label for="email" id="email" className={styles.email}>E-mail</label><br/>
        <input type="textarea" id="emailID" placeholder="nome@email.com.br" className={styles.boxEmail}/><br/>
        <label for="empresa" id="empresa" className={styles.senha}>Empresa</label><br/>
        <input type="password" id="senha" placeholder="Digite sua senha" className={styles.boxSenha}/><br/>
        </div>
    </forms>
<div className={styles.botoes}>
      <button type="submit" className={styles.entrar}>Entrar</button>
      <Link to="/recuperar-senha"><button type="submit" className={styles.recuperar_senha}>Esqueceu sua senha?</button></Link>
</div>
</div>


</div>

)
export default Login;
