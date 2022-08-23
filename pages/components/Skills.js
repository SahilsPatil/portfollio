import React, { useState, useEffect } from 'react'
import styles from '../../styles/Home.module.css'
import Image from 'next/dist/client/image'
import coding from '../../images/coding.png'

export default function Skills(skills) {
    

    // skillsLoader()

    return (
        <div className={styles.skills}>
            <div className={styles.skills_skill}>
                <div className={styles.skills_skill_title}>Html/Css</div>
                <div className={styles.skills_skill_power}>
                    <div className={styles.skills_skill_power_percent} style={{width:"95%",backgroundColor:skills.themeColor}}>95%</div>
                </div>
            </div>
            <div className={styles.skills_skill}>
                <div className={styles.skills_skill_title}>Javscript</div>
                <div className={styles.skills_skill_power}>
                    <div className={styles.skills_skill_power_percent} style={{width:"90%",backgroundColor:skills.themeColor}}>90%</div>
                </div>
            </div>
            <div className={styles.skills_skill}>
                <div className={styles.skills_skill_title}>PHP</div>
                <div className={styles.skills_skill_power}>
                    <div className={styles.skills_skill_power_percent} style={{width:"85%",backgroundColor:skills.themeColor}}>85%</div>
                </div>
            </div>
            <div className={styles.skills_skill}>
                <div className={styles.skills_skill_title}>Python</div>
                <div className={styles.skills_skill_power}>
                    <div className={styles.skills_skill_power_percent} style={{ width: "75%", background: skills.themeColor }}>75%</div>
                </div>
            </div>
        </div>
    )
}
