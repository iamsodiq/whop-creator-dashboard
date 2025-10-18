import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import LoginScreen from './components/LoginScreen'
import Overview from './pages/Overview'
import Members from './pages/Members'
import Refunds from './pages/Refunds'
import Analytics from './pages/Test'
import './App.css'

// Protected Route component
function ProtectedRoute({ children, allowedRoles = [] }) {
  const { isAuthenticated, hasRole, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />
  }

  if (allowedRoles.length > 0 && !allowedRoles.some(role => hasRole(role))) {
    return <Navigate to="/" replace />
  }

  return children
}

// Main App Content
function AppContent() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { isAuthenticated, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated()) {
    return <LoginScreen />
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <div className="lg:ml-64">
        <Navbar onMenuClick={() => setSidebarOpen(true)} />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={
              <ProtectedRoute>
                <Overview />
              </ProtectedRoute>
            } />
            <Route path="/members" element={
              <ProtectedRoute allowedRoles={['Admin']}>
                <Members />
              </ProtectedRoute>
            } />
            <Route path="/refunds" element={
              <ProtectedRoute>
                <Refunds />
              </ProtectedRoute>
            } />
            <Route path="/analytics" element={
              <ProtectedRoute>
                <Analytics />
              </ProtectedRoute>
            } />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  )
}

export default App







