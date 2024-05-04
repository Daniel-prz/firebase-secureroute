"use client";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../firebaseConfig";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function UserPage() {
  const router = useRouter();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/dashboard");
      } else {
        router.push("/");
      }
    });
    return () => {
      unsub;
    };
  }, []);
  return (
    <div>
      <h1>Dashboard</h1>
      <Link href={"/"}>Back to Sign In</Link>
    </div>
  );
}
