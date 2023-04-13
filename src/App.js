import React from 'react';
import {Routes, Route} from "react-router-dom";
import './App.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import Contacts from "./Components/Contacts/Contacts";
import Terms from "./Components/Terms/Terms";
import Shipping from "./Components/Shipping/Shipping";
import Privacy from "./Components/Privacy/Privacy";
import NotFound from "./Components/NotFound/NotFound";
import ProductPage from "./Components/ProductPage/ProductPage";

function App() {
  return (
      <div className="App">
          <Header/>
          <Routes>
                <Route path='/SHOPPE-React-Store' element={<Main />} />
                {/*<Route path='/' element={<Main />} />*/}
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/terms-of-service' element={<Terms />} />
                <Route path='/shipping-and-returns' element={<Shipping />} />
                <Route path='/privacy-policy' element={<Privacy />} />
                <Route path='/product/:productId' element={<ProductPage />} />
              <Route path='/SHOPPE-React-Store/contacts' element={<Contacts />} />
              <Route path='/SHOPPE-React-Store/terms-of-service' element={<Terms />} />
              <Route path='/SHOPPE-React-Store/shipping-and-returns' element={<Shipping />} />
              <Route path='/SHOPPE-React-Store/privacy-policy' element={<Privacy />} />
              <Route path='/SHOPPE-React-Store/product/:productId' element={<ProductPage />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        <Footer/>
      </div>
  );
}

export default App;
