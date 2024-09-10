"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ContentPage from "@/components/Content";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { checkUserLoggedIn } from "@/utils/checkUserLoggedIn";

export default function PanelLayout() {
  const [isCheckingLogin, setIsCheckingLogin] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkLoginStatus = async () => {
      const userLoggedIn = await checkUserLoggedIn();
      if (!userLoggedIn) {
        router.push("/login");
      } else {
        setIsCheckingLogin(false);
      }
    };

    checkLoginStatus();
  }, [router]);

  if (isCheckingLogin) {
    return (
      <div className="flex justify-center items-center h-screen bg-zinc-900 text-white font-bold">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="max-h-screen grid grid-cols-16 grid-rows-11 bg-zinc-900">
      <Navbar />
      <Sidebar />
      <ContentPage />
    </div>
  );
}