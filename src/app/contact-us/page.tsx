import React from 'react'
import Navbar from "@/app/components/Navbar"
import Footer from '@/app/components/Footer'
const ContactUs = () => {
  return (
    <div>
        <Navbar/>

    <div className="container-contact max-w-4xl mx-auto px-4 py-8">
    <h2 className="text-3xl font-serif font-semibold text-center mb-8">DON'T HESITATE TO CONTACT </h2>
    <form action="" className="space-y-6">
        <div className="form-group">
            <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-500"
            />
        </div>
        <div className="form-group">
            <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-500"
            />
        </div>
        <div className="form-group">
            <textarea
                cols={2}
                rows={5}
                placeholder="Enter your message"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-500"
            ></textarea>
        </div>
        <div className="form-group">
            <input
                id="btn"
                type="submit"
                value="Send"
                className="w-full py-3 bg-orange-600 text-white font-semibold rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
        </div>
    </form>
</div>
<Footer/>
</div>

  )
}

export default ContactUs
