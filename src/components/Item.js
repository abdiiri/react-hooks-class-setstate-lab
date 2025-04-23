import React from "react";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isInCart: false,
    };
  }

  handleAddToCartClick = () => {
    this.setState((prevState) => ({
      isInCart: !prevState.isInCart,
    }));
  };

  render() {
    const { name, category } = this.props;
    const { isInCart } = this.state;

    return (
      <li className={isInCart ? "in-cart" : ""}>
        <span>{name}</span>
        <span className="category">{category}</span>
        <button
          className={isInCart ? "remove" : "add"}
          onClick={this.handleAddToCartClick}
        >
          {isInCart ? "Remove From" : "Add to"} Cart
        </button>
      </li>
    );
  }
}

export default Item;
