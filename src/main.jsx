import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import './index.css';

import Layout from './Layout.jsx';
import Home from "./components/Home/Home.jsx";
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact';
import User from './components/User/User.jsx';
import Github from './components/Github/Github.jsx';
import { githubInfoLoader } from './components/Github/Github';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: 'about',
//         element: <About />,
//       },
//       {
//         path: 'contact',
//         element: <Contact />,
//       }
//     ],
//   },
// ]);
 const router = createBrowserRouter(
 createRoutesFromElements(
   <Route path = '/' element={<Layout/>}>
   <Route path = '' element={<Home/>}/>
   <Route path = 'about' element={<About/>}/>
   <Route path = 'contact' element={<Contact/>}/>
   <Route path = 'user/:id' element={<User/>}/>
   <Route 
   loader={githubInfoLoader}
   path = 'Github' 
   element={<Github/>}
   
   
   />




   </Route>
 )

 )
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);