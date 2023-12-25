import UseTask from "../../../hooks/UseTask";
import SingleToDoCard from "./SingleToDoCard";


const ToDo = () => {
  const [task] = UseTask();
  const toDo = task.filter((task) => task.status === "to-do");
//   const { deadline, description, priority, title, _id } = high;
  console.log(toDo);
//   console.log(title)
  return  (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-16">
       
        {
                    toDo.map(item => <SingleToDoCard
                        key={item._id}
                        item={item}
                    ></SingleToDoCard>)
                }
        

        
    </div>
);
};

export default ToDo;
