import Image from 'next/image';
import React, { useEffect, useState } from 'react'

import styles from '../../styles/Home.module.css'
import ColrosLoader from './ColrosLoader';
import image1 from '../../images/p1.svg'
import image2 from '../../images/p2.svg'
import image3 from '../../images/p3.svg'
import image4 from '../../images/p4.svg'
import image5 from '../../images/p5.svg'
import image6 from '../../images/p6.svg'
import image7 from '../../images/p7.svg'
import image8 from '../../images/p8.svg'
import image9 from '../../images/p9.svg'
import image10 from '../../images/p10.svg'
import image11 from '../../images/p11.svg'
import image12 from '../../images/p12.svg'
import image13 from '../../images/p13.svg'
import image14 from '../../images/p14.svg'
import image15 from '../../images/p15.svg'
import image16 from '../../images/p16.svg'
import image17 from '../../images/p17.svg'
import image18 from '../../images/p18.svg'
import image19 from '../../images/p19.svg'
import image20 from '../../images/p20.svg'
import image21 from '../../images/p21.svg'
import image22 from '../../images/p22.svg'
import image23 from '../../images/p23.svg'
import image24 from '../../images/p24.svg'
import Work_Details from './Work_Details';



const projects = [
    {
        "id": 1,
        "img_name": image24,
        "name": "Tic Tac Toe",
        "Desc": "This is the simple Tic Tac Toe game made in React Native. This Game has two mode, first with cpu & second is with human. In Cpu mode single player can play game with AI & in Second mode 2 players can play with each other.",
        "codeLink": "https://google.com",
        "projectLink": "https://instagram.com"

    },
    {
        "id": 2,
        "img_name": image1,
        "name": "Portfollio Website",
        "Desc": "Portfollio website made in Next Js with a simple UI & best effects of animations and transitions. This websites shows the info about developer and projects made by him.",
        "codeLink": "https://2.com",
        "projectLink": "https://22.com"
    },
    {
        "id": 3,
        "img_name": image2,
        "name": "Figma Converted",
        "Desc": "This webiste is created from figma design with pixel perfect combination made in Html & CSS only. This is only one page webiste to show the CSS skills.",
        "codeLink": "https://3.com",
        "projectLink": "https://33.com"
    },
    {
        "id": 4,
        "img_name": image3,
        "name": "ToDo APK",
        "Desc": "Simple ToDo app made in React Native. This app adds the todo tasks into the list.",
        "codeLink": "https://4.com",
        "projectLink": "https://44.com"
    },
    {
        "id": 5,
        "img_name": image4,
        "name": "AudioPhilla Ecommerce",
        "Desc": "This is an very Advance Ecommerce Webiste with very high level features made HTML,CSS and Javascript only. This website provides a features like Blind mode & HandsFree Mode , in which blind user can handle this website.",
        "codeLink": "https://google.com",
        "projectLink": "https://instagram.com"
    },
    {
        "id": 6,
        "img_name": image21,
        "name": "Ayesha Paper Products",
        "Desc": "This website is made for client in React JS. This is only frondend website with multiple pages like about, gallery, contact, different category, sub-category pages.",
        "codeLink": "https://google.com",
        "projectLink": "https://instagram.com"
    },
    {
        "id": 7,
        "img_name": image22,
        "name": "NewsToday",
        "Desc": "NewsToady is an webapp made in React Js using news API. This WebApp Fetches latest news with multiple menus like Sports, Politics, Weather,etc. This is also responsive for all devices.",
        "codeLink": "https://google.com",
        "projectLink": "https://instagram.com"
    },
    {
        "id": 8,
        "img_name": image8,
        "name": "TNotes",
        "Desc": "Advance Single page Notes Taking Webapp made in Html,Css and Javascript only. In which web add notes with title and description.",
        "codeLink": "https://google.com",
        "projectLink": "https://instagram.com"
    },
    {
        "id": 9,
        "img_name": image9,
        "name": "Login, SignUp, Reset",
        "Desc": "Dynamic single page Login page made in Html,Css,Javscript. This is Dynamic webpage and by click on Signup or Reset , this panels loads on same page",
        "codeLink": "https://google.com",
        "projectLink": "https://instagram.com"
    },
    {
        "id": 10,
        "img_name": image5,
        "name": "Website",
        "Desc": "$ 400.00",
        "codeLink": "https://google.com",
        "projectLink": "https://instagram.com"
    },
    {
        "id": 11,
        "img_name": image6,
        "name": "Website",
        "Desc": "$ 400.00",
        "codeLink": "https://google.com",
        "projectLink": "https://instagram.com"
    },
    {
        "id": 12,
        "img_name": image7,
        "name": "Website",
        "Desc": "$ 400.00",
        "codeLink": "https://google.com",
        "projectLink": "https://instagram.com"
    },
    {
        "id": 13,
        "img_name": image10,
        "name": "Website",
        "Desc": "$ 400.00",
        "codeLink": "https://google.com",
        "projectLink": "https://instagram.com"
    },
    {
        "id": 14,
        "img_name": image11,
        "name": "Website",
        "Desc": "$ 400.00",
        "codeLink": "https://google.com",
        "projectLink": "https://instagram.com"
    },
    {
        "id": 15,
        "img_name": image12,
        "name": "Website",
        "Desc": "$ 400.00",
        "codeLink": "https://google.com",
        "projectLink": "https://instagram.com"
    },
    {
        "id": 16,
        "img_name": image13,
        "name": "Website",
        "Desc": "$ 400.00",
        "codeLink": "https://google.com",
        "projectLink": "https://instagram.com"
    },
    {
        "id": 17,
        "img_name": image14,
        "name": "Website",
        "Desc": "$ 400.00",
        "codeLink": "https://google.com",
        "projectLink": "https://instagram.com"
    },
    {
        "id": 18,
        "img_name": image15,
        "name": "Website",
        "Desc": "$ 400.00",
        "codeLink": "https://google.com",
        "projectLink": "https://instagram.com"
    },
    {
        "id": 19,
        "img_name": image17,
        "name": "Website",
        "Desc": "$ 400.00",
        "codeLink": "https://google.com",
        "projectLink": "https://instagram.com"
    },
    {
        "id": 20,
        "img_name": image16,
        "name": "Website",
        "Desc": "$ 400.00",
        "codeLink": "https://google.com",
        "projectLink": "https://instagram.com"
    },
    {
        "id": 21,
        "img_name": image18,
        "name": "Website",
        "Desc": "$ 400.00",
        "codeLink": "https://google.com",
        "projectLink": "https://instagram.com"
    },
    {
        "id": 22,
        "img_name": image19,
        "name": "Website",
        "Desc": "$ 400.00",
        "codeLink": "https://google.com",
        "projectLink": "https://instagram.com"
    },
    {
        "id": 23,
        "img_name": image20,
        "name": "Website",
        "Desc": "$ 400.00",
        "codeLink": "https://google.com",
        "projectLink": "https://instagram.com"
    },
]



