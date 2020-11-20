import React from 'react';
// import 'boostrap/dist/css/boostrap.css';

const Form = props => {
    const {todos, setTodos} = props;
    
    var todo = {
        title: "",
        isFinished: false
    }
    const thisChange = (e) => {
        e.preventDefault();
        todo.title = e.target.value;
    };

    const onButtonClick = (e) => {
        setTodos([...todos, todo]);
        e.target.value = "";
    };


    return(
        <div className="mx-auto w-75">
            <label style={{margin: 5}}>Add: </label>
            <br></br>
            <input type="txt" name="todo" onChange={thisChange}/>
            <br></br>
            <button className="btn btn-success " style={{margin: 5}}onClick={onButtonClick}>New To Do</button>
        </div>
    )
}

export default Form;