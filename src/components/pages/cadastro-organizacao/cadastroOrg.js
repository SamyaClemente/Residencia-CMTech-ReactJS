import styles from "./cadastroOrg.module.css";

const CadastroOrg = () => (
<div className={styles.principal}>

<div className={styles.titulo}>
    <p>Cadastro Organização</p>
</div>

<div className={styles.quadro}>

    <forms method="post" className={styles.forms}>
        <div>
        <label for="email" id="emailID" className={styles.Nome}>Organização</label>
        <input type="textarea" id="emailID" placeholder="Nome da Organizção" className={styles.boxSeg}/>
        <label for="telefone" id="telefoneID" className={styles.tel}>Telefone</label>
        <input type="tel" id="numeoID" placeholder="+55 (00) 9 0000-0000" className={styles.boxNumero}/>
        <label for="segmento" id="seg" className={styles.Seg}>Segmento</label>
        <input type="textarea" id="segID" placeholder="Nome do Segmento" className={styles.boxSeg}/>
        <label for="empresa" id="empresaID" className={styles.empresa}>Empresa</label>
        <input type="textarea" id="empresaID" placeholder="Empresa.SA" className={styles.boxEmpresa}/>
        </div>
    </forms>
    <div className={styles.botoes}>
    
    <button type="submit" className={styles.cancelar}>Cancelar</button>
      
      <button type="submit" className={styles.cadastrar}>Cadastrar</button>
</div>
</div>


</div>

)
export default CadastroOrg;