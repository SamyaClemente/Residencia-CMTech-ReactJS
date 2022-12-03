import styles from "./rec.module.css";
import {Link} from 'react-router-dom';
import logo from './Logo-MEXX.png';
import { FaInstagram, FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa' ;

const RecSenha = () => (
    <div className={styles.principal}>

    <div className={styles.navbar}>
        <Link to="/" className={styles.url}>
            <img src={logo} className={styles.logo}/>
        </Link>
        <ul className={styles.list}>
            <Link to="/" className={styles.url}>
                <li className={styles.link}>Home</li>
            </Link>
            <Link to="/sobre" className={styles.url}>
                <li className={styles.link}>Sobre</li>
            </Link>
            <Link to="/login" className={styles.url}>
                <li className={styles.link}>Login</li>
            </Link>
        </ul>
    </div>
    <div className={styles.imgnlogin}>
    <div className={styles.login}>
    <p className={styles.hometext}>Recuperar Senha</p>
    <forms method="post" className={styles.forms}>
        <div>
        <label for="empresa" id="empresa" className={styles.email}>Informe seu e-mail:</label>
        <input type="textarea" id="recemail" placeholder="Digite seu e-mail" className={styles.boxEmail}/><br/>
        </div>
    </forms>
<div className={styles.botoes}>
      <button type="submit" className={styles.entrar}>Enviar</button>
      <Link to="/teste"><button type="submit" className={styles.cancelar}>Cancelar</button></Link>
</div>
</div>
</div>

    <div className={styles.footer}>
        <div className={styles.suporte}>
            <p className={styles.contatotitle}>Contato</p>
            <p className={styles.contatonum}>(81) 3194-3000</p>
            <p className={styles.contatomail}>contato@cmtech.com.br</p>
        </div> 

       
        
        <div className={styles.suporte2}>
            <p className={styles.help}>Help Mexx</p>
            <p className={styles.termos}>Termos de Uso</p>
        </div>
        
        <div className={styles.redes}>
            <p className={styles.sites}>Visite nossas redes:</p>
            <FaFacebook className={styles.icons}/>
            <FaGoogle className={styles.icons}/>
            <FaGithub className={styles.icons}/>
            <FaInstagram className={styles.icons}/>
        </div>
       
        
    </div>
    </div>
    
    
    )
   
    
    export default RecSenha;