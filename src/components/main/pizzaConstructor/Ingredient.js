import React from 'react';

const Ingredient = (props) => {
    const { name, image, price, amount } = props;
    return (
        <li className="ingredient-list__ingredient">
            <img src={image} alt="product_picture" className="ingredient-list__ingredient_image" />
            <div className="ingredient-list__ingredient-text-info">
                <div className="ingredient-list__ingredient-name">{name}</div>
                <div className="ingredient-list__ingredient-price">{price} $</div>
                <button type="button" className="btn btn-primary btn-sm button-reduce-inrgedient">-</button>
                <button type="button" className="btn btn-primary btn-sm button-add-inrgedient">+</button>
            </div>
        </li>
    );
}

export default Ingredient;