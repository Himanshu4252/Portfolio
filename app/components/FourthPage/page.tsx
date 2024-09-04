import React from 'react'
import style from './style.module.css'
import {reactLogo, nextLogo, javaScriptLogo, htmlLogo, cssLogo, cLogo, cppLogo, cSharpLogo, bootstrapLogo, dsaLogo, tsLogo, githubLogo} from './photo'
import Image from 'next/image'

const Fourthpage = () => {
  return (<div className={style.forthWrapper}>
    <div className={style.topText}>My Skills</div>
    <div className={style.skillSection}>
        <div className={style.skill}>
          <Image src={nextLogo} alt='nextjs LOGO' className={style.skillLogos} />
          NextJs
        </div>

        <div className={style.skill}>
        <Image src={reactLogo} alt='reactjs logo' className={style.skillLogos} />
        ReactJs
        </div>

        <div className={style.skill}>
        <Image src={javaScriptLogo} alt='java script logo' className={style.skillLogos} />
        JavaScript
        </div>

        <div className={style.skill}>
        <Image src={tsLogo} alt='typescript logo' className={style.skillLogos} />
        TypeScript
        </div>

        <div className={style.skill}>
        <Image src={cLogo} alt='c Logo' className={style.skillLogos} />
        C
        </div>

        <div className={style.skill}>
        <Image src={cppLogo} alt='C++ logo' className={style.skillLogos} />
        C++
        </div>

        <div className={style.skill}>
        <Image src={githubLogo} alt='git hub Logo' className={style.skillLogos} />
        Git/GitHUB
        </div>

        <div className={style.skill}>
        <Image src={htmlLogo} alt='html logo' className={style.skillLogos} />
        HTML
        </div>

        <div className={style.skill}>
        <Image src={cssLogo} alt=' css logo ' className={style.skillLogos} />
        CSS
        </div>

        <div className={style.skill}>
        <Image src={dsaLogo} alt='data structures and algorithms' className={style.skillLogos} />
        Data structures and Algorithms
        </div>

        <div className={style.skill}>
        <Image src={bootstrapLogo} alt='Bootstrap Logo' className={style.skillLogos} />
        BootStrap
        </div>

        <div className={style.skill}>
        <Image src={cSharpLogo} alt='C sharp Logo' className={style.skillLogos} />
        C#
        </div>

    </div>
  </div>
  )
}

export default Fourthpage