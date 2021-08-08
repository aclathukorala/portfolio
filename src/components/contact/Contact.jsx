import { useState } from "react";
import React from "./contact.scss"

export default function Contact() {
    const [messege,setMassage] = useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault();
        setMassage(true)
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/cooperation.jpg" alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {messege && <span>Thanks,I'll reply ASAP :)</span>}
                </form>
            </div>
        </div>
    )
}
