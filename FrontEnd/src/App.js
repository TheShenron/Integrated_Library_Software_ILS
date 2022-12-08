import AllRoute from "./Routes/AllRoute";
import Navbar from "./components/Navbar";
import BreadCrumb from "./components/BreadCrumb";

function App() {
  return (
    <>
      <Navbar/>
      <AllRoute />
      <BreadCrumb/>
    </>
  );
}

export default App;
