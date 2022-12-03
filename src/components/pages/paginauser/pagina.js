import styles from "./pagina.module.css";
import {Link} from 'react-router-dom';
import logo from './Logo-MEXX.png';
import { FaInstagram, FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa' ;

const Pagina = () => (
    <div className={styles.principal}>

    <div className={styles.navbar}>
        <Link to="/" className={styles.url}>
            <img src={logo} className={styles.logo}/>
        </Link>
        <ul className={styles.list}>
            <Link to="/" className={styles.url}>
                <li className={styles.link}>Home</li>
            </Link>
            <Link to="/cadastroOrg" className={styles.url}>
                <li className={styles.link}>Cadastro de Organização</li>
            </Link>
            <Link to="/cadastroCliente" className={styles.url}>
                <li className={styles.link}>Cadastro de cliente</li>
            </Link>
        </ul>
    </div>
    <div className={styles.intro}>
        <p className={styles.textintro}>Bem Vindo à sua plataforma inteligente de atendimento</p>
    </div>

    <div className={styles.quadro}>
    <forms method="post" className={styles.forms}>
    <label for="nome" id="nome" className={styles.nome}>Buscar Usuário</label><br/>
    <input type="text" id="txtBusca" placeholder="Buscar Usuário"/>
        </forms>
    </div>

    <div className={styles.quadro}>
    <forms method="post" className={styles.forms}>
    <label for="nome" id="nome" className={styles.nome}>Buscar Cliente</label><br/>
    <input type="text" id="txtBusca" placeholder="Buscar Cliente"/>
        </forms>
    </div>

    <div className={styles.quadro}>
    <forms method="post" className={styles.forms}>
    <label for="nome" id="nome" className={styles.nome}>Buscar Organização</label><br/>
    <input type="text" id="txtBusca" placeholder="Buscar Organização"/>
        </forms>
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
   
    
    export default Pagina;