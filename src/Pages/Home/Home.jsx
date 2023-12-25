import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner";
import SectionTitle from "../../components/SocialLogin/SectionTitle/SectionTitle";
import PeopleUse from "../../components/PeopleUse";


const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Task Management | Home</title>
            </Helmet>
            <Banner/>
            <SectionTitle
        heading="type of people"
        subHeading="using this"
      ></SectionTitle>
      <PeopleUse/>

            
        </div>
    );
};

export default Home;