import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import TheoryQuestions from './pages/TheoryQuestions'
import CodeQuestions from './pages/CodeQuestions'
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/theory-questions" element={<TheoryQuestions />} />
        <Route path="/code-questions" element={<CodeQuestions />} />
      </Routes>
    </div>
  )
}

export default App