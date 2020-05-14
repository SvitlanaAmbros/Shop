import * as React from 'react';

import 'components/card.scss';

export function Card(props: any) {
    return (
        <div className="card">
            <div className="card__title">{props.product.title}</div>
            <div className="card__price">{props.product.price}</div>
            <img className="card__image" src={'public/assets/images/pineapple.jpg'} alt=""/>
            <div className="card__description">{props.product.description}</div>
        </div>
    )
}