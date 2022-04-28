import {Route, Routes} from "react-router-dom"
import Blogs from "./containers/Blogs";
import CreateProduct from "./containers/CreateProduct";
import CreateStories from "./containers/CreateStories";
import Form from "./containers/Form";
import Home from "./containers/Home";
import Products from "./containers/Products";
import Stories from "./containers/Stories";

function App() {
  return (
    <div className="App">
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/products" element={<Products />} />
			<Route path="/blog" element={<Blogs />} />
			<Route path="/about" element={<Form />} />
			<Route path="/create-product" element={<CreateProduct />} />
			<Route path="/stories" element={<Stories />} />
			<Route path="/create-stories" element={<CreateStories />} />
		</Routes>
    </div>
  );
}

export default App;
