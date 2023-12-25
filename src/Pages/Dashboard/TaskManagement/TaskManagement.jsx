import SectionTitle from "../../../components/SocialLogin/SectionTitle/SectionTitle";
import UseTask from "../../../hooks/UseTask";
import Completed from "../TaskPriroty/Completed";
import Ongoing from "../TaskPriroty/Ongoing";
import ToDo from "../TaskPriroty/ToDo";



const TaskManagement = () => {
    const [task] = UseTask();
    console.log(task)

    return (
       <>
        <div>
        <SectionTitle
        heading="TO-DO"
        subHeading="Task Type"
      ></SectionTitle>
      <ToDo/>
      <SectionTitle
        heading="Ongoing"
        subHeading="Task Type"
      ></SectionTitle>
   <Ongoing/>
      <SectionTitle
        heading="completed"
        subHeading="Task Type"
      ></SectionTitle>
     <Completed/>

        </div>
       </>
    );
};

export default TaskManagement;