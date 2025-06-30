import './App.css'
import Layout from './components/Layout/Layout'
import { Routes, Route } from 'react-router'

function App() {

  return (
    <>
     <Layout>
      <Routes>
          <Route path="/" element={<p>HEEEYY</p>} />
      </Routes>
     </Layout>
    </>
  )
}

export default App
