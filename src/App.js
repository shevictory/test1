import "./styles.css";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Slider from "./components/Slider";
import Categories from "./components/Categories";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="pageContainer">
      <Header />
      <div className="pageDataContainer">
        <SideBar />
        <main className="mainContainer">
          <Slider />
          <Categories />
        </main>
      </div>
      <Footer />
    </div>
  );
}