export default function Works(works) {
    const [work_details, setwork_details] = useState({ display: "none" });
    const [links, setLinks] = useState({ "codeLink":null, "projectLink" : null});
    function viewProject(id, codeLink, projectLink) {
        console.log(id);
        if (id == -1) {
            setwork_details({ display: "none" })
            setLinks({ "codeLink":null, "projectLink" : null})
        }
        else {
            setwork_details({ display: "flex" })
            setLinks({ "codeLink":codeLink, "projectLink" : projectLink})
        }
    }
    return (
        <div className={styles.works}>
            <div className={styles.work_details_closer} style={work_details} onClick={() => viewProject(-1)}>
            </div>
            <Work_Details works={works} work_details={work_details} links={links}/>
            {showProjects(works, viewProject)}
        </div>
    )
}


function showProjects(works, viewProject) {
    return (
        projects.map((e) => {
            return (
                <div className={styles.works_work} key={e.id}>
                    <div className={styles.works_work_image} style={{ maxHeight: "500px", overflowY: 'hidden' }}>
                        <Image className={styles.works_work_img} src={e.img_name} />
                    </div>
                    <div className={styles.works_work_info}>
                        <div className={styles.works_work_info_title} style={{ color: works.themeColor }}>
                            {e.name}
                        </div>
                        <div className={styles.works_work_info_desc}>
                            {e.Desc}
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <div className={"works_work_info_btn"} style={{ border: "1.5px solid " + works.themeColor }} onClick={() => viewProject(e.id, e.codeLink, e.projectLink)}>View Project</div>
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
        })
    )
}