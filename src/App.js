import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NewProducts from "./Components/NewProducts/NewProducts";
import Contacts from "./Components/Contacts/Contacts";
import Terms from "./Components/Terms/Terms";
import Shipping from "./Components/Shipping/Shipping";
import Privacy from "./Components/Privacy/Privacy";
import NotFound from "./Components/NotFound/NotFound";
import ProductPage from "./Components/ProductPage/ProductPage";

const router = createBrowserRouter([
  {
    path: "SHOPPE-React-Store/",
    element: <Main/>
  },
  {
    path: "new",
    element: <NewProducts/>
  },
  {
    path: "contacts",
    element: <Contacts/>
  },
  {
    path: "terms-of-service",
    element: <Terms/>
  },
  {
    path: "shipping-and-returns",
    element: <Shipping/>
  },
  {
    path: "privacy-policy",
    element: <Privacy/>
  },
  {
    path: "*",
    element: <NotFound/>
  },
  {
    path: "product/:productId",
    element: <ProductPage/>
  },
  {
    path: "*",
    element: <NotFound/>
  },
]);
function App() {
  return (
      <div className="App">
        <Header/>
        <RouterProvider router={router} />
        <Footer/>
      </div>
  );
}

export default App;
