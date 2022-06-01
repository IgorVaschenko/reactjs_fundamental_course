import React, { useContext } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Posts from '../pages/Posts';
import About from '../pages/About';
import PostIdPage from '../pages/PostIdPage';
// import { routes } from '../router/';
import { publicRoutes, privateRoutes } from '../router/';
import { AuthContext } from '../context';
import Loader from './UI/Loader/Loader';


const AppRouter = () => {

    // const isAuth = true;

    const {isAuth, setIsAuth, isLoading} = useContext(AuthContext)
    console.log(isAuth)

    if(isLoading) {
        return <Loader/>
    }

    return (
        isAuth
            ? <Routes >
                {privateRoutes.map(route =>
                    <Route
                        element={route.component}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}

                <Route path="*" element={<Navigate replace to='/posts' />} />
            </Routes >
            : <Routes >
                {publicRoutes.map(route =>
                    <Route
                        element={route.component}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}

                <Route path="*" element={<Navigate replace to='/login' />} />
            </Routes >
    );
}


/********before 2.34************/
// const AppRouter = () => {
//     return (
//         <Routes >

//             {routes.map(route =>
//                 <Route
//                     element={route.component}
//                     path={route.path}
//                     exact={route.exact}
//                     key={route.path}
//                 />
//             )}

//             {/* <Route path="/about" element={<About />} />
//             <Route exact path="/posts" element={<Posts />} />
//             <Route exact path="/posts/:id" element={<PostIdPage/>} /> */}
//             <Route path="*" element={<Navigate replace to='/posts' />} />
//         </Routes >
//     );
// }


export default AppRouter;