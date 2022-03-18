import Link from "next/link"
import styles from "../styles/Header.module.css"
import Image from "next/image"
function Header() {
    return (
        <header className={styles.header}>
            <Link href='/'>
                <Image src="/images/pokeball.png"
                    width="50"
                    height="50"
                    alt="PokeNext" />
            </Link>

            <ul>
                <li>
                    <Link href='/'><a>Home</a></Link>
                </li>
                <li>
                    <Link href='/About'><a>About</a></Link>
                </li>
            </ul>
        </header>
    )
}
export default Header