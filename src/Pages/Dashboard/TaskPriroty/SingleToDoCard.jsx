import Swal from "sweetalert2";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import UseTask from "../../../hooks/UseTask";
import { Link } from "react-router-dom";


const SingleToDoCard = ({item}) => {
  const [task, loading,refetch] = UseTask();
  const { deadline, description, priority, title, _id } = item;
  const axiosSecure = UseAxiosSecure();


  const handleDeleteUser = _id =>{
  Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
      

      axiosSecure.delete(`/task/${_id}`)
      .then(res=>{
          console.log(res)
          if (res.data.deletedCount > 0) {
              refetch()
                Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
          }
      })


      }
    });
}


    return (
        <div>
           <div className="card bg-primary text-primary-content">
  <div className="card-body">
    <h2 className="card-title">Title: {title}</h2>
    <h2 className="card-title">Priority: {priority}</h2>
    <p>{description}</p>
    <p>{deadline}</p>
    <div className="card-actions justify-end">
    <Link to={`/dashboard/updateItem/${_id}`}><button className="btn">Update</button></Link>
      <button onClick={() => handleDeleteUser(_id)} className="btn">Delete</button>
    </div>
  </div>
</div> 
        </div>
    );
};

export default SingleToDoCard;