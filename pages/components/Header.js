import React, { useState } from 'react'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import logo from './../../images/logo.png'



export default function Header(header) {
    const [header_navbar_menu_style, setHeader_navbar_menu_style] = useState(
        {
            header_navbar_menu: {
            },
            header_navbar_menu_span_s: {
                opacity: 0
            },
            header_navbar_menu_span_f: {
                width: "100%",
                transform: "rotate(45deg)"

            },
            header_navbar_menu_span_t: {
                transform: "rotate(-45deg)"
            },
            header_navbar_menu_empty:{

            }
        }
    )
    const abc = ()=>{
        setHeader_navbar_menu_style({
            header_navbar_menu: {
                transform: "rotate(90deg)",
                transition: "0.5s"
            },
            header_navbar_menu_span_s: {
                opacity: 0
            },
            header_navbar_menu_span_f: {
                width: "100%",
                transform: "rotate(45deg)"

            },
            header_navbar_menu_span_t: {
                transform: "rotate(-45deg)"
            },
            header_navbar_menu_empty:{

            }
        })
    }
    const cba = ()=>{
        setHeader_navbar_menu_style({
            header_navbar_menu: {
                transition: "0.5s"
            },
            header_navbar_menu_span_s: {
                opacity: 0
            },
            header_navbar_menu_span_f: {
                width: "100%",
                transform: "rotate(45deg)"

            },
            header_navbar_menu_span_t: {
                transform: "rotate(-45deg)"
            },
            header_navbar_menu_empty:{

            }
        })
    }
    return (
        <div className={styles.header}>
            <div className={styles.header_navbar}>
                <div className={styles.header_navbar_logo}>
                    S{/* <Image className={styles.header_navbar_logo_img} src={logo} width={80} height={80} /> */}
                </div>
                <div onMouseEnter={abc} onMouseLeave={cba} className={styles.header_navbar_menu} style={header.menuOpen?header_navbar_menu_style.header_navbar_menu:header_navbar_menu_style.header_navbar_menu_empty} onClick={header.openMenu}>
                    <div className={styles.header_navbar_menu_span} style={header.menuOpen?header_navbar_menu_style.header_navbar_menu_span_f:header_navbar_menu_style.header_navbar_menu_empty}></div>
                    <div className={styles.header_navbar_menu_span} style={header.menuOpen?header_navbar_menu_style.header_navbar_menu_span_s:header_navbar_menu_style.header_navbar_menu_empty}></div>
                    <div className={styles.header_navbar_menu_span} style={header.menuOpen?header_navbar_menu_style.header_navbar_menu_span_t:header_navbar_menu_style.header_navbar_menu_empty}></div>
                </div>
            </div>
        </div>
    )
}
