import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';

const ItemList = ({items, handleCheck, handleDelete}) => {
  return (
    <ul>{items.map((item) => (
        <li className="item" key={item.id}> 
            <input
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                checked={item.checked} 
            />
            <label
              style={(item.checked) ? {textDecoration: 'line-through'} : null}
              onDoubleClick={() => handleCheck(item.id)}
            >{item.item}</label>
            <FaTrashAlt
            onClick={() => handleDelete(item.id)}
              role="button" 
              tabIndex="0"
            />
        </li>
      ))}
    </ul>
  )
}

export default ItemList


/*
Here we write the code for the body of Content.js

You can see in the function creation we set the parameters to that of props that we drill down from App.js

We have essentially built a reusable component in ItemList that can be referenced by other js files for use
*/