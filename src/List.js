import React, { useState, useEffect } from 'react';
import axios from 'axios';


function List() {
    const [list, setList] = useState([]);
    const onChangeEvent = (e) => {
        setList((list) => ({
            ...list,
            [e.target.name]: e.target.value
        }));
    };

    useEffect(() => {
        axios.get("https://akashsir.in/myapi/crud/todo-list-api.php")
            .then(response => {
                console.log(response.data.todo_list);
                setList(response.data.todo_list);
            })
    }, []);

    return (
        <div>
            <h2><i>User Details</i></h2>
            {list.map((values, i) => (
                <ul key={i}>
                Id : {values.todo_id} <br/>
                Title : {values.todo_title} <br />
                Details : {values.todo_details}
                </ul>
            ))}
        </div>
    )
}
export default List;