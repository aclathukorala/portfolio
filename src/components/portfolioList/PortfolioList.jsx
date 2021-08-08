import "./portfolioList.scss"

export default function PortfolioList({ id, title, active, setSelected }) {
    return ( <li className = {active ? "portfolioList active" : "portfoliolist"} onClick={() => setSelected(id)}>
        {title}
    </li>
    );
}
