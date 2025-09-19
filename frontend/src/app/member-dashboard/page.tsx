"use client";

import LogoutButton from "@/components/LogoutButton";
import useAuth from "@/hooks/useAuth";

export default function MemberDashboard() {
  const { isAuthorized } = useAuth(); // adminOnly defaults to false

  if (!isAuthorized) return null; // hide until authorized

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-4">Member Dashboard</h1>
        <p className="mt-2">Welcome to your account 🎉</p>
        <ul className="list-disc pl-5 mt-4 space-y-2">
          <li>Deposit money</li>
          <li>Request withdrawals</li>
          <li>Check balance</li>
          <li>View contributions & profit graph</li>
        </ul>
        <div className="mt-6 flex justify-end">
          <LogoutButton />
        </div>
      </div>
    </div>
  );
}
