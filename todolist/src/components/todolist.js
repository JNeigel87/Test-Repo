import React from 'react';
import { ThemeProvider } from 'react-bootstrap';

const Act = props => {
    const {acts, index, todos, setTodos} = props;

    const deleteThis = () => {
        setTodos(() => {
            return todos.filter(acts => todos.indexOf(acts) !== index)
        });
    };

    const thisCheck = () => {
        todos[index].isFinished = !todos[index].isFinished;
        setTodos([...todos]);
    };

    return (
        <div className="mx-auto w-25 bg-warning">
                {acts.title}
            <div className="main">
                <label htmlFor="checkbox">Done Yet?</label>
                <input onChange= {thisCheck} type="checkbox" name="" checked={acts.isFinished}/>
                <button onClick = {deleteThis} className="btn btn-sm btn-danger">Remove</button>
            </div>
        </div>
    );

};

export default Act