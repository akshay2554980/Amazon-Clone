import {useState,useEffect} from 'react';
import './App.css';
import Header from './Header';
import Cart from './Cart';
import Login from './Login'
import Home from './Home';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { db } from './firebase';
function App() {
  const [cartItems, setcartItems] = useState([]);
  const getcartItems=()=>{
    db.collection('CartItems').onSnapshot((snapshot)=>{
      const tempItems=snapshot.docs.map((doc)=>({
        id:doc.id,
        product: doc.data()
      }
      ))
      setcartItems(tempItems);
    })
  }
  useEffect(()=>{
    getcartItems();
  },[])
  return (
    <Router>
    <div className="App">
      <Header cartItems={cartItems}/>
      <Switch>
      <Route path="/login" exact>
      <Login />       
      </Route>
      <Route path="/cart" exact>
        <Cart cartItems={cartItems}/>
      </Route>
      <Route path="/home" exact>
        <Home />
      </Route>
      <Route path="/" exact>
        <Home />
      </Route>
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
