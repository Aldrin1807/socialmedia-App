import { Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Post from '../../../components/Post/Posts';
import './Reports.css'

function Reports(){
    return(
        <>
        <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>User with ID #1 has reported Post #2</Accordion.Header>
        <Accordion.Body>
        <div className='report-content'>
        <h2>Post Content</h2>
        <img src="https://image-placeholder.com/images/actual-size/200x200.png" style={{width:"200px",height:"200px"}} alt="" />
        <p>post content</p>
        </div>
        <div className='buttons' > 
        <Button className='reports-btn btn-primary'>Keep Post</Button>
        <Button className='reports-btn btn-danger'>Delete Post</Button>
        <Button className='reports-btn btn-danger'>Lock this User</Button>
        </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

        </>
    )
}
export default Reports