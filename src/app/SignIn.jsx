"use client";
import { useEffect, useState } from "react";

import { auth, provider } from "./firebaseConfig";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import Link from "next/link";
export default function SignIn() {
  const [userObj, setuserObj] = useState(null);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setuserObj(user);
      } else {
        setuserObj(null);
      }
    });
  }, []);
  const handleSignOut = async () => {
    try {
      await signOut(auth);

      setuserObj(null);
    } catch (error) {
      console.error("Error signing out", error);
    }
  };
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);
      setuserObj(user);
    } catch (error) {
      console.error("Error signing in", error);
    }
  };

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Logged In with email", userCredentials.user);
      setuserObj(userCredentials.user);
    } catch (error) {
      console.log("Error singing in with email", error);
      alert("Error signing in");
    }
  };
  return (
    <>
      {!userObj && (
        <form onSubmit={handleEmailSignIn} action="submit">
          <label htmlFor="">
            Email:{" "}
            <input
              onChange={(e) => {
                setemail(e.target.value);
              }}
              value={email}
              type="text"
              name="email"
              id="email"
              placeholder="Email"
            />
          </label>

          <label htmlFor="">
            Password:{" "}
            <input
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              value={password}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </label>
          <button type="submit">Sign In</button>
        </form>
      )}
      {!userObj && <p>Sign in below</p>}
      {!userObj && (
        <button onClick={handleGoogleSignIn}>Sign In with Google</button>
      )}
      {userObj && <p>Sign in successful!</p>}
      {userObj && (
        <p>
          Welcome back {userObj.displayName}, email:{userObj.email}
        </p>
      )}
      {userObj && <Link href={"/dashboard"}>Proceed to Dashboard</Link>}
      {userObj && <button onClick={handleSignOut}>Sign Out</button>}
    </>
  );
}
