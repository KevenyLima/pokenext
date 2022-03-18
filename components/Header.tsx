import Link from "next/link"
import styles from "../styles/Header.module.css"
function Header() {
    return (
        <header className={styles.header}>
            <Link href='/'>
                <img src="./images/pokeball.png" alt="pokebola: redonda com cores vermelha e branca e um butão no meio" />
            </Link>

            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/About'>About</Link>
                </li>
            </ul>
        </header>
    )
}
export default Header