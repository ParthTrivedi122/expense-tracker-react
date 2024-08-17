import Form from 'react-bootstrap/Form';

function SelectDuration() {
  return (
    <Form.Select aria-label="Default select example">
      <option>Please Select a Duration</option>
      <option value="Expense">1 day</option>
      <option value="Budget">1 week</option>
      <option value="Expense">1 month</option>
      <option value="Budget">6 months</option>
      <option value="Budget">1 year</option>
      <option value="Budget">more than 1 year</option>
    </Form.Select>
  );
}

export default SelectDuration;