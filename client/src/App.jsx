// HOC 
import HomeLayoutHOC from "./HOC/Home.Hoc";

// Components
import Temp from "./Components/temp";
import Master from "./Components/master";
import Delivery from "./Components/Delivery";

function App() {
  return (
    <>
      <HomeLayoutHOC path="/" exact component={Temp} />
      <HomeLayoutHOC path="/:type" exact component={Master} />
    </>
  );
}

export default App;