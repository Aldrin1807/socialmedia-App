import axios from "axios";
import swal from "sweetalert";


export function DeletePost(props:any){

    const toggleShow = () => props.setDeleteModal(!props.deleteModal);
    const handleDelete = () =>{
      axios.delete(props.deleteUrl);
      toggleShow();
    }
   
  return (
    <>
        
    </>
  );
}