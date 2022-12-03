import styles from "./cadastro.module.css";

const CadastroUsuario = () => (
<div className={styles.principal}>

<div className={styles.titulo}>
    <p>Cadastro de Usuário</p>
</div>

    <forms method="post" className={styles.forms}>
        <div>
        <label for="empresa" id="nome" className={styles.empresa}>Nome</label>
        <input type="textarea" id="empresa" placeholder="Nome" className={styles.boxNome}/>
        <label for="telefone" id="telefone" className={styles.tel}>Telefone</label>
        <input type="number" id="numero" placeholder="+55 (00) 9 0000-0000" className={styles.boxNumero}/>
        <label for="email" id="email" className={styles.email}>E-mail</label>
        <input type="textarea" id="email" placeholder="nome@email.com.br" className={styles.boxEmail}/>
        
        </div>
    </forms>
</div>


)
export default CadastroUsuario;