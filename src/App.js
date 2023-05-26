import NavBar from "../src/components/NavBar.jsx";
import Posts from "../src/components/Posts.jsx";
import Cards from "../src/components/Cards.jsx";

function App() {
  return (
    <div className="bg-cover bg-center h-screen bg-[url('./assets/background.jpg')]">
      <NavBar />
      <Posts />
      <Cards />
    </div>
  );
}

export default App;
