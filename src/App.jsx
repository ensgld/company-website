import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="hakkimizda" element={<About />} />
        <Route path="hizmetler" element={<Services />} />
        <Route path="iletisim" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
