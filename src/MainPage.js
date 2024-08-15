import React, { useState } from "react";
import AddExpenseOrBuget from "./AddExpenseOrBuget";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Transactions from "./Transactions";
import "./MainPage.css";

const MainPage = () => {
    const [id, setId] = useState(1);
    const [transactions, setTransactions] = useState([]);
    const [budget, setBudget] = useState(1000);

    function transactionDetails(tname, tamount, ttype, tdate) {
        setId(id + 1);
        console.log(id, tname, tamount, ttype, tdate);
        if (ttype === 'Expense') {
            setBudget(budget - parseInt(tamount));
            setTransactions([...transactions, { id: id, tname: tname, tamount: tamount, ttype: ttype, tdate: tdate, tcolor: "#FFCCCB" }]);
        } else {
            setBudget(budget + parseInt(tamount));
            setTransactions([...transactions, { id: id, tname: tname, tamount: tamount, ttype: ttype, tdate: tdate, tcolor: "#66FF99" }]);
        }
    }

    return (
        <>
            <Row className="main-content">
                <Col md={4} sm={12} className="sidebar">
                    <AddExpenseOrBuget transactionDetails={transactionDetails} budgets={budget} />
                </Col>
                <Col md={8} sm={12} className="content" style={{ paddingRight: "0px" }}>
                    <h1>Transactions</h1>
                    <Transactions transactions={transactions} />
                </Col>
            </Row>
        </>
    );
}

export default MainPage;
