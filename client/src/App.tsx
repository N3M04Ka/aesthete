import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header';
import Footer from './components/Footer';
import NewArrivals from './pages/NewArrivals';
import Collection from './pages/Collections';
function App() {

  return (
    <>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/new-arrivals" element={<NewArrivals/>}/>
                <Route path="/collection" element={<Collection/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </>
  )
}

export default App
