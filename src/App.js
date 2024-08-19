import './App.css';

function App() {
  return (
    <div className="body bg-[#e2e2e2]">
      <div className='cont'>

        {/* //////////////////////////////////////////////////////////////////// */}
        <div className='navbar p-6'>
          <div className='nav flex justify-between items-center'>
            <button className='logo'><img src='./logo.jpeg'/></button>
            <details className='relative'>
              <summary className='list h-[20px] w-[20px]'>
                  <img src='./bars.svg' className='h-full w-full'/>                
              </summary>
              <ul className='absolute p-[3px] bg-white right-[20%] [&>*]:py-2 [&>*]:px-12 [&>*]:cursor-pointer hover:[&>*]:bg-[#e2e2e2] [&>*]:font-semibold rounded'>
                <li className=''>About<span className='pl-1'>us</span></li>
                <li className=''>FAQs</li>
                <li>Contact</li>
              </ul>
            </details>
          </div>
        </div>

{/* //////////////////////////////////////////////////////////////////////////// */}
        <div className='section-1 pt-12'>
              <div>
                <div className='w-full flex justify-center'><button className='border bg-white px-4 py-2 rounded-full'>Endure</button></div>
                <div className='text-center font-semibold py-4'><h3>Solution To All Your Problems</h3></div>
              </div>
              <div className='bg-red-600 section-2-cont rounded-t-xl px-2 py-6'>
                 <h3 className='w-full pb-6 font-semibold text-center'>Bottle</h3>
                 <div className='red-card flex'>
                 <div className=' bottle-poster min-w-[200px] max-w-[400px] relative -bg-blue-400 transition-[.2s]'>
                  <img src='./bottle.png' className=''/>
                  <div className='poster-cont absolute bottom-[15%] h-[40%] w-[21%] left-[39.4%]  overflow-hidden flex justify-center items-center rounded'>
                  <img src='./poster.jpeg'  className='poster h-full min-w-[220px]' />
                  </div>
                 </div>
                 <div className='bottle-details p-4'>
                   <p>Get you stuff clean with new CataGuard Catalytic Converter Cleaner and enjoy the whole new experience of your vehicle</p>
                 </div>
                 </div>
              </div>
        </div>

{/* ///////////////////////////////////////////////////////////////////////////////// */}
        <div className='footer pt-[2px] '>
            <div className='footer-cont p-[10%] py-8 bg-[#232323]'>
                 <div className='foot-section1'><button className='logo'><img src='./logo.jpeg'/></button>
                 
                 </div>
                 <div className='foot-section2'></div>
            </div>
        </div>


      </div>
    </div>
  );
}

export default App;
