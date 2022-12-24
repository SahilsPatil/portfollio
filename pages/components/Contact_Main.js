import Image from 'next/image';
import React from 'react'
import styles from '../../styles/Home.module.css'
import ColrosLoader from './ColrosLoader';
import image1 from '../../images/portfolio-first.jpg'
import image2 from '../../images/icon-name.png'
import image3 from '../../images/icon-location.png'
import image4 from '../../images/icon-phone.png'
import image5 from '../../images/icon-email.png'

export default function Contact_Main(contact) {
    return (
        <div className={styles.contact}>
            <div className={styles.contact_message}>
                <div className={styles.contact_message_title}>
                    Message Me
                </div>
                <form className={styles.contact_message_form} name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
                    <input type="hidden" name="form-name" value="contact" />
                    <input name="name" type={"text"} placeholder='Name' />
                    <input name="email" type={"email"} placeholder='Email' />
                    <input name="subject" type={"text"} placeholder='Suject' />
                    <textarea name="message" placeholder='Message' rows={4} />
                    <input style={{ background: contact.themeColor }} name="submit" type="submit" value={"Submit"} />
                </form>
            </div>
            <div className={styles.contact_info}>
                <div className={styles.contact_info_title}>
                    Contact Info
                </div>
                <div className={styles.contact_info_details}>
                    <div className={styles.contact_info_details_detail}>
                        <div className={styles.contact_info_details_detail_icon}>
                            <Image className={styles.contact_info_details_detail_image} src={image2} width={40} height={40} />
                        </div>
                        <div className={styles.contact_info_details_detail_info}>
                            <div className={styles.contact_info_details_detail_info_name}>Name</div>
                            <div className={styles.contact_info_details_detail_info_desc}>Sahil Patil</div>
                        </div>
                    </div>
                    <div className={styles.contact_info_details_detail}>
                        <div className={styles.contact_info_details_detail_icon}>
                            <Image className={styles.contact_info_details_detail_image} src={image3} width={40} height={40} />
                        </div>
                        <div className={styles.contact_info_details_detail_info}>
                            <div className={styles.contact_info_details_detail_info_name}>Loaction</div>
                            <div className={styles.contact_info_details_detail_info_desc}>Mumbai, India</div>
                        </div>
                    </div>
                    <div className={styles.contact_info_details_detail}>
                        <div className={styles.contact_info_details_detail_icon}>
                            <Image className={styles.contact_info_details_detail_image} src={image4} width={40} height={40} />
                        </div>
                        <div className={styles.contact_info_details_detail_info}>
                            <div className={styles.contact_info_details_detail_info_name}>Call</div>
                            <div className={styles.contact_info_details_detail_info_desc}>+919175184390</div>
                        </div>
                    </div>
                    <div className={styles.contact_info_details_detail}>
                        <div className={styles.contact_info_details_detail_icon}>
                            <Image className={styles.contact_info_details_detail_image} src={image5} width={40} height={40} />
                        </div>
                        <div className={styles.contact_info_details_detail_info}>
                            <div className={styles.contact_info_details_detail_info_name}>Email</div>
                            <div className={styles.contact_info_details_detail_info_desc}>sahilspatil6@gmail.com</div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>
                {`
                
                `}
            </style>
        </div >
    )
}
