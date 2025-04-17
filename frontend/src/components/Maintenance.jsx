import React from 'react';
import { FileText, BookOpen, Users } from 'lucide-react';

export default function Maintenance() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Maintenance</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <FileText className="w-6 h-6 text-indigo-600" />
            <h3 className="ml-2 text-lg font-medium">Reports</h3>
          </div>
          <p className="text-gray-600">Generate and view system reports</p>
          <button className="mt-4 w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
            View Reports
          </button>
        </div>

        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 text-indigo-600" />
            <h3 className="ml-2 text-lg font-medium">Book Management</h3>
          </div>
          <p className="text-gray-600">Manage book catalog and inventory</p>
          <button className="mt-4 w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
            Manage Books
          </button>
        </div>

        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <Users className="w-6 h-6 text-indigo-600" />
            <h3 className="ml-2 text-lg font-medium">User Management</h3>
          </div>
          <p className="text-gray-600">Manage user accounts and permissions</p>
          <button className="mt-4 w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
            Manage Users
          </button>
        </div>
      </div>
    </div>
  );
}