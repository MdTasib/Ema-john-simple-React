import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import Orders from "./components/Orders/Orders";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import SingUp from "./components/SingUp/SingUp";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Shop />} />
				<Route path='/shop' element={<Shop />} />
				<Route path='/orders' element={<Orders />} />
				<Route path='/inventory' element={<Inventory />} />
				<Route path='/login' element={<Login />} />
				<Route path='/singup' element={<SingUp />} />
			</Routes>
		</>
	);
}

export default App;
