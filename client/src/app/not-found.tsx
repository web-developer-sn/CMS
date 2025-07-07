"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();

    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white px-6 py-16">
            <div className="max-w-xl text-center">
                <img
                    src="/404-illustration.svg"
                    alt="Page Not Found Illustration"
                    className="w-full max-w-xs mx-auto mb-8"
                />
                <h1 className="text-5xl md:text-6xl font-bold text-blue-700 mb-4">
                    404
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                    Oops! Page Not Found
                </h2>
                <p className="text-gray-600 mb-8">
                    The page you’re looking for doesn’t exist or has been moved. Don’t worry, let’s get you back on track.
                </p>
                <button
                    onClick={() => router.push("/")}
                    className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
                >
                    Go Back Home
                </button>
            </div>
        </main>
    );
}
