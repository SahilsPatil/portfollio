import React from 'react'
import styles from '../../styles/Home.module.css'

export default function Work_Details(works) {
    console.log(works.links.codeLink);
    return (
            <div className={styles.work_details} style={works.work_details} >
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div className={"works_work_info_btn"} style={{ border: "1.5px solid " + works.works.themeColor }}><a target="_blank" href={works.links.codeLink}>View Code</a></div>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div className={"works_work_info_btn"} style={{ border: "1.5px solid " + works.works.themeColor }}><a target="_blank" href={works.links.projectLink}>View Project</a></div>
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
                    color: ${works.works.themeColor};
                  }
                  .works_work_info_btn:hover{
                    background:${works.works.themeColor};
                    color: whitesmoke;
                  }
                `}
                </style>
            </div>
    )
}