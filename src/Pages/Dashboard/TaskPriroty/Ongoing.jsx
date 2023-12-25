import UseTask from "../../../hooks/UseTask";
import SingleOngoing from "./SingleOngoing";


const Ongoing = () => {
    const [task] = UseTask();
  const toDo = task.filter((task) => task.status === "ongoing");
//   const { deadline, description, priority, title, _id } = high;
  console.log(toDo);
//   console.log(title)
  return  (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-16">
       
        {
                    toDo.map(item => <SingleOngoing
                        key={item._id}
                        item={item}
                    ></SingleOngoing>)
                }
        

        
    </div>
);
};

export default Ongoing;