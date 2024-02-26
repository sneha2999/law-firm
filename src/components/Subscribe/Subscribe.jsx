import styles from "../Subscribe/Subscribe.module.css";

const Subscribe = () => {
  return (
    <div className={styles.subscribe_div}>
        <div className={styles.subscribe_content}>
            <h1>Subscribe Our Newsletter</h1>
            <form className={styles.form_subscribe}>
                <input type="text" placeholder="Name"/> 
                <input type="email" placeholder="Email"/> 
                <button>SEND</button> 
            </form>
        </div>
    </div>
  )
}

export default Subscribe