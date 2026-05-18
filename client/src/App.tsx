import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header';
import Footer from './components/Footer';
import NewArrivals from './pages/NewArrivals';
import Collection from './pages/Collections';
import ItemPage from './pages/ItemPage'
import CheckOut from './pages/CheckOut'
import AccountInfo from './pages/AccountInfo'
import ShoppingBag from './pages/ShoppingBag';
import Orderhistory from './pages/OrderHistory';
import SignOut from './pages/SignOut';
import AccountSettings from './pages/AccountSettings';
import SavedItems from './pages/SavedItems';
function App() {

  return (
    <>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="new-arrivals" element={<NewArrivals/>}/>
                <Route path="collection">
                    <Route index element={<Collection/>}/>
                    <Route path=":id" element={<ItemPage/>}/>
                </Route>
                <Route path="user">
                    <Route path="personal-info" element={<AccountInfo/>}/>
                    <Route path="order-history" element={<Orderhistory/>}/>
                    <Route path="sign-out" element={<SignOut/>}/>
                    <Route path="account-settings" element={<AccountSettings/>}/>
                    <Route path="saved-items" element={<SavedItems/>}/>
                </Route>
                <Route path="shopping-bag" element={<ShoppingBag/>}/>
                <Route path="checkout" element={<CheckOut/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </>
  )
}

export default App
