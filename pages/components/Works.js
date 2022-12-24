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
        "codeLink": "https://github.com/SahilsPatil/Tic-Tac-Toe.git",
        "projectLink": "https://github.com/SahilsPatil/Tic-Tac-Toe.git"

    },
    {
        "id": 2,
        "img_name": image1,
        "name": "Portfollio Website",
        "Desc": "Portfollio website made in Next Js with a simple UI & best effects of animations and transitions. This websites shows the info about developer and projects made by him.",
        "codeLink": "https://github.com/SahilsPatil/portfollio.git",
        "projectLink": "https://my-portfolio-in-nextjs.netlify.app"
    },
    {
        "id": 3,
        "img_name": image2,
        "name": "Figma Converted",
        "Desc": "This webiste is created from figma design with pixel perfect combination made in Html & CSS only. This is only one page webiste to show the CSS skills.",
        "codeLink": "https://github.com/SahilsPatil/Managing-Freelance-Payment",
        "projectLink": "https://sahilspatil.github.io/Managing-Freelance-Payment/"
    },
    {
        "id": 4,
        "img_name": image3,
        "name": "ToDo APK",
        "Desc": "Simple ToDo app made in React Native. This app adds the todo tasks into the list.",
        "codeLink": "https://github.com/SahilsPatil/Todo-App-UI",
        "projectLink": "https://github.com/SahilsPatil/Todo-App-UI"
    },
    {
        "id": 5,
        "img_name": image4,
        "name": "AudioPhilla Ecommerce",
        "Desc": "This is an very Advance Ecommerce Webiste with very high level features made HTML,CSS and Javascript only. This website provides a features like Blind mode & HandsFree Mode , in which blind user can handle this website.",
        "codeLink": "https://github.com/SahilsPatil/Advance-AudioPhile-ECommerce-Website-With-Blind-Mode.git",
        "projectLink": "https://audiophile-shop-for-blind-people.netlify.app"
    },
    {
        "id": 6,
        "img_name": image21,
        "name": "Ayesha Paper Products",
        "Desc": "This website is made for client in React JS. This is only frondend website with multiple pages like about, gallery, contact, different category, sub-category pages.",
        "codeLink": "https://github.com/SahilsPatil/Ayesha-International-React-js-Project-for-Client-.git",
        "projectLink": "https://ayesha-international-client-project.netlify.app/"
    },
    {
        "id": 7,
        "img_name": image22,
        "name": "NewsToday",
        "Desc": "NewsToady is an webapp made in React Js using news API. This WebApp Fetches latest news with multiple menus like Sports, Politics, Weather,etc. This is also responsive for all devices.",
        "codeLink": "https://github.com/SahilsPatil/News-Web-App-in-React.js.git",
        "projectLink": "https://github.com/SahilsPatil/News-Web-App-in-React.js.git"
    },
    {
        "id": 8,
        "img_name": image8,
        "name": "TNotes",
        "Desc": "Advance Single page Notes Taking Webapp made in Html,Css and Javascript only. In which web add notes with title and description.",
        "codeLink": "https://github.com/SahilsPatil/Advance-Notes-taking-Webapp.git",
        "projectLink": "https://sahilspatil.github.io/Advance-Notes-taking-Webapp/"
    },
    {
        "id": 9,
        "img_name": image9,
        "name": "Login, SignUp, Reset",
        "Desc": "Dynamic single page Login page made in Html,Css,Javscript. This is Dynamic webpage and by click on Signup or Reset , this panels loads on same page",
        "codeLink": "https://github.com/SahilsPatil/Login-Sign-up-Reset-Single-Page-Website-.git",
        "projectLink": "https://sahilspatil.github.io/Login-Sign-up-Reset-Single-Page-Website-/"
    },
    {
        "id": 10,
        "img_name": image5,
        "name": "Rock Paper Scissor",
        "Desc": "This is a simple Rock Paper Scissor Web Game, which we played with hand in childhood. ",
        "codeLink": "https://github.com/SahilsPatil/Rock-Paper-Scissor-Web-Game.git",
        "projectLink": "https://rock-paper-scissor-web-game-frontendentor-challange.netlify.app/"
    },
    {
        "id": 11,
        "img_name": image6,
        "name": "Tip Calculator",
        "Desc": "Simple Tip calculator app with dyanamic functionality. All calculation & changes appears on changing any number.",
        "codeLink": "https://github.com/SahilsPatil/Tip-Calculator-Web-App.git",
        "projectLink": "https://sahilspatil.github.io/Tip-Calculator-Web-App/"
    },
    {
        "id": 12,
        "img_name": image7,
        "name": "Shortly",
        "Desc": "Shortly is an URL shortening site which works on external API. We can short any url using this website.",
        "codeLink": "https://github.com/SahilsPatil/URL-Shortening-Website.git",
        "projectLink": "https://url-shortening-website-frontendmentor-challange.netlify.app/"
    },
    {
        "id": 13,
        "img_name": image10,
        "name": "Personal Portfollio",
        "Desc": "This is a freeCodeCamp challange to create Personal Portfollio as similiar to Design given by freeCodeCamp",
        "codeLink": "https://github.com/SahilsPatil/freeCodeCamp-Responsive-Design-Projects.git",
        "projectLink": "https://sahilspatil.github.io/freeCodeCamp-Responsive-Design-Projects/Personal%20Portfolio/index.html"
    },
    {
        "id": 14,
        "img_name": image11,
        "name": "Product Landing Page",
        "Desc": "This is also freeCodeCamp Challange to design Product Landing Page",
        "codeLink": "https://github.com/SahilsPatil/freeCodeCamp-Responsive-Design-Projects.git",
        "projectLink": "https://sahilspatil.github.io/freeCodeCamp-Responsive-Design-Projects/Product%20Landing%20Page/index.html"
    },
    {
        "id": 15,
        "img_name": image12,
        "name": "Survey Form",
        "Desc": "This is also Same as above challange of freeCodeCamp to design Survey form with multiple inputs",
        "codeLink": "https://github.com/SahilsPatil/freeCodeCamp-Responsive-Design-Projects.git",
        "projectLink": "https://sahilspatil.github.io/freeCodeCamp-Responsive-Design-Projects/Survey%20Form/index.html"
    },
    {
        "id": 16,
        "img_name": image13,
        "name": "Technical Documentation Page",
        "Desc": "This is an Technical Documentation Page which is also challange of freeCodeCamp",
        "codeLink": "https://github.com/SahilsPatil/freeCodeCamp-Responsive-Design-Projects.git",
        "projectLink": "https://sahilspatil.github.io/freeCodeCamp-Responsive-Design-Projects/Technical%20Documentation%20Page/index.html"
    },
    {
        "id": 17,
        "img_name": image14,
        "name": "Tribute Page",
        "Desc": "This is a simple & first freeCodeCamp challange to create Tribute Page",
        "codeLink": "https://github.com/SahilsPatil/freeCodeCamp-Responsive-Design-Projects.git",
        "projectLink": "https://sahilspatil.github.io/freeCodeCamp-Responsive-Design-Projects/tribute/index.html"
    },
    {
        "id": 18,
        "img_name": image15,
        "name": "Google Drive",
        "Desc": "This is a web google drive for mobile which is clone of android google drive apk in web version",
        "codeLink": "https://github.com/SahilsPatil/Google-Drive-Front-end-Clone.git",
        "projectLink": "https://sahilspatil.github.io/Google-Drive-Front-end-Clone/"
    },
    {
        "id": 19,
        "img_name": image17,
        "name": "Whatsapp Clone",
        "Desc": "Mobile whatsapp clone using html,css,javascript. Simple web version of mobile whatsapp",
        "codeLink": "https://github.com/SahilsPatil/Whatsapp-Front-end-Clone.git",
        "projectLink": "https://sahilspatil.github.io/Whatsapp-Front-end-Clone/"
    },
    {
        "id": 20,
        "img_name": image16,
        "name": "Instagram Login",
        "Desc": "This is the clone of Instagram Login page. This is fully responsive for mobile & all devices",
        "codeLink": "https://github.com/SahilsPatil/Instagram-Login-Page-Clone.git",
        "projectLink": "https://sahilspatil.github.io/Instagram-Login-Page-Clone//"
    },
    {
        "id": 21,
        "img_name": image18,
        "name": "Library",
        "Desc": "Simple Library management web application using html,css & js",
        "codeLink": "https://github.com/SahilsPatil/Library-Management-Web-App",
        "projectLink": "https://sahilspatil.github.io/Library-Management-Web-App/"
    },
    {
        "id": 22,
        "img_name": image19,
        "name": "Password Generator",
        "Desc": "Simple password generator web app that generates random password everytime, we can also change the background color of it.",
        "codeLink": "https://github.com/SahilsPatil/Random-Password-Generator-with-Background-Changing-Feature",
        "projectLink": "https://random-password-generator-with-background-changing.netlify.app/"
    },
    {
        "id": 23,
        "img_name": image20,
        "name": "Clock",
        "Desc": "Its a simple & basic project of clock, that's works like real analog clock.",
        "codeLink": "https://github.com/SahilsPatil/Clock",
        "projectLink": "https://sahilspatil.github.io/Clock/"
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
            <Work_Details works={works.themeColor} work_details={work_details} links1={links.codeLink} links2={links.projectLink}/>
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