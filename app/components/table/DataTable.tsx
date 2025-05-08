// import React, { useEffect, useState } from "react";
// import axios from "axios";

// type DataType = {
//   hptcode: number
//   idcard: string
//   dspname: string
//   // เพิ่ม fields ตามข้อมูลจริงของคุณ
// };

// const DataTable: React.FC = () => {
//   const [data, setData] = useState<DataType[]>([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const rowsPerPage = 25;

//   const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3010"

//   const fetchData = async () => {
//     try {
//       const response = await axios.get<DataType[]>(`${apiBaseUrl}/api/data3`); // สมมุติว่าคุณมี API `/api/data`
//       setData(response.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   // คำนวณ index สำหรับข้อมูลหน้าแต่ละหน้า
//   const indexOfLastRow = currentPage * rowsPerPage;
//   const indexOfFirstRow = indexOfLastRow - rowsPerPage;
//   const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

//   const totalPages = Math.ceil(data.length / rowsPerPage);

//   const handlePageChange = (pageNumber: number) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white border">
//           <thead className="bg-gray-100">
//             <tr>
//             <th className="py-2 px-4 border-b">Index</th>
//               <th className="py-2 px-4 border-b">ID</th>
//               <th className="py-2 px-4 border-b">Name</th>
//               <th className="py-2 px-4 border-b">Email</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentRows.map((item, index) => ( 
//               <tr key={index} className="hover:bg-gray-50">
//                 <td className="py-2 px-4 border-b">{index+1}</td>
//                 <td className="py-2 px-4 border-b">{item.hptcode}</td>
//                 <td className="py-2 px-4 border-b">{item.idcard}</td>
//                 <td className="py-2 px-4 border-b">{item.dspname}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center mt-4 space-x-2">
//         {Array.from({ length: totalPages }, (_, i) => (
//           <button
//             key={i}
//             onClick={() => handlePageChange(i + 1)}
//             className={`px-3 py-1 rounded ${
//               currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
//             }`}
//           >
//             {i + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DataTable;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal1 from "../modal/modal1";

type DataType = {
  hptcode: number
    idcard: string
    dspname: string
    male: string
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
  
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3010"

  const fetchData = async (page: number, limit: number, search: string) => {
    setLoading(true);
    try {
      const response = await axios.get(apiBaseUrl+"/api/data3", {
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
                  <tr key={index} className="hover:bg-gray-50" onClick={e => openModal()}>
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
