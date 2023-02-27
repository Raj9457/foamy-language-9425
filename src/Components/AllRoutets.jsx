import {Routes,Route} from "react-router-dom";
import DealZone from "../Pages/DealZone";
import Dining from "../Pages/Dining";
import HomePage from "../Pages/HomePage";
import Interior from "../Pages/Interior";
import Living from "../Pages/Living";
import NotFound from "../Pages/NotFound";
import Outdoor from "../Pages/Outdoor";
import Sofa from "../Pages/Sofa";
import Study from "../Pages/Study";
import Trending from "../Pages/Trending";

function AllRoutes(){
1   
    return <div>
        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/dealzone" element={<DealZone/>}></Route>
            <Route path="/dining" element={<Dining/>}></Route>
            <Route path="/interior" element={<Interior/>}></Route>
            <Route path="/living" element={<Living/>}></Route>
            <Route path="/outdoor" element={<Outdoor/>}></Route>
            <Route path="/sofa" element={<Sofa/>}></Route>
            <Route path="/study" element={<Study/>}></Route>
            <Route path="/trending" element={<Trending/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
        </Routes>

    </div>
}
export default AllRoutes;