"use client"

import { useSession, signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function LoginPage() {
    const { data: session, status } = useSession()
    const router = useRouter()
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    // ✅ redirect safely AFTER render
    useEffect(() => {
        if (status === "authenticated") {
            router.push("/dashboard")
        }
    }, [status, router])

    if (!isClient || status === "loading") return null


    return (
        <div>
            <div className='flex w-screen min-h-52 justify-center text-black items-center'>

                <h1 className='text-3xl text-white  font-bold'> Login to Get your fans to  support you  </h1>
            </div>
            <div className='w-screen flex justify-center'>

                <div className='min-h-[50vh] w-[60vw]  self-center flex  items-center justify-center gap-8 flex-col'>

                    <div className='bg-amber-100 border shadow-md  scale-100 hover:scale-110 transition-transform duration-300  h-14 w-[40%] flex gap-11 items-center rounded-3xl px-11'>
                        <div className='logo'>
                            <img src="/icons8-google.svg" alt="" />
                        </div>
                        <div className='name '>
                            <span className='text-xl text-black font-bold '> Continue with Google</span>
                        </div>

                    </div>


                    <div className='bg-amber-100 border   shadow-md scale-100 hover:scale-110 transition-transform duration-300    h-14 w-[40%] flex gap-11 items-center rounded-3xl px-11'>
                        <div className='logo'>
                            <img src="/icons8-facebook-48.png" alt="" />
                        </div>
                        <div className='name '>
                            <span className='text-xl text-black font-bold '> Continue with  Facebook</span>
                        </div>

                    </div>

                    <div className='bg-amber-100 border   shadow-md scale-100 hover:scale-110 transition-transform duration-300    h-14 w-[40%] flex gap-11 items-center rounded-3xl px-11'>
                        <div className='logo'>
                            <img src="/icons8-linkedin-48.png" alt="" />
                        </div>
                        <div className='name '>
                            <span className='text-xl text-black font-bold '> Continue with Linkedin </span>
                        </div>

                    </div>


                    <div onClick={() => signIn("github", { callbackUrl: "/Dashboard" })} className='bg-amber-100 border   shadow-md scale-100 hover:scale-110 transition-transform duration-300    h-14 w-[40%] flex gap-11 items-center rounded-3xl px-11'>
                        <div className='logo'>
                            <img src="/icons8-github-logo-94.png" width="50" height="50" alt="" />
                        </div> 
                        <div className='name '>
                            <span className='text-xl text-black font-bold '> Continue with Git Hub</span>
                        </div>

                    </div>

 
                    <div className='bg-amber-100 border   shadow-md scale-100 hover:scale-110 transition-transform duration-300    h-14 w-[40%] flex gap-11 items-center rounded-3xl px-11'>
                        <div className='logo'>
                            <img src="/icons8-apple-50.png" alt="" />
                        </div>
                        <div className='name '>
                            <span className='text-xl text-black font-bold '> Continue with Apple</span>
                        </div>

                    </div>


                </div>

            </div>
        </div>
    )
}
