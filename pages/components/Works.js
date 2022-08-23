import Image from 'next/image';
import React from 'react'
import styles from '../../styles/Home.module.css'
import ColrosLoader from './ColrosLoader';
import image1 from '../../images/portfolio-first.jpg'

export default function Works(works) {
    return (
        <div className={styles.works}>
            <div className={styles.works_work}>
                <div className={styles.works_work_image}>
                    <Image className={styles.works_work_img} src={image1} />
                </div>
                <div className={styles.works_work_info}>
                    <div className={styles.works_work_info_title} style={{ color: works.themeColor }}>
                        Website
                    </div>
                    <div className={styles.works_work_info_desc}>
                        Lorem ipsum dolor sit e! Ipsam assumenda ratione nulla voluptatum. Labore, cum, repellendus autem doloribus suscipit architecto aspernatur libero ex sequi magnam reiciendis.
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <div className={"works_work_info_btn"} style={{ border: "1.5px solid " + works.themeColor }}>View Project</div>
                    </div>
                </div>
            </div>
            <div className={styles.works_work}>
                <div className={styles.works_work_image}>
                    <Image className={styles.works_work_img} src={image1} />
                </div>
                <div className={styles.works_work_info}>
                    <div className={styles.works_work_info_title} style={{ color: works.themeColor }}>
                        Website
                    </div>
                    <div className={styles.works_work_info_desc}>
                        Lorem ipsum dolor sit e! Ipsam assumenda ratione nulla voluptatum. Labore, cum, repellendus autem doloribus suscipit architecto aspernatur libero ex sequi magnam reiciendis.
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <div className={"works_work_info_btn"} style={{ border: "1.5px solid " + works.themeColor }}>View Project</div>
                    </div>
                </div>
            </div>
            <div className={styles.works_work}>
                <div className={styles.works_work_image}>
                    <Image className={styles.works_work_img} src={image1} />
                </div>
                <div className={styles.works_work_info}>
                    <div className={styles.works_work_info_title} style={{ color: works.themeColor }}>
                        Website
                    </div>
                    <div className={styles.works_work_info_desc}>
                        Lorem ipsum dolor sit e! Ipsam assumenda ratione nulla voluptatum. Labore, cum, repellendus autem doloribus suscipit architecto aspernatur libero ex sequi magnam reiciendis.
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <div className={"works_work_info_btn"} style={{ border: "1.5px solid " + works.themeColor }}>View Project</div>
                    </div>
                </div>
            </div>

            <style jsx>
                {`
                .works_work_info_btn{
                    margin: auto;
                    font-size: 16px;
                    opacity: .8;
                    font-family: poppins;
                    font-weight: 200;
                    padding: 10px 20px;
                    background: transparent;
                    transition: all .4s ease;
                    outline: none;
                    margin: 20px;
                    cursor: pointer;
                    overflow: hidden;
                    position: relative;
                    transition: all .4s ease;
                    text-align: center;
                    color: ${works.themeColor};
                  }
                  .works_work_info_btn:hover{
                    background:${works.themeColor};
                    color: whitesmoke;
                  }
                `}
            </style>
        </div>
    )
}
