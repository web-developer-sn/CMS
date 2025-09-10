import* as  React from 'react'

 const Loader=() =>{
  return (
    <div className="flex items-center justify-center h-screen bg-black overflow-hidden">
      {/* Glowing Rings Container */}
      <div className="relative w-40 h-40">
        
        {/* Outer Pulse Ring */}
        <div className="absolute inset-0 rounded-full border-[3px] border-cyan-500 animate-ping opacity-20"></div>

        {/* Main Neon Spinner Ring */}
        <div className="absolute inset-0 rounded-full border-t-4 border-b-4 border-transparent border-l-cyan-400 border-r-fuchsia-500 animate-spin blur-sm shadow-[0_0_25px_rgba(0,255,255,0.5)]"></div>

        {/* Inner Glassy Core with Gradient Glow */}
        <div className="absolute inset-[14px] rounded-full bg-gradient-to-br from-gray-800 via-black to-gray-900 backdrop-blur-[2px] shadow-inner flex items-center justify-center border border-gray-700">
          <span className="text-cyan-300 text-sm font-medium tracking-widest animate-pulse">
            LOADING...
          </span>
        </div>

        {/* Floating Particles (optional decor) */}
        <div className="absolute top-1 left-1 w-2 h-2 bg-cyan-300 rounded-full animate-bounce" />
        <div className="absolute bottom-2 right-3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping" />
        <div className="absolute top-10 right-6 w-1 h-1 bg-purple-400 rounded-full animate-bounce delay-200" />
      </div>
    </div>
  )
}
export default React.memo(Loader)
