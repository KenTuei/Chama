"use client";

import { useRouter } from "next/navigation";
import { clearUser } from "@/utils/auth";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    clearUser(); // ✅ remove user from localStorage
    router.push("/login"); // redirect to login
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
    >
      Logout
    </button>
  );
}
