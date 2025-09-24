// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Landing from './components/Landing';
import Recipes from './components/Recipies';
import Footer from './components/Footer';
import About from './components/About';
import Profile from './components/Profile';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';


const RootLayout = ()=> {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <div id='contacts'>
      <Footer/>
      </div>
    </div>
  );
};

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout/>,
      children: [
        {index: true , element: <Landing/>},
        {path: 'recipes' , element: <Recipes/>},
        {path: 'profile' , element: <Profile/>},
        {path: 'about' , element: <About/>}
      ],
    },
  ]);
  
function App() {
  return <RouterProvider router={router} />;
}

export default App;
