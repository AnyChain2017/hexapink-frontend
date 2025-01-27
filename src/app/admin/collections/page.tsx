"use client";

import React from 'react'
import AdminHeader from "@/components/Dashboard/AdminHeader";
import { FaRegFolderOpen } from "react-icons/fa";

export default function Collections() {
  return (
    <div>
      <AdminHeader icon={<FaRegFolderOpen />} label="Collections" />

    </div>
  )
}