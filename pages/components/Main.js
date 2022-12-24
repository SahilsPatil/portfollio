import React, { useState } from 'react'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import instagram from '../../images/instagramlogo.png'
import github from '../../images/githublogo.png'
import upwork from '../../images/upworklogo.png'
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
                <div><a href='https://www.instagram.com/king_sahil_patil/'><Image className={styles.main_social_img} src={instagram} width={21} height={21} /></a></div>
                <div><a href='https://github.com/SahilsPatil'><Image className={styles.main_social_img} src={github} width={21} height={21} /></a></div>
                <div><a href='https://www.linkedin.com/in/sahil-patil-753011246/'><Image className={styles.main_social_img} src={linkdin} width={21} height={21} /></a></div>
                <div><a href='https://www.upwork.com/freelancers/~01647ac2cd3d95d59a'><Image className={styles.main_social_img} src={upwork} width={21} height={21} style={{filter:"invert(1)"}}/></a></div>
            </div>
            <div className={styles.main_main}>
                <div className={styles.main_main_title}><span style={{ color: main.color }}>Sahil</span> Patil</div>
                <div className={styles.main_main_desc}>I&apos;m a <span style={{ color: main.color }}> <Typewriter
                    onInit={(typewriter) => {

                        // setInterval(() => {
                        typewriter.typeString('Developer.').start().pauseFor(2500).deleteAll().pauseFor(2500).typeString(' Freelancer.').pauseFor(2500).deleteAll().pauseFor(2500).typeString(' Youtuber.').pauseFor(2500).deleteAll().pauseFor(2500)
                        // }, 1000);
                    }}
                    options={{
                        autoStart: true,
                        loop: true,
                        cursorClassName: styles.main_cursor,
                    }}
                /></span></div>
            </div>
            <div className={styles.main_contact}>
                <a href='mailto:sahilspatil6@gmail.com'><Image className={styles.main_contact_img} src={mail} width={30} height={30} /></a>
                <a href="tel:9175184390"><Image className={styles.main_contact_img} src={call} width={30} height={30} /></a>
            </div>
        </div>
    )
}
