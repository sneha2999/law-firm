
import {Grid} from '@mui/material';
import { teams } from '../../data';
import styles from "../Team/Team.module.css"

const Team = () => {
   const teamComp = teams.map(mem => <>
   <Grid  key={mem.name} item xs={12} sm={6} md={4}>
        <div className={styles.member_div}>
            <img src={mem.img} alt="team member pic"/>
            <div className={styles.mem_info}>
                <h4>{mem.name}</h4>
                <p>{mem.sub}</p>
            </div>
        </div>
  </Grid>
  </>)
  return (
    <div className={styles.team_div}>
        <div className={styles.team_sub_div}>
            <h1>Our Team</h1>
            <Grid  container spacing={2}>
            {teamComp}
            </Grid>
        </div>
    </div>
  )
}

export default Team