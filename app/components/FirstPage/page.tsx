import React from 'react'
import Profile from './ProfileDiv/page'
import Description from './Description/page'
import style from "./style.module.css"

const FirstPage = () => {
  return (<div className={style.FirstPage}>
  <div className={style.firstPageContainers}>
    < Profile />
  </div>
  <div className={style.firstPageContainers}>
    < Description />
  </div>
  </div>
  )
}

export default FirstPage