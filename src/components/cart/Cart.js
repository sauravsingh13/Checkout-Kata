import React, { Component } from 'react'

export default class Cart extends Component {

    
    cart=[]
    total=0

    componentWillUpdate() {
         this.cart = []
         this.total = 0;
        for (let item in this.props.cart) {
            this.cart.push({
                item: item,
                quatity: this.props.cart[item],
                price: this.calculatePrice(item, this.props.cart[item])
            })
            this.total+=this.calculatePrice(item, this.props.cart[item])
        }
        
    }

    calculatePrice(item, quatity) {
        let product = this.props.products.filter((i) => i.item === item)[0]
        if (product.specialPrice === '') {
            return product.unitPrice * quatity
        }
        else {
            let q = product.specialPrice.split(" ")[0]
            let p = product.specialPrice.split(" ")[2]
            return (Math.floor(quatity / q) * p) + ((quatity % q) * product.unitPrice)
        }
    }

    render() {

        let cart = this.cart.map((product) => {
            return (
                <tr key={product.item}>
                    <td>{product.item}</td>
                    <td>{product.price}</td>
                    <td>{product.quatity}</td>

                </tr>
            )
        })

        return (
            <div style={{ padding: '30px' }}>
                <h2>CART</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>

                        </tr>
                    </thead>
                    <tbody>
                        {cart}
                    </tbody>

                </table>
                <p style={{float:'right'}}>Total : {this.total}</p>
            </div>
        )
    }
}
