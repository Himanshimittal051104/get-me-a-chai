"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image';

const login = () => {
 
  return (
    <div>
      <div className="text-white text-center pt-10 text-2xl font-bold">Login to get Started</div>
      <div className="mt-5">
        <div className="text-center flex justify-center items-center">
          <button className="text-black w-[40vh] py-3  my-1 rounded-md bg-white flex justify-normal font-bold items-center" onClick={()=>{signIn("google", { callbackUrl: "/profile" })}}><Image src="./google.svg" alt="google"  className="ml-5 mr-3 h-5" width={20} height={20}/>Continue With Google</button>
        </div>
        <div className="text-center flex justify-center">
          <button className="text-black w-[40vh] py-3 my-1 rounded-md bg-white flex justify-normal font-bold" onClick={()=>{signIn("linkedin", { callbackUrl: "/profile" })}}><Image src="./linkedln.svg" alt="linkedin" className="ml-5 mr-3" width={24} height={24}/>Continue With LinkedIn</button>
          </div>
          <div className="text-center flex justify-center">
          <button className="text-black w-[40vh] py-3 my-1 rounded-md bg-white flex justify-normal font-bold" onClick={()=>{signIn("apple", { callbackUrl: "/profile" })}}><Image src="./apple.svg" alt="apple"  className="ml-5 mr-3" width={24} height={24}/>Continue With Apple</button>
        </div>
        <div className="text-center flex justify-center">
          <button className="text-black w-[40vh] py-3 my-1 rounded-md bg-white flex justify-normal font-bold" onClick={()=>{signIn("facebook", { callbackUrl: "/profile" })}}><Image src="./facebook.svg" alt="facebook" className="ml-5 mr-3" width={24} height={24}/>Continue With Facebook</button>
          </div>
        <div className="text-center flex justify-center">
          <button className="text-black w-[40vh] py-3 my-1 rounded-md bg-white flex justify-normal font-bold" onClick={()=>{signIn("twitter", { callbackUrl: "/profile" })}}><Image src="./twitter.svg" alt="twitter"   className="ml-5 mr-3" width={24} height={24}/>Continue With Twitter</button>
          </div>
        <div className="text-center flex justify-center">
          <button className="text-black w-[40vh] py-3 my-1 rounded-md bg-white flex justify-normal font-bold" onClick={()=>{
              signIn("github", { callbackUrl:"/profile"})}}>
              <Image src="./github.svg" alt="github" className="ml-5 mr-3" width={24} height={24}/>Continue With Github</button>
        </div>
        
      </div>
    </div>
  )
}

export default login
