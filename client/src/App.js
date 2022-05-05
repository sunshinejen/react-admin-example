import Sidebar from "./components/sidebar/Sidebar";
import TopBar from "./components/topbar/Topbar";
import Home from "./components/pages/home/Home";
import "./app.css"





import FeaturedInfo from "./components/featuredInfo/FeaturedInfo";
function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="container">
        <Sidebar />
        <Home/>
      </div>
      
    </div>
  );
}

export default App;
