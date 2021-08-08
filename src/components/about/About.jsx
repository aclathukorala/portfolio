import { useState } from "react";
import React from "./about.scss"

export default function About() {
    const [messege,setMassage] = useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault();
        setMassage(true)
    }
    return (
        <div className="about" id="about">
            <div className="left">
                <img src="assets/vector_grdu1.jpg" alt="" />
            </div>
            <div className="right">
                <h2><b>About.</b></h2>
                <br></br>
                <br></br>
                <h3><b>Personal Details</b></h3>
                <br></br>
                <ul>
                    <li>• Full Name: - Athukoralalage Chamantha Lahiru Athukorala</li>
                    <li>• DOB: -19 April 1996</li>
                    <li>• Nationality: -Sinhala - Srilanka</li>
                    <li>• Civil Stutes: -Single</li>
                </ul>

                <br></br>
                <h3><b>Education Qulification</b></h3>
                <br></br>
                <ul>
                    <li>• Bachelor of Industrial Information Technology</li>
                    <li>(Uva Wellassa University)</li><br></br>
                    <li>• Passed the G.C.E A/L examination in 2015 – Commerce</li>
                    <li>(Veyangoda Bandaranayake Central Collage)</li>
                    <li>Subjects: - Business Studies (A), Accounting (B),Information & Communication Technology (C)</li><br></br>
                    <li>• Passed the G.C.E O/L examination in 2012</li>
                    <li>(Dangalla Darmaraja Maha Vidayalaya)</li>
                    <li>Passed with 2A’s,5B’s,1C and 1S</li><br></br>
                </ul>

                <br></br>
                <h3><b>Other Qualification</b></h3>
                <br></br>
                <ul>
                    <li>• Completed Diploma in English - Brilliant Way English Academy</li><br></br>
                    <li>• Passed the Daham Pasal (Dhamma Schools) Final Certificate Examination</li><br></br>
                    <li>• Successfully Completed a Certificate Basic Computer Course with Internet & Email in Ministry of Technology and Research</li><br></br>
                    <li>• Followed Online Courses- The Fundamentals of Digital Marketing (Google Digital Garage - 2020), HTML Fundamentals Course, CSS Fundamentals Course, JavaScript Tutorial Course, PHP Tutorial Course, SQL Fundamentals Course (SoloLearn - 2020)</li><br></br>
                </ul>



                {/* <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {messege && <span>Thanks,I'll reply ASAP :)</span>}
                </form> */}
            </div>
        </div>
    )
}
