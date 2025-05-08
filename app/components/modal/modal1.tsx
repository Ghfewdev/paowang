import React from 'react';
import DataTable from '../table/DataTable';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  // children: React.ReactNode
  hptcode: string
  idcard: string
  dspname: string
  male: string
  age: number
  // weight: number
  // pr: number
  // ampur: string
}

const Modal1: React.FC<ModalProps> = ({ isOpen, onClose, hptcode, dspname, idcard, male, age }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
      <div className="modal-header">
          <h2 className="modal-title">ข้อมูลผู้ป่วย</h2>
          <button onClick={onClose} className="modal-close">&times;</button>
        </div>
        <div className="modal-body">
        <form>
          {/* <div className="grid grid-cols-4 gap-4">
            <div>01</div>
            <div>09</div>
          </div> */}
          <label>
            HN:
            <input type="text" name="hptcode" value={hptcode} className='w-25' readOnly />
          </label>
          <label>
            ชื่อ-สกุล:
            <input type="text" name="dspname" value={dspname} readOnly />
          </label>
          <label>
            เลขประจำตัวประชาชน:
            <input type="text" name="idcard" value={idcard} readOnly />
          </label>
          <br />
          <label>
            เพศ:
            <input type="text" name="male" value={male} className='w-15' readOnly />
          </label>
          <label>
            สถานะภาพ:
            <input type="text" name="email" className=' w-20' />
          </label>
          <label>
            วันเกิด:
            <input type="text" name="dob" className='w-20' readOnly />
          </label>
          <label>
            อายุ:
            <input type="number" className=' w-15' name="age" value={age} readOnly />
          </label>
          
          <label>
            หมู่เลือด:
            <input type="text" name="email" className='w-10' readOnly/>
          </label>
          <br />
          <label>
            สิทธิการรักษา:
            <input type="text" name="email" />
          </label>
          <br />
          <label>
            ที่อยู่:
            <input type="text" name="email" />
          </label>
          <br />
          <br />
          <h2 className=' font-bold'>ข้อมูลการคัดกรองความเสี่ยงโรคเบาหวาน/ความดันโลหิตสูง</h2>
            
            <label>
            น้ำหนัก:
            <input type="text" name="email" className='w-15' readOnly />
          </label>
          <label>
            ส่วนสูง:
            <input type="text" name="email" className='w-15' readOnly />
          </label>
          <label>
            ดัชนีมวลกาย:
            <input type="text" name="email" className='w-15' readOnly />
          </label>
          <label>
            รอบเอว:
            <input type="text" name="email" className='w-15' readOnly />
            ซม.
          </label>
          <br />
          <label>
            ประวัติโรคเบาหวานญาติสายตรง:
            <input type="text" name="email" />
          </label>
          <label>
            ป่วยความดันโลหิตสูง:
            <input type="text" name="email" />
          </label>
          <br />
          <label>
            ผลการประเมินคัดกลองความเสียงโรคเบาหวาน:
            <input type="text" name="email" />
          </label>
          <br />
          <label>
            ค่าความดันโลหิต:
            <input type="text" name="email" className='w-25' readOnly />
          </label>
          <label>
            วันที่:
            <input type="text" name="email" className='w-20' readOnly />
          </label>
          <br />
          <label>
            ผลการประเมินคัดกลองความดันโลหิตสูง:
            <input type="text" name="email" />
          </label>
          <br />
          <br />
          
          {/* <button type="submit">Submit</button> */}
        </form>
        <h2 className=' font-bold'>ประวัติการคัดกรอง</h2>
        <br />
        <DataTable />

        </div>
        <div className="modal-footer">
          <button onClick={onClose} className="modal-button">
            ปิด
          </button>
        </div>
        {/* {Array.from({ length: 50 }).map((_, idx) => (
            <p key={idx}>นี่คือเนื้อหาบรรทัดที่ {idx + 1}</p>
          ))} */}
        </div>
      
    </div>
  );
};


export default Modal1;
