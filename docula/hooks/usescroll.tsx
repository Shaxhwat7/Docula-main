import { useState, useEffect } from "react"

export const useScroll = (threshold = 10) => {
    const [scrolled,setscrolled] = useState(false)

    useEffect(()=>{
        const handlescroll = () => {
            if(window.scrollY>threshold){
                setscrolled(true)
            }else{
                setscrolled(false)
            }
        }

        window.addEventListener("scroll",handlescroll);
        return () => {
            window.removeEventListener('scroll',handlescroll)
        }
    },[threshold])

    return scrolled;
}