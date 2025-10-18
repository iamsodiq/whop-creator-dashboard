import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'

export default function LoginScreen() {
  const [selectedRole, setSelectedRole] = useState('')
  const { login } = useAuth()

  const handleLogin = (role) => {
    login(role)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Creator Dashboard</h2>
          <p className="mt-2 text-sm text-gray-600">
            Choose your role to access the dashboard
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Select Your Role
              </h3>
              
              {/* Creator Role */}
              <div 
                className={`relative border rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                  selectedRole === 'Creator' 
                    ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-500' 
                    : 'border-gray-300 hover:border-gray-400'
                }`}
                onClick={() => setSelectedRole('Creator')}
              >
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      type="radio"
                      name="role"
                      value="Creator"
                      checked={selectedRole === 'Creator'}
                      onChange={() => setSelectedRole('Creator')}
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                    />
                  </div>
                  <div className="ml-3">
                    <div className="flex items-center">
                      <span className="text-lg">🎨</span>
                      <h4 className="text-lg font-medium text-gray-900 ml-2">Creator</h4>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      Access to Overview, Analytics, and Refunds pages
                    </p>
                    <ul className="text-xs text-gray-500 mt-2 space-y-1">
                      <li>• View revenue and transaction data</li>
                      <li>• Analyze business performance</li>
                      <li>• Manage refund requests</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Admin Role */}
              <div 
                className={`relative border rounded-lg p-4 cursor-pointer transition-all duration-200 mt-4 ${
                  selectedRole === 'Admin' 
                    ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-500' 
                    : 'border-gray-300 hover:border-gray-400'
                }`}
                onClick={() => setSelectedRole('Admin')}
              >
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      type="radio"
                      name="role"
                      value="Admin"
                      checked={selectedRole === 'Admin'}
                      onChange={() => setSelectedRole('Admin')}
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                    />
                  </div>
                  <div className="ml-3">
                    <div className="flex items-center">
                      <span className="text-lg">⚙️</span>
                      <h4 className="text-lg font-medium text-gray-900 ml-2">Admin</h4>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      Full access to all dashboard features
                    </p>
                    <ul className="text-xs text-gray-500 mt-2 space-y-1">
                      <li>• All Creator features</li>
                      <li>• Member management</li>
                      <li>• Advanced analytics</li>
                      <li>• System administration</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Login Button */}
            <div>
              <button
                onClick={() => handleLogin(selectedRole)}
                disabled={!selectedRole}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
              >
                {selectedRole ? `Login as ${selectedRole}` : 'Select a role to continue'}
              </button>
            </div>

            {/* Demo Info */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Demo Information</h4>
              <p className="text-xs text-gray-600">
                This is a mock authentication system. Your role selection will be stored locally 
                and determine which pages you can access. You can change roles by logging out and back in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


