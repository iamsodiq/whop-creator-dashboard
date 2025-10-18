// Dynamic dummy analytics data for the Creator Dashboard
export const analyticsData = {
  // Revenue Trends - Weekly data for past 8 weeks
  revenueTrends: [
    { week: 'Week 1', revenue: 12500, date: '2024-01-01' },
    { week: 'Week 2', revenue: 13800, date: '2024-01-08' },
    { week: 'Week 3', revenue: 15200, date: '2024-01-15' },
    { week: 'Week 4', revenue: 16800, date: '2024-01-22' },
    { week: 'Week 5', revenue: 14500, date: '2024-01-29' },
    { week: 'Week 6', revenue: 17200, date: '2024-02-05' },
    { week: 'Week 7', revenue: 18900, date: '2024-02-12' },
    { week: 'Week 8', revenue: 20100, date: '2024-02-19' }
  ],

  // Member Retention - Active vs Churned members by month
  memberRetention: [
    { month: 'Jan', activeMembers: 1250, churnedMembers: 45, retentionRate: 96.4 },
    { month: 'Feb', activeMembers: 1380, churnedMembers: 52, retentionRate: 96.2 },
    { month: 'Mar', activeMembers: 1520, churnedMembers: 38, retentionRate: 97.5 },
    { month: 'Apr', activeMembers: 1680, churnedMembers: 41, retentionRate: 97.6 },
    { month: 'May', activeMembers: 1450, churnedMembers: 58, retentionRate: 96.0 },
    { month: 'Jun', activeMembers: 1720, churnedMembers: 35, retentionRate: 98.0 },
    { month: 'Jul', activeMembers: 1890, churnedMembers: 42, retentionRate: 97.8 },
    { month: 'Aug', activeMembers: 2010, churnedMembers: 39, retentionRate: 98.1 }
  ],

  // Refund Analysis - Distribution by reason
  refundAnalysis: [
    { reason: 'Accidental Purchase', count: 45, percentage: 35.2, amount: 13450 },
    { reason: 'Product Not Delivered', count: 28, percentage: 21.9, amount: 8400 },
    { reason: 'Low Value', count: 22, percentage: 17.2, amount: 6600 },
    { reason: 'Technical Issues', count: 18, percentage: 14.1, amount: 5400 },
    { reason: 'Changed Mind', count: 15, percentage: 11.7, amount: 4500 }
  ],

  // Additional metrics for the existing charts
  productPerformance: [
    { name: 'Pro Creator Toolkit', revenue: 68540, percentage: 35 },
    { name: 'Premium Discord Access', revenue: 29110, percentage: 15 },
    { name: 'Editing Presets Pack', revenue: 17480, percentage: 9 },
    { name: 'Course: Monetize on Whop', revenue: 9310, percentage: 5 },
    { name: 'Exclusive Content Bundle', revenue: 4010, percentage: 2 },
    { name: 'Other Products', revenue: 64000, percentage: 34 }
  ],

  memberGrowth: [
    { period: 'Q1 2023', newMembers: 1200, churnedMembers: 150 },
    { period: 'Q2 2023', newMembers: 1450, churnedMembers: 180 },
    { period: 'Q3 2023', newMembers: 1680, churnedMembers: 200 },
    { period: 'Q4 2023', newMembers: 1920, churnedMembers: 220 },
    { period: 'Q1 2024', newMembers: 2100, churnedMembers: 190 }
  ]
}

// Color schemes for different chart types
export const chartColors = {
  primary: ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6', '#06b6d4'],
  revenue: '#3b82f6',
  active: '#10b981',
  churned: '#ef4444',
  refund: ['#ef4444', '#f59e0b', '#8b5cf6', '#06b6d4', '#84cc16']
}

// Helper functions for data formatting
export const formatCurrency = (value) => `$${value.toLocaleString()}`
export const formatPercentage = (value) => `${value.toFixed(1)}%`
export const formatNumber = (value) => value.toLocaleString()

