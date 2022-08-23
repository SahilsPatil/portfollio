import React from 'react'
import styles from '../../styles/Home.module.css'

export default function About_Main(about_Main) {
    return (
        <div className={styles.about}>
            <div className={styles.about_info}>
                <div className={styles.about_info_title}>Im creative <span style={{ color: about_Main.themeColor}}>web developer</span> based in Maharashtra , India</div>
                <div className={styles.about_info_desc}> With 20 years of experience as a professional Web developer, I
                    have acquired the skills and knowledge necessary to make your project a success. I enjoy
                    every step while working.</div>
                <div className={styles.about_info_btn}>Download Resume</div>
            </div>
            <div className={styles.about_image}></div>
        </div>
    )
}
