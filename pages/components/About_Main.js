import Link from 'next/link'
import React from 'react'
import styles from '../../styles/Home.module.css'

export default function About_Main(about_Main) {
    return (
        <div className={styles.about}>
            <div className={styles.about_info}>
                <div className={styles.about_info_title}>I&apos;m a Self taught <span style={{ color: about_Main.themeColor}}>Web Developer</span> based in Maharashtra , India</div>
                <div className={styles.about_info_desc}>I have all skills that needs to every Web Developer from Logic Building to Developing with or without using frameworks.</div>
                <div className={"about_info_btn"}><a href='cv.pdf' download={true}>Download Resume</a></div>
            </div>
            <div className={styles.about_image}></div>
            <style jsx>
                {`
                .about_info_btn {
                    padding: 25px 0px;
                    color: whitesmoke;
                    font-size: 30px;
                    font-family: aileron;
                    font-weight: 400;
                    cursor: pointer;
                    transition: all .4s ease;
                    font-style: normal;
                    margin-top: 40px;
                    opacity: .8;
                  }
                  
                  .about_info_btn:hover {
                    opacity: 1;
                    transform: scale(1.05);
                  }
                @media (max-width: 1000px) {
                    .about_info_btn {
                        font-size: 20px;
                        background: ${about_Main.themeColor};
                        padding: 20px 30px;
                        border-radius: 8px;
                    }
                }
                @media (max-width: 560px) {
                    .about_info_btn {
                        font-size: 18px;
                        background: ${about_Main.themeColor};
                        padding: 10px 15px;
                        border-radius: 4px;
                      }
                }
                `}
            </style>
        </div>
    )
}
