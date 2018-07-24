import React from 'react';

const Addedingredient = (props) => {
    const { name, type, price, amount } = props;
    return (
        <React.Fragment>
            {amount > 0 && <li className="logging-price-list-item">
                <div className="logging-price-list-item_amount">x{amount}</div>
                <div>{name}</div>
                <div>{price}$</div>
            </li >}
        </React.Fragment>
    );
}

export default Addedingredient;