import React from "./testimonials.scss"

export default function Testimonials() {
    const data = [
        {
            id: "1",
            icon:"assets/linkedin.png",
            name: "chamantha Lahiru",
            title:"Linkedin",
            desc: "linkedin",
            src:"https://www.linkedin.com/in/chamantha-lahiru-857a7916a",
            img:"assets/dp/likkedin_dp.jpg",
        },
        {
            id: "2",
            icon:'assets/free-facebook.png',
            name: "Chamantha Lahiru(Chama)",
            title:"Facebook",
            desc: "facebook",
            src: "https://www.facebook.com/chamantha.lahiru",
            img:'assets/dp/facebook_dp.jpg',
            featured: true,
        },
        {
            id: "3",
            icon:'assets/github.png',
            name: "aclathukorala",
            title:"Github",
            desc: "github",
            src:"https://github.com/aclathukorala",
            img:'assets/dp/github_dp.jpg',
        },
        
    ];
    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map((d)=>(
                 <div className={d.featured ? "card featured" : "card"}>
                     <div className="top">
                     <img src="assets/right-arrow.png" className="left" alt="" />
                     <img 
                      className="user"
                     src={d.img} alt="" />
                     <img className="right" src={d.icon} alt="" />
                     </div>
                     <div className="center">
                         {/* {d.desc} */}
                         {d.src}
                     </div>
                     <div className="bottom">
                         <h3>{d.name}</h3>
                         <h4>{d.title}</h4>
                     </div>
                 </div>
                 ))}
            </div>
        </div>
    )
}
