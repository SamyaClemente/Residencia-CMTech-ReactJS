import styles from "./home.module.css";
import {Link} from 'react-router-dom';
const Home = () => (
    <div className={styles.principal}>

    <div className={styles.navbar}>
        <ul className={styles.list}>
            <Link to="/home" className={styles.url}>
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
    <div className={styles.intro}>
    </div>
    </div>
    
    )
   
      

    export default Home;