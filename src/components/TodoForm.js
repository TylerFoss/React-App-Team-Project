import React from "react";

class TodoForm extends React.Component {
  constructor(props){
    super(props);
    this.addTodo = this.addTodo.bind(this);
  }
  addTodo(e){
    e.preventDefault();
    let item = this.refs.item.value;
    this.props.addTodoItem(item);
    this.refs.form.reset();
  }
  render(){
    return (
      <form ref="form" onSubmit={this.addTodo}>
        <input ref="item" placeholder="List songs to listen to" />
      </form>
    )
  }
}
export default TodoForm;
