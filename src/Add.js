import React from 'react';
import axios from 'axios';

function Add() {
    const [data, addData] = React.useState({});
    const onChangeEvent = (e) => {
        addData((data) => ({
            ...data,
            [e.target.name] : e.target.value
        })
        );
    }

    const onSubmitValue = (event) => {
        event.preventDefault();
        var formData = new FormData();
        formData.append("todo_title", data.txt1);
        formData.append("todo_details", data.txt2);
        axios.post("https://akashsir.in/myapi/crud/todo-add-api.php", formData)
        .then(function(response) {
            console.log(response);
        })
    }

    return (
        <div>
            <h2><i>FullFill Details</i></h2>
            <form onSubmit={onSubmitValue} >
                Title : <input type="text" name="txt1" onChange={onChangeEvent} /><br /> 
                Details : <input type="text" name="txt2" onChange={onChangeEvent} /><br /> 
                <button type="submit" >ADD</button>
            </form>
        </div>
    )
}
export default Add;