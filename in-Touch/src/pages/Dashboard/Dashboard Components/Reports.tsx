import { Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Post from '../../../components/Post/Posts';
import './Reports.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import swal from "sweetalert";
function Reports(props:any){

  const [postData,setPostData] = useState({
    id:'',
    content:'',
    imagePath:"",
    madeBy: ''
  })

  const [change,setChange]=useState(false);

    useEffect(() => {
      axios.get(`https://localhost:44386/api/Posts/get-post-info?postId=${props.postId}`)
      .then((response:any)=>{
        setPostData({
          id:response.data.id,
          content:response.data.content,
          imagePath:response.data.imagePath,
          madeBy:response.data.userID
        })
      })

    }, [props.postId,change])

    const handleDeleteReport = () => {
      swal({
        title: 'Are you sure?',
        text: 'Once deleted, the report cannot be recovered!',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      })
        .then((confirmed) => {
          if (confirmed) {
            axios
              .delete('https://localhost:44386/api/Reports/delete-report', {
                data: {
                  userId: props.userId,
                  postId: props.postId,
                },
              })
              .then((response:any) => {
                if(response.data.status=="Success"){
                  swal("Post successfully kept!"," ", "success")
                }else{
                  swal(`${response.data.message}`," ", "Error")
                }
              })
          }
        })
    };
  
    const handleDeletePost =() =>{
      swal({
        title: 'Are you sure?',
        text: 'Once deleted, the post cannot be recovered!',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      })
        .then((confirmed) => {
          if (confirmed) {
            axios
              .put(`https://localhost:44386/api/Posts/set-delete-attr?postId=${props.postId}`, {
                headers: {
                  Authorization: `Bearer ${props.token}`
                }
              })
              .then((response:any) => {
                if(response.data.status=="Success"){
                  swal(`${response.data.message}`," ", "success")
                  setChange(!change)
                }else{
                  swal(`${response.data.message}`," ", "Error")
                }
              })
          }
        })

    }
    const handleLockUser=()=>{
      handleDeletePost()
    swal({
      title: 'Are you sure?',
      text: 'Only you can make it unlock again!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
      .then((confirmed) => {
        if (confirmed) {
          axios
            .put(`https://localhost:44386/api/Users/lock-account?userId=${postData.madeBy}`,{}, {
              headers: {
                Authorization: `Bearer ${props.token}`
              }
            })
            .then((response:any) => {
              if(response.data.status=="Success"){
                swal(`${response.data.message}`," ", "success")
                setChange(!change)
              }else{
                swal(`${response.data.message}`," ", "error")
              }
            })
        }
      })



    }
    

    return(
        <div className='reports-msg'>
      <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>User with ID #{props.userId} has reported Post #{props.postId}</Accordion.Header>
        <Accordion.Body>
        <div className='report-content'>
        <h2 className='primary-text'>Content of Post #{props.postId}</h2>
        <h5 className='secondary-text'>Post was made by user with Id #{postData.madeBy}</h5>
        <div className='contenti-rep'>
        {postData.imagePath &&
        <img  src={`https://localhost:44386/Post Images/${postData.imagePath}`} style={{width:"200px",height:"200px"}} alt="" /> 
        }
        <p>{postData.content}</p>
        </div>
        </div>
        <div className='buttons' > 
        <Button className='buttonat' variant='primary' onClick={handleDeleteReport}>Keep Post</Button>
        <Button className='buttonat' variant='danger' onClick={handleDeletePost}>Delete Post</Button>
        </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

        </div>
    )
}
export default Reports