import './App.css'
import Layout from './components/Layout/Layout'
import { Routes, Route } from 'react-router'
import PlanetStats from './components/PlanetStats/PlanetStats'

import data from '../data.json';

const planet = data.find(p => p.name === 'Mercury');


function App() {

  return (
    <>
     <Layout>
      <Routes>
          <Route path="/mercury" element={<PlanetStats planet={planet}/>} />
      </Routes>
     </Layout>
    </>
  )
}

export default App
