import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import styles from "../FAQ/FAQ.module.css"

const FAQ = () => {
  return (
    <div className={styles.faq_container}>
      <div className={styles.sub_container}>
        <div className={styles.FAQ_heading}>
          <h1>FAQ</h1>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
        </div>
        <div className={styles.accordion}>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon 
            sx={{height: "20px", width:"20px", borderRadius:"100%", backgroundColor: "#E3B748"}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{opacity: "1"}}>Do I need a personal injury report?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Amet minim mollit non deserunt ullamco est sit
          aliqua dolor do amet sint. Velit officia consequatduis
          enim velit mollit Exer. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon 
            sx={{height: "20px", width:"20px", borderRadius:"100%", backgroundColor: "#E3B748"}} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{opacity: "1"}}>What should I do right after car accidect</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Amet minim mollit non deserunt ullamco est sit
          aliqua dolor do amet sint. Velit officia consequatduis
          enim velit mollit Exer. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  
            sx={{height: "20px", width:"20px", borderRadius:"100%", backgroundColor: "#E3B748"}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{opacity: "1"}}>What should I do right after car accidect?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Amet minim mollit non deserunt ullamco est sit
          aliqua dolor do amet sint. Velit officia consequatduis
          enim velit mollit Exer. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  
            sx={{height: "20px", width:"20px", borderRadius:"100%", backgroundColor: "#E3B748"}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{opacity: "1"}}>How much is my case worth?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Amet minim mollit non deserunt ullamco est sit
          aliqua dolor do amet sint. Velit officia consequatduis
          enim velit mollit Exer. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer
          </Typography>
        </AccordionDetails>
      </Accordion>
        </div>
      </div>
        
    </div>
  )
}

export default FAQ