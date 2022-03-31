import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import Orders from "./components/Orders/Orders";
import Inventory from "./components/Inventory/Inventory";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Shop />} />
				<Route path='/shop' element={<Shop />} />
				<Route path='/orders' element={<Orders />} />
				<Route path='/inventory' element={<Inventory />} />
			</Routes>
		</>
	);
}

export default App;
