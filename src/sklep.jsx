import './sklep.css'
import wozek from './wozek.jpg'
function Produkty(props){
    return(
    <div id="row">
        <div id="product">
            <img src={props.photo1}></img>
            <h1>{props.nazwa1}</h1>
            <p>{props.description1}</p>
            <h2>{props.price1}</h2>
            <a href="kupilem_to.com">
            <img src={wozek} id="ikonka"/>
            </a>
        </div>

        <div id="product">

            <img src={props.photo2}></img>
            <h1>{props.nazwa2}</h1>
            <p>{props.description2}</p>
            <h2>{props.price2}</h2>
            <a href="kupilem_to.com">
                <img src={wozek} id="ikonka"/>
            </a>
        </div>

        <div id="product">

            <img src={props.photo3}></img>
            <h1>{props.nazwa3}</h1>
            <a>{props.description3}</a>
            <h2>{props.price3} </h2>
                <a href="kupilem_to.com">
                    <img src={wozek} id="ikonka"/>
                </a>
        </div>

    </div>
)
};

export default Produkty;