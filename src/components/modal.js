function Modal({toggleModal, modalInfo}) {

    return (
        <div className="modalBackdrop">
        <div className="modalContainer">
          <h3 className="modalTitle">{modalInfo.title}</h3>
          
          <p>
          {modalInfo.description}
          </p>
          <button type="button" onClick={toggleModal}>
            Close this modal
          </button>
        </div>
      </div>
    );
  }
  
  export default Modal;