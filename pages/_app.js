import { useEffect } from 'react'
import '../styles/globals.css'

function MyApp({ Component, paeProps }) {
  useEffect(() => {
    window.addEventListener('load', () => {
      let colors = localStorage.getItem('colors');
      if (colors == null) {
        localStorage.setItem("colors", JSON.stringify("#c70039"));
      }
    })
  }, [])

  return <Component {...paeProps} />
}

export default MyApp  
