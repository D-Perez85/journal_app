import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import JournalEntries from './JournalEntries';
import { startLogOut } from '../../actions/auth';
import { startNewnote } from '../../actions/notes';

const SideBar = () => {
const dispatch =   useDispatch();; 
const {name} = useSelector(state => state.auth); 

const handleLogOut = () =>{
  dispatch(startLogOut())
  }

const handleAddNew = () =>{
    dispatch(startNewnote())
  }

  return (
    <aside className='journal__sidebar'>
        <div className='journal__sidebar-navbar'>
            <button className='btn'onClick={handleAddNew}>ADD NOTE</button>
            <button className='btn'onClick={handleLogOut}>LOGOUT</button>
        </div>
        <div className='journal__new-entry' >
            <JournalEntries/>
        </div>
    </aside>
  )
}
export default SideBar; 



