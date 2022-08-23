import React, { useState } from 'react'
import Image from 'next/dist/client/image'
import Gear from '../../images/gear.png'
import styles from '../../styles/Home.module.css'


export default function Color_Plate(color) {
    const [colorPlateOpen, setColorPlateOpen] = useState(false)
    const [colorPlateStyle, setcolorPlateStyle] = useState({})
    const color_plate_opener = () => {
        if (colorPlateOpen) {
            setcolorPlateStyle({
                right: "-150px",
                transition: "0.5s"
            })
            setColorPlateOpen(false);
        }
        else {
            setcolorPlateStyle({
                right: "0px",
                transition: "0.5s"
            })
            setColorPlateOpen(true);
        }
    }
    
    return (
        <div className={styles.color_plate} style={colorPlateStyle}>
            <div className={styles.color_plate_opener} onClick={color_plate_opener}>
                <Image className={styles.color_plate_opener_img} src={Gear} width={40} height={40} />
            </div>
            <div className={styles.color_plate_chooser}>
                < div className={styles.color_plate_chooser_title}>Custom Colors</div>
                <div className={styles.color_plate_chooser_colors}>
                    <div onClick={()=>color.colorChanger("#c70039")} className={styles.color_plate_chooser_colors_color} style={{ backgroundColor: "#c70039" }}></div>
                    <div onClick={()=>color.colorChanger("#481380")} className={styles.color_plate_chooser_colors_color} style={{ backgroundColor: "#481380" }}></div>
                    <div onClick={()=>color.colorChanger("#00909e")} className={styles.color_plate_chooser_colors_color} style={{ backgroundColor: "#00909e" }}></div>
                    <div onClick={()=>color.colorChanger("#04A777")} className={styles.color_plate_chooser_colors_color} style={{ backgroundColor: "#04A777" }}></div>
                    <div onClick={()=>color.colorChanger("#035aa6")} className={styles.color_plate_chooser_colors_color} style={{ backgroundColor: "#035aa6" }}></div>
                    <div onClick={()=>color.colorChanger("#dd7631")} className={styles.color_plate_chooser_colors_color} style={{ backgroundColor: "#dd7631" }}></div>
                </div>
            </div >
        </div >
    )
}
