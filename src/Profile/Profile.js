import React from 'react'
import {Card,Button} from "react-bootstrap"
const Profile = (props) => {
    const handlename = (fullname) => alert(`my name is ${props.fullname}`)

    
  return (
    <div style={{margin:"2% 40%"}}> <Card style={{ width: '18rem' }}>
    {props.children}
    <Card.Body>
      <Card.Title>{props.fullname}</Card.Title>
      <Card.Text>{props.bio}</Card.Text>
      <Card.Text>{props.proffession}</Card.Text>
        
      
      <Button variant="primary" onClick={handlename}>Go somewhere</Button>
    </Card.Body>
  </Card></div>
  )

}
Profile.defaultProps={
    fullname:"ibrahim"
}
export default Profile