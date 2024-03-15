/* eslint-disable react/prop-types */
function Error({ message, onClose }) {
  return (
    <div className="error-popup">
      <div className="error-popup-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Error;
