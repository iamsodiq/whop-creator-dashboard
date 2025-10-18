// Dummy member data
const membersData = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice.johnson@email.com',
    joinDate: '2024-01-15',
    renewalDate: '2024-07-15',
    tier: 'Pro',
    status: 'Active',
    revenue: 299.99
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'bob.smith@email.com',
    joinDate: '2024-02-03',
    renewalDate: '2024-08-03',
    tier: 'Premium',
    status: 'Active',
    revenue: 499.99
  },
  {
    id: 3,
    name: 'Carol Davis',
    email: 'carol.davis@email.com',
    joinDate: '2024-01-28',
    renewalDate: '2024-07-28',
    tier: 'Basic',
    status: 'Active',
    revenue: 99.99
  },
  {
    id: 4,
    name: 'David Wilson',
    email: 'david.wilson@email.com',
    joinDate: '2023-12-10',
    renewalDate: '2024-06-10',
    tier: 'Pro',
    status: 'Expired',
    revenue: 299.99
  },
  {
    id: 5,
    name: 'Eva Brown',
    email: 'eva.brown@email.com',
    joinDate: '2024-03-12',
    renewalDate: '2024-09-12',
    tier: 'Premium',
    status: 'Active',
    revenue: 499.99
  },
  {
    id: 6,
    name: 'Frank Miller',
    email: 'frank.miller@email.com',
    joinDate: '2024-02-20',
    renewalDate: '2024-08-20',
    tier: 'Basic',
    status: 'Cancelled',
    revenue: 99.99
  },
  {
    id: 7,
    name: 'Grace Lee',
    email: 'grace.lee@email.com',
    joinDate: '2024-01-05',
    renewalDate: '2024-07-05',
    tier: 'Pro',
    status: 'Active',
    revenue: 299.99
  },
  {
    id: 8,
    name: 'Henry Taylor',
    email: 'henry.taylor@email.com',
    joinDate: '2024-03-01',
    renewalDate: '2024-09-01',
    tier: 'Premium',
    status: 'Active',
    revenue: 499.99
  }
]

function getStatusColor(status) {
  switch (status) {
    case 'Active':
      return 'bg-green-100 text-green-800'
    case 'Expired':
      return 'bg-red-100 text-red-800'
    case 'Cancelled':
      return 'bg-gray-100 text-gray-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

function getTierColor(tier) {
  switch (tier) {
    case 'Premium':
      return 'bg-purple-100 text-purple-800'
    case 'Pro':
      return 'bg-blue-100 text-blue-800'
    case 'Basic':
      return 'bg-gray-100 text-gray-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

export default function Members() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Members</h1>
        <p className="text-gray-600">Manage your community members and their subscriptions</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="text-sm font-medium text-gray-600">Total Members</div>
          <div className="text-2xl font-bold text-gray-900">{membersData.length}</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="text-sm font-medium text-gray-600">Active</div>
          <div className="text-2xl font-bold text-green-600">
            {membersData.filter(m => m.status === 'Active').length}
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="text-sm font-medium text-gray-600">Expired</div>
          <div className="text-2xl font-bold text-red-600">
            {membersData.filter(m => m.status === 'Expired').length}
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="text-sm font-medium text-gray-600">Total Revenue</div>
          <div className="text-2xl font-bold text-gray-900">
            ${membersData.reduce((sum, m) => sum + m.revenue, 0).toLocaleString()}
          </div>
        </div>
      </div>

      {/* Members Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">All Members</h3>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Search members..."
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors">
                Export
              </button>
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Member
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Join Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Renewal Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tier
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Revenue
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {membersData.map((member) => (
                <tr key={member.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-gray-700">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{member.name}</div>
                        <div className="text-sm text-gray-500">{member.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(member.joinDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(member.renewalDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getTierColor(member.tier)}`}>
                      {member.tier}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(member.status)}`}>
                      {member.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${member.revenue}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-primary-600 hover:text-primary-900 mr-3">
                      Edit
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}





