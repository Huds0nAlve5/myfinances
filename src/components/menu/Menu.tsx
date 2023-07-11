import Link from 'next/link'
import styles from './menu.module.css'
import Image from 'next/image'
import { FaPlusCircle, FaMinusCircle, FaPiggyBank } from 'react-icons/fa';

export default function MenuVertical() {
    return(
        <>
            <nav className={styles.menu}>
                <Link href="/">
                    <div className={styles.imageArea}>
                     
                    </div>
                </Link>
                <ul>
                    <Link href="http://localhost:3000/receitas" className={styles.link}><li><FaPlusCircle className={styles.menu_icon}/>Receitas</li></Link>
                    <Link href="http://localhost:3000/despesas" className={styles.link}><li><FaMinusCircle className={styles.menu_icon}/>Despesas</li></Link>
                    <Link href="http://localhost:3000/contas" className={styles.link}><li><FaPiggyBank className={styles.menu_icon}/>Contas</li></Link>
                </ul>
            </nav>
        </>
    )
};
