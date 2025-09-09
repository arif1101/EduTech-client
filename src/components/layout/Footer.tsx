import { Book, CheckCircle, Facebook, Link, Linkedin, Twitter, Users, Youtube } from "lucide-react";

export default function Footer() {
  return (
      <footer className="text-white py-16 max-w-[1256px] mx-auto">

        <div className="container md:flex bg-sky-500 px-6 py-8 mb-16 mx-auto rounded-lg gap-6 sm:p-10">
        {/* Title Section */}
            <div className="mb-6 my-auto">
            <p className="text-base font-semibold">NO MORE WAITING</p>
            <h2 className="text-2xl md:text-3xl font-bold mt-1">
                Start Investing Your Career With <br className="hidden md:block" />
                CustomLms
            </h2>
            </div>

        {/* Cards Section */}
            <div className="grid flex-1 grid-cols-1 sm:grid-cols-4 gap-4">
                <div className="bg-blue-900 rounded-lg px-10 py-10 flex flex-col items-center">
                    <Users className="text-3xl" />
                    <p className="mt-2 font-semibold">Community</p>
                </div>
                <div className="bg-blue-900 rounded-lg px-10 py-10 flex flex-col items-center">
                    <Link className="text-3xl" />
                    <p className="mt-2 font-semibold">Referrals</p>
                </div>
                <div className="bg-blue-900 rounded-lg px-10 py-10 flex flex-col items-center">
                    <Book className="text-3xl" />
                    <p className="mt-2 font-semibold">Assignments</p>
                </div>
                <div className="bg-blue-900 rounded-lg px-10 py-10 flex flex-col items-center">
                    <CheckCircle className="text-3xl" />
                    <p className="mt-2 font-semibold">Certificates</p>
                </div>
            </div>
        </div>

        {/* lower part  */}
        <div className="flex justify-between mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            {/* Logo & About */}
            <div className="md:col-span-2 flex flex-col gap-7 ">
              <div className="flex items-center space-x-2">
                <p className="text-sky-500 font-bold text-4xl">EduTech</p>
              </div>
              <p className="text-sm text-white">
              Integer venenatis consequat elit. Curabitur eget laoreet nibh. Cras euismod, tellus vitae luctus ultricies, lacus erat sagittis nulla, id ornare velit ligula congue etiam rhoncus urna.
              </p>
              <button className=" max-w-40 font-bold bg-sky-500 text-white px-4 py-2 rounded-full hover:bg-sky-600 transition">
                Send Message →
              </button>
            </div>
  
            {/* Contact */}
            <div className="md:col-span-1">
              <h3 className="text-lg font-bold text-sky-500 mb-4 ">Contact Us</h3>
              <p className="text-base text-white">Dhaka, Dhaka, Dhaka</p>
              <p className="text-base mt-4 text-white">01XXXXXXXXX</p>
              <p className="text-base mb-4 text-white">01XXXXXXXXX</p>
              <p className="text-base text-white">contact@example.com</p>
            </div>
  
            {/* Explore Courses */}
            <div className="md:col-span-1">
              <h3 className="text-lg font-bold text-sky-500 mb-4">Explore Courses</h3>
              <ul className="space-y-2 text-base text-white">
                <li>Microsoft Develop</li>
                <li>Modern Art</li>
                <li>Management</li>
                <li>Business</li>
                <li>Art Science</li>
                <li>Games</li>
              </ul>
            </div>
  
            {/* Useful Links */}
            <div className="md:col-span-1">
              <h3 className="text-lg font-bold text-sky-500 mb-4">Use Full Links</h3>
              <ul className="space-y-2 text-base text-white">
                <li>About Us</li>
                <li>Upcoming Events</li>
                <li>FAQ Questions</li>
                <li>Privacy Policy</li>
                <li>Gallery</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
            {/* Bottom Footer */}
        {/* <div className="bg-white h-[0.1px] mt-[64px]"></div> */}
        <hr className="opacity-40 w-screen absolute left-0 mt-8" />
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between text-sm">
          <p>Copyright © 2024. All Rights Reserved | Factoryze</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300">
              <Facebook className="text-lg" />
            </a>
            <a href="#" className="hover:text-gray-300">
              <Twitter className="text-lg" />
            </a>
            <a href="#" className="hover:text-gray-300">
              <Youtube className="text-lg" />
            </a>
            <a href="#" className="hover:text-gray-300">
              <Linkedin className="text-lg" />
            </a>
          </div>
          </div>
            {/* Bottom Footer */}
      </footer>
  )
}
