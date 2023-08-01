import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import BlogDetailsPage from '../pages/BlogDetailsPage';
import ByCategoryPage from '../pages/ByCategoryPage';

const AppRoute = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<HomePage/>}></Route>
                <Route path='/by-category/:id' element={<ByCategoryPage/>}></Route>
                <Route path='/post-details/:id' element={<BlogDetailsPage/>}></Route>
            </Routes>
            
        </div>
    );
};

export default AppRoute;