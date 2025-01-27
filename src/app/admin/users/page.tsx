"use client";

import React from 'react'
import AdminHeader from "@/components/Dashboard/AdminHeader";
import { FaRegUserCircle } from "react-icons/fa";

export default function Users() {
  return (
    <div>
      <AdminHeader icon={<FaRegUserCircle />} label="Users" />

    </div>
  )
}