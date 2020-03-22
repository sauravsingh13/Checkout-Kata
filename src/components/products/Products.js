import React, { Component } from 'react'
import './Product.css';


export default class Products extends Component {
  render() {

    let products = 
    <tbody>{
    this.props.products.map((product)=>{
        return (
            <React.Fragment key={product.item}>
            
            <tr >
            <td>{product.item}</td>
            <td>{product.unitPrice}</td>
            <td>{product.specialPrice}</td>
            <td><button onClick={()=>this.props.add(product.item)}>ADD</button></td>
        
          </tr>
          </React.Fragment>
        )
    })}
    </tbody>
    return (
      <div style={{padding:'30px'}}>
      <h2>Product List</h2>
      <table>
      <thead>
      <tr>
    <th>Item</th>
    <th>Unit Price</th>
    <th>Special Price</th>
    <th>Add to Cart</th>

  </tr>
      </thead>
  
  {products}
  
  
</table>
        
      </div>
    )
  }
}
