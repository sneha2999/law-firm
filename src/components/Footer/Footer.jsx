import styles from "../Footer/Footer.module.css";
import insta from "../../assets/insta.png";
import pint from "../../assets/pint.png";
import fb from "../../assets/fb.png";
import x from "../../assets/x.png";
import logo from "../../assets/logo.svg";




const Footer = () => {
  return (
  <footer>
   <div className={styles.footer_info}>
   <img src={logo} alt="logo"/>
   <ul>
    <li>Home</li>
    <li>Attorneys</li>
    <li>Practice Areas</li>
    <li>About us</li>
   </ul>
   
   <div className={styles.social}>
   <img src={insta} alt="social icon"/>
   <img src={pint} alt="social icon"/>
   <img src={x} alt="social icon"/>
   <img src={fb} alt="social icon"/>
   </div>
   </div>
   <div className={styles.trademark}>
    <p>© 2020 Acme. All right reserved.</p>
    <p>Privacy Policy</p>
    <p>Terms of Services</p>
   </div>
  </footer>
  )
}

export default Footer