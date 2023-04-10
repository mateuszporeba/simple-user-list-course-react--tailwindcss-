import React, { useState } from 'react';
import './App.css';
import User from './components/User/User.js';
import UserList from './components/UserList/UserList.js';
import Modal from './components/Modal/Modal.js';
import uuid from 'react-uuid';

function App() {

  const [users, setUsers] = useState([
    { name: 'Jacek Romański', age: '32', key: uuid().toString() },
    { name: 'Paweł Nowak', age: '22', key: uuid().toString() }
  ]);
  const [isModal, setIsModal] = useState(false);
  const [modalContent, setModalContent] = useState('');


  const addUserHandler = (userName, userAge) => {
    setUsers(prevUsers => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({ name: userName, age: userAge, key: uuid().toString() });
      return updatedUsers;
    });
  };

  //let modalContent = '';

  const changeModalContent = (content) => {
    setModalContent(content);
  }

  const showModal = () => {
    setIsModal(true);
  }

  const closeModal = () => {
    setIsModal(false);
  }

  let content = ('');
  if (users.length > 0) {
    content = (
      <UserList users={users} />
    );
  }

  return (
    <div className='flex flex-col space-y-4 bg-slate-500'>
      <div className=' flex flex-col w-screen h-screen min-h-fit p-8'>
        <div className={isModal?'blur-[1px]':''}>
        <User onAddUser={addUserHandler} onErrorInfo={changeModalContent} showModal={showModal} />
        {content}
        </div>
        
        {isModal && <Modal errorContent={modalContent} onClick={closeModal}/>}
      </div>

    </div>
  );
}

export default App;
