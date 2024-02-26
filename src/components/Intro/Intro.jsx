import styles from  "../Intro/Intro.module.css"

const Intro = () => {
  return (
    <div className={styles.intro}>
        <h1>Let&apos; us Introduce <br/>
        <span className={styles.span_h1}>Ourself</span>
        </h1>
        <div className={styles.line}></div>
        <div className={styles.intro_info}>
            <h3>Criminal Lawyer</h3>
            <p>Amet minim mollit non deserunt ullamco est
                sit aliqua dolor do amet sint. Velit officia consequatduis
                enim velit mollit Exercitation.
            </p>
        </div>
    </div>
  )
}

export default Intro