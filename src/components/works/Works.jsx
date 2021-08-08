import { useState } from "react";
import "./works.scss"

export default function Works() {
    const [currentSlide,setCurrentSlide] = useState(0)

    const data = [
        {
            id: "1",
            icon:"assets/membership/uwu_net_logo_01.jpg",
            title:"Uva Wellassa University Nature Explorers' Team - UWU NET",
            desc: "Member",
            img:"assets/membership/uwu_net_logo_01.jpg",
        },
        {
            id: "2",
            icon:'assets/membership/uwu_computer_so.png',
            title:"Computer Society Of Uva Wellassa University",
            desc: "Member",
            img:'assets/membership/uwu_computer_so.png',
        },
        {
            id: "3",
            icon:'assets/membership/sumithuru_logo.jpg',
            title:"Sumithuru Youth Club - Dangalla",
            desc: "Member",
            img:'assets/membership/sumithuru_logo.jpg',
        }

    ];

    const handleClick = (way)=>{
         way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) :
         setCurrentSlide(currentSlide<data.length -1 ? currentSlide +1 : 0);
    };
    return (
        <div className="works" id="works">
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
               { 
               data.map((d) => (
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>
                                    {d.desc}
                                </p>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img}/>
                            {/* <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/09/How_to_design_a_logo_with_a_slogan_jpg_GnwvWCuS-700x410.jpg?auto=format&q=60&fit=max&w=930" alt="" /> */}
                        </div>
                    </div>
                </div>
                 ))}
            </div>
            <img src='assets/next.png' className="arrow left" alt="" onClick={()=>handleClick("left")}/>
            <img src='assets/next.png' className="arrow right" alt="" onClick={()=>handleClick()}/>
        </div>
    );
}
