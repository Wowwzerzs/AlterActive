import React from 'react';




<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>




function Contact() {
  return (
    <div>
      <div className="w-full">
        <div className="bg-blueGray-900 py-20" style={{ backgroundImage: "url('./media/background.png')" }}>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
              <div className="mx-auto flex justify-center flex-col text-black px-4 relative lg:w-4/12 w-full md:w-5/12">
                <div className="flex flex-wrap -mx-4 justify-start">
                  <div className="px-4 relative w-full text-left">
                    <span className="text-blueGray-500 bg-blueGray-100 text-xs font-bold inline-block py-1 uppercase uppercase last:mr-0 mr-1 leading-tight rounded px-2">Get in touch</span>
                    <h2 className="text-4xl font-bold mt-3 mb-1 text-black">We're here to support you on your fitness journey.</h2>
                    <p className="mt-2 mb-4 text-xl leading-relaxed text-black">Thank you for your interest in Alter Active! Feel free to reach out to us with any questions, feedback, or inquiries you may have.</p>
                  </div>
                </div>
                <div className="rounded text-left p-6 flex items-start">
                  <div className="bg-white rounded-full justify-center items-center inline-flex text-center w-12 h-12 text-blueGray-700"><i className="fas fa-map-marker-alt"></i></div>
                  <div className="ml-6 flex-1">
                    <h4 className="text-black text-2xl font-semibold leading-tight mt-2 mb-2">Find us at the office</h4>
                    <p className="text-black opacity-60">Alter Active Inc.</p>
                    <p className="text-black opacity-60">123 Fitness Avenue,</p>
                    <p className="text-black opacity-60">Toronto, ON</p>
                  </div>
                </div>
                <div className="rounded text-left p-6 flex items-start">
                  <div className="bg-white rounded-full justify-center items-center inline-flex text-center w-12 h-12 text-blueGray-700"><i className="fas fa-mobile"></i></div>
                  <div className="ml-6 flex-1">
                    <h4 className="text-black text-2xl font-semibold leading-tight mt-2 mb-2">Give us a ring</h4>
                    <p className="text-black opacity-60">+1 (123) 456-7890</p>
                    <p className="text-black opacity-60">Monday to Friday, 9:00 AM - 5:00 PM (EST).</p>
                  </div>
                </div>
              </div>
              <div className="mx-auto px-4 relative w-full lg:w-5/12 w-full md:w-7/12">
                <div className="shadow-lg rounded-lg text-black ml-12 p-6 mt-12 mb-12 relative flex flex-col min-w-0 break-words bg-white w-full">
                  <h4 className="text-xl font-bold leading-tight pb-6">Contact Us</h4>
                  <div className="flex-auto">
                    <div className="flex flex-wrap -mx-4">
                      <div className="px-4 relative w-full md:w-6/12">
                        <div className="mb-3 pt-0 relative">
                          <label className="block uppercase text-black text-xs font-bold mb-2 ml-1">First name</label>
                          <div className="relative flex w-full flex-wrap items-stretch mb-3"><span className="z-10 h-full flex absolute text-center text-blueGray-300 text-sm items-center w-8 pl-3"><i className="fas fa-user-circle"></i></span><input placeholder="First name..." type="text" className="border-blueGray-300 px-3 py-2 text-sm w-full placeholder-blueGray-200 text-blueGray-700 relative bg-white rounded-md outline-none focus:ring focus:ring-lightBlue-500 focus:ring-1 focus:border-lightBlue-500 border border-solid transition duration-200 pl-10" /></div>
                        </div>
                      </div>
                      <div className="px-4 relative w-full md:w-6/12">
                        <div className="mb-3 pt-0 relative">
                          <label className="block uppercase text-black text-xs font-bold mb-2 ml-1">Last name</label>
                          <div className="relative flex w-full flex-wrap items-stretch mb-3"><span className="z-10 h-full flex absolute text-center text-blueGray-300 text-sm items-center w-8 pl-3"><i className="far fa-id-badge"></i></span><input placeholder="Last name..." type="text" className="border-blueGray-300 px-3 py-2 text-sm w-full placeholder-blueGray-200 text-blueGray-700 relative bg-white rounded-md outline-none focus:ring focus:ring-lightBlue-500 focus:ring-1 focus:border-lightBlue-500 border border-solid transition duration-200 pl-10" /></div>
                        </div>
                      </div>
                      <div className="px-4 relative w-full">
                        <div className="mb-3 pt-0 relative">
                          <label className="block uppercase text-black text-xs font-bold mb-2 ml-1">Email address</label>
                          <div className="relative flex w-full flex-wrap items-stretch mb-3"><span className="z-10 h-full flex absolute text-center text-blueGray-300 text-sm items-center w-8 pl-3"><i className="fas fa-envelope"></i></span><input placeholder="Email address..." type="email" className="border-blueGray-300 px-3 py-2 text-sm w-full placeholder-blueGray-200 text-blueGray-700 relative bg-white rounded-md outline-none focus:ring focus:ring-lightBlue-500 focus:ring-1 focus:border-lightBlue-500 border border-solid transition duration-200 pl-10" /></div>
                        </div>
                      </div>
                      <div className="px-4 relative w-full">
                        <div className="mb-3 pt-0 relative">
                          <label className="block uppercase text-black text-xs font-bold mb-2 ml-1">Your message</label>
                          <div className="mb-3 pt-0"><textarea rows="6" type="textarea" className="border-blueGray-300 px-3 py-2 text-sm w-full placeholder-blueGray-200 text-blueGray-700 relative bg-white rounded-md outline-none focus:ring focus:ring-lightBlue-500 focus:ring-1 focus:border-lightBlue-500 border border-solid transition duration-200" /></div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full text-right mt-2"><button className="inline-block outline-none focus:outline-none align-middle transition-all duration-150 ease-in-out uppercase border border-solid font-bold last:mr-0 mr-2 text-white bg-pink-500 border-pink-500 active:bg-pink-600 active:border-pink-600 text-sm px-6 py-2 shadow hover:shadow-lg rounded-md">Send message</button></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
