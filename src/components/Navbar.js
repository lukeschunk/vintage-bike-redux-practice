import React from "react";
import { connect } from "react-redux";

const Navbar = props => {
  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      height: 50,
      backgroundColor: "#058CBC",
      color: "white",
      padding: 10,
      boxSizing: "border-box"
    },
    navItem: {
      marginLeft: 10,
      marginRight: 10
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.navItem} onClick={() => props.onNavClick("products")}>
        Products
      </div>
      <div onClick={() => props.onNavClick("cart")} style={styles.navItem}>
        <i className="fab fa-opencart" />
        {props.cart.products.length}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.Cart
  };
};

export default connect(mapStateToProps)(Navbar);
