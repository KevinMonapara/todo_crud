import React from 'react';
import axios from 'axios';

function Edit() {
    const [ data, editData ] = React.useState({});
    const onChangeEvent = (e) => {
        editData((data) => ({
            ...data,
            [e.target.name] : e.target.value
        })
        );
    }

    const onSubmitValue = (event) => {
        event.preventDefault();
        var formData = new FormData();
        formData.append("todo_id", data.txt1);
        formData.append("todo_title", data.txt2);
        formData.append("todo_details", data.txt3);
        axios.post("https://akashsir.in/myapi/crud/todo-edit-api.php", formData)
        .then(function(response) {
            console.log(response);
        });
    }

    return(
        <div>
            <h2><i>Update Details</i></h2>
             <form onSubmit={onSubmitValue} >
                Id : <input type="text" name="txt1" onChange={onChangeEvent} /><br /> 
                Title : <input type="text" name="txt2" onChange={onChangeEvent} /><br /> 
                Details : <input type="text" name="txt3" onChange={onChangeEvent} /><br /> 
                <button type="submit" >ADD</button>
            </form>
        </div>
    )
}
export default Edit;