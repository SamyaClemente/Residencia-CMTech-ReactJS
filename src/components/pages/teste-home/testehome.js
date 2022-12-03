import styles from "./teste.module.css";
import {Link} from 'react-router-dom';
import logo from './Logo-MEXX.png';
import support from './support.png';
import { FaInstagram, FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa' ;

const HomeTest = () => (
    <div className={styles.principal}>

    <div className={styles.navbar}>
        <Link to="/" className={styles.url}>
            <img src={logo} className={styles.logo}/>
        </Link>
        <ul className={styles.list}>
            <Link to="/teste" className={styles.url}>
                <li className={styles.link}>Home</li>
            </Link>
            <Link to="/sobre" className={styles.url}>
                <li className={styles.link}>Sobre</li>
            </Link>
            <Link to="/" className={styles.url}>
                <li className={styles.link}>Login</li>
            </Link>
            <Link to="/cadastroUser" className={styles.url}>
                <li className={styles.link}>Cadastro</li>
            </Link>
        </ul>
    </div>
    <div className={styles.intro}>
        <p className={styles.textintro}>Bem Vindo à sua plataforma inteligente de atendimento</p>
    </div>

    <div className={styles.imgnlogin}>

    <div className={styles.images}>
        <img src={support} className={styles.support}/>
    </div>
    <div className={styles.login}>
    <p className={styles.hometext}>Login</p>
    <forms method="post" className={styles.forms}>
        <div>
        <label for="email" id="email" className={styles.email}>E-mail</label><br/>
        <input type="textarea" id="emailID" placeholder="nome@email.com.br" className={styles.boxEmail}/><br/>
        <label for="empresa" id="empresa" className={styles.senha}>Senha</label><br/>
        <input type="password" id="senha" placeholder="Digite sua senha" className={styles.boxSenha}/><br/>
        </div>
    </forms>
<div className={styles.botoes}>
<Link to="/pagina"><button type="submit" className={styles.entrar}>Entrar</button></Link>
      <Link to="/recsenha"><button type="submit" className={styles.recuperar_senha}>Esqueceu sua senha?</button></Link>
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
   
    
    export default HomeTest;