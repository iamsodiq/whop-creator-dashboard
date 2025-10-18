// Mock transaction data for digital products
let mockTransactions = [
  // Recent purchases
  {
    transactionId: 'TXN-2024-001',
    productName: 'Pro Creator Toolkit',
    amount: 299.99,
    type: 'purchase',
    date: '2024-02-19T10:30:00Z',
    customerName: 'Sarah Johnson',
    customerEmail: 'sarah.j@email.com',
    status: 'completed'
  },
  {
    transactionId: 'TXN-2024-002',
    productName: 'Premium Discord Access',
    amount: 499.99,
    type: 'purchase',
    date: '2024-02-19T09:15:00Z',
    customerName: 'Mike Chen',
    customerEmail: 'mike.chen@email.com',
    status: 'completed'
  },
  {
    transactionId: 'TXN-2024-003',
    productName: 'Editing Presets Pack',
    amount: 99.99,
    type: 'purchase',
    date: '2024-02-18T16:45:00Z',
    customerName: 'Emma Wilson',
    customerEmail: 'emma.w@email.com',
    status: 'completed'
  },
  {
    transactionId: 'TXN-2024-004',
    productName: 'Course: Monetize on Whop',
    amount: 199.99,
    type: 'purchase',
    date: '2024-02-18T14:20:00Z',
    customerName: 'David Rodriguez',
    customerEmail: 'david.r@email.com',
    status: 'completed'
  },
  {
    transactionId: 'TXN-2024-005',
    productName: 'Exclusive Content Bundle',
    amount: 149.99,
    type: 'purchase',
    date: '2024-02-17T11:30:00Z',
    customerName: 'Lisa Park',
    customerEmail: 'lisa.park@email.com',
    status: 'completed'
  },
  // Refunds
  {
    transactionId: 'TXN-2024-006',
    productName: 'Pro Creator Toolkit',
    amount: 299.99,
    type: 'refund',
    date: '2024-02-17T08:15:00Z',
    customerName: 'Alex Thompson',
    customerEmail: 'alex.t@email.com',
    status: 'completed',
    reason: 'Accidental Purchase'
  },
  {
    transactionId: 'TXN-2024-007',
    productName: 'Premium Discord Access',
    amount: 499.99,
    type: 'refund',
    date: '2024-02-16T15:30:00Z',
    customerName: 'Jessica Brown',
    customerEmail: 'jessica.b@email.com',
    status: 'completed',
    reason: 'Product Not Delivered'
  },
  {
    transactionId: 'TXN-2024-008',
    productName: 'Editing Presets Pack',
    amount: 99.99,
    type: 'refund',
    date: '2024-02-16T12:45:00Z',
    customerName: 'Ryan Davis',
    customerEmail: 'ryan.d@email.com',
    status: 'completed',
    reason: 'Low Value'
  },
  // More recent transactions
  {
    transactionId: 'TXN-2024-009',
    productName: 'Pro Creator Toolkit',
    amount: 299.99,
    type: 'purchase',
    date: '2024-02-15T13:20:00Z',
    customerName: 'Maria Garcia',
    customerEmail: 'maria.g@email.com',
    status: 'completed'
  },
  {
    transactionId: 'TXN-2024-010',
    productName: 'Course: Monetize on Whop',
    amount: 199.99,
    type: 'purchase',
    date: '2024-02-15T10:10:00Z',
    customerName: 'Kevin Lee',
    customerEmail: 'kevin.lee@email.com',
    status: 'completed'
  },
  {
    transactionId: 'TXN-2024-011',
    productName: 'Exclusive Content Bundle',
    amount: 149.99,
    type: 'refund',
    date: '2024-02-14T17:30:00Z',
    customerName: 'Amanda Taylor',
    customerEmail: 'amanda.t@email.com',
    status: 'completed',
    reason: 'Technical Issues'
  },
  {
    transactionId: 'TXN-2024-012',
    productName: 'Premium Discord Access',
    amount: 499.99,
    type: 'purchase',
    date: '2024-02-14T14:45:00Z',
    customerName: 'Chris Anderson',
    customerEmail: 'chris.a@email.com',
    status: 'completed'
  },
  {
    transactionId: 'TXN-2024-013',
    productName: 'Editing Presets Pack',
    amount: 99.99,
    type: 'purchase',
    date: '2024-02-13T16:20:00Z',
    customerName: 'Rachel Green',
    customerEmail: 'rachel.g@email.com',
    status: 'completed'
  },
  {
    transactionId: 'TXN-2024-014',
    productName: 'Pro Creator Toolkit',
    amount: 299.99,
    type: 'refund',
    date: '2024-02-13T11:15:00Z',
    customerName: 'Tom Wilson',
    customerEmail: 'tom.w@email.com',
    status: 'completed',
    reason: 'Changed Mind'
  },
  {
    transactionId: 'TXN-2024-015',
    productName: 'Course: Monetize on Whop',
    amount: 199.99,
    type: 'purchase',
    date: '2024-02-12T09:30:00Z',
    customerName: 'Sophie Martinez',
    customerEmail: 'sophie.m@email.com',
    status: 'completed'
  },
  {
    transactionId: 'TXN-2024-016',
    productName: 'Exclusive Content Bundle',
    amount: 149.99,
    type: 'purchase',
    date: '2024-02-12T08:45:00Z',
    customerName: 'James White',
    customerEmail: 'james.w@email.com',
    status: 'completed'
  },
  {
    transactionId: 'TXN-2024-017',
    productName: 'Premium Discord Access',
    amount: 499.99,
    type: 'refund',
    date: '2024-02-11T15:20:00Z',
    customerName: 'Nina Patel',
    customerEmail: 'nina.p@email.com',
    status: 'completed',
    reason: 'Accidental Purchase'
  },
  {
    transactionId: 'TXN-2024-018',
    productName: 'Editing Presets Pack',
    amount: 99.99,
    type: 'purchase',
    date: '2024-02-11T12:10:00Z',
    customerName: 'Brandon Kim',
    customerEmail: 'brandon.k@email.com',
    status: 'completed'
  },
  {
    transactionId: 'TXN-2024-019',
    productName: 'Pro Creator Toolkit',
    amount: 299.99,
    type: 'purchase',
    date: '2024-02-10T14:30:00Z',
    customerName: 'Olivia Clark',
    customerEmail: 'olivia.c@email.com',
    status: 'completed'
  },
  {
    transactionId: 'TXN-2024-020',
    productName: 'Course: Monetize on Whop',
    amount: 199.99,
    type: 'refund',
    date: '2024-02-10T10:45:00Z',
    customerName: 'Daniel Smith',
    customerEmail: 'daniel.s@email.com',
    status: 'completed',
    reason: 'Low Value'
  }
]

