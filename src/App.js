import Header from "./Components/Header";
import Article from "./Components/Article";
import NavBar from "./Components/NavBar";
import Topics from "./Components/Topics";
import Users from "./Components/Users";
import MainSection from "./Components/MainSection";
import './App.css';
import Articles from './Components/Articles';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header className="Header"/>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainSection/>} />
        <Route path="/Topics" element={<Topics/>} />
        <Route path="/Users" element={<Users/>} />
        <Route path="/articles/:article_id" element={<Article/>}></Route>
      </Routes>
      
    
    </div>
  );
}

export default App;
