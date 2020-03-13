import React, {Component} from "react"
import Context from "./Context";

class Provider extends Component {
  state = {
    offset: 0
  };

  render() {
    return (
      <Context.Provider
        value={{
          cars: this.state.cars,
          offset: this.setState.offset,
          setOffset: newOffset =>{
              this.setState({
                  newOffset
              })
          },
          incrementPrice: selectedID => {
            const cars = Object.assign({}, this.state.cars);
            cars[selectedID].price = cars[selectedID].price + 1;
            this.setState({
              cars
            });
          },
          decrementPrice: selectedID => {
            const cars = Object.assign({}, this.state.cars);
            cars[selectedID].price = cars[selectedID].price - 1;
            this.setState({
              cars
            });
          }
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Provider;
