"use client";

import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar Section */}
      <header className="flex justify-between items-center p-6 bg-white shadow">
        <h1 className="text-2xl font-bold text-blue-700">
          Chama - Merry Go Round Made Easier and Smoother
        </h1>
        <div className="space-x-4">
          <Link href="/login">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Login
            </button>
          </Link>
          <Link href="/signup">
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Signup
            </button>
          </Link>
        </div>
      </header>

      {/* Hero / Mission Section */}
      <main className="flex flex-col items-center justify-center flex-1 text-center px-6">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">
          Welcome to Chama Ya Wamama
        </h2>
        <p className="text-lg max-w-2xl text-gray-600 mb-8">
          Our mission is to empower groups with a smarter way to save, invest, 
          and grow together. Our vision is to make merry-go-round chama 
          management easier, transparent, and stress-free for every member.
        </p>
        <Link href="/signup">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700">
            Get Started
          </button>
        </Link>
      </main>

      {/* Footer */}
      <footer className="text-center py-4 text-sm text-gray-500 bg-white shadow-inner">
        © {new Date().getFullYear()} Chama. All rights reserved.
      </footer>
    </div>
  );
}
