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
          <p>Modal window!
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <button className= "close-modal" onClick={toggleModal}>CLOSE</button>
          </div>
   
      </div>
    )}
  
    
    </>
    
)
};