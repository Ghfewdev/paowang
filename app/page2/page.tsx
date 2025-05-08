"use client"
import { useEffect, useState } from 'react'
import axios from 'axios'
import DataTable from '../components/table/DataTable'


export default function Page2() {

  return (
    <main className="p-4">
      <div className="w-full">
        <h1 className="text-2xl font-bold mb-6">ผู้เสี่ยงโรคความดันโลหิตสูง</h1>
        <DataTable />
      </div>
    </main>
  )
}