"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MenuIcon, SearchIcon, BellIcon, UserCircleIcon } from "lucide-react";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-center h-16 bg-gray-900">
          <span className="text-white text-2xl font-semibold">Logo</span>
        </div>
        <nav className="mt-5">
          <a
            className="flex items-center px-6 py-2 text-gray-700 hover:bg-gray-100"
            href="#"
          >
            <span className="mx-3">Dashboard</span>
          </a>
          <a
            className="flex items-center px-6 py-2 text-gray-700 hover:bg-gray-100"
            href="#"
          >
            <span className="mx-3">Projects</span>
          </a>
          <a
            className="flex items-center px-6 py-2 text-gray-700 hover:bg-gray-100"
            href="#"
          >
            <span className="mx-3">Tasks</span>
          </a>
          <a
            className="flex items-center px-6 py-2 text-gray-700 hover:bg-gray-100"
            href="#"
          >
            <span className="mx-3">Calendar</span>
          </a>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-4 bg-white border-b-1 border-gray-200">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle sidebar"
            >
              <MenuIcon className="h-6 w-6" />
            </Button>
            <div className="relative mx-4">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <SearchIcon className="h-5 w-5 text-gray-500" />
              </span>
              <Input
                type="search"
                placeholder="Search..."
                className="pl-10 pr-4"
              />
            </div>
          </div>
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="mr-2">
              <BellIcon className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon">
              <UserCircleIcon className="h-6 w-6" />
            </Button>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          <h1 className="text-3xl font-semibold text-gray-900">Dashboard</h1>
          <p className="mt-2 text-gray-600">Welcome to your dashboard!</p>
          {/* Add your page content here */}
        </main>
      </div>
    </div>
  );
}
