"use client";

import React, { useState, useEffect } from "react";
import AdminHeader from "@/components/Dashboard/AdminHeader";
import { RiDashboard3Line } from "react-icons/ri";

export default function Dashboard() {
  return (
    <div>
      <AdminHeader icon={<RiDashboard3Line />} label="Dashboard" />

    </div>
  )
}
