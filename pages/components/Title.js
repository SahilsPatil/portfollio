import React from 'react'
import styles from '../../styles/Home.module.css'
import ColrosLoader from './ColrosLoader';

export default function Title(title) {
    return (
        <div className={styles.title}>
            <div className={styles.title_title}><span style={{color:title.themeColor}}>{title.sup_title}</span>{title.title} <span style={{color:title.themeColor}}>{title.sub_title}</span></div>
            <div className={styles.title_desc}> <span style={{color:title.themeColor,opacity:1}}>{title.sup_desc}</span>{title.desc} <span style={{color:title.themeColor}}>{title.sub_desc}</span></div>
        </div>
    )
}
