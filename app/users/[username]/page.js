export default async function Page(props) {
  const params = await props.params; 
  const username = params.username;

  return (
    <>

      <div className="cover w-screen   flex items-center justify-center bg-red-50">
        <img className="object-cover w-full " src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/20.gif?token-hash=f_0zmyi9EgukDY-tDcfYi7hD-zWZaXdxGqbqAxYUAxw%3D&token-time=1780531200" alt="" />
      </div>
      <div className="relative w-full  ">
        <img height={150} width={150} className="absolute -bottom-18 rounded-full right-[46%]" src="/catimage.jpeg" alt="" />
      </div>
      <div className="flex justify-center my-20 flex-col items-center gap-2">
        <h2 className="font-bold text-xl">@{username}</h2>
        <div className="text-slate-300">
          created animated art for VTTs
        </div>
        <div className="text-slate-300">
          9,2323 members . 82 posts . $52,450/release
        </div>
        <div className="payments flex gap-3 w-[80%] mt-16">
          <div className="supoorters w-1/2 bg-slate-600 rounded-lg text-white p-5 ">
            {/* make supportes leaderboard  */}
            <h2 className="font-bold my-5 text-2xl underline ">Supporters</h2>
            <ul className="gap-3 mx-11">

              <li className=" my-2 flex gap-3 items-center">
                <img src="/user.png" width={35} height={35} alt="" />
                <span>
                  Ravi donated <span className="font-bold">$19</span> with a message " I suppoort You Bro ❤ "
                </span>
              </li>

              <li className=" my-2 flex gap-3 items-center">
                <img src="/user.png" width={35} height={35} alt="" />
                <span>
                  Ravi donated <span className="font-bold">$19</span> with a message " I suppoort You Bro ❤ "
                </span>
              </li>

              <li className=" my-2 flex gap-3 items-center">
                <img src="/user.png" width={35} height={35} alt="" />
                <span>
                  Ravi donated <span className="font-bold">$19</span> with a message " I suppoort You Bro ❤ "
                </span>
              </li>

              <li className=" my-2 flex gap-3 items-center">
                <img src="/user.png" width={35} height={35} alt="" />
                <span>
                  Ravi donated <span className="font-bold">$19</span> with a message " I suppoort You Bro ❤ "
                </span>
              </li>

              <li className=" my-2 flex gap-3 items-center">
                <img src="/user.png" width={35} height={35} alt="" />
                <span>
                  Ravi donated <span className="font-bold">$19</span> with a message " I suppoort You Bro ❤ "
                </span>
              </li>

              <li className=" my-2 flex gap-3 items-center">
                <img src="/user.png" width={35} height={35} alt="" />
                <span>
                  Ravi donated <span className="font-bold">$19</span> with a message " I suppoort You Bro ❤ "
                </span>
              </li>




            </ul>

          </div>
          <div className="makepayments w-1/2 bg-slate-600 rounded-xl text-white p-5 ">
            <h2 className="text-2xl font-black my-5">Make Payment </h2>
            <div className="flex flex-col gap-2">
              <input type="text" className="w-full p-3 rounded-lg bg-slate-800 " placeholder="Enter Your Name  " />
              <input type="text" className="w-full p-3 rounded-lg bg-slate-800 flex-col" placeholder="Enter Your Message  " />
              <input type="text" className="w-full p-3 rounded-lg bg-slate-800 flex-col" placeholder="Enter the Amount " />


              <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Purple</button>

            </div>
            {/* OR choose from this amount  */}
            <div className=" flex gap-5 my-3.5 ">
              <button className="bg-slate-800 p-4 px-9 rounded-lg">$20</button>
              <button className="bg-slate-800 p-4 px-9 rounded-lg">$50 </button>
              <button className="bg-slate-800 p-4 px-9 rounded-lg">$100 </button>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}