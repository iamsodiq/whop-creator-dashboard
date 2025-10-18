import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('dashboard_user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])

  // Login function
  const login = (role) => {
    const userData = {
      role,
      name: role === 'Creator' ? 'Creator User' : 'Admin User',
      email: role === 'Creator' ? 'creator@example.com' : 'admin@example.com',
      loginTime: new Date().toISOString()
    }
    
    setUser(userData)
    localStorage.setItem('dashboard_user', JSON.stringify(userData))
  }

  // Logout function
  const logout = () => {
    setUser(null)
    localStorage.removeItem('dashboard_user')
  }

  // Check if user has specific role
  const hasRole = (role) => {
    return user?.role === role
  }

  // Check if user is authenticated
  const isAuthenticated = () => {
    return user !== null
  }

  const value = {
    user,
    login,
    logout,
    hasRole,
    isAuthenticated,
    loading
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}


