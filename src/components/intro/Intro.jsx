import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {

    const textRef = useRef()

    useEffect(()=>{
        init(textRef.current, {
             showCursor: true,
             backDelay: 1500,
             backSpeed: 60,
             
             strings: ['Software Developer', 'Software Designer', 'Mobile Photographer', 'Social Media Analyst'] })
    },[])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/mydp.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Chamantha Lahiru</h1>
                    <h3>👨‍🎓<span ref={textRef}></span></h3>
                </div>
                <a href="#about">
                    <img src="assets/down-arrow.png" alt="" />
                </a>
            </div>
        </div>
    )
}
