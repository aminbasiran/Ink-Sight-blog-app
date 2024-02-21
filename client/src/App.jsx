import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import LandingPage from './pages/LandingPage';
import Root from './pages/Root';
import Home from './pages/Home';
import User from './pages/User';
import ViewPostUser from './pages/ViewPostUser';
import ViewPostHome from './pages/ViewPostHome';
import CreatePost from './components/CreatePost/CreatePost';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {


  const router = createBrowserRouter([
    {
        path : "/",
        element : <Root/>,
        children : [
          {
            path: '/',
            element: <LandingPage/>,
            index : true
          },
          {
            path: '/register',
            element: <Register/>
          },
          {
            path: '/login',
            element: <Login/>
          },
          
          {
            element: <RequireAuth/>, 
            children : [
                {
                  path: '/home', 
                  element: <Home/>      
                },
                {
                  path: '/home/post/view/:postID', 
                  element: <ViewPostHome/>      
                },
                {
                  path: '/user',
                  element: <User/>
                },
                {
                  path: '/user/post/view/:postID',
                  element: <ViewPostUser/>
                },
                {
                  path: '/user/post/add',
                  element: <CreatePost/>
                },
            ]
          }
        ]
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
