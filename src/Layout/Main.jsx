import { Outlet} from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
    // const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp')
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* {noHeaderFooter || <Navbar></Navbar>} */}
            {/* <Outlet></Outlet> */}
            {/* {noHeaderFooter || <Footer></Footer>} */}
        </div>
    );
};

export default Main;