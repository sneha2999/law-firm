import styles from "../Verticals/Verticals.module.css";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png"
import img3 from "../../assets/img3.png"
import img4 from "../../assets/img4.png"
import img5 from "../../assets/img5.png"
import img6 from "../../assets/img6.png"



const Verticals = () => {
  return (
    <div className={styles.verticals_div}>
        <h1>Area of Practice</h1>
        <div className={styles.img_container}>
            <div className={styles.row}>
            <div className={styles.img_div}>
            <img src={img1} alt="verticals image"/>
            <p>Business Law</p>
            </div>
            <div className={styles.img_div}>
            <img src={img2} alt="verticals image"/>
            <p>Partnership Law</p>
            </div>
            </div>
            <div className={styles.row}>
            <div className={styles.img_div}>
            <img src={img3} alt="verticals image"/>
            <p>Business Law</p>
            </div>
            <div className={styles.img_div}>
            <img src={img4} alt="verticals image"/>
            <p>Partnership Law</p>
            </div>
            </div>
            <div className={styles.row}>
            <div className={styles.img_div}>
            <img src={img5} alt="verticals image"/>
            <p>Business Law</p>
            </div>
            <div className={styles.img_div}>
            <img src={img6} alt="verticals image"/>
            <p>Partnership Law</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Verticals