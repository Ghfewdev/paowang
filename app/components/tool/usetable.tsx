'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Modal1 from '../modal/modal1'

interface User {
  hptcode: number
  idcard: string
  dspname: string
  male: string
  age: number
  weight: number
  pr: number
  ampur: string
  // role: string
}

export default function UserTable() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [data, setData] = useState<User[]>([])
  const [loading, setLoading] = useState(true)

  const [selects, setSelect] = useState(0);

  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3010"

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<User[]>(`${apiBaseUrl}/api/data5`)
        console.log(res)
        const mapped = res.data.map((u, i) => ({
          hptcode: u.hptcode,
          idcard: u.idcard,
          dspname: u.dspname,
          male: u.male,
          age: u.age,
          weight: u.weight,
          pr: u.pr,
          ampur: u.ampur,
          // role: i % 2 === 0 ? 'Admin' : 'User',
        }))
        setData(mapped)
      } catch (err) {
        console.error('Error fetching data:', err)
      } finally {
        setLoading(false)
      }
    }


    fetchData()
  }, [apiBaseUrl])

  if (loading) return <p className="text-center p-4">กำลังโหลดข้อมูล...</p>

  return (
    <div><Modal1 isOpen={isModalOpen} onClose={closeModal} hptcode={String(data[selects].hptcode)} idcard={String(data[selects].idcard)} dspname={"asfa"} male={"ชาย"} age={12}/>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-xl overflow-hidden">
        <thead className="bg-blue-600 text-white">
          <tr className=' border-2 border-black'>
            <th className="text-left py-3 px-4">ลำดับ</th>
            <th className="text-left py-3 px-4">HN</th>
            <th className="text-left py-3 px-4">ชื่อ-นามสกุล</th>
            <th className="text-left py-3 px-4">เพศ</th>
            <th className="text-left py-3 px-4">อายุ</th>
            <th className="text-left py-3 px-4">น้ำหนัก</th>
            <th className="text-left py-3 px-4">รอบเอว</th>
            <th className="text-left py-3 px-4">เขต</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr
              key={index}
              className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} hover:bg-blue-200 cursor-pointer transition border-2`}
              onClick={e => {openModal(), setSelect(index)}}
            >
              <td className="py-2 px-4">{index + 1}</td>
              <td className="py-2 px-4">{user.idcard}</td>
              <td className="py-2 px-4">{user.dspname}</td>
              <td className="py-2 px-4">{user.male}</td>
              <td className="py-2 px-4">{user.age}</td>
              <td className="py-2 px-4">{user.weight}</td>
              <td className="py-2 px-4">{user.pr}</td>
              <td className="py-2 px-4">{user.ampur}</td>
              {/* <td className="py-2 px-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    user.role === 'Admin' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'
                  }`}
                >
                  {user.role}
                </span>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}