// Helper functions for transaction data
export const getRecentTransactions = (limit = 10) => {
  return mockTransactions
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit)
}

export const getTransactionsByType = (type) => {
  return mockTransactions.filter(transaction => transaction.type === type)
}

export const getTransactionsByProduct = (productName) => {
  return mockTransactions.filter(transaction => transaction.productName === productName)
}

export const getTotalRevenue = () => {
  const purchases = getTransactionsByType('purchase')
  return purchases.reduce((total, transaction) => total + transaction.amount, 0)
}

export const getTotalRefunds = () => {
  const refunds = getTransactionsByType('refund')
  return refunds.reduce((total, transaction) => total + transaction.amount, 0)
}

export const getNetRevenue = () => {
  return getTotalRevenue() - getTotalRefunds()
}

export const getTransactionStats = () => {
  const purchases = getTransactionsByType('purchase')
  const refunds = getTransactionsByType('refund')
  
  return {
    totalTransactions: mockTransactions.length,
    totalPurchases: purchases.length,
    totalRefunds: refunds.length,
    totalRevenue: getTotalRevenue(),
    totalRefundAmount: getTotalRefunds(),
    netRevenue: getNetRevenue(),
    averageTransactionValue: getTotalRevenue() / purchases.length,
    refundRate: (refunds.length / purchases.length) * 100
  }
}

// Format currency helper
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount)
}

// Format date helper
export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

