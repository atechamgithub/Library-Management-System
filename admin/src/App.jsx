import AdminPanel from './components/Admin/AdminPanel';
import { useState } from 'react';
import Login from './components/Page/Login';
import Users from './components/Page/Users';
import Books from './components/Page/Books';
function App () {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('books');

  if (!user) {
    return <Login onLogin={setUser} />;
  }

  return (
    <div>
      <nav>
        <button onClick={() => setActiveTab('books')}>Books</button>
        <button onClick={() => setActiveTab('users')}>Users</button>
        {user.role === 'admin' && (
          <button onClick={() => setActiveTab('admin')}>Admin Panel</button>
        )}
      </nav>

      {activeTab === 'books' && <Books />}
      {activeTab === 'users' && <Users />}
      {activeTab === 'admin' && user.role === 'admin' && <AdminPanel />}
    </div>
  );
} 
export default App;