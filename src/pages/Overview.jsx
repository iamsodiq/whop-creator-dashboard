import { useState, useEffect } from 'react'
import { getRecentTransactions, getTransactionStats, formatCurrency, formatDate, generateInsights, addRandomPurchase, addRandomRefund, getCurrentTransactions } from '../data/mockTransactions'

// Dummy data
const dashboardData = {
  totalRevenue: 128450.75,
  activeMembers: 8421,
  refundRequests: 36,
  retentionRate: 92.8,
  topProducts: [
    { name: 'Pro Creator Toolkit', revenue: 68540, members: 3120, growth: '+12.5%' },
    { name: 'Premium Discord Access', revenue: 29110, members: 2104, growth: '+8.2%' },
    { name: 'Editing Presets Pack', revenue: 17480, members: 982, growth: '+15.3%' },
    { name: 'Course: Monetize on Whop', revenue: 9310, members: 405, growth: '+5.7%' },
    { name: 'Exclusive Content Bundle', revenue: 4010, members: 201, growth: '+22.1%' }
  ]
}

function StatCard({ title, value, subtitle, trend, icon }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
          {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
        </div>
        {icon && (
          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
            {icon}
          </div>
        )}
      </div>
      {trend && (
        <div className="mt-4 flex items-center">
          <span className={`text-sm font-medium ${trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
            {trend}
          </span>
          <span className="text-sm text-gray-500 ml-2">vs last month</span>
        </div>
      )}
    </div>
  )
}

function ProductTable({ products }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Top Products</h3>
        <p className="text-sm text-gray-600">Revenue and member count by product</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Revenue
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Members
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Growth
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((product, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{product.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">${product.revenue.toLocaleString()}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{product.members.toLocaleString()}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    product.growth.startsWith('+') 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {product.growth}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function RecentTransactionsTable({ transactions }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
        <p className="text-sm text-gray-600">Latest payment and refund activity</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Transaction
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {transactions.map((transaction) => (
              <tr key={transaction.transactionId} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{transaction.transactionId}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{transaction.customerName}</div>
                  <div className="text-sm text-gray-500">{transaction.customerEmail}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{transaction.productName}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className={`text-sm font-semibold ${
                    transaction.type === 'purchase' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {transaction.type === 'purchase' ? '+' : '-'}{formatCurrency(transaction.amount)}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    transaction.type === 'purchase' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {transaction.type === 'purchase' ? 'Purchase' : 'Refund'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{formatDate(transaction.date)}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function InsightsPanel({ insights }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Key Insights</h3>
        <p className="text-sm text-gray-600">Automated analysis of your business performance</p>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {insights.map((insight, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border-l-4 ${
                insight.isPositive
                  ? 'bg-green-50 border-green-400'
                  : 'bg-red-50 border-red-400'
              }`}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <span className="text-2xl">{insight.icon}</span>
                </div>
                <div className="ml-3 flex-1">
                  <p className={`text-sm font-medium ${
                    insight.isPositive ? 'text-green-800' : 'text-red-800'
                  }`}>
                    {insight.message}
                  </p>
                  {insight.change !== 0 && (
                    <div className="mt-1">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        insight.isPositive
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {insight.change > 0 ? '+' : ''}{insight.change.toFixed(1)}%
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function SimulationButtons({ onPurchase, onRefund, isProcessing }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Simulate Activity</h3>
        <p className="text-sm text-gray-600">Test the dashboard with simulated transactions</p>
      </div>
      <div className="p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={onPurchase}
            disabled={isProcessing}
            className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            {isProcessing ? 'Processing...' : 'Simulate New Purchase'}
          </button>
          <button
            onClick={onRefund}
            disabled={isProcessing}
            className="flex-1 bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            {isProcessing ? 'Processing...' : 'Simulate Refund'}
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-3 text-center">
          Click to add random transactions and see real-time updates
        </p>
      </div>
    </div>
  )
}

export default function Overview() {
  const [transactions, setTransactions] = useState(getCurrentTransactions())
  const [isProcessing, setIsProcessing] = useState(false)
  const [notification, setNotification] = useState(null)
  
  // Calculate metrics from current transactions
  const recentTransactions = transactions.slice(0, 10)
  const transactionStats = getTransactionStats()
  const insights = generateInsights()

  // Function to refresh data
  const refreshData = () => {
    setTransactions([...getCurrentTransactions()])
  }

  // Show notification
  const showNotification = (message, type = 'success') => {
    setNotification({ message, type })
    setTimeout(() => setNotification(null), 3000)
  }

  // Handle purchase simulation
  const handleSimulatePurchase = async () => {
    setIsProcessing(true)
    try {
      const newTransaction = addRandomPurchase()
      if (newTransaction) {
        refreshData()
        showNotification(`New purchase: ${newTransaction.productName} - ${formatCurrency(newTransaction.amount)}`, 'success')
      }
    } catch (error) {
      console.error('Error adding purchase:', error)
      showNotification('Error adding purchase', 'error')
    } finally {
      setIsProcessing(false)
    }
  }

  // Handle refund simulation
  const handleSimulateRefund = async () => {
    setIsProcessing(true)
    try {
      const newRefund = addRandomRefund()
      if (newRefund) {
        refreshData()
        showNotification(`New refund: ${newRefund.productName} - ${formatCurrency(newRefund.amount)}`, 'warning')
      } else {
        showNotification('No purchases available to refund', 'error')
      }
    } catch (error) {
      console.error('Error adding refund:', error)
      showNotification('Error adding refund', 'error')
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className="p-6">
      {/* Notification */}
      {notification && (
        <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm ${
          notification.type === 'success' ? 'bg-green-500 text-white' :
          notification.type === 'warning' ? 'bg-yellow-500 text-white' :
          'bg-red-500 text-white'
        }`}>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">{notification.message}</span>
            <button 
              onClick={() => setNotification(null)}
              className="ml-2 text-white hover:text-gray-200"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Revenue"
          value={formatCurrency(transactionStats.totalRevenue)}
          subtitle="All time"
          trend="+12.5%"
          icon={
            <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
          }
        />
        <StatCard
          title="Active Members"
          value={dashboardData.activeMembers.toLocaleString()}
          subtitle="Past 30 days"
          trend="+8.2%"
          icon={
            <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          }
        />
        <StatCard
          title="Refund Requests"
          value={transactionStats.totalRefunds}
          subtitle="Past 30 days"
          trend="-15.3%"
          icon={
            <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />
        <StatCard
          title="Net Revenue"
          value={formatCurrency(transactionStats.netRevenue)}
          subtitle="After refunds"
          trend="+2.1%"
          icon={
            <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          }
        />
      </div>

      {/* Simulation Buttons */}
      <div className="mb-8">
        <SimulationButtons 
          onPurchase={handleSimulatePurchase}
          onRefund={handleSimulateRefund}
          isProcessing={isProcessing}
        />
      </div>

      {/* Key Insights Panel */}
      <div className="mb-8">
        <InsightsPanel insights={insights} />
      </div>

      {/* Products Table */}
      <div className="mb-8">
        <ProductTable products={dashboardData.topProducts} />
      </div>

      {/* Recent Transactions Table */}
      <RecentTransactionsTable transactions={recentTransactions} />
    </div>
  )
}


