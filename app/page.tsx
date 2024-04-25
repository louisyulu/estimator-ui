'use client'

import { useState } from 'react'

export default function Home() {
  const [count, setCount] = useState(0);
  const [echoBack, setEchoBack] = useState('');

  const handleClick = async () => {
    const msg = `count = ${count}`;
    const resp = await fetch('api/echo', {
      method: 'POST',
      body: msg,
    })
    const json = await resp.json();
    setEchoBack(JSON.stringify(json));
    setCount(count + 1)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Click the button to send REST API call</label>
        <button onClick={handleClick} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Send
        </button>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Response -- {echoBack}</label>
      </div>
    </main>
  );
}
