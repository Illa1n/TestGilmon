import { useState, useRef } from 'react';
import './Main.css';

function Main() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef();

  const OpenModal = () => {
    if (!modalRef.current) return;
    
    if (!isOpen) {
      modalRef.current.style.display = 'flex';
      setTimeout(() => {
        modalRef.current.classList.add('active');
      }, 10);
    } 
    else {
      modalRef.current.classList.remove('active');
      setTimeout(() => {
        modalRef.current.style.display = 'none';
      }, 300); 
    }
    
    setIsOpen(!isOpen);
  };

  return (
    <div className='main'>
      <button className='openModal' onClick={OpenModal}>Вызвать модальное окно</button>
      
      <div 
        ref={modalRef}
        className="modal"
        onClick={(e) => e.target === modalRef.current && OpenModal()}
      >
        <div className="modal-content">
          <button onClick={OpenModal}>×</button>
          <p>Анимированное модальное окно</p>
        </div>
      </div>
    </div>
  );
}

export default Main;