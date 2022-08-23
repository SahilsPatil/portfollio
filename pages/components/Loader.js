import React, { useEffect, useState } from 'react'
import styles from '../../styles/Home.module.css'


export default function Loader(loader) {
    const [loaderStyle, setLoaderStyle] = useState({})
    const [subloaderStyle, setsubLoaderStyle] = useState({})
    useEffect(() => {
        setTimeout(() => {
            setsubLoaderStyle({
                display: "none"
            })
        }, 900);
        setTimeout(() => {
            setLoaderStyle({
                display: "none"
            })
        }, 1500);
    }, [])


    return (
        <>
            <div className={styles.sub_loader} style={subloaderStyle}></div>
            <div className={"loader"} style={loaderStyle}></div>
            <style jsx>
                {`
                .loader {
                    position: fixed;
                    height: 100vh;
                    width: 200%;
                    background-color: ${loader.themeColor};
                    top: 0;
                    z-index: 10;
                    transition: 1s;
                    animation: breakeranimate 2s linear;
                  }
                  @keyframes breakeranimate {
                    0% {
                      transform: translateX(-100%)
                    }
                  
                    50% {
                      transform: translateX(0%)
                    }
                  
                    100% {
                      transform: translateX(100%)
                    }
                  }
                  @-webkit-keyframes breakeranimate {
                    0% {
                      transform: translateX(-100%)
                    }
                  
                    50% {
                      transform: translateX(0%)
                    }
                  
                    100% {
                      transform: translateX(100%)
                    }
                  }
                `}
            </style>
        </>
    )
}
