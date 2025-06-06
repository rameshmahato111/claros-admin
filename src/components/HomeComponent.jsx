const Home = () => {
  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-lg font-semibold">Total Products</h2>
          <p className="mt-2 text-3xl font-bold text-green-600">120</p>
        </div>
        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-lg font-semibold">Total Users</h2>
          <p className="mt-2 text-3xl font-bold text-blue-600">58</p>
        </div>
        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-lg font-semibold">Orders Today</h2>
          <p className="mt-2 text-3xl font-bold text-orange-500">16</p>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Users</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-600 uppercase">
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Role</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="px-4 py-2">John Doe</td>
                <td className="px-4 py-2">john@example.com</td>
                <td className="px-4 py-2">Admin</td>
                <td className="px-4 py-2 text-green-600">Active</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Jane Smith</td>
                <td className="px-4 py-2">jane@example.com</td>
                <td className="px-4 py-2">User</td>
                <td className="px-4 py-2 text-red-500">Inactive</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Ramesh Mahato</td>
                <td className="px-4 py-2">ramesh@example.com</td>
                <td className="px-4 py-2">Editor</td>
                <td className="px-4 py-2 text-green-600">Active</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
