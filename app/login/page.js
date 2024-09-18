"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
const login = () => {
  // const { data: session} = useSession();
  // if(session){
  //   const username=`${session.user.name.replace(/\s+/g, '')}`;
  // }
  return (
    <div>
      <div className="text-white text-center pt-10 text-2xl font-bold">Login to get Started</div>
      <div className="mt-5">
        <div className="text-center flex justify-center">
          <button className="text-black w-[40vh] py-3 my-1 rounded-md bg-white flex justify-normal font-bold" onClick={()=>{signIn("google", { callbackUrl: "/profile" })}}><img src="./google.svg" alt="" className="ml-5 mr-3 h-5" />Continue With Google</button>
        </div>
        <div className="text-center flex justify-center">
          <button className="text-black w-[40vh] py-3 my-1 rounded-md bg-white flex justify-normal font-bold" onClick={()=>{signIn("linkedin", { callbackUrl: "/profile" })}}><img src="./linkedln.svg" alt="" className="ml-5 mr-3" />Continue With LinkedIn</button>
          </div>
          <div className="text-center flex justify-center">
          <button className="text-black w-[40vh] py-3 my-1 rounded-md bg-white flex justify-normal font-bold" onClick={()=>{signIn("apple", { callbackUrl: "/profile" })}}><img src="./apple.svg" alt="" className="ml-5 mr-3" />Continue With Apple</button>
        </div>
        <div className="text-center flex justify-center">
          <button className="text-black w-[40vh] py-3 my-1 rounded-md bg-white flex justify-normal font-bold" onClick={()=>{signIn("facebook", { callbackUrl: "/profile" })}}><img src="./facebook.svg" alt="" className="ml-5 mr-3" />Continue With Facebook</button>
          </div>
        <div className="text-center flex justify-center">
          <button className="text-black w-[40vh] py-3 my-1 rounded-md bg-white flex justify-normal font-bold" onClick={()=>{signIn("twitter", { callbackUrl: "/profile" })}}><img src="./twitter.svg" alt="" className="ml-5 mr-3" />Continue With Twitter</button>
          </div>
        <div className="text-center flex justify-center">
          <button className="text-black w-[40vh] py-3 my-1 rounded-md bg-white flex justify-normal font-bold" onClick={()=>{
              signIn("github", { callbackUrl:"/profile"})}}>
              <img src="./github.svg" alt="" className="ml-5 mr-3" />Continue With Github</button>
        </div>
        
      </div>
    </div>
  )
}

export default login
