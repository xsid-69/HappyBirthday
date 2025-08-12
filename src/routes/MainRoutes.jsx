import { Routes ,Route} from "react-router-dom"
import Intro from '../pages/Intro'
import Input from '../pages/Input'
import Month from '../pages/Month'
import Mutiply from '../pages/Mutiply'  
import Output from '../pages/Output'
import Multiply50 from '../pages/Multiply50'
import Add from '../pages/Add'
import Form from '../pages/Form'



export const MainRoutes = ()=> {
    return(
        <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/input" element={<Input />} />
            <Route path="/month" element={<Month />} />
            <Route path="/mutiply" element={<Mutiply />} />  
            <Route path="/output" element={<Output />} />
            <Route path="/add" element={<Add />} />
            <Route path="/multiply50" element={<Multiply50 />} />
            <Route path="/form" element={<Form />} />
        </Routes>
    );
}