import styles from "./cadastro_User.module.css";
import icone from "./icone-perfil.png"

const CadastroUsuario = () => (
<div className={styles.principal}>

<div className={styles.titulo}>
    <img src={icone} className={styles.icone}/>
    <p className={styles.cadastro}>Cadastro de Cliente</p>
</div>

<div className={styles.quadro}>

    <forms method="post" className={styles.forms}>
        <div>
        <label for="nome" id="nome" className={styles.nome}>Nome</label>
        <input type="textarea" id="nomeID" placeholder="Nome do Usuário" className={styles.boxNome}/><br/>
        <label for="email" id="email" className={styles.email}>E-mail</label>
        <input type="textarea" id="emailID" placeholder="nome@email.com.br" className={styles.boxEmail}/><br/>
        <label for="empresa" id="empresa" className={styles.empresa}>Empresa</label>
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
      <button type="submit" className={styles.cancelar}>Cancelar</button>
      <button type="submit" className={styles.salvar}>Salvar</button>
</div>
</div>


</div>

)
export default CadastroUsuario;