// Generate insights from transaction data
export const generateInsights = () => {
  const now = new Date()
  const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
  const twoWeeksAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000)
  
  // Get transactions for current week and previous week
  const currentWeekTransactions = mockTransactions.filter(t => new Date(t.date) >= oneWeekAgo)
  const previousWeekTransactions = mockTransactions.filter(t => {
    const transactionDate = new Date(t.date)
    return transactionDate >= twoWeeksAgo && transactionDate < oneWeekAgo
  })
  
  // Calculate current week metrics
  const currentWeekPurchases = currentWeekTransactions.filter(t => t.type === 'purchase')
  const currentWeekRefunds = currentWeekTransactions.filter(t => t.type === 'refund')
  const currentWeekRevenue = currentWeekPurchases.reduce((sum, t) => sum + t.amount, 0)
  const currentWeekRefundAmount = currentWeekRefunds.reduce((sum, t) => sum + t.amount, 0)
  const currentWeekRefundRate = currentWeekPurchases.length > 0 ? (currentWeekRefunds.length / currentWeekPurchases.length) * 100 : 0
  
  // Calculate previous week metrics
  const previousWeekPurchases = previousWeekTransactions.filter(t => t.type === 'purchase')
  const previousWeekRefunds = previousWeekTransactions.filter(t => t.type === 'refund')
  const previousWeekRevenue = previousWeekPurchases.reduce((sum, t) => sum + t.amount, 0)
  const previousWeekRefundAmount = previousWeekRefunds.reduce((sum, t) => sum + t.amount, 0)
  const previousWeekRefundRate = previousWeekPurchases.length > 0 ? (previousWeekRefunds.length / previousWeekPurchases.length) * 100 : 0
  
  // Calculate percentage changes
  const revenueChange = previousWeekRevenue > 0 ? ((currentWeekRevenue - previousWeekRevenue) / previousWeekRevenue) * 100 : 0
  const refundRateChange = previousWeekRefundRate > 0 ? ((currentWeekRefundRate - previousWeekRefundRate) / previousWeekRefundRate) * 100 : 0
  const refundAmountChange = previousWeekRefundAmount > 0 ? ((currentWeekRefundAmount - previousWeekRefundAmount) / previousWeekRefundAmount) * 100 : 0
  
  // Calculate retention improvement (simulated)
  const retentionImprovement = Math.random() * 10 - 2 // Random between -2% and +8%
  
  // Calculate average transaction value change
  const currentAvgTransaction = currentWeekPurchases.length > 0 ? currentWeekRevenue / currentWeekPurchases.length : 0
  const previousAvgTransaction = previousWeekPurchases.length > 0 ? previousWeekRevenue / previousWeekPurchases.length : 0
  const avgTransactionChange = previousAvgTransaction > 0 ? ((currentAvgTransaction - previousAvgTransaction) / previousAvgTransaction) * 100 : 0
  
  // Generate insights array
  const insights = []
  
  // Revenue insight
  if (Math.abs(revenueChange) > 5) {
    insights.push({
      type: 'revenue',
      message: `Your revenue ${revenueChange > 0 ? 'grew' : 'dropped'} ${Math.abs(revenueChange).toFixed(1)}% this week`,
      change: revenueChange,
      isPositive: revenueChange > 0,
      icon: '💰'
    })
  }
  
  // Refund rate insight
  if (Math.abs(refundRateChange) > 3) {
    insights.push({
      type: 'refunds',
      message: `Refund rate ${refundRateChange > 0 ? 'increased' : 'dropped'} by ${Math.abs(refundRateChange).toFixed(1)}%`,
      change: refundRateChange,
      isPositive: refundRateChange < 0, // Lower refund rate is positive
      icon: '📉'
    })
  }
  
  // Retention insight
  if (Math.abs(retentionImprovement) > 2) {
    insights.push({
      type: 'retention',
      message: `Retention ${retentionImprovement > 0 ? 'improved' : 'declined'} by ${Math.abs(retentionImprovement).toFixed(1)}%`,
      change: retentionImprovement,
      isPositive: retentionImprovement > 0,
      icon: '👥'
    })
  }
  
  // Average transaction value insight
  if (Math.abs(avgTransactionChange) > 5) {
    insights.push({
      type: 'avgTransaction',
      message: `Average transaction value ${avgTransactionChange > 0 ? 'increased' : 'decreased'} by ${Math.abs(avgTransactionChange).toFixed(1)}%`,
      change: avgTransactionChange,
      isPositive: avgTransactionChange > 0,
      icon: '💳'
    })
  }
  
  // Transaction volume insight
  const transactionVolumeChange = previousWeekTransactions.length > 0 ? 
    ((currentWeekTransactions.length - previousWeekTransactions.length) / previousWeekTransactions.length) * 100 : 0
  
  if (Math.abs(transactionVolumeChange) > 10) {
    insights.push({
      type: 'volume',
      message: `Transaction volume ${transactionVolumeChange > 0 ? 'increased' : 'decreased'} by ${Math.abs(transactionVolumeChange).toFixed(1)}%`,
      change: transactionVolumeChange,
      isPositive: transactionVolumeChange > 0,
      icon: '📊'
    })
  }
  
  // If no significant changes, add a general positive insight
  if (insights.length === 0) {
    insights.push({
      type: 'general',
      message: 'Your business is performing consistently well',
      change: 0,
      isPositive: true,
      icon: '✨'
    })
  }
  
  return insights.slice(0, 4) // Return max 4 insights
}

// Product list for random generation
const products = [
  { name: 'Pro Creator Toolkit', price: 299.99 },
  { name: 'Premium Discord Access', price: 499.99 },
  { name: 'Editing Presets Pack', price: 99.99 },
  { name: 'Course: Monetize on Whop', price: 199.99 },
  { name: 'Exclusive Content Bundle', price: 149.99 }
]

