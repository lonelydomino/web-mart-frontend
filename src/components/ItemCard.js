import React from 'react'
import { NavLink } from 'react-router-dom'

const ItemCard = (props) => {
     return (
          <NavLink to={`/category/${props.categoryId}/items/${props.item.id}`}>
               <div className="item-card">
                    <div className="inner">
                    <h3>{props.item.name}</h3>
                    <img className="item-image" src={`${props.item.image}`} alt={props.item.name}/>
                    <h3>$ {props.item.price}</h3>
               </div>
               </div>
          </NavLink>

     )
}
export default ItemCard