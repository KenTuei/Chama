"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { storeUser, getStoredUser } from "@/utils/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  // ✅ Redirect logged-in users away from login page
  useEffect(() => {
    const user = getStoredUser();
    if (user?.access) {
      if (user.email === "tuei.admin@gmail.com") {
        router.push("/admin-dashboard");
      } else {
        router.push("/member-dashboard");
      }
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Admin login
      if (email === "tuei.admin@gmail.com" && password === "tueituei@123") {
        storeUser({ email, access: "adminAccessToken", refresh: "adminRefreshToken" });
        setMessage("Welcome Admin! Redirecting...");
        setTimeout(() => router.push("/admin-dashboard"), 1500);
        return;
      }

      // Backend login
      const res = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        const data = await res.json();
        storeUser({ email, access: data.access, refresh: data.refresh });
        setMessage("Login successful! Redirecting...");
        setTimeout(() => router.push("/member-dashboard"), 1500);
      } else {
        const errorData = await res.json();
        setMessage("Error: " + JSON.stringify(errorData));
      }
    } catch (err) {
      setMessage("Something went wrong. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
        {message && <p className="mt-3 text-sm text-center">{message}</p>}
      </div>
    </div>
  );
}
