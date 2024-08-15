import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

function Forms({transactionDetails}) {
  const [validated, setValidated] = useState(false);
  const [name,setName]= useState("")
  const [amount,setAmount]= useState(0)
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  function names(e){
    setName(e.target.value)
  }
  function amounts(e){
    setAmount(e.target.value)
  }
  function types(e){
    setType(e.target.value)
  }

  function dates(e){
    setDate(e.target.value)
  }
  return (
    <Form noValidate >
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustom01">
          <Form.Label>Expense name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter Expense name Here"
            defaultValue=""
            onChange={names}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustom05">
          <Form.Label>Amount</Form.Label>
          <Form.Control type="text" placeholder="Enter Amount Here" required onChange={amounts} />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Amount.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustom05">
          <Form.Label>Select Due Date</Form.Label>
          <Form.Control type="date" placeholder="Enter Amount Here" required onChange={dates} />
          
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <ToggleButtonGroup type="radio" name="options" defaultValue={1} md='12' as={Col} onClick={types}>
        
            <ToggleButton id="tbg-radio-2" value={"Expense"} className='btn-danger'>
            Expense
            </ToggleButton>
            <ToggleButton id="tbg-radio-3" value={"Budget"} className='btn-success'>
            Budget
            </ToggleButton>
        </ToggleButtonGroup>
      </Row>
      <Button type="button" onClick={()=>{transactionDetails(name,amount,type,date)}}>Submit form</Button>
    </Form>
  );
}

export default Forms;