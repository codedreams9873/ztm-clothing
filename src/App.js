<<<<<<< HEAD
const App = () => {
  return (
    <div className="App">
      <div className="categories-container">
        <div className="category-container">
          {/* <img src="" /> */}
          <div className="category-body-container">
            <h2>Hats</h2>
            <p>Shop Now</p>
          </div>
        </div>
        <div className="category-container">
          {/* <img src="" /> */}
          <div className="category-body-container">
            <h2>Jackets</h2>
            <p>Shop Now</p>
          </div>
        </div>
        <div className="category-container">
          {/* <img src="" /> */}
          <div className="category-body-container">
            <h2>Sneakers</h2>
            <p>Shop Now</p>
          </div>
        </div>
        <div className="category-container">
          {/* <img src="" /> */}
          <div className="category-body-container">
            <h2>Women</h2>
            <p>Shop Now</p>
          </div>
        </div>
        <div className="category-container">
          {/* <img src="" /> */}
          <div className="category-body-container">
            <h2>Men</h2>
            <p>Shop Now</p>
          </div>
        </div>
      </div>
    </div>
  );
}
=======
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";

const Shop = () => {
	return <h1>This is Shop page.</h1>;
};

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path="shop" element={<Shop />} />
			</Route>
		</Routes>
	);
};
>>>>>>> b63054b (Step1. implemented basci routing.)

export default App;
