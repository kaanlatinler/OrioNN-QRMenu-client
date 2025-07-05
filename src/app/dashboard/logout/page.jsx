"use client";
import { useEffect } from "react";
import { removeToken } from "@/services/authService";
import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();
  useEffect(() => {
    removeToken();
    router.replace("/auth/login");
  }, [router]);
  return null;
} 