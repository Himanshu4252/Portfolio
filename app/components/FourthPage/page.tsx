import React from 'react'
import style from './style.module.css'
const Fourthpage = () => {
  return (<div className={style.forthWrapper}>
    <div className={style.topText}>My Skills</div>
    <div className={style.skillSection}>
        <div className={style.skill}>NextJs</div>
        <div className={style.skill}>ReactJs</div>
        <div className={style.skill}>JavaScript</div>
        <div className={style.skill}>TypeScript</div>
        <div className={style.skill}>C</div>
        <div className={style.skill}>C++</div>
        <div className={style.skill}>Git/GitHUB</div>
        <div className={style.skill}>HTML</div>
        <div className={style.skill}>CSS</div>
        <div className={style.skill}>Data structures and Algorithms</div>
        <div className={style.skill}>BootStrap</div>
        <div className={style.skill}>C#</div>
    </div>
  </div>
  )
}

export default Fourthpage