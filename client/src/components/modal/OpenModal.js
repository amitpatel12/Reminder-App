import { Button, Modal } from 'antd';
import { useState } from 'react';
import Qrcode from '../../Images/Qrcode.png'
import './openmodal.css'
const OpenModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      
      <Modal title="Scan And Save Number" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} style={{display:'flex'}}>
       
        <img src ={Qrcode} alt = 'whatsapp code'/>
        <p>Send WhatsApp message <i style={{color: 'blue', fontWeight:"600"}}>join if-bat</i></p>
      
      </Modal>
    </>
  );
};
export default OpenModal;