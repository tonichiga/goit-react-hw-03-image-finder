import s from './Modal.module.scss';

const Modal = ({ largeImg, isOpen, onClick, onKeyDown }) => {
  return (
    <div className={s.backdrop} onClick={onClick} data-value="modal">
      <div className={s.modal} onKeyPress={onKeyDown}>
        <img className={s.image} src={largeImg} alt="pictures" />
      </div>
    </div>
  );
};

export default Modal;
