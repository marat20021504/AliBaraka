import {Route, Routes} from "react-router-dom"
import Footer from "./components/Footer";
import Blogs from "./containers/Blogs";
import Form from "./containers/Form";
import Home from "./containers/Home";
import Products from "./containers/Products";

function App() {
  return (
    <div className="App">
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/products" element={<Products />} />
			<Route path="/blog" element={<Blogs />} />
			<Route path="/about" element={<Form />} />
		</Routes>
    </div>
  );
}

export default App;
