import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";


const UseTask = () => {
    const axiosPublic = UseAxiosPublic();
    const {data:task=[],isPending:loading,refetch} = useQuery({
        queryKey:['task'],
        queryFn:async()=>{
            const res = await axiosPublic.get('/task');
            return res.data;
        }
    })






    return [task, loading,refetch]
};

export default UseTask;