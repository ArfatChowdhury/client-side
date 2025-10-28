import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router';
import MainLayout from './Component/mainLayout.jsx';
import UserDetails from './Component/UserDetails.jsx';





// const router = createBrowserRouter([
//   {
//     path: "/",
//     Component: <mainLayout />,
//     children: [{
//       index: true, Component: App
//     }],
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>, // ✅ Use 'element' not 'Component'
    children: [{
      index: true, 
      element: <App /> // ✅ Use 'element' not 'Component'
    },
    {
      path: "users/:id",
      loader: async ({params}) => {
        const res = await fetch(`http://localhost:3000/users/${params.id}`);
        return res.json();
      },
      element: <UserDetails/>
    }
  
  
  ],
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
