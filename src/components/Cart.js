import React, { Component } from "react";
import { connect } from "react-redux";

class Cart extends Component {
  render() {
    const styles = this.styles();
    return (
      <div style={styles.container}>
        {this.props.cart.products.map(product => {
          return (
            <div key={product.name} style={styles.productContainer}>
              <div style={styles.heading}>Name: {product.name}</div>
              <img style={styles.img} src={product.imageUrl} />
              <div style={styles.subHeading}>Price: {product.price}</div>
              <div>{product.description}</div>
            </div>
          );
        })}
      </div>
    );
  }

  styles = () => {
    return {
      container: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column"
      },
      productContainer: {
        marginTop: 25,
        marginBottom: 25
      },
      heading: {
        fontSize: 30
      },
      subHeading: {
        fontSize: 24
      },
      img: {
        width: 500
      }
    };
  };
}

const mapStateToProps = state => {
  return {
    cart: state.Cart
  };
};

export default connect(mapStateToProps)(Cart);
