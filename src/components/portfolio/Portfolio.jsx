import { useEffect, useState } from "react";
import PortfolioList from "./../portfolioList/PortfolioList";
import "./portfolio.scss";
import {webPortfolio,mobilePortfolio,designPortfolio,contentPortfolio,photosPortfolio} from "../../data";

export default function Portfolio() {

    const [selected,setSelected] = useState("featured");
    const [data,setData] = useState([]);

        const list = [
            {
                id: "web",
                title: "Web App",
            },
            {
                id: "mobile",
                title: "Mobile App",
            },
            {
                id: "design",
                title: "Design",
            },
            {
                id: "content",
                title: "Content",
            },
            {
                id: "photos",
                title: "Photos",
            }, 
        
        
        ];

        useEffect(() => {
            
            switch(selected){
                    case "web":
                    setData(webPortfolio);
                    break;
                    case "mobile":
                    setData(mobilePortfolio);
                    break;
                    case "design":
                    setData(designPortfolio);
                    break;
                    case "content":
                    setData(contentPortfolio);
                    break;
                    case "photos":
                    setData(photosPortfolio);
                    break;
                    case "featured":
                    setData(webPortfolio);
                    break;
                    default:
                    setData(webPortfolio);
            }
        }, [selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList 
                    title={item.title} 
                    active={selected === item.id} 
                    setSelected={setSelected}
                    id={item.id}
                    />
                    
                ))}
            </ul>
            <div className="container">
                {data.map((d)=> (
                    
                <div className="item">
                <img 
                src={d.img} 
                alt=""
                />
                <h3>{d.title}</h3>
                </div>
                ))}

            </div>
        </div>
    )
}
