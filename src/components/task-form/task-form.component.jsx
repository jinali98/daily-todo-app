import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewTask } from "../../redux/tasks/tasks.actions";
import CustomInput from "../custom-input/custom-input.component";

class TaskForm extends Component {
  constructor() {
    super();

    this.state = {
      title: "",
      description: "",
      date: "",
      importance: "",
      duration: "",
    };
  }
  inputChangeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  formSubmitHandler = (e) => {
    const iddate = new Date();
    const { addTodo } = this.props;
    e.preventDefault();
    const { title, description, date, importance, duration } = this.state;
    console.log(this.state);
    addTodo({
      id: Math.trunc(Math.random() * 500),
      ...this.state,
      status: "inprogress",
    });
  };

  render() {
    return (
      <form onSubmit={this.formSubmitHandler}>
        <CustomInput
          label="Title"
          name="title"
          type="text"
          placeholder="Title"
          value={this.state.title}
          required
          onChange={this.inputChangeHandler}
        />
        <CustomInput
          label="description"
          name="description"
          type="text"
          placeholder="description"
          value={this.state.description}
          required
          onChange={this.inputChangeHandler}
        />
        <CustomInput
          label="Date"
          name="date"
          type="date"
          placeholder="select date"
          value={this.state.date}
          required
          onChange={this.inputChangeHandler}
        />
        <CustomInput
          label="Importance"
          name="importance"
          type="text"
          placeholder="importance"
          value={this.state.importance}
          required
          onChange={this.inputChangeHandler}
        />
        <CustomInput
          label="duration"
          name="duration"
          type="text"
          placeholder="3 hours"
          value={this.state.duration}
          required
          onChange={this.inputChangeHandler}
        />

        <button type="submit">submit</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTodo: (item) => dispatch(addNewTask(item)),
});

export default connect(null, mapDispatchToProps)(TaskForm);
