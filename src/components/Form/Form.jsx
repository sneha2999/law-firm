import styles from  "../Form/Form.module.css"
const Form = () => {
  return (
    <form className={styles.header_form}>
    <input className={styles.Input_text} type="text" placeholder="Enter your email address"/>
    <button className={styles.header_form_btn}>Let&apos;s Talk</button>
</form>
  )
}

export default Form