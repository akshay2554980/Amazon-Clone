import {useState,useEffect} from 'react';
import './App.css';
import Header from './Header';
import Cart from './Cart';
import Login from './Login'
import Home from './Home';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
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
      <Route path="/login">
      <Login />       
      </Route>
      <Route path="/cart">
        <Cart cartItems={cartItems}/>
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/">
        <Home />
      </Route>
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
