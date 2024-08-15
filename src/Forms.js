import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

function Forms() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustom01">
          <Form.Label>Expense name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter Expense name Here"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustom05">
          <Form.Label>Amount</Form.Label>
          <Form.Control type="text" placeholder="Enter Amount Here" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Amount.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <ToggleButtonGroup type="radio" name="options" defaultValue={1} md='12' as={Col}>
        
            <ToggleButton id="tbg-radio-2" value={2} className='btn-danger'>
            Expense
            </ToggleButton>
            <ToggleButton id="tbg-radio-3" value={3} className='btn-success'>
            Budget
            </ToggleButton>
        </ToggleButtonGroup>
      </Row>
      <Button type="button">Submit form</Button>
    </Form>
  );
}

export default Forms;