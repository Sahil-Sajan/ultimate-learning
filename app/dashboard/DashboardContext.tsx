"use client";
import React, { createContext, useContext, useState } from "react";

const DashboardContext = createContext({
  activeTab: "Dashboard",
  setActiveTab: (tab: string) => {},
});

export const DashboardProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  return (
    <DashboardContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => useContext(DashboardContext);