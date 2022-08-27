import React, { useState } from 'react'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import instagram from '../../images/instagramlogo.png'
import facebook from '../../images/facebooklogo.png'
import linkdin from '../../images/linkedinlogo.png'
import twitter from '../../images/twitterlogo.png'
import mail from '../../images/mail.png'
import call from '../../images/call.png'
import Typewriter from 'typewriter-effect'

export default function Main(main) {
    // const [descTextStyle, setDescTextStyle] = useState({})
    // function descTextLoader() {
    //     setDescTextStyle({
    //     })
    // }


    return (
        <div className={styles.main} >
            <div className={styles.main_social}>
                <div><Image className={styles.main_social_img} src={instagram} width={21} height={21} /></div>
                <div><Image className={styles.main_social_img} src={facebook} width={21} height={21} /></div>
                <div><Image className={styles.main_social_img} src={linkdin} width={21} height={21} /></div>
                <div><Image className={styles.main_social_img} src={twitter} width={21} height={21} /></div>
            </div>
            <div className={styles.main_main}>
                <div className={styles.main_main_title}><span style={{ color: main.color }}>Sahil</span> Patil</div>
                <div className={styles.main_main_desc}>Im a <span style={{ color: main.color }}> <Typewriter
                    onInit={(typewriter) => {

                        // setInterval(() => {
                        typewriter.typeString('Developer.').start().pauseFor(2500).deleteAll().pauseFor(2500).typeString(' Freelancer.').pauseFor(2500).deleteAll().pauseFor(2500).typeString(' Youtuber.').pauseFor(2500).deleteAll().pauseFor(2500)
                        // }, 1000);
                    }}
                    options={{
                        autoStart: true,
                        loop: true,
                        delay: 500,
                        cursorClassName: styles.main_cursor,
                    }}
                /></span></div>
            </div>
            <div className={styles.main_contact}>
                <div><Image className={styles.main_contact_img} src={mail} width={30} height={30} /></div>
                <div><Image className={styles.main_contact_img} src={call} width={30} height={30} /></div>
            </div>
        </div>
    )
}
