import React from 'react';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Error from './components/Error/Error';

const App = () => {

  return (
    <>

    <BrowserRouter>

      <Navbar/>

      <Routes>

        <Route path='/' element={<ItemListContainer/>}/>

        <Route path='/categoria/:categoryId' element={<ItemListContainer/>}/>

        <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>

        <Route path='*' element={<Error/>}/>
        
      </Routes>

      <Footer/>
      
    </BrowserRouter>

    </>
  );
};

export default App