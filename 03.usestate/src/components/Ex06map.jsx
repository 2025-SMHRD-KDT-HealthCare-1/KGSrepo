import React from 'react'
import {Card, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Ex06map = ({item}) => {

    console.log(item);

  return (
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={item.imgSrc} style={{height:'20rem'}}/>
      <Card.Body>
        <Card.Title>{item.title} {item.birthYear}년생</Card.Title>
        <Card.Text>
            {item.content}
            <br></br>
            <a href={item.SNS}>
                <Button variant="danger" >Instagram</Button>
            </a>
        </Card.Text>
        
      </Card.Body>
    </Card>
    
  )
}

export default Ex06map