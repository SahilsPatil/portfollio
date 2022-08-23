import React, { useState } from 'react'
import styles from '../../styles/Home.module.css'
import Header from './Header'
import Link from 'next/link'

export default function Menu(menu) {
    const [menuBackText, setmenuBackText] = useState("")
    const [menuBackTextStyle, setMenuBackTextStyle] = useState({})
    const showBack = (text) => {
        setmenuBackText(text)
        setMenuBackTextStyle(
            {
                    letterSpacing: "10px",
                    transition: "all .6s ease",
                    opacity: "1",
                    'zIndex': "1"
            }
        )
    }
    const hideBack = () => {
        setMenuBackTextStyle(
            {
                    
            }
        )
    }

    return (
        <div>
            <div className={!menu.menuOpen ? styles.menu : styles.menu_open}>
                <Header menuOpen={menu.menuOpen} openMenu={menu.openMenu} />
                <div className={styles.menu_menus}>
                    <><Link href={'/'}><a onMouseLeave={hideBack} onMouseEnter={() => showBack("HOME")} className={styles.menu_menus_link}>HOME</a></Link></>
                    <><Link href={'About'}><a onMouseLeave={hideBack} onMouseEnter={() => showBack("ABOUT")} className={styles.menu_menus_link}>ABOUT</a></Link></>
                    <><Link href={'/'}><a onMouseLeave={hideBack} onMouseEnter={() => showBack("BLOG")} className={styles.menu_menus_link}>BLOG</a></Link></>
                    <><Link href={'PortFolio'}><a onMouseLeave={hideBack} onMouseEnter={() => showBack("PORTFOLIO")} className={styles.menu_menus_link}>PORTFOLIO</a></Link></>
                    <><Link href={'Contact'}><a onMouseLeave={hideBack} onMouseEnter={() => showBack("CONTACT")} className={styles.menu_menus_link}>CONTACT</a></Link></>
                </div>
                <div className={styles.menu_back} style={menuBackTextStyle }>{menuBackText}</div>
            </div>
        </div>
    )
}
