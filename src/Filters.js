import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import SelectType from './SelectType';
import SelectDuration from './SelectDuration';

const Filters = ({ FiltersTypeData }) => {
    const [type, setType] = useState("");
    const [duration, setDuration] = useState("");

    function setTypes(e) {
        const newType = e.target.value;
        setType(newType);
        FiltersTypeData(newType);
    }

    function setDurations(e) {
        const newDuration = e.target.value;
        setDuration(newDuration);
    }

    function resetFilter() {
        setType(""); // Reset the type state
        setDuration(""); // Reset the duration state
        FiltersTypeData(null);
    }

    return (
        <>
            <Row>
                <Form noValidate>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="12" controlId="validationCustom05" onChange={setTypes}>
                            <Form.Label>Select Type</Form.Label>
                            <SelectType value={type} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="12" controlId="validationCustom06" onChange={setDurations}>
                            <Form.Label>Select Duration</Form.Label>
                            <SelectDuration value={duration} />
                        </Form.Group>
                    </Row>
                    <Button type="button" onClick={resetFilter}>Reset Filter</Button>
                </Form>
            </Row>
        </>
    );
};

export default Filters;
