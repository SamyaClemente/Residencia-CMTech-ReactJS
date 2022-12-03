import styles from "./cadastroCliente.module.css";
import logo from "./Logo-MEXX.png"
import {Link} from 'react-router-dom';

const CadastroCliente = () => (
<div className={styles.principal}>

    <div className={styles.leftIcon}>
    <img src={logo} className={styles.logo}/>
    </div>
    
    <div className={styles.quadro}>
    <p className={styles.user}>Cadastro de Cliente</p>
    <forms method="post" className={styles.forms}>
        <div>
        <label for="nome" id="nome" className={styles.nome}>Nome</label><br/>
        <input type="textarea" id="nomeID" placeholder="Nome do Usuário" className={styles.boxNome}/><br/>
        <label for="email" id="email" className={styles.email}>E-mail</label><br/>
        <input type="textarea" id="emailID" placeholder="nome@email.com.br" className={styles.boxEmail}/><br/>
        <label for="empresa" id="empresa" className={styles.empresa}>Empresa</label><br/>
        <input type="textarea" id="empresaID" placeholder="Empresa.SA" className={styles.boxEmpresa}/><br/>
        <label for="cargo" id="cargo" className={styles.cargo}>Cargo</label>
        <input type="textarea" id="cargoID" className={styles.boxCargo}/>
        <label for="setor" id="setor" className={styles.setor}>Setor</label>
        <select id="setorID" name="setor" className={styles.boxSetor}>
            <option value="Fiscal">Fiscal</option>
            <option value="Contabilidade">Contabilidade</option>
            <option value="T.I">T.I</option>
            <option value="RH">Recursos Humanos</option>
        </select>
        </div>
    </forms>
<div className={styles.botoes}>
      <Link to="/"><button type="submit" className={styles.cancelar}>Cancelar</button></Link>
        <button type="submit" className={styles.salvar}>Salvar</button>
</div>
</div>


</div>

)
export default CadastroCliente;