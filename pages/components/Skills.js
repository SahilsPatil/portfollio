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
                <div className={styles.skills_skill_title}>React/Next JS</div>
                <div className={styles.skills_skill_power}>
                    <div className={styles.skills_skill_power_percent} style={{width:"70%",backgroundColor:skills.themeColor}}>70%</div>
                </div>
            </div>
            <div className={styles.skills_skill}>
                <div className={styles.skills_skill_title}>PHP</div>
                <div className={styles.skills_skill_power}>
                    <div className={styles.skills_skill_power_percent} style={{ width: "85%", background: skills.themeColor }}>85%</div>
                </div>
            </div>
            <div className={styles.skills_skill}>
                <div className={styles.skills_skill_title}>Python</div>
                <div className={styles.skills_skill_power}>
                    <div className={styles.skills_skill_power_percent} style={{ width: "85%", background: skills.themeColor }}>85%</div>
                </div>
            </div>
            <div className={styles.skills_skill}>
                <div className={styles.skills_skill_title}>Java</div>
                <div className={styles.skills_skill_power}>
                    <div className={styles.skills_skill_power_percent} style={{ width: "60%", background: skills.themeColor }}>60%</div>
                </div>
            </div>
            <div className={styles.skills_skill}>
                <div className={styles.skills_skill_title}>Android Development</div>
                <div className={styles.skills_skill_power}>
                    <div className={styles.skills_skill_power_percent} style={{ width: "45%", background: skills.themeColor }}>45%</div>
                </div>
            </div>
            <div className={styles.skills_skill}>
                <div className={styles.skills_skill_title}>React Native</div>
                <div className={styles.skills_skill_power}>
                    <div className={styles.skills_skill_power_percent} style={{ width: "40%", background: skills.themeColor }}>40%</div>
                </div>
            </div>
            <div className={styles.skills_skill}>
                <div className={styles.skills_skill_title}>MySQL/MongoDB</div>
                <div className={styles.skills_skill_power}>
                    <div className={styles.skills_skill_power_percent} style={{ width: "30%", background: skills.themeColor }}>30%</div>
                </div>
            </div>
            <div className={styles.skills_skill}>
                <div className={styles.skills_skill_title}>Linux</div>
                <div className={styles.skills_skill_power}>
                    <div className={styles.skills_skill_power_percent} style={{ width: "80%", background: skills.themeColor }}>80%</div>
                </div>
            </div>
        </div>
    )
}
