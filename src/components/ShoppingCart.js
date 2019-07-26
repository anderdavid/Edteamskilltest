import React, { Component } from 'react';
import store from '../store';

const styles = {
  footer: {
    fontWeight: 'bold'
  }
}


class ShoppingCart extends Component {
  constructor() {
    super();
    this.removeFromCart = this.removeFromCart.bind(this);

    this.state = {
      cart: []
    }

    store.subscribe(() =>{
        this.setState(
            {
                cart:store.getState().cart
            }
        );
    }

    );
  }

  render() {
    return (
      <panel header="Shopping Cart">
        <table fill>
          <tbody>
            {this.state.cart.map(product =>
              <tr key={product.id}>
                <td>{product.name}</td>
                <td className="text-right">${product.price}</td>
                <td className="text-right"><button bsSize="xsmall" bsStyle="danger" onClick={() => this.removeFromCart(product)}><glyphicon glyph="trash" /></button></td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" style={styles.footer}>
                Total: ${this.state.cart.reduce((sum, product) => sum + product.price, 0)}
              </td>
            </tr>
          </tfoot>
        </table>

      </panel>
    )
  }

  removeFromCart(product) {

  }
}

export default ShoppingCart;