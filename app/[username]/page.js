"use client"
import React,{useState} from 'react'
import { useParams } from 'next/navigation';
import Image from 'next/image';


const Username = () => {
    const {username}=useParams();
    const [inputvalue, setInputvalue] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleName=(event)=>{
        const value=event.target.value;
        setName(value);
    };
    const handleMessage=(event)=>{
        const value=event.target.value;
        setMessage(value);
    };
    const handleInput=(event)=>{
        const value=event.target.value;
        setInputvalue(value);
    };
    const handlePay10=()=>{
        setInputvalue(10);
    };
    const handlePay20=()=>{
        setInputvalue(20);
    };
    const handlePay30=()=>{
        setInputvalue(30);
    };

  return (
    <div>
    <div className='cover'> 
        <Image src="./landscape1.jpg" alt="image of backgroung"  className=' h-72 w-[100%] object-cover ' />
    </div>
    <div className='h-1 bg-blue-950'></div>
    <div className='text-white text-center relative'>
        <div className='w-20 h-20 rounded-full bg-black border-2 overflow-hidden border-black mx-auto absolute left-[47vw] -top-11'>
            <Image src="./lion.jpeg" alt="image of lion" /></div>
        <div className='font-bold  pt-12'>@{username}</div>
        <div className='pt-3 text-gray-400'>Lets help @{username} to get a Chai !</div>
        <div className='pt-3 pb-5 text-gray-400'>56K members . 789 posts . $15,145/releases</div>
    </div>
    <div className='flex justify-center gap-3 pb-12 text-white'>
        <div className='w-[40vw] max-h-[60vh] bg-slate-950 text-center overflow-y-auto scrollbar-hide px-10'>
            <div className='font-bold my-2 py-5 text-center text-xl'>Top 10 Supporters</div>
            <div className='text-gray-400 my-2 flex'><div className='bg-white mr-3 border border-solid border-purple-950 rounded-full p-1 min-h-8 min-w-8'><Image src="user.svg" alt="profile pic"  ></Image></div><div><strong>{username}</strong> donated <strong>$</strong><strong>{username}</strong> with a message "<strong>{username}</strong>" . </div></div>
            <div className='mb-2 text-gray-400 flex'><div className='bg-white mr-3 border border-solid border-purple-950 rounded-full p-1'><Image src="user.svg" alt="profile pic"  ></Image></div><div><strong>{username}</strong> donated <strong>$</strong><strong>{username}</strong> with a message "<strong>{username}</strong>" . </div></div>
            <div className='mb-2 text-gray-400 flex'><div className='bg-white mr-3 border border-solid border-purple-950 rounded-full p-1'><Image src="user.svg" alt="profile pic"  ></Image></div><div><strong>{username}</strong> donated <strong>$</strong><strong>{username}</strong> with a message "<strong>{username}</strong>" . </div></div>
            <div className='mb-2 text-gray-400 flex'><div className='bg-white mr-3 border border-solid border-purple-950 rounded-full p-1'><Image src="user.svg" alt="user"  ></Image></div><div><strong>{username}</strong> donated <strong>$</strong><strong>{username}</strong> with a message "<strong>{username}</strong>" . </div></div>
            <div className='mb-2 text-gray-400 flex'><div className='bg-white mr-3 border border-solid border-purple-950 rounded-full p-1'><Image src="user.svg" alt="profile pic"  ></Image></div><div><strong>{username}</strong> donated <strong>$</strong><strong>{username}</strong> with a message "<strong>{username}</strong>" . </div></div>
            <div className='mb-2 text-gray-400 flex'><div className='bg-white mr-3 border border-solid border-purple-950 rounded-full p-1'><Image src="user.svg" alt="profile pic"  ></Image></div><div><strong>{username}</strong> donated <strong>$</strong><strong>{username}</strong> with a message "<strong>{username}</strong>" . </div></div>
            <div className='mb-2 text-gray-400 flex'><div className='bg-white mr-3 border border-solid border-purple-950 rounded-full p-1'><Image src="user.svg" alt="profile pic"  ></Image></div><div><strong>{username}</strong> donated <strong>$</strong><strong>{username}</strong> with a message "<strong>{username}</strong>" . </div></div>
            <div className='mb-2 text-gray-400 flex'><div className='bg-white mr-3 border border-solid border-purple-950 rounded-full p-1'><Image src="user.svg" alt="profile pic"  ></Image></div><div><strong>{username}</strong> donated <strong>$</strong><strong>{username}</strong> with a message "<strong>{username}</strong>" . </div></div>
            <div className='mb-2 text-gray-400 flex'><div className='bg-white mr-3 border border-solid border-purple-950 rounded-full p-1'><Image src="user.svg" alt="profile pic"  ></Image></div><div><strong>{username}</strong> donated <strong>$</strong><strong>{username}</strong> with a message "<strong>{username}</strong>" . </div></div>
            <div className='mb-8 text-gray-400 flex'><div className='bg-white mr-3 border border-solid border-purple-950 rounded-full p-1'><Image src="user.svg" alt="profile pic"  ></Image></div><div><strong>{username}</strong> donated <strong>$</strong><strong>{username}</strong> with a message "<strong>{username}</strong>" . </div></div>
        </div>
        <div className='w-[40vw] h-[60vh]  text-center bg-slate-950'>
            <div className='font-bold p-5 my-2 text-xl'>Make a Payment</div>
            <input type="text" placeholder='Enter name ' className='w-[30vw] bg-slate-700 h-10 my-2 mx-auto p-4 rounded-3xl' onChange={handleName} value={name}/>
            <input type="text" placeholder='Enter message' className='w-[30vw] bg-slate-700 h-10 my-2 mx-auto p-4 rounded-3xl' onChange={handleMessage} value={message} />
            <input type="text" placeholder='Enter amaount' className='w-[30vw] bg-slate-700 h-10 my-2 mx-auto p-4 rounded-3xl' onChange={handleInput} value={inputvalue} />
            <button className='w-[30vw] h-10 bg-gradient-to-t from-[#7d3bef] from-0% to-[#6786ff] text-black my-2 rounded-3xl'>Pay</button>
            <div className='flex mt-3 justify-center'>
                <button className=' bg-slate-700 mr-2 rounded-3xl p-2' onClick={handlePay10}>Pay 10 Rs</button>
                <button className=' bg-slate-700 mr-2 rounded-3xl p-2' onClick={handlePay20}>Pay 20 Rs</button>
                <button className='bg-slate-700 rounded-3xl p-2' onClick={handlePay30}>Pay 30 Rs</button>
            </div>
            
        </div>
    </div>
</div>
  )
}

export default Username