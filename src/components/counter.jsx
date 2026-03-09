import React, { Component } from "react";

class Counter extends Component {


//   constructor(){
//     super();
//     //this.handleIncrement = this.handleIncrement.bind(this);
//   }

//local state, can not be controlled by parent if child has its local state
//     state = {
//     count : this.props.counter1.value,
//                 //rendering list of items
//     tags : ['blue top', 'jeans', 'hand bag']
//   };

  
  styles = {
   fontStyle: 'italic',          
  fontWeight: 'bold',            // bold text
  fontSize: '18px',              // font size
  fontFamily: 'Arial, sans-serif',
  }
   buttonStyle = {
    padding: '10px 10px',
    backgroundColor: '#ff0026ff',
    color: 'white',
    border: '5',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)'
  }

//   handleIncrement(){
//     //to bind this function to event, we need to add constructor and bind this as coded above
//     //another approach is arrow function as given below
//     console.log("increment clicked", this.state.count);
//   }
//event handling accepting argument
//   handleIncrementByArrowFun = (product) => {
//     console.log("increment clicked", this.state.count);
//     //inherited methos from component, to modify or change the state object
//     this.setState( {count : this.state.count + 1});
//   }
  render() {
            //rendering class dynamically
            //can extract this in method also, and call metghod there 
        let renderClass ="badge m-2 badge-";
        renderClass += this.props.counter1.value === 0 ? "warning" : "primary";
        console.log('access props', this.props.counter1);
    return (
      <div style={this.containerStyle}>
        <span style= {this.styles} className={renderClass}>{this.formatFunc()}</span>
        <button  onClick = {() =>
            this.props.onIncrement(this.props.counter1)
        } style = {this.buttonStyle} className="btn btn-secondary btn-sm">Increment</button>
        <ul>

           {/*  {this.state.tags.map(tag => <li key = {tag}>{ tag }</li>)} */}
        </ul>
        <button onClick = {() => this.props.onDelete(this.props.counter1.id)} className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
    );
  }

  formatFunc() {
    const { value } = this.props.counter1;
    return value === 0 ? 'Zero' : value;
  }

  containerStyle = {
    padding: '10px',
    backgroundColor: '#f5f5f5ff',
    borderRadius: '10px',
    textAlign: 'center'
  }
}

export default Counter;
