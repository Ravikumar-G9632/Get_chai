import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center text-white min-h-[44vh] items-center flex-col pt-4 gap-3 ">
      <div className="flex justify-center items-center  flex-col min-h-96">

      <div className="flex justify-center items-center m-2.5 min-h-24">

        <div className="font-bold text-5xl  flex justify-center items-center "> Get Me A Chai  <span className="self-center "><img src="/tea.gif" width="60" height="60" alt="" /></span></div>
      </div>
      <p className="font-bold mb-5"> A crowd funding platform  for The creators . Get funded by your own fans and followers . Start now!</p>
      <div className="flex gap-5">
        <button type="button" className="text-white bg-gradient-to-br rounded-2xl from-purple-800 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Start Now </button>
        <button type="button" className="text-white bg-gradient-to-br rounded-2xl from-purple-800 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Read me </button>
      </div>
      </div>
      <div className=" my-2 w-full bg-[#ffffff56] border  border-b-cyan-200 h-2 ">  </div>
      <div className="flex  flex-col mt-2">
        <h2 className="self-center text-3xl font-bold" > Fans can buy you a chai </h2>
        <div className="flex justify-around gap-56 mt-6">
          <div className="flex flex-col justify-center items-center">
            <div className="border rounded-full bg-slate-300  flex flex-col justify-center items-center p-5">
              <div className="flex gap-2 ">
                <img src="/man.gif" width="80" height="80" alt="" />
              </div>
            </div>
            <p className="text-white font-bold mt-1">Fund Yourself </p>
            <p >your fans are available to help you </p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="flex gap-2 ">
              <div className="border rounded-full bg-slate-300  flex flex-col justify-center items-center p-5">
                <img src="/coin.gif" width="80" height="80" alt="" />
              </div>
            </div>
            <p className="text-white font-bold mt-1">Fund Yourself </p>
            <p >your fans are available to hel you </p>
          </div>
          <div className="flex flex-col justify-center items-center">

            <div className="flex gap-2 ">
              <div className="border rounded-full bg-slate-300  flex flex-col justify-center items-center p-5">
                <img src="/group.gif" width="80" height="80" alt="" />
              </div>
            </div>
            <p className="text-white font-bold mt-1">fans wants to help</p>
            <p >your fans are available to hel you </p>
          </div>

        </div>
      </div>


      <div className="  w-full bg-[#ffffff56] border  border-b-cyan-200 h-2 mt-9 ">  </div>
      <div className="flex  flex-col mt-2">
        <h2 className="self-center text-3xl font-bold" > Learn More About US  </h2>
        <div className="flex justify-around gap-56 mt-6">
          <div className="flex flex-col justify-center items-center">
            <div className="border rounded-full bg-slate-300  flex flex-col justify-center items-center p-5">
              <div className="flex gap-2 ">
                <img src="/man.gif" width="80" height="80" alt="" />
              </div>
            </div>
            <p className="text-white font-bold mt-1">Fund Yourself </p>
            <p >your fans are available to hel you </p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="flex gap-2 ">
              <div className="border rounded-full bg-slate-300  flex flex-col justify-center items-center p-5">
                <img src="/coin.gif" width="80" height="80" alt="" />
              </div>
            </div>
            <p className="text-white font-bold mt-1">Fund Yourself </p>
            <p >your fans are available to hel you </p>
          </div>
          <div className="flex flex-col justify-center items-center">

            <div className="flex gap-2 ">
              <div className="border rounded-full bg-slate-300  flex flex-col justify-center items-center p-5">
                <img src="/group.gif" width="80" height="80" alt="" />
              </div>
            </div>
            <p className="text-white font-bold mt-1">fans wants to help</p>
            <p >your fans are available to hel you </p>
          </div>

        </div>
      </div>

      












    </div>

  );
}
