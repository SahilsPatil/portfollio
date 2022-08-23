import React,{useState,useEffect} from 'react'

export default function ColrosLoader() {
    const [color, setcolor] = useState("")
    useEffect(() => {
        setcolor(JSON.parse(localStorage.getItem("colors")))
    }, [])
    return color
}
