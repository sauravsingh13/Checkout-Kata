import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './components/products/Products';
import Cart from './components/cart/Cart';

class App extends Component {

  state={
    products:[{
      item:'A',
      unitPrice:50,
      specialPrice:'3 for 130'
    },
    {
      item:'B',
      unitPrice:30,
      specialPrice:'2 for 45'
    },
    {
      item:'C',
      unitPrice:20,
      specialPrice:''
    },
    {
      item:'D',
      unitPrice:15,
      specialPrice:''
    },],
    cart:{}
  }

  addToCart=(item)=>{
    let cart = this.state.cart
    cart[item]?cart[item]=cart[item]+1:cart[item]=1
    this.setState({cart:{...cart}})
  }

  render(){
    return (
      <div className="App">
        <div className="App-header">
            <h2>CHECKOUT KATA</h2>
        </div>
        <div style={{width:'50%',float:'left'}}>
        <Products products={this.state.products} add={this.addToCart}></Products>

        </div>
        <div style={{width:'50%',float:'right'}}>
          <Cart cart={this.state.cart} products={this.state.products}></Cart>
        </div>

      </div>
    );
  }
  
}

export default App;
