import React from "react";
import List from "./List";
import TodoForm from "./TodoForm";

class TodoApp extends React.Component{
  constructor(props) {
      super(props);
      this.addTodoItem = this.addTodoItem.bind(this);
      this.onTodoClick = this.onTodoClick.bind(this);
      this.state = { items: [], id: 0 }
    }

    onTodoClick(id) {
      let items = this.state.items.map( item => {
        if ( item.id === id )  {
          return {
            ...item,
            complete: !item.complete
          }
        }

        return item;
      });

      this.setState({ items });
    }

  
  addTodoItem(name){
    let id = ++this.state.id;
    this.setState({
      items: [
        {name, id, complete: false},
        ...this.state.items
      ],
      id
    })
  }

  render(){
    return(
      <div>
      <TodoForm addTodoItem={this.addTodoItem} />
      <List items={this.state.items} onTodoClick={this.onTodoClick} />
      </div>
    )
  }
}

export default TodoApp;
