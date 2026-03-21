   import './App.css'
  import {BrowserRouter, Routes, Route} from 'react-router-dom'
  import Home from './Home'
 
  import About from './About'
  import Service from './Service'
  
  import Navbar from './Navbar'
  import Collections from './Collections'
  import Login from './Login'
  import Dealership from './Dealership'
  import All from './All'
  import Classified from './Classified'
  import Rental  from './Rental'
  import Misc from './Misc'
  import Cardealership from './Cardealership'
import ClassifiedList from './ClassifiedList'
import CarList from './CarList';
import BookingForm from './BookingForm';
import Shop from './Shop'

  
  function App() {
    
  
    return (
      <>
      
        <div>
          <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path ='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Service' element={<Service />} />
            <Route path='/Login' element={<Login />} />
            <Route path='Cardealership' element={<Cardealership/>} />
            <Route path='ClassifiedList' element={<ClassifiedList/>} />
            <Route path="/cars" element={<CarList />} />
            <Route path="/book" element={<BookingForm />} />
            <Route path="/Shop" element={<Shop/>} />

             <Route path ='/Collections' element={<Collections />} />
             <Route path='/Service' element={<Service />} >
             <Route path='Element' element={<Element />} />
             <Route index element={<All />} /> 
             <Route path='All' element={<All />} />
             <Route path='Dealership' element={<Dealership />} />
             <Route path='Classified' element={<Classified />} />
             <Route path='Rental' element={<Rental />} />
             <Route path='Misc' element={<Misc/>} />
            </Route>  
            
          </Routes>
          </BrowserRouter>
        </div>
      </>
    )
  }
  
  export default App
  