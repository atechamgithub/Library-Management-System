import React, { useState, useEffect } from 'react';
import { BookOpen, Users as UsersIcon, ArrowLeftRight, Settings, LogIn } from 'lucide-react';
import Login from './components/Login';
import Books from './components/Books';
import Users from './components/Users';
import Transactions from './components/Transactions';
import Maintenance from './components/Maintenance';

function App() {
  const [mounted, setMounted] = useState(false);
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('books');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if (!user) {
    return <Login onLogin={setUser} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <BookOpen className="w-8 h-8" />
              <span className="ml-2 text-xl font-semibold">Library Management System</span>
            </div>
            <div className="flex items-center space-x-4">
              <span>{user.username}</span>
              <button
                onClick={() => setUser(null)}
                className="bg-indigo-700 px-4 py-2 rounded-md hover:bg-indigo-800 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab('books')}
            className={`flex items-center px-4 py-2 rounded-md transition-colors ${
              activeTab === 'books'
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            <BookOpen className="w-5 h-5 mr-2" />
            Books
          </button>
          <button
            onClick={() => setActiveTab('users')}
            className={`flex items-center px-4 py-2 rounded-md transition-colors ${
              activeTab === 'users'
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            <UsersIcon className="w-5 h-5 mr-2" />
            Users
          </button>
          <button
            onClick={() => setActiveTab('transactions')}
            className={`flex items-center px-4 py-2 rounded-md transition-colors ${
              activeTab === 'transactions'
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            <ArrowLeftRight className="w-5 h-5 mr-2" />
            Transactions
          </button>
          {user.role === 'admin' && (
            <button
              onClick={() => setActiveTab('maintenance')}
              className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                activeTab === 'maintenance'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Settings className="w-5 h-5 mr-2" />
              Maintenance
            </button>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          {activeTab === 'books' && <Books userRole={user.role} />}
          {activeTab === 'users' && <Users userRole={user.role} />}
          {activeTab === 'transactions' && <Transactions userRole={user.role} />}
          {activeTab === 'maintenance' && user.role === 'admin' && <Maintenance />}
        </div>
      </div>
    </div>
  );
}

export default App;
