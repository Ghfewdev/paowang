import React, { useState } from 'react';
import Modal from './modal';

interface Data1Props {
    datas1: string;
    para1: string;
}

export default function Data1({ datas1, para1 }: Data1Props) {

    const [open, setOpen] = useState(false)

    return (
        <div className="p-4">
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        เปิด Modal
      </button>

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <div className="space-y-4">
          {/* ใส่เนื้อหาเยอะๆ เพื่อเลื่อน */}
          {Array.from({ length: 50 }).map((_, idx) => (
            <p key={idx}>นี่คือเนื้อหาบรรทัดที่ {idx + 1}</p>
          ))}
        </div>
      </Modal>
    </div>
    );
}
