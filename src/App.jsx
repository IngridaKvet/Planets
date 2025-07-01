import './App.css'
import Layout from './components/Layout/Layout'
import { Routes, Route, Navigate } from 'react-router'
import data from '../data.json';
import PlanetPage from './components/PlanetPage/PlanetPage';


//const planet = data.find(p => p.name === 'Mercury');


function App() {

  return (
    
     <Layout>
      <Routes>


         <Route path="/" element={<Navigate to="/mercury" replace />} />

         {data.map((planet) =>(
          <Route key={planet.name}
          path={planet.name.toLowerCase()}
          element={<PlanetPage planet={planet}/>}
          />
         ))}
          {/* <Route path="/mercury" element={<PlanetStats planet={planet}/>} /> */}
      </Routes>
     </Layout>
    
  )
}

export default App
