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
  mrtlst: string
  age: number
  brthdate: string
  bloodgrp: string
  pttype: string
  address: string
  moo: string
  soi: string
  street: string
  tumbon: string
  ampur: string
  changwat: string
  zipcode: string
  weight: number
  height: number
  pr: number
  cigar: string
  alc: string
  sbp: number
  dbp: number
}

const Modal1: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  hptcode,
  dspname,
  idcard,
  male,
  mrtlst,
  age,
  brthdate,
  bloodgrp,
  pttype,
  address,
  moo,
  soi,
  street,
  tumbon,
  ampur,
  changwat,
  zipcode,
  weight,
  height,
  pr,
  cigar,
  alc,
  sbp,
  dbp,
}) => {
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
              <input type="text" name="hptcode" value={hptcode} className='w-20' readOnly />
            </label>
            <label>
              ชื่อ-สกุล:
              <input type="text" name="dspname" value={dspname} className='w-80' readOnly />
            </label>
            <br />
            <label>
              เลขประจำตัวประชาชน:
              <input type="text" name="idcard" value={idcard} readOnly />
            </label>
            
            <label>
              เพศ:
              <input type="text" name="male" value={male} className='w-15' readOnly />
            </label>
            <br />
            <label>
              สถานะภาพ:
              <input type="text" name="pttype" className='w-40' value={mrtlst} readOnly />
            </label>
            <label>
              วันเกิด:
              <input type="text" name="brthdate" className='w-27' value={brthdate} readOnly />
            </label>
            <label>
              อายุ:
              <input type="number" className=' w-15' name="age" value={age} readOnly />
            </label>
            <br />
            <label>
              หมู่เลือด:
              <input type="text" name="bloodgrp" className='w-20' value={bloodgrp} readOnly />
            </label>

            <label>
              สิทธิการรักษา:
              <input type="text" name="pttype" className='w-70' value={pttype} readOnly />
            </label>
            <br />
            <label>
              ที่อยู่:
              <input type="text" name="address" className='w-150' value={address+" "+soi+" "+moo+" "+street+" "+tumbon+" "+ampur+" "+changwat+" "+zipcode} readOnly />
            </label>
            <br />
            <br />
            <h2 className=' font-bold'>ข้อมูลการคัดกรองความเสี่ยงโรคเบาหวาน/ความดันโลหิตสูง</h2>

            <label>
              น้ำหนัก:
              <input type="text" name="weight" className='w-15' value={weight} readOnly />
              กก.&nbsp;
            </label>
            <label>
              ส่วนสูง:
              <input type="text" name="height" className='w-15' value={height} readOnly />
              ซม.&nbsp;
            </label>
            <label>
              ดัชนีมวลกาย:
              <input type="text" name="bmi" className='w-14'value={((weight)/(height*10**(-2))**2).toFixed(1)} readOnly />
            </label>
            <label>
              รอบเอว:
              <input type="text" name="pr" className='w-15' value={pr} readOnly />
              ซม.&nbsp;
            </label>
            <br />
            {/* <label>
              ประวัติโรคเบาหวานญาติสายตรง:
              <input type="text" name="email" />
            </label>
            <label>
              ป่วยความดันโลหิตสูง:
              <input type="text" name="email" />
            </label>
            <br /> */}
            {/* <label>
              ผลการประเมินคัดกลองความเสียงโรคเบาหวาน:
              <input type="text" name="email" />
            </label> */}
            {/* <br /> */}
            <label>
              ค่าความดันโลหิต:
              <input type="text" name="sbp" className='w-25' value={sbp + " / " + dbp} readOnly />
            </label>
            {/* <label>
              วันที่:
              <input type="text" name="email" className='w-20' readOnly />
            </label> */}
            <label>
              สูบบุหรี่:
              <input type="text" name="cigar" className='w-20' value={cigar} readOnly />
            </label>
            <label>
              แอลกอฮอล์:
              <input type="text" name="alc" className='w-20' value={alc} readOnly />
            </label>
            <br />
            {/* <label>
              ผลการประเมินคัดกลองความดันโลหิตสูง:
              <input type="text" name="email" />
            </label> */}
            <br />
            <br />

            {/* <button type="submit">Submit</button> */}
          </form>
          <h2 className=' font-bold'>ประวัติการคัดกรอง</h2>
          {/* <br />
          <DataTable /> */}

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
