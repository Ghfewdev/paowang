"use client"
import Image from "next/image";
import Data1 from "./components/tool/data1";
import { useState } from "react";
import Modal from "./components/tool/modal";

export default function Home() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>

<button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={closeModal} />

      <Data1 datas1="456" para1="123" />
      <Data1 datas1="456" para1="123" />
      <Data1 datas1="456" para1="123" />
      <Data1 datas1="456" para1="123" />

    </div>
  );
}
