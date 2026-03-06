import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import DrillLibrary from './pages/DrillLibrary'
import PracticePlan from './pages/PracticePlan'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drills" element={<DrillLibrary />} />
        <Route path="/practice-plan" element={<PracticePlan />} />
      </Routes>
    </BrowserRouter>
  )
}
