import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNotes, startUpLoading } from '../../actions/notes';
import moment from 'moment';


const NotesAppBar = () => {
  const dispatch = useDispatch(); 
  const {active} = useSelector(state => state.notes); 
  
  const noteDate = moment().format('LL');
 
  const handleSave = () =>{
    dispatch(startSaveNotes(active)); 
  }

  const handlePicture = () =>{
    document.querySelector('#fileSelector').click(); 
  }
  
  const handleFileChange = (e)=>{
    const file = e.target.files[0]; 
    if(file){
      dispatch(startUpLoading(file)); 
    }
  }
 
  return (
     <div className='notes__appBar'>
        <span>{noteDate}</span>
        <input id='fileSelector' type="file" style={{display:'none'}}
        onChange={handleFileChange}
        name='file'/>
        <div>
            <button className='btn' onClick={handlePicture}>PICTURE</button>
            <button className='btn' onClick={handleSave}>SAVE</button>
        </div>
    </div>
  )
}
export default NotesAppBar