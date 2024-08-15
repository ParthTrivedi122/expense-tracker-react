import React, { useState } from "react";
import AddExpenseOrBuget from "./AddExpenseOrBuget";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Transactions from "./Transactions";

const MainPage = () => {
    const [id, setId] = useState(1);
    const [transactions, setTransactions] = useState([]);

    function transactionDetails(tname, tamount, ttype, tdate) {
        setId(id + 1);
        console.log(id, tname, tamount, ttype, tdate);
        setTransactions([...transactions, { id: id, tname: tname, tamount: tamount, ttype: ttype, tdate: tdate }]);
    }

    return (
        <>
            <Row>
                <Col md={4} sm={12}  style={{ position: "fixed" }}>
                    <AddExpenseOrBuget transactionDetails={transactionDetails} />
                </Col>
                <Col md={{ span: 8, offset: 4 }} sm={12}>
                    <h1>Transactions</h1>
                    <Transactions transactions={transactions} />
                </Col>
            </Row>
        </>
    );
}

export default MainPage;
