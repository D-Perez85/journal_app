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
            <h3 className='mt-5'>
                <span> {name} </span>
            </h3>
            <button className='btn'onClick={handleLogOut}>LogOut</button>
        </div>
        <div className='journal__new-entry' >
            <i className="fa-solid fa-plus"></i>
            <p className='mt-5' onClick={handleAddNew}>New Entry</p>
            <JournalEntries/>
        </div>
    </aside>
  )
}
export default SideBar; 



