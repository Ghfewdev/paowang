'use client'

import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal1 from "../modal/modal1";

interface DataType {
  hptcode: string
  idcard: string
  dspname: string
  male: string
  mrtlst: string
  brthdate: string
  age: number
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
};

const DataTable: React.FC = () => {
  
  const [data, setData] = useState<DataType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalItems, setTotalItems] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selects, setSelect] = useState(0);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3010"

  const fetchData = async (page: number, limit: number, search: string) => {
    setLoading(true);
    try {
      const response = await axios.get(apiBaseUrl + "/api/data3", {
        params: {
          page,
          limit,
          search,
        },
      });
      setData(response.data.data);
      setTotalItems(response.data.totalItems);
      setCurrentPage(page);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(1, limit, searchTerm);
  }, [limit, searchTerm]);

  const totalPages = Math.ceil(totalItems / limit);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      fetchData(page, limit, searchTerm);
    }
  };

  const handleLimitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLimit(Number(e.target.value));
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };
  

  return (
    <div>
      <Modal1 isOpen={isModalOpen} onClose={closeModal}
        hptcode={String(data[selects]?.hptcode)}
        dspname={String(data[selects]?.dspname)}
        idcard={String(data[selects]?.idcard)}
        male={String(data[selects]?.male)}
        mrtlst={String(data[selects]?.mrtlst)}
        age={Number(data[selects]?.age)}
        brthdate={String(data[selects]?.brthdate).split(' ')[0]}
        bloodgrp={String(data[selects]?.bloodgrp)}
        pttype={String(data[selects]?.pttype)}
        address={String(data[selects]?.address)}
        soi={String(data[selects]?.soi)}
        moo={String(data[selects]?.moo)}
        street={String(data[selects]?.street)}
        tumbon={String(data[selects]?.tumbon)}
        ampur={String(data[selects]?.ampur)}
        changwat={String(data[selects]?.changwat)}
        zipcode={String(data[selects]?.zipcode)}
        weight={Number(data[selects]?.weight)}
        height={Number(data[selects]?.height)}
        pr={Number(data[selects]?.pr)}
        cigar={String(data[selects]?.cigar)}
        alc={String(data[selects]?.alc)}
        sbp={Number(data[selects]?.sbp)}
        dbp={Number(data[selects]?.dbp)} 
         />
      {/* Search and Limit Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-4 space-y-4 md:space-y-0">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="border p-2 rounded w-full md:w-1/3"
        />

        <select
          value={limit}
          onChange={handleLimitChange}
          className="border p-2 rounded"
        >
          <option value={10}>10 per page</option>
          <option value={25}>25 per page</option>
          <option value={50}>50 per page</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        {loading ? (
          <div className="text-center py-10">กำลังค้นหาข้อมูล...</div>
        ) : (
          <table className="min-w-full bg-white border">
            <thead className=" bg-blue-600 text-white text-left">
              <tr>
                <th className="py-2 px-4 border-b">ลำดับ</th>
                <th className="py-2 px-4 border-b">รพ.</th>
                <th className="py-2 px-4 border-b">เลข13หลัก</th>
                <th className="py-2 px-4 border-b">ชื่อ-นามสกุล</th>
                <th className="py-2 px-4 border-b">เพศ</th>
                <th className="py-2 px-4 border-b">อายุ</th>
                <th className="py-2 px-4 border-b">น้ำหนัก</th>
                <th className="py-2 px-4 border-b">ส่วนสูง</th>
                <th className="py-2 px-4 border-b">รอบเอว</th>
                <th className="py-2 px-4 border-b">เขต</th>
              </tr>
            </thead>
            <tbody>
              {data.length === 0 ? (
                <tr>
                  <td colSpan={9} className="text-center py-4">
                    ไม่พบข้อมูล
                  </td>
                </tr>
              ) : (
                data.map((item, index) => (
                  <tr key={index} className="hover:bg-blue-200 cursor-pointer transition border-2" onClick={e => {setSelect(index), openModal()}}>
                    <td className="py-2 px-4 border-b">{(currentPage - 1) * limit + index + 1}</td>
                    <td className="py-2 px-4 border-b">{item.hptcode}</td>
                    <td className="py-2 px-4 border-b">{item.idcard}</td>
                    <td className="py-2 px-4 border-b">{item.dspname}</td>
                    <td className="py-2 px-4 border-b">{item.male}</td>
                    <td className="py-2 px-4 border-b">{item.age}</td>
                    <td className="py-2 px-4 border-b">{item.height}</td>
                    <td className="py-2 px-4 border-b">{item.weight}</td>
                    <td className="py-2 px-4 border-b">{item.pr}</td>
                    <td className="py-2 px-4 border-b">{item.ampur}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-6 space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>

        <span className="px-4">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DataTable;
