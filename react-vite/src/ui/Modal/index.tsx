import './index.css'
import Card from "../card";

interface ModalProps {
  text?: string
  confirm?: () => void
  cancel?: () => void
}
const Modal = ({text = 'Please confirm to delete it.', confirm = () => {}, cancel = () => {}} : ModalProps) => {
  return (
    <Card className='modal'>
      <div className='text'><p>{text}</p></div>
      <div className="button">
        <button id='confirm' type='button' onClick={confirm}>Confirm</button>
        <button type='button' onClick={cancel}>Cancel</button>
      </div>
    </Card>
  );
};

export default Modal;