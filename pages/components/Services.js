import React, { useState, useEffect } from 'react'
import styles from '../../styles/Home.module.css'
import Image from 'next/dist/client/image'
import coding from '../../images/coding.png'

export default function Services(services) {

    return (
        <div className={`${styles.services}`}>
            <div className={"services_service"}>
                <div className={"services_service_image"}><Image className={"services_service_image_img"} src={coding} /></div>
                <div className={styles.services_service_title}>Web Developer</div>
                <div className={styles.services_service_desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eaque totam enim ipsam et .</div>
            </div>
            <div className={"services_service"}>
                <div className={"services_service_image"}><Image className={"services_service_image_img"} src={coding} /></div>
                <div className={styles.services_service_title}>Web Developer</div>
                <div className={styles.services_service_desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eaque totam enim ipsam et .</div>
            </div>
            <div className={"services_service"}>
                <div className={"services_service_image"}><Image className={"services_service_image_img"} src={coding} /></div>
                <div className={styles.services_service_title}>Web Developer</div>
                <div className={styles.services_service_desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eaque totam enim ipsam et .</div>
            </div>
            <style jsx>
                {`
                .services_service{
                    height: 400px;
                    width:30%;
                    min-width:250px;
                    max-width:600px;
                    margin: 1.5%;
                    padding: 10px;
                    background-color: #191919;
                    display: inline-block;
                    box-shadow: 0px 0px 25px rgb(0 0 0 / 5%);
                    /* position: relative; */
                    text-align: center;
                    border-radius: 10px;
                    overflow: hidden;
                    animation: opacity 1.4s ease;
                    font-family: poppins;
                    color: whitesmoke;
                    display: flex;
                    flex-direction:column;
                    justify-content: center;
                    align-items: center;
                }

                .services_service:hover .services_service_image {
                    box-shadow: 0px 0px 0px 400px ${services.themeColor};
                }

                .services_service_image{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    /* position: relative; */
                    margin: 20px;
                    border-radius: 30%;
                    padding: 10px;
                    border: 0px solid ${services.themeColor};
                    background: ${services.themeColor};
                    box-shadow: 0px 0px 0px 0px ${services.themeColor};
                    transition: all .8s ease;
                    min-width:100px;
                    min-height:100px;
                    width:8vw;
                    height:8vw;
                    z-index: 0;
                    pointer-events: none;
                }
                @media (max-width: 1000px){
                    .services_service{
                        width:40%;
                    }
                }
                @media (max-width: 560px){
                    .services_service{
                        width:90%;
                        min-width:200px;
                    }
                }
                
                `}
            </style>
        </div>

    )
}
