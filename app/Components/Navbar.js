"use client"
import React, { useState, useEffect } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'

export const Navbar = () => {
  const { data: session, status } = useSession()
  const [isClient, setIsClient] = useState(false)
  const [showdropdown, setshowdropdown] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <div>
      <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="logo font-bold text-lg flex gap-0.5 items-center">
          <Link href={"/"}>
          Get_me_chai
          </Link>
          <img src="/tea.gif" width="35" height="36" alt="" />
        </div>



        <div className="flex gap-4 items-center relative">
          {session && <>

            <button id="multiLevelDropdownButton" onClick={() => { setshowdropdown(!showdropdown) }}  data-dropdown-toggle="multi-dropdown"  onBlur={()=>{ setTimeout(() => {
              setshowdropdown(false)
            },200);}}    className="inline-flex items-center  justify-center mr-8 text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button">
              welcome
            </button>

            <div id="multi-dropdown" className={`z-10 ${showdropdown ? "" : "hidden"} absolute top-full bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44`}>
              <ul className="p-2 text-sm text-body font-medium">

                <li>
                  <Link href={'/dashboard'} className="inline-flex w-full p-2 hover:bg-neutral-tertiary-medium rounded">
                    Dashboard
                  </Link>
                </li>

                <li>
                  <Link href={'/my-downloads'} className="inline-flex w-full p-2 hover:bg-neutral-tertiary-medium rounded">
                    Your page 
                  </Link>
                </li>

                <li>
                  <Link href={'/billing'} className="inline-flex w-full p-2 hover:bg-neutral-tertiary-medium rounded">
                    Billing
                  </Link>
                </li>

                <li>
                  <Link href={'/rewards'} className="inline-flex w-full p-2 hover:bg-neutral-tertiary-medium rounded">
                    Rewards
                  </Link>
                </li>

                <li>
                  <Link href={'/earnings'} className="inline-flex w-full p-2 hover:bg-neutral-tertiary-medium rounded">
                    Earnings
                  </Link>
                </li>

              </ul>
            </div>
          </>
          }
          {session ? (
            <>
              <Link href={"/"}>
                <button

                   onClick={() => signOut({ callbackUrl: "/" })}

                  className='text-white bg-gradient-to-br rounded-2xl from-red-600 to-red-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-300 font-medium text-sm px-4 py-2.5 text-center leading-5'
                >
                  Logout
                </button>
              </Link>
            </>
          ) : (
            <Link href={"/login"}>
              <button className='text-white bg-gradient-to-br rounded-2xl from-purple-800 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5'>
                Login
              </button>
            </Link>
          )}
        </div>
      </nav>
    </div>
  )
}
