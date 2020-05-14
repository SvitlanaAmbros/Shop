import React from 'react';

import 'components/card-list.scss';
import { Card } from 'src/components/card';
import { CardListState } from 'src/model/card-list-state.model';
import { products } from 'src/data/products.data';


class CardList extends React.Component<{}, CardListState> {
    constructor(props: any) {
        super(props);
        this.state = {
            items: []
        };
    }

    componentWillMount() {
        this.setState({
            items: products
        });
    }

    render() {
        return (
            <div className="card-list">
                {this.state.items.map(product => (<Card key={product.id} product={product}></Card>))}
            </div>
        )
    }
}

export default CardList;