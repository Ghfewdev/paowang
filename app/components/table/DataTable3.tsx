'use client'

import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal1 from "../modal/modal1";

interface DataType {
    hptcode: string
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
    mrtlst: string
};

const DataTable3: React.FC = () => {

    const [data, setData] = useState<DataType[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [totalItems, setTotalItems] = useState(0);
    const [loading, setLoading] = useState(false);

    const [ampurr, setAmpurr] = useState("");
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState('');
    const [hba1cc, setHba1cc] = useState("");


    const [isModalOpen, setIsModalOpen] = useState(false);

    const [selects, setSelect] = useState(0);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3010"


    const fetchData = async (page: number, limit: number, ampur: string, ageGroup: number, male: string, control: string) => {
        setLoading(true);
        try {
            const response = await axios.get(apiBaseUrl + "/api/data5", {
                params: {
                    page,
                    limit,
                    ampur,
                    ageGroup,
                    male,
                    control
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
        fetchData(1, limit, ampurr, age, gender, hba1cc);
    }, [limit, ampurr, age, gender, hba1cc]);

    const totalPages = Math.ceil(totalItems / limit);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            fetchData(page, limit, ampurr, age, gender, hba1cc);
        }
    };

    const handleLimitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLimit(Number(e.target.value));
        setCurrentPage(1);
    };

    const handleageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setAge(Number(e.target.value));
        setCurrentPage(1);
    };

    const handleampurChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setAmpurr(e.target.value);
        setCurrentPage(1);
    };

    const handlegenderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setGender(e.target.value);
        setCurrentPage(1);
    };

    const handlehba1ccChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setHba1cc(e.target.value);
        setCurrentPage(1);
    };

    const uniqueNames = data.map(item => item.ampur).filter((value, index, self) => self.indexOf(value) === index);

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
            
            <div className="flex flex-col md:flex-row items-center justify-between mb-4 space-y-4 md:space-y-0">

                {/* <div style={{ marginBottom: '1rem' }}> */}


                &nbsp;&nbsp;&nbsp;&nbsp;
                ช่วงอายุ
                &nbsp;&nbsp;&nbsp;&nbsp;
                <select
                    className="border p-2 rounded w-full md:w-1/8"
                    value={age}
                    onChange={handleageChange}
                >
                    <option value="0">ทุกช่วงอายุ</option>
                    {/* <option value="1">0-12 ปี</option>
                    <option value="2">13-34 ปี</option> */}
                    <option value="1">35-44 ปี</option>
                    <option value="2">45-59 ปี</option>
                    <option value="3">60 ปีขึ้นไป</option>

                </select>

                
                เพศ
                &nbsp;&nbsp;&nbsp;&nbsp;
                <select
                    className="border p-2 rounded w-full md:w-1/8"
                    value={gender}
                    onChange={handlegenderChange}
                >
                    <option value="">ทุกเพศ</option>
                    <option value="ชาย">ชาย</option>
                    <option value="หญิง">หญิง</option>

                </select>

                เขต/อำเภอ &nbsp;&nbsp;&nbsp;&nbsp;

                <select
                    className="border p-2 rounded w-full md:w-1/8"
                    value={ampurr}
                    onChange={handleampurChange}
                >
                    <option value={""}>ทุกเขต/อำเภอ</option>
                    {uniqueNames.map((a, i) => (
                        <option key={i} value={a}>{a}</option>
                    ))
                    }
                </select>

                
                การประเมิน
                &nbsp;&nbsp;&nbsp;&nbsp;
                <select
                    className="border p-2 rounded w-full md:w-1/8"
                    value={hba1cc}
                    onChange={handlehba1ccChange}
                >
                    <option value="">ทั้งหมด</option>
                    <option value="1">ควบคุมได้</option>
                    <option value="2">ควบคุมไม่ได้</option>
                    <option value="3">ไม่ทราบ</option>

                </select>



                {/* </div> */}

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
                                    <tr key={index} className="hover:bg-blue-200 cursor-pointer transition border-2" onClick={e => { setSelect(index), openModal() }}>
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
                    ก่อนหน้า
                </button>

                <span className="px-4">
                     {currentPage} จาก {totalPages}
                </span>

                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
                >
                    ถัดไป
                </button>

                <span className="px-4">
                    {totalItems} รายการ
                </span>

            </div>
        </div>
    );
};

export default DataTable3;
