import React, { useState } from "react";
import Forms from "./Forms";
import Button from 'react-bootstrap/Button';
import Col  from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row';
const AddExpenseOrBuget = ({transactionDetails,budgets}) =>{
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
                    <span>Budget:${budgets}</span>
                </Col>
                
                
        </Row>
        <Row>
            <Forms className=" col " transactionDetails={transactionDetails}/>
        </Row>
        </>

    )
}
export default AddExpenseOrBuget;