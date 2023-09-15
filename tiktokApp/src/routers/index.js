import Home from '../Pages/Home';
import Fllowing from '../Pages/Fllowing';
import Profile from '../Pages/Profie';
import Upload from '../Pages/Upload';
import Register from '../Pages/Register';
import HeaderOnly from '../components/Layout/HeaderOnly';
const publicRouter = [
    { path: '/', component: Home },
    { path: '/following', component: Fllowing },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/register', component: Register, layout: null },
];
export { publicRouter };
