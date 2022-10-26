import styles from "./cadastro.module.css";
import Link from "react-router-dom";

const CadastroCliente = () => (
<div className={styles.principal}>

<div className={styles.titulo}>
    <img src="icone-perfil.png"/>
    <p>Cadastro de Cliente</p>
</div>

<div className={styles.quadro}>

    <forms method="post" className={styles.forms}>
        <div>
        <label for="telefone" id="telefone" className={styles.tel}>Telefone</label>
        <input type="number" id="numero" placeholder="+55 (00) 9 0000-0000" className={styles.boxNumero}/>
        <label for="email" id="email" className={styles.email}>Telefone</label>
        <input type="textarea" id="email" placeholder="nome@email.com.br" className={styles.boxEmail}/>
        <label for="empresa" id="empresa" className={styles.empresa}>Telefone</label>
        <input type="textarea" id="empresa" placeholder="Empresa.SA" className={styles.boxEmpresa}/>
        </div>
    </forms>
</div>


</div>

)
export default CadastroCliente;