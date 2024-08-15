import React, { useState } from "react";
import Forms from "./Forms";
import Button from 'react-bootstrap/Button';
import Col  from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row';
const AddExpenseOrBuget = () =>{
    const [form,setForm]= useState(false);
    function showForm(){
        setForm(!form);
    }
    return(
        <>        
        <div>
            <h1>Expense Tracker</h1>
        </div>
        <Row >
                <Col md='2'>
                    <span>Budget:</span>
                </Col>
                <Col md='8'>
                    {/* Content for Budget Value or Input can go here */}
                </Col>
                <Col md='2'>
                    <Button variant="primary" className="btn-success" onClick={showForm}>
                        Add
                    </Button>
                </Col>
        </Row>
        {form?
        (<Row>
            <Forms className=" col "/>
        </Row>):null
        }
        </>

    )
}
export default AddExpenseOrBuget;