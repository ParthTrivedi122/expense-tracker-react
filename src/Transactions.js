import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Transactions({transactions}) {
  return (
    <>
    {
        transactions.map((v)=>{
            return(
                <Card style={{width: '80%',marginTop:"10px",backgroundColor:v.tcolor}}>
                    <Card.Body>
                        <Card.Title>{v.tname}</Card.Title>
                        <Card.Text>
                        {v.ttype}
                        </Card.Text>
                        <Card.Text>
                        Amount : {v.tamount}
                        </Card.Text>
                        <Card.Text>
                        Date: {v.tdate}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
        )})
    }
    </>
  );
}

export default Transactions