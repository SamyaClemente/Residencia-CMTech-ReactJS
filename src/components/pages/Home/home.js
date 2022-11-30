import styles from "./home.module.css";
import {Link} from 'react-router-dom';
const Home = () => (
    <div className={styles.principal}>

    <div className={styles.navbar}>
        <ul className={styles.list}>
            <Link to="/home"><li className={styles.link}>HOME</li></Link>
            <Link to="/sobre"><li className={styles.link}>SOBRE</li></Link>
            <Link to="/login"><li className={styles.link}>LOGIN</li></Link>
        </ul>
    </div>
    <div className={styles.intro}>
    </div>
    </div>
    )
    export default Home;