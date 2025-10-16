import React, { Component } from 'react'
import { GrClose } from "react-icons/gr";


export class Order extends Component {
  render() {
    return (
      <div className='item'>
            <img src={"./img/" + this.props.item.img} />
            <h2>{this.props.item.title}</h2>
            <b>{this.props.item.price}$</b>
            <GrClose className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)}/>
      </div>
    )
  }
}

export default Order