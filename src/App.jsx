import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
 

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"La tienda de suministros de robots más grande de la región. Pronto podrás conseguir tus robopartes favoritas."}/>
    </>
  )
}

export default App;
