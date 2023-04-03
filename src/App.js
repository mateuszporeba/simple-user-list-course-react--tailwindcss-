import './App.css';
import User from './components/User/User.js';
import UserList from './components/UserList/UserList.js'

function App() {

  const userListChangeHandler = (userName, userAge) => {

  }

  return (
    <div className='flex flex-col space-y-4'>
      <div className='bg-slate-600 flex flex-col w-screen h-screen min-h-fit p-8'>
        <User onAddUser={userListChangeHandler} />
        <UserList />
      </div>
    </div>
  );
}

export default App;
