import logo from './logo.svg';
import './App.css';
import Header from "./MyCompoents/Header";
import Todos from "./MyCompoents/Todos";
import Footer from "./MyCompoents/Footer";


function App() {
  let myVariable = 446; 
  return (
    <>
      <Header title="My ToDo's List" searchbar={"false"}/>
      <Todos/>
      <Footer/>


    </>
  );
}

export default App;