import { useForm } from "react-hook-form";
import UseAxiosSecure from './../../../hooks/UseAxiosSecure';
import Swal from "sweetalert2";
import SectionTitle from "../../../components/SocialLogin/SectionTitle/SectionTitle";


const AddTask = () => {
    const { register, handleSubmit,reset } = useForm();
    const axiosSecure = UseAxiosSecure()

    const onSubmit = async(data) => {
        console.log(data);
        
       
        
            
            const taskItem = {
                
                title:data.title,
                priority:data.priority,
                deadline:data.deadline,
                description:data.description,
                status:data.status,

               
            }
            //
            const taskRes = await axiosSecure.post('/task',taskItem)
            console.log(taskRes.data) 
            if (taskRes.data.insertedId) {
                // show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.title} is added to the task`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
            
        
        
    
      };
    return (
        <div>
            <SectionTitle
        heading="add an Task"
        subHeading="What's new"
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Task Title*</span>
            </label>
            <input
              type="text"
              placeholder="Task Title"
              {...register("title",{required:true})}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex gap-6">
            {/* priority */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">priority*</span>
              </label>
              <select
              defaultValue="default"
                {...register("priority",{required:true})}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select priority

                </option>
                <option value="High">High</option>
                <option value="Moderate">Moderate</option>
                <option value="Low">Low</option>
                
              
              </select>
            </div>
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Status*</span>
              </label>
              <select
              defaultValue="default"
                {...register("status",{required:true})}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select Status

                </option>
                <option value="to-do">To-Do</option>
                <option value="ongoing">ongoing</option>
                <option value="completed">completed</option>
                
              
              </select>
            </div>
            {/* Date */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Date*</span>
              </label>
              <input
                type="date"
                placeholder="deadline"
                {...register("deadline",{required:true})}
                className="input input-bordered w-full"
              />
            </div>
          
          </div>
              {/* description details */}
              <div className="form-control">
              <label className="label">
                <span className="label-text">description details</span>
                
              </label>
              <textarea
              {...register('description')}
                className="textarea textarea-bordered h-24"
                placeholder="description details"
              ></textarea>
           </div>
         
          <button className="btn btn-primary ">
            {/* Add Items <FaUtensils className="ml-4"/> */}
            Add Task
          </button>
        </form>
      </div> 
        </div>
    );
};

export default AddTask;