"use client";
import { useEffect } from "react";
import SignIn from "./SignIn";
import { useRouter } from "next/navigation";
import { auth } from "./firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
export default function SignInPage() {
  return (
    <div className="flex justify-center">
      <main className="mt-10 flex flex-col items-center">
        <SignIn />
      </main>
    </div>
  );
}
