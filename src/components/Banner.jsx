import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/Kx8QMp8/banner.png)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Task Management Platform </h1>
            {/* <p className="mb-5">Efficient task management ensures timely completion of goals and maximizes productivity by organizing and prioritizing activities.</p> */}
            <Link to="/login"><button className="btn btn-warning">Lets Explore</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Banner;