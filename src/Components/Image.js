import React from 'react'
import { Button, Modal } from 'antd';
import { useState } from 'react';

const Image = ({data}) => {
  //State Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  //Modal Function
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  
  //Test Button
  const onClickImage =()=>{
    console.log(data.id)
  }
  return (
    
    <div className='felx items-center justify-center'>
      <div>
      <button className='h-72 w-full' onClick={showModal}>
      <img className='h-72 w-full rounded-lg shadow-md object-cover mx-3 my-2 ' src={data.urls.small} alt={data.alt_description} />
      </button>
      </div>
      <Modal className='w-full h-full ' title="Photos" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <a href={data.urls.regular} target="_blank" rel='noreferrer'>
        <img className='h-72 w-full rounded-lg shadow-md object-cover mx-3 my-2 ' src={data.urls.full} alt={data.alt_description} />
        </a>
      </Modal>
    </div>

    //Open Browser
    // <div className='felx items-center justify-center'>
    // <a href={data.urls.regular} target="_blank" rel='noreferrer'>
    //     <img className='h-72 w-full rounded-lg shadow-md object-cover mx-3 my-2 ' src={data.urls.small} alt={data.alt_description} />
    // </a>
    // </div>
  )
}

export default Image