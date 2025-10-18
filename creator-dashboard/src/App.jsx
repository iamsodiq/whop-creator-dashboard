import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Overview from './pages/Overview'
import Members from './pages/Members'
import Refunds from './pages/Refunds'
import Analytics from './pages/Test'
import './App.css'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  console.log('App component rendering')

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        <div className="lg:ml-64">
          <Navbar onMenuClick={() => setSidebarOpen(true)} />
          <main className="min-h-screen">
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/members" element={<Members />} />
              <Route path="/refunds" element={<Refunds />} />
              <Route path="/analytics" element={<Analytics />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App