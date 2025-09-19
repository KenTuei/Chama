"use client";

import LogoutButton from "@/components/LogoutButton";
import useAuth from "@/hooks/useAuth";

export default function AdminDashboard() {
  const { isAuthorized } = useAuth({ adminOnly: true });

  if (!isAuthorized) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
        <p className="mt-2">Welcome, Admin! 🎉</p>
        <ul className="list-disc pl-5 mt-4 space-y-2">
          <li>View all members</li>
          <li>Approve or reject withdrawals</li>
          <li>View system analytics</li>
        </ul>
        <div className="mt-6 flex justify-end">
          <LogoutButton />
        </div>
      </div>
    </div>
  );
}
