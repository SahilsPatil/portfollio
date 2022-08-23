import React, { useState, useEffect } from 'react'
import styles from '../../styles/Home.module.css'
import Image from 'next/dist/client/image'
import coding from '../../images/coding.png'

export default function Services(services) {

    return (
        <div className={`${styles.services}`}>
            <div className={"services_service"}>
                <div className={"services_service_image"}><Image src={coding} width={120} height={120} /></div>
                <div className={styles.services_service_title}>Web Developer</div>
                <div className={styles.services_service_desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eaque totam enim ipsam et .</div>
            </div>
            <div className={"services_service"}>
                <div className={"services_service_image"}><Image src={coding} width={120} height={120} /></div>
                <div className={styles.services_service_title}>Web Developer</div>
                <div className={styles.services_service_desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eaque totam enim ipsam et .</div>
            </div>
            <div className={"services_service"}>
                <div className={"services_service_image"}><Image src={coding} width={120} height={120} /></div>
                <div className={styles.services_service_title}>Web Developer</div>
                <div className={styles.services_service_desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eaque totam enim ipsam et .</div>
            </div>
            <style jsx>
                {`
                .services_service{
                    height: 400px;
                    width: 28%;
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
                }

                .services_service:hover .services_service_image {
                    box-shadow: 0px 0px 0px 400px ${services.themeColor};
                }

                .services_service_image{
                    display: inline-block;
                    /* position: relative; */
                    margin: 20px;
                    border-radius: 30%;
                    padding: 10px;
                    border: 0px solid ${services.themeColor};
                    background: ${services.themeColor};
                    box-shadow: 0px 0px 0px 0px ${services.themeColor};
                    transition: all .8s ease;
                    width: 120px;
                    height: 120px;
                    z-index: 0;
                    pointer-events: none;
                }
                `}
            </style>
        </div>

    )
}
