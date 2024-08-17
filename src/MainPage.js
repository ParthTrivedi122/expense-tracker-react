import React, { useState } from "react";
import AddExpenseOrBuget from "./AddExpenseOrBuget";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Transactions from "./Transactions";
import "./MainPage.css";
import Filters from "./Filters";

const MainPage = () => {
    const [id, setId] = useState(1);
    const [transactions, setTransactions] = useState([]);
    const [filter, setFilter] = useState([]);
    const [budget, setBudget] = useState(1000);

    function transactionDetails(tname, tamount, ttype, tdate) {
        setId(id + 1);
        const newTransaction = {
            id: id,
            user: ttype === 'Expense' ? "To" : "From",
            tname: tname,
            tamount: tamount,
            ttype: ttype,
            tdate: tdate,
            tcolor: ttype === 'Expense' ? "#FFCCCB" : "#66FF99"
        };

        setTransactions((prevTransactions) => {
            const updatedTransactions = [...prevTransactions, newTransaction];
            setFilter(updatedTransactions); // Update filter after transactions have been updated
            return updatedTransactions;
        });

        if (ttype === 'Expense') {
            setBudget(budget - parseInt(tamount));
        } else {
            setBudget(budget + parseInt(tamount));
        }
    }

    function FiltersTypeData(type) {
        if (type === "Expense" || type === "Budget") {
            setFilter(transactions.filter((v) => v.ttype === type));
        } else {
            setFilter(transactions);
        }
    }

    return (
        <>
            <Row className="main-content">
                <Col md={4} sm={12} className="sidebar">
                    <AddExpenseOrBuget transactionDetails={transactionDetails} budgets={budget} />
                    <h1>Filters</h1> 
                    <Filters FiltersTypeData={FiltersTypeData} />
                </Col>
                <Col md={8} sm={12} className="content" style={{ paddingRight: "0px" }}>
                    <h1>Transactions</h1>
                    <Transactions transactions={filter} />
                </Col>
            </Row>
        </>
    );
}

export default MainPage;
