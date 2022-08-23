import React, { useEffect, useState } from 'react'
import styles from '../../styles/Home.module.css'


export default function Cursor() {
    const [cursorStyle, setCursorStyle] = useState({})
    const MousePos = () => {
        const [mousePosi, setMousePosi] = useState({ x: null, y: null })
        useEffect(() => {
            const updateMousePos = e => {
                setMousePosi({ x: e.clientX, y: e.clientY })
                let X = e.clientX - 20;
                let Y = e.clientY - 30;
                setCursorStyle({
                    transform: "translate(" + X + "px," + Y + "px)",
                    transition: "scale .9s ease"

                })
            }
            window.addEventListener('mousemove', updateMousePos);
            return () => {
                window.removeEventListener('mousemove', updateMousePos)
            }
        }, [])
    }
    MousePos();


    return (
        <div className={styles.cursor} style={cursorStyle}></div>
    )
}
