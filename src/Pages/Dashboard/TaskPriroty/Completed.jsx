import UseTask from "../../../hooks/UseTask";
import SingleCompleted from "./SingleCompleted";


const Completed = () => {
    const [task] = UseTask();
  const toDo = task.filter((task) => task.status === "completed");
//   const { deadline, description, priority, title, _id } = high;
  console.log(toDo);
//   console.log(title)
  return  (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-16">
       
        {
                    toDo.map(item => <SingleCompleted
                        key={item._id}
                        item={item}
                    ></SingleCompleted>)
                }
        

        
    </div>
);
};

export default Completed;