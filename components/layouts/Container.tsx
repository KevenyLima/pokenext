import { ReactNode } from "react"
import Footer from "../Footer"
import Header from "../Header"
import styles from "../../styles/Container.module.css"
interface Props {
    children: ReactNode
}
function Container({ children }: Props) {
    return (
        <>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
        </>

    )
}
export default Container