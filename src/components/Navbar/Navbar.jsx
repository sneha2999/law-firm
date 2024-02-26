import logo from "../../assets/logo.svg";
import styles from "../Navbar/Navbar.module.css"
const Navbar = () => {
  return (
    <nav>
       <img src={logo} alt="logo"/>
       <ul className= {styles.ulForsmallScreen}>
        <li>Home</li>
        <li>Attorneys</li>
        <li>Practice Areas</li>
        <li>About us</li>
       </ul>
       <button>Contact Now</button>
    </nav>
  )
}

export default Navbar