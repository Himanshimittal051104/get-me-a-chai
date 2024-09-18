"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSession, signIn, signOut } from "next-auth/react"
import { handleClientScriptLoad } from 'next/script';
import { useRouter } from 'next/navigation';
import Image from 'next/image';


const Navbar = () => {
  const { data: session} = useSession();
  const router = useRouter();
  //status is the property of useSession to differentiate between the "loading" state, "authenticated" state, and "unauthenticated" state.
  // useEffect(() => {
  //   if(status=="authenticated"){
  //     toast.success(`Signed in as ${session.user.email}`);
  //   }else if(status=="unauthenticated"){
  //     toast.info(`Signed out`);
  //   }
  // },[session,status]);  
  const [DropDown, setDropDown] = useState(false)
  const handleToggleDropDown = () => {
    setDropDown(prevState => !prevState);
  };

  const [InputValue, setInputValue] = useState('');

  const handleInput = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const handlekeyEnter = (event) => {
    if (event.key === 'Enter') {
      router.push(`/${InputValue.replace(/\s+/g, '')}`);
      /*
        replace(/\s+/g, ''):
        This regex replaces all sequences of whitespace characters with an empty string.
        It will remove all spaces within the string but also handles multiple types of whitespace (spaces, tabs, etc.) and any sequence of such characters.
        trim():
        This method removes only the leading and trailing whitespace from the string.
        It does not affect spaces between words within the string.
      */
      setInputValue('');
    }
  };
  const handlekeyCancel = () => {
    setInputValue('');
  };
  return (
    <>
      <nav className='flex items-center bg-slate-950 text-white justify-between h-12 sticky top-0'>
        <div className='font-bold mx-2 p-2 flex gap-2 my-auto'>
          <Image src="chai.svg" alt="chai" />
          Get ME a Chai
        </div>
        <div className='flex relative'>
          <input placeholder='search your creator' className='bg-gradient-to-t from-[#7d3bef] from-0% to-[#6786ff] rounded-md text-white pr-1 pl-2 placeholder-white ' value={InputValue} onChange={handleInput} onKeyDown={handlekeyEnter} ></input>
          {InputValue == '' ? (<Image src="search.svg" alt="search" className='absolute left-48 top-1'></Image>) : (<Image src="cancel.svg" className='absolute left-48 top-1' alt="cancel" onClick={handlekeyCancel} ></Image>)}
          {session ? (
            <div className='relative'>
              <button id="dropdownDefaultButton" className="bg-gradient-to-t from-[#7d3bef] from-0% to-[#6786ff] px-4 mx-2 rounded-md py-1 my-auto inline-flex items-center relative" type="button">Welcome {session.user.name}
                <svg onClick={handleToggleDropDown} className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              {DropDown &&
                <div className='absolute bg-slate-600 top-8 right-2.5 justify-center'>
                  <ul aria-labelledby="dropdownDefaultButton ">
                    <li className='hover:bg-slate-800'>
                      <Link href="../dashboard"><div className=" px-4 py-2">Dashboard</div></Link>
                    </li>
                    <li className='hover:bg-slate-800'>
                      <Link href={`/${session.user.name.replace(/\s+/g, '')}`}><div className=" px-4 py-2 ">your Page</div></Link>
                    </li>
                    <li className='hover:bg-slate-800'>
                      <Link href="" ><div className=" px-4 py-2 ">Earnings</div></Link>
                    </li>
                    <li className='hover:bg-slate-800'>
                      <button className="px-4 py-2" onClick={() => signOut({ callbackUrl: '/' })}>Sign out</button>
                    </li>
                  </ul>
                </div>
              }
            </div>
          )
            :
            (<Link href={"/login"}>
              {/* onClick={()=>window.location.href="/login"} */}
              <button className='bg-gradient-to-t from-[#7d3bef] from-0% to-[#6786ff] px-4 mx-2 rounded-md py-1'>Login</button>
            </Link>
            )
          }
        </div></nav>
      <ToastContainer />
    </>
  )
}

export default Navbar