import ReactDom from "react-dom";
import Auth from "./Auth";

const Modal = ({ show, onCloseButtonClick }) => {
  if (!show) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal-wrapper">
      <div className="modal">
        <div className="body">Click on close button to close modal.</div>
        <div className="footer">
          <button onClick={onCloseButtonClick}>Close Modal</button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
