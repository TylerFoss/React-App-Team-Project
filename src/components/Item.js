import React from 'react';

const Item = ({ name, id,  complete, onTodoClick }) => (
  <li
    onClick={ () => onTodoClick(id)} 
    style={ complete ? { textDecoration: 'line-through', color: 'red' } : {} }
  >
    {name}
  </li>
);

export default Item;
