import Card from "../components/Card";
import Header from "../components/Header";
import Todocontainer from "../components/Todocontainer";
import { useLocation } from 'react-router-dom';

function Landing() {
    const name = useLocation()

    // console.log(name.state.user);
  
    return (
        <>

            


                    <>
                        {/* header  */}
                        <Header name={name.state.user} />
                        {/* card  */}
                        <div className="flex flex-wrap justify-between my-4 gap-7">
                            <Card bgcolor={"#8272DA"} title={"23°"} subtitle={"Coimbatore"} />
                            <Card bgcolor={"#FD6663"} title={"June 06°"} subtitle={"8:45PM"} />
                            <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"} />
                        </div>
                        {/* todo container  */}
                        <div className="flex flex-wrap justify-center mt-3 md:justify-between gap-7">
                            <Todocontainer />
                        </div>
                    </>


                

        </>
    );
}

export default Landing;