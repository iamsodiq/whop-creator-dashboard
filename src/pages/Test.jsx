import { useState, useEffect } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts'
import { analyticsData, chartColors, formatCurrency, formatPercentage, formatNumber } from '../data/analyticsData'
import { getCurrentTransactions, getTransactionsByType, getTransactionStats, formatCurrency as formatTransactionCurrency } from '../data/mockTransactions'

function StatCard({ title, value, change, trend, icon }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
          <div className="mt-2 flex items-center">
            <span className={`text-sm font-medium ${change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
              {change}
            </span>
            <span className="text-sm text-gray-500 ml-2">vs last month</span>
          </div>
        </div>
        {icon && (
          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
            {icon}
          </div>
        )}
      </div>
    </div>
  )
}

export default function Analytics() {
  const [transactions, setTransactions] = useState(getCurrentTransactions())
  
  // Update transactions when the data changes
  useEffect(() => {
    const interval = setInterval(() => {
      setTransactions([...getCurrentTransactions()])
    }, 1000) // Check for updates every second
    
    return () => clearInterval(interval)
  }, [])
  
  const transactionStats = getTransactionStats()
  const purchases = getTransactionsByType('purchase')
  const refunds = getTransactionsByType('refund')

  // Generate dynamic revenue trends from transaction data
  const generateRevenueTrends = () => {
    const weeklyData = []
    const now = new Date()
    
    for (let i = 7; i >= 0; i--) {
      const weekStart = new Date(now)
      weekStart.setDate(now.getDate() - (i * 7))
      
      const weekEnd = new Date(weekStart)
      weekEnd.setDate(weekStart.getDate() + 6)
      
      const weekTransactions = purchases.filter(transaction => {
        const transactionDate = new Date(transaction.date)
        return transactionDate >= weekStart && transactionDate <= weekEnd
      })
      
      const weekRevenue = weekTransactions.reduce((sum, transaction) => sum + transaction.amount, 0)
      
      weeklyData.push({
        week: `Week ${8 - i}`,
        revenue: weekRevenue,
        date: weekStart.toISOString().split('T')[0]
      })
    }
    
    return weeklyData
  }

  // Generate dynamic refund analysis from transaction data
  const generateRefundAnalysis = () => {
    const refundReasons = {}
    
    refunds.forEach(refund => {
      const reason = refund.reason || 'Other'
      if (!refundReasons[reason]) {
        refundReasons[reason] = { count: 0, amount: 0 }
      }
      refundReasons[reason].count++
      refundReasons[reason].amount += refund.amount
    })
    
    const totalRefunds = refunds.length
    return Object.entries(refundReasons).map(([reason, data]) => ({
      reason,
      count: data.count,
      amount: data.amount,
      percentage: ((data.count / totalRefunds) * 100).toFixed(1)
    }))
  }

  const dynamicRevenueTrends = generateRevenueTrends()
  const dynamicRefundAnalysis = generateRefundAnalysis()

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
        <p className="text-gray-600">Detailed insights into your creator business performance</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Revenue"
          value={formatTransactionCurrency(transactionStats.totalRevenue)}
          change="+15.2%"
          icon={
            <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
          }
        />
        <StatCard
          title="Total Transactions"
          value={transactionStats.totalTransactions.toString()}
          change="+12.8%"
          icon={
            <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          }
        />
        <StatCard
          title="Refund Rate"
          value={`${transactionStats.refundRate.toFixed(1)}%`}
          change="-2.1%"
          icon={
            <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          }
        />
        <StatCard
          title="Net Revenue"
          value={formatTransactionCurrency(transactionStats.netRevenue)}
          change="+5.7%"
          icon={
            <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          }
        />
      </div>

      {/* Revenue Trends - Line Chart */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Revenue Trends</h3>
          <p className="text-gray-600">Weekly revenue performance over the past 8 weeks</p>
        </div>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={dynamicRevenueTrends} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="week" 
                stroke="#6b7280"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                stroke="#6b7280"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip 
                formatter={(value) => [formatTransactionCurrency(value), 'Revenue']}
                labelFormatter={(label) => `Week: ${label}`}
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="revenue" 
                stroke={chartColors.revenue} 
                strokeWidth={3} 
                name="Weekly Revenue"
                dot={{ fill: chartColors.revenue, strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: chartColors.revenue, strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Member Retention - Bar Chart */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Member Retention</h3>
          <p className="text-gray-600">Active vs churned members comparison by month</p>
        </div>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={analyticsData.memberRetention} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="month" 
                stroke="#6b7280"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                stroke="#6b7280"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => formatNumber(value)}
              />
              <Tooltip 
                formatter={(value, name) => [formatNumber(value), name === 'activeMembers' ? 'Active Members' : 'Churned Members']}
                labelFormatter={(label) => `Month: ${label}`}
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Legend />
              <Bar 
                dataKey="activeMembers" 
                fill={chartColors.active} 
                name="Active Members"
                radius={[4, 4, 0, 0]}
              />
              <Bar 
                dataKey="churnedMembers" 
                fill={chartColors.churned} 
                name="Churned Members"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Refund Analysis - Pie Chart */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Refund Analysis</h3>
          <p className="text-gray-600">Distribution of refunds by reason</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={dynamicRefundAnalysis}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ reason, percentage }) => `${reason}: ${percentage}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {dynamicRefundAnalysis.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={chartColors.refund[index % chartColors.refund.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value, name, props) => [
                    `${value} refunds (${formatTransactionCurrency(props.payload.amount)})`, 
                    'Count'
                  ]}
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          {/* Refund Details Table */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-gray-900 mb-4">Refund Breakdown</h4>
            {dynamicRefundAnalysis.map((refund, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div 
                    className="w-4 h-4 rounded-full mr-3"
                    style={{ backgroundColor: chartColors.refund[index % chartColors.refund.length] }}
                  ></div>
                  <span className="text-sm font-medium text-gray-900">{refund.reason}</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-gray-900">{refund.count} refunds</div>
                  <div className="text-xs text-gray-500">{formatTransactionCurrency(refund.amount)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