const refundReasons = [
  'Accidental Purchase',
  'Product Not Delivered', 
  'Low Value',
  'Technical Issues',
  'Changed Mind'
]

// Generate random customer data
const generateRandomCustomer = () => {
  const firstNames = ['Alex', 'Jordan', 'Taylor', 'Casey', 'Morgan', 'Riley', 'Avery', 'Quinn', 'Blake', 'Cameron']
  const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez']
  const domains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'icloud.com']
  
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]
  const domain = domains[Math.floor(Math.random() * domains.length)]
  
  return {
    name: `${firstName} ${lastName}`,
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domain}`
  }
}

// Generate a new transaction ID
const generateTransactionId = () => {
  const nextId = mockTransactions.length + 1
  return `TXN-2024-${nextId.toString().padStart(3, '0')}`
}

// Add a new purchase transaction
export const addRandomPurchase = () => {
  const product = products[Math.floor(Math.random() * products.length)]
  const customer = generateRandomCustomer()
  const now = new Date()
  
  const newTransaction = {
    transactionId: generateTransactionId(),
    productName: product.name,
    amount: product.price,
    type: 'purchase',
    date: now.toISOString(),
    customerName: customer.name,
    customerEmail: customer.email,
    status: 'completed'
  }
  
  mockTransactions.unshift(newTransaction) // Add to beginning for recent transactions
  return newTransaction
}

// Add a new refund transaction
export const addRandomRefund = () => {
  // Find a random purchase to refund
  const purchases = mockTransactions.filter(t => t.type === 'purchase')
  if (purchases.length === 0) return null
  
  const randomPurchase = purchases[Math.floor(Math.random() * purchases.length)]
  const reason = refundReasons[Math.floor(Math.random() * refundReasons.length)]
  const now = new Date()
  
  const newRefund = {
    transactionId: generateTransactionId(),
    productName: randomPurchase.productName,
    amount: randomPurchase.amount,
    type: 'refund',
    date: now.toISOString(),
    customerName: randomPurchase.customerName,
    customerEmail: randomPurchase.customerEmail,
    status: 'completed',
    reason: reason
  }
  
  mockTransactions.unshift(newRefund) // Add to beginning for recent transactions
  return newRefund
}

// Get current transactions (for state management)
export const getCurrentTransactions = () => mockTransactions

// Reset transactions to original data (for testing)
export const resetTransactions = () => {
  mockTransactions = [
    // Recent purchases
    {
      transactionId: 'TXN-2024-001',
      productName: 'Pro Creator Toolkit',
      amount: 299.99,
      type: 'purchase',
      date: '2024-02-19T10:30:00Z',
      customerName: 'Sarah Johnson',
      customerEmail: 'sarah.j@email.com',
      status: 'completed'
    },
    {
      transactionId: 'TXN-2024-002',
      productName: 'Premium Discord Access',
      amount: 499.99,
      type: 'purchase',
      date: '2024-02-19T09:15:00Z',
      customerName: 'Mike Chen',
      customerEmail: 'mike.chen@email.com',
      status: 'completed'
    },
    {
      transactionId: 'TXN-2024-003',
      productName: 'Editing Presets Pack',
      amount: 99.99,
      type: 'purchase',
      date: '2024-02-18T16:45:00Z',
      customerName: 'Emma Wilson',
      customerEmail: 'emma.w@email.com',
      status: 'completed'
    },
    {
      transactionId: 'TXN-2024-004',
      productName: 'Course: Monetize on Whop',
      amount: 199.99,
      type: 'purchase',
      date: '2024-02-18T14:20:00Z',
      customerName: 'David Rodriguez',
      customerEmail: 'david.r@email.com',
      status: 'completed'
    },
    {
      transactionId: 'TXN-2024-005',
      productName: 'Exclusive Content Bundle',
      amount: 149.99,
      type: 'purchase',
      date: '2024-02-17T11:30:00Z',
      customerName: 'Lisa Park',
      customerEmail: 'lisa.park@email.com',
      status: 'completed'
    },
    // Refunds
    {
      transactionId: 'TXN-2024-006',
      productName: 'Pro Creator Toolkit',
      amount: 299.99,
      type: 'refund',
      date: '2024-02-17T08:15:00Z',
      customerName: 'Alex Thompson',
      customerEmail: 'alex.t@email.com',
      status: 'completed',
      reason: 'Accidental Purchase'
    },
    {
      transactionId: 'TXN-2024-007',
      productName: 'Premium Discord Access',
      amount: 499.99,
      type: 'refund',
      date: '2024-02-16T15:30:00Z',
      customerName: 'Jessica Brown',
      customerEmail: 'jessica.b@email.com',
      status: 'completed',
      reason: 'Product Not Delivered'
    },
    {
      transactionId: 'TXN-2024-008',
      productName: 'Editing Presets Pack',
      amount: 99.99,
      type: 'refund',
      date: '2024-02-16T12:45:00Z',
      customerName: 'Ryan Davis',
      customerEmail: 'ryan.d@email.com',
      status: 'completed',
      reason: 'Low Value'
    },
    // More recent transactions
    {
      transactionId: 'TXN-2024-009',
      productName: 'Pro Creator Toolkit',
      amount: 299.99,
      type: 'purchase',
      date: '2024-02-15T13:20:00Z',
      customerName: 'Maria Garcia',
      customerEmail: 'maria.g@email.com',
      status: 'completed'
    },
    {
      transactionId: 'TXN-2024-010',
      productName: 'Course: Monetize on Whop',
      amount: 199.99,
      type: 'purchase',
      date: '2024-02-15T10:10:00Z',
      customerName: 'Kevin Lee',
      customerEmail: 'kevin.lee@email.com',
      status: 'completed'
    },
    {
      transactionId: 'TXN-2024-011',
      productName: 'Exclusive Content Bundle',
      amount: 149.99,
      type: 'refund',
      date: '2024-02-14T17:30:00Z',
      customerName: 'Amanda Taylor',
      customerEmail: 'amanda.t@email.com',
      status: 'completed',
      reason: 'Technical Issues'
    },
    {
      transactionId: 'TXN-2024-012',
      productName: 'Premium Discord Access',
      amount: 499.99,
      type: 'purchase',
      date: '2024-02-14T14:45:00Z',
      customerName: 'Chris Anderson',
      customerEmail: 'chris.a@email.com',
      status: 'completed'
    },
    {
      transactionId: 'TXN-2024-013',
      productName: 'Editing Presets Pack',
      amount: 99.99,
      type: 'purchase',
      date: '2024-02-13T16:20:00Z',
      customerName: 'Rachel Green',
      customerEmail: 'rachel.g@email.com',
      status: 'completed'
    },
    {
      transactionId: 'TXN-2024-014',
      productName: 'Pro Creator Toolkit',
      amount: 299.99,
      type: 'refund',
      date: '2024-02-13T11:15:00Z',
      customerName: 'Tom Wilson',
      customerEmail: 'tom.w@email.com',
      status: 'completed',
      reason: 'Changed Mind'
    },
    {
      transactionId: 'TXN-2024-015',
      productName: 'Course: Monetize on Whop',
      amount: 199.99,
      type: 'purchase',
      date: '2024-02-12T09:30:00Z',
      customerName: 'Sophie Martinez',
      customerEmail: 'sophie.m@email.com',
      status: 'completed'
    },
    {
      transactionId: 'TXN-2024-016',
      productName: 'Exclusive Content Bundle',
      amount: 149.99,
      type: 'purchase',
      date: '2024-02-12T08:45:00Z',
      customerName: 'James White',
      customerEmail: 'james.w@email.com',
      status: 'completed'
    },
    {
      transactionId: 'TXN-2024-017',
      productName: 'Premium Discord Access',
      amount: 499.99,
      type: 'refund',
      date: '2024-02-11T15:20:00Z',
      customerName: 'Nina Patel',
      customerEmail: 'nina.p@email.com',
      status: 'completed',
      reason: 'Accidental Purchase'
    },
    {
      transactionId: 'TXN-2024-018',
      productName: 'Editing Presets Pack',
      amount: 99.99,
      type: 'purchase',
      date: '2024-02-11T12:10:00Z',
      customerName: 'Brandon Kim',
      customerEmail: 'brandon.k@email.com',
      status: 'completed'
    },
    {
      transactionId: 'TXN-2024-019',
      productName: 'Pro Creator Toolkit',
      amount: 299.99,
      type: 'purchase',
      date: '2024-02-10T14:30:00Z',
      customerName: 'Olivia Clark',
      customerEmail: 'olivia.c@email.com',
      status: 'completed'
    },
    {
      transactionId: 'TXN-2024-020',
      productName: 'Course: Monetize on Whop',
      amount: 199.99,
      type: 'refund',
      date: '2024-02-10T10:45:00Z',
      customerName: 'Daniel Smith',
      customerEmail: 'daniel.s@email.com',
      status: 'completed',
      reason: 'Low Value'
    }
  ]
}
