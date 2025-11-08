
import './App.css'
import { Navbar } from './components/Navbar'
import { CreateItem } from './pages/CreateItem'
import { DisplayItem } from './pages/DisplayItem'
import { Route ,Router ,Routes } from 'react-router-dom'
function App() {
 

  return (
    <div>
        <Navbar/>

        <main>
          <Routes>
            <Route path='/' element={ <DisplayItem/>}/>
            <Route path='/createitem' element={<CreateItem/>}/>
          </Routes>
           
        </main>
    
    </div>
  )
}

export default App
