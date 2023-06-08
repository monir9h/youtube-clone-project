import "./Modal.css"
import { useState } from "react"
export default function Modal(){
    const [modal, setModal] = useState(false)
function toggleModal(){
    setModal(!modal)
}
return (
    <> 
    <div className = "overlay">
        <button className="open-modal" onClick ={toggleModal}>OPEN-MODAL </button>
    </div>

    {modal && (
          <div className= "modal-window">
          <div className= "modal-box"> 
          <p >
          Search field is empty.
          </p>
          <button className= "close-modal" onClick={toggleModal}>CLOSE</button>
          </div>
   
      </div>
    )}
  
    
    </>
    
)
};