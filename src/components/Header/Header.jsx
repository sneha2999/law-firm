import Form from "../Form/Form";
import  "../Form/Form.module.css";
import headerImg from "../../assets/header.png"
import styles from  "../Header/Header.module.css"
import Navbar from "../Navbar/Navbar"
const Header = () => {
  return (
    <header>
      <Navbar/>
      <div className={styles.cover}>
        <div className={styles.header_info}>
          <div className={styles.h1}>
        <h1 className={styles.first_h2}>You don&apos; t have to</h1>
        <h1 className={styles.second_h2}>Fight them Alone.</h1>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.</p>
        <Form/>
        </div>
        <img className={styles.header_img} src={headerImg} alt="header-img"/>
        </div>
    </header>
  )
}

export default Header