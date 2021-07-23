import React from "react"

const Menu = ({props}) => {
    return (

    <div className="section-center">
        {props.map((foodItem)=> {
            const {id, title, price, desc, img} = foodItem;
            return (<article key={id} className="menu-item">
                <img src={img} alt={title} className="photo" />
                <div className="item-info">
                    <header>
                        <h4>{title}</h4>
                        <h4 className="price">${price}</h4>
                    </header>
                    <p className="item-info">{desc}</p>
                </div>
            </article>);
        })}

    </div>

    );
}

export default Menu;