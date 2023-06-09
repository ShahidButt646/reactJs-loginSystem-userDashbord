import React, { useRef } from 'react';
import { BiXCircle } from "react-icons/bi";

function UserInputForm(props) {
    const fnameRef = useRef();
    const lnameRef = useRef();
    const emailRef = useRef();
    const maleRef = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        let nextId = props.tableData.length ? props.tableData[props.tableData.length - 1].id + 1 : 1;
        props.setTableData([
            {
                "id": nextId,
                "first_name": fnameRef.current.value,
                "last_name": lnameRef.current.value,
                "email": emailRef.current.value,
                "gender": maleRef.current.checked ? "Male" : "Female",
            },
            ...props.tableData
        ]);

        // sending false as argument to know that user is added
        props.handleInputFormChange(true);
        // alert("User is added");

    }
    return (
        <form
            className="userInputForm"
            onSubmit={(e) => handleFormSubmit(e)}
        >
            <BiXCircle
                className='close-model'
                onClick={() => props.handleInputFormChange(false)}
            />
            <h1>Add User Info:</h1>
            <input
                ref={fnameRef}
                type="text"
                placeholder="First Name"
                required
            />
            <input
                ref={lnameRef}
                type="text"
                placeholder="Lase Name"
                required
            />
            <input
                ref={emailRef}
                type="email"
                placeholder="Email"
                required
            />
            <div className="genCon">
                <input
                    ref={maleRef}
                    type="radio"
                    required
                    defaultChecked
                    name='gender'
                    id='Male'
                />
                <label htmlFor="Male">Male</label>
                <input

                    type="radio"
                    required
                    name='gender'
                    id='Female'
                />
                <label htmlFor="Female">Female</label>
            </div>
            <input type="submit" value={"Submit"} />

        </form >
    )
}

export default UserInputForm