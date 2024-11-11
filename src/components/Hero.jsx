import { setGlobalState, useGlobalState } from '../store'
const Hero = () => {
  const [stats] = useGlobalState('stats')

  return (
    <div className="text-center bg-white text-gray-800 py-24 px-6">
      <h1
        className="text-3xl md:text-3xl xl:text-3xl font-bold 
      tracking-tight mb-12"
      >
        <span className="capitalize  "><i>When inspirations and creativity find their home, and ideas flourish into magnificent reality, here in</i></span>
        <br /><br />
        <span className="text-blue-600 font-bold text-7xl ">
        <i>Selfless</i>
        </span>
      </h1>
      
      <div className="flex justify-center items-center space-x-2">
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-gray-600 
        font-medium text-white leading-tight uppercase text-white-600
        rounded-full shadow-md bg-transparent hover:bg-green-700
        hover:text-white"
          onClick={() => setGlobalState('createModal', 'scale-100')}
        >
          Create Project
        </button>

        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-gray-600 
        font-medium text-white leading-tight uppercase text-white-600
        rounded-full shadow-md bg-transparent hover:bg-green-700
        hover:text-white"
        >
          Back Projects
        </button>
      </div>

      <div className="flex justify-center items-center mt-10">
        <div
          className="flex flex-col justify-center items-center
          h-20 border shadow-md w-full"
        >
          <span
            className="text-lg font-bold text-green-900
            leading-5"
          >
            {stats?.totalProjects || 0}
          </span>
          <span>Projects </span>
        </div>
        <div
          className="flex flex-col justify-center items-center
          h-20 border shadow-md w-full"
        >
          <span
            className="text-lg font-bold text-green-900
            leading-5"
          >
            {stats?.totalBacking || 0}
          </span>
          <span>Backings</span>
        </div>
        <div
          className="flex flex-col justify-center items-center
          h-20 border shadow-md w-full"
        >
          <span
            className="text-lg font-bold text-green-900
            leading-5"
          >
            {stats?.totalDonations || 0} ETH
          </span>
          <span>Donated</span>
        </div>
      </div>
    </div>
  )
}

export default Hero
