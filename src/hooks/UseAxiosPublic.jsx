import axios from "axios";


const axiosPublic =axios.create({
    baseURL:'https://task-managment-platform-server.vercel.app'
})

const UseAxiosPublic = () => {
    return axiosPublic
};

export default UseAxiosPublic;