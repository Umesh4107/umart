import React from 'react'
import './App.css'
import Homepage from './Store/Pages/Homepage'
import {Routes, Route} from 'react-router-dom'
import Mobilepage from './Store/Pages/mobilepage'
import Acpage from './Store/Pages/acpage'
import Computerspage from './Store/Pages/computerspage'
import Menpage from './Store/Pages/menpage'
import Mobilesingle from './Store/Pages/singlepages/mobilesingle'
import Acsingle from './Store/Pages/singlepages/acsingle'
import Mensingle from './Store/Pages/singlepages/mensingle'
import Computersingle from './Store/Pages/singlepages/computersingle'
import Womansingle from './Store/Pages/singlepages/womansingle'
import Womanpage from './Store/Pages/womanpage'
import Bookspage from './Store/Pages/bookspage'
import Booksingle from './Store/Pages/singlepages/booksingle'
import FridgePage from './Store/Pages/fridgepage'
import Fridgesingle from './Store/Pages/singlepages/fridgesingle'
import Kitchenpage from './Store/Pages/kitchenpage'
import Kitchensingle from './Store/Pages/singlepages/kitchensingle'
import Speakerspage from './Store/Pages/speakerspage'
import Speakersingle from './Store/Pages/singlepages/speakersingle'
import Tvspage from './Store/Pages/tvspage'
import Tvsingle from './Store/Pages/singlepages/tvsingle'
import SignInSignUpPage from './Store/Pages/signinpage'
import FurnitureSingle from './Store/Pages/singlepages/furnituresingle'
import FurniturePage from './Store/Pages/furniturepage'
import SearchResults from './Store/Pages/searchresultspage'

const App = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={< Homepage />} />
          <Route path='/mobilepage' element={< Mobilepage />} />
          <Route path='/acpage' element={< Acpage/> } />
          <Route path='/computerspage' element={< Computerspage/> } />
          <Route path='/menpage' element={< Menpage/> } />
          <Route path='/mobiles/:id' element={< Mobilesingle/>} />
          <Route path='/ac/:id' element={< Acsingle/> } />
          <Route path='/men/:id' element={< Mensingle/> } />
          <Route path='/computer/:id' element={< Computersingle/> } />
          <Route path='/woman/:id' element={< Womansingle/> } />
          <Route path='/womanpage' element={< Womanpage/> } />
          <Route path='/bookspage' element={< Bookspage/> } />
          <Route path='/books/:id' element={< Booksingle/> } />
          <Route path='/fridgepage' element={< FridgePage/> } />
          <Route path='/fridge/:id' element={< Fridgesingle/> } />
          <Route path='/kitchenpage' element={< Kitchenpage/> } />
          <Route path='/kitchen/:id' element={< Kitchensingle/> } />
          <Route path='/speakerspage' element={< Speakerspage/> } />
          <Route path='/speaker/:id' element={< Speakersingle/> } />
          <Route path='/tvspage' element={< Tvspage/> } />
          <Route path='/tv/:id' element={< Tvsingle/> } />
          <Route path='/signinpage' element={< SignInSignUpPage/> } />
          <Route path='/furniturepage' element={< FurniturePage/> } />
          <Route path='/furniture/:id' element={< FurnitureSingle/> } />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
        
      
        
    </div>
  )
}

export default App