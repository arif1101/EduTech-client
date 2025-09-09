import { useUserInfoQuery } from "@/redux/features/auth/auth.api"
import { Star, GraduationCap, Book, FileText } from "lucide-react"


export default function Dashboard() {

  const {data} = useUserInfoQuery(undefined)
  const user = data?.data?.user 
  console.log(data?.data?.user?.image)
  
  return (
    <div className=" bg-gray-100 px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-white p-6 rounded-2xl shadow-md text-center col-span-1">
          <img
            src={user?.image}
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold">{user?.name}</h2>
          <p className="text-gray-500 text-sm mt-2 flex items-center justify-center gap-2">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 01-8 0 4 4 0 018 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14v7m0 0h-3m3 0h3"
              />
            </svg>
            {user?.email}
          </p>
        </div>

        {/* Status Cards */}
        <div className="col-span-1 grid grid-cols-2 gap-4">
        {[
            { title: "Course Purchased", count: 1, color: "text-indigo-500", icon: <Star size={28} /> },
            { title: "Course Ongoing", count: 0, color: "text-green-500", icon: <GraduationCap size={28} /> },
            { title: "Purchased Books", count: 0, color: "text-yellow-500", icon: <Book size={28} /> },
            { title: "Participated Exams", count: 0, color: "text-red-500", icon: <FileText size={28} /> },
        ].map((item, idx) => (
            <div key={idx} className="bg-white px-4 py-6 rounded-2xl shadow-md">
            <div className={`${item.color} mb-2 flex justify-between`}>
                <h3 className="text-lg font-semibold text-start">
                {item.title.split(" ")[0]}<br />
                {item.title.split(" ").slice(1).join(" ")}
                </h3>
                <div className="text-[29px]">{item.icon}</div>
            </div>
            <p className="text-2xl font-bold">{item.count}</p>
            </div>
        ))}
        </div>  

        {/* Upcoming Classes */}
        <div className="bg-white p-6 rounded-2xl shadow-md text-center">
          <h2 className="text-lg font-bold text-blue-500 mb-4">Upcoming Classes</h2>
          <div className="opacity-60">
            <svg
              className="mx-auto w-16 h-16 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 20h9"
              />
            </svg>
            <p className="text-gray-400 mt-2">No Class Hurray</p>
          </div>
        </div>
      </div>

      {/* Course Table */}
      <div className="max-w-7xl mx-auto mt-10">
        <div className="bg-white rounded-2xl shadow-md overflow-x-auto">
          <table className="min-w-full text-left">
            <thead className="bg-gray-50">
              <tr>
                {["Course", "Level", "Duration", "Price", "Progress", "Action"].map(
                  (header, idx) => (
                    <th key={idx} className="p-4 font-semibold text-gray-600">
                      {header}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-8 bg-gray-200 flex items-center justify-center rounded-md text-xs font-bold">
                      4:3
                    </div>
                    <div>
                      <p className="font-semibold">Go Bangla Tutorial</p>
                      <p className="text-gray-400 text-sm">Author - Hasnain Iqbal</p>
                    </div>
                  </div>
                </td>
                <td className="p-4">Beginner</td>
                <td className="p-4">3.5 mins</td>
                <td className="p-4">BDT0</td>
                <td className="p-4">
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-blue-500 h-3 rounded-full" style={{ width: "100%" }} />
                  </div>
                </td>
                <td className="p-4">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
                    View Course
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
