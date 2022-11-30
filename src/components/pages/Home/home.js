import styles from "./home.module.css";
import {Link} from 'react-router-dom';
import   icon from './visual.jpg';
const Home = () => (
    <div className={styles.principal}>

    <div className={styles.visual}>
    <img src={icon} className={styles.icon}/>
    </div>

    <div className={styles.navbar}>
    <nav className={styles.navlist}>
        <ul className={styles.list}>
            <Link to="/home"><li>HOME</li></Link>
            <Link to="/sobre"><li>SOBRE</li></Link>
            <Link to="/login"><li>LOGIN</li></Link>
        </ul>
    </nav>
    </div>
    <div className={styles.intro}>
        <p className={styles.titulo}>SERVIÇO DE SUPORTE</p>
    </div>
    </div>
    )
    export default Home;