import Form from 'react-bootstrap/Form';

function SelectType() {
  return (
    <Form.Select aria-label="Default select example">
      <option>Please Select a Type</option>
      <option value="Expense">Expense</option>
      <option value="Budget">Budget</option>
      
    </Form.Select>
  );
}

export default SelectType;