// Dummy refund data
const refundsData = [
  {
    id: 'REF-001',
    product: 'Pro Creator Toolkit',
    reason: 'Not satisfied with content quality',
    date: '2024-03-15',
    amount: 299.99,
    status: 'Pending',
    memberName: 'Alice Johnson',
    memberEmail: 'alice.johnson@email.com'
  },
  {
    id: 'REF-002',
    product: 'Premium Discord Access',
    reason: 'Technical issues with access',
    date: '2024-03-12',
    amount: 499.99,
    status: 'Approved',
    memberName: 'Bob Smith',
    memberEmail: 'bob.smith@email.com'
  },
  {
    id: 'REF-003',
    product: 'Editing Presets Pack',
    reason: 'Duplicate purchase',
    date: '2024-03-10',
    amount: 99.99,
    status: 'Approved',
    memberName: 'Carol Davis',
    memberEmail: 'carol.davis@email.com'
  },
  {
    id: 'REF-004',
    product: 'Course: Monetize on Whop',
    reason: 'Course not as described',
    date: '2024-03-08',
    amount: 199.99,
    status: 'Rejected',
    memberName: 'David Wilson',
    memberEmail: 'david.wilson@email.com'
  },
  {
    id: 'REF-005',
    product: 'Exclusive Content Bundle',
    reason: 'Changed mind',
    date: '2024-03-05',
    amount: 149.99,
    status: 'Pending',
    memberName: 'Eva Brown',
    memberEmail: 'eva.brown@email.com'
  },
  {
    id: 'REF-006',
    product: 'Pro Creator Toolkit',
    reason: 'Billing error',
    date: '2024-03-03',
    amount: 299.99,
    status: 'Approved',
    memberName: 'Frank Miller',
    memberEmail: 'frank.miller@email.com'
  }
]

function getStatusColor(status) {
  switch (status) {
    case 'Approved':
      return 'bg-green-100 text-green-800'
    case 'Pending':
      return 'bg-yellow-100 text-yellow-800'
    case 'Rejected':
      return 'bg-red-100 text-red-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

function getStatusIcon(status) {
  switch (status) {
    case 'Approved':
      return '✓'
    case 'Pending':
      return '⏳'
    case 'Rejected':
      return '✗'
    default:
      return '?'
  }
}

export default function Refunds() {
  const totalRefunds = refundsData.reduce((sum, refund) => sum + refund.amount, 0)
  const pendingRefunds = refundsData.filter(r => r.status === 'Pending').length
  const approvedRefunds = refundsData.filter(r => r.status === 'Approved').length
  const rejectedRefunds = refundsData.filter(r => r.status === 'Rejected').length

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Refund Requests</h1>
        <p className="text-gray-600">Manage and process refund requests from your members</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="text-sm font-medium text-gray-600">Total Refunds</div>
          <div className="text-2xl font-bold text-gray-900">${totalRefunds.toLocaleString()}</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="text-sm font-medium text-gray-600">Pending</div>
          <div className="text-2xl font-bold text-yellow-600">{pendingRefunds}</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="text-sm font-medium text-gray-600">Approved</div>
          <div className="text-2xl font-bold text-green-600">{approvedRefunds}</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="text-sm font-medium text-gray-600">Rejected</div>
          <div className="text-2xl font-bold text-red-600">{rejectedRefunds}</div>
        </div>
      </div>

      {/* Refunds List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">All Refund Requests</h3>
            <div className="flex items-center space-x-2">
              <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                <option value="">All Status</option>
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
              <button className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors">
                Export
              </button>
            </div>
          </div>
        </div>
        
        <div className="divide-y divide-gray-200">
          {refundsData.map((refund) => (
            <div key={refund.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="text-lg font-medium text-gray-900">{refund.id}</h4>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(refund.status)}`}>
                      <span className="mr-1">{getStatusIcon(refund.status)}</span>
                      {refund.status}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Product:</span>
                      <p className="font-medium text-gray-900">{refund.product}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Amount:</span>
                      <p className="font-medium text-gray-900">${refund.amount}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Date:</span>
                      <p className="font-medium text-gray-900">{new Date(refund.date).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Member:</span>
                      <p className="font-medium text-gray-900">{refund.memberName}</p>
                      <p className="text-gray-500 text-xs">{refund.memberEmail}</p>
                    </div>
                  </div>
                  
                  <div className="mt-3">
                    <span className="text-gray-500 text-sm">Reason:</span>
                    <p className="text-gray-900 mt-1">{refund.reason}</p>
                  </div>
                </div>
                
                <div className="ml-6 flex space-x-2">
                  {refund.status === 'Pending' && (
                    <>
                      <button className="bg-green-600 text-white px-3 py-1 rounded text-sm font-medium hover:bg-green-700 transition-colors">
                        Approve
                      </button>
                      <button className="bg-red-600 text-white px-3 py-1 rounded text-sm font-medium hover:bg-red-700 transition-colors">
                        Reject
                      </button>
                    </>
                  )}
                  <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm font-medium hover:bg-gray-200 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}





