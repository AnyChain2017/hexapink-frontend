"use client";

import React from 'react'
import AdminHeader from "@/components/Dashboard/AdminHeader";
import { PiPackage } from "react-icons/pi";

export default function Orders() {
  return (
    <div>
      <AdminHeader icon={<PiPackage />} label="Orders" />

    </div>
  )
}
