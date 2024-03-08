import  CarouselWithContent  from "./Carousel"


function App() {

  return (
    <>
      <div className="bg-zinc-900 w-full h-screen">
        <div className='grid lg:grid-cols-6 sm:gap-6 py-8 px-8 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:gap-2'>
          <div className="bg-red-700 h-20"></div>
          <div className="bg-red-700 h-20"></div>
          <div className="bg-red-700 h-20"></div>
          <div className="bg-red-700 h-20"></div>
          <div className="bg-red-700 h-20"></div>
          <div className="bg-red-700 h-20"></div>
        </div>
          <CarouselWithContent />
      </div>
       
    </>
  )
}

export default App
