import { RectangleGogglesIcon } from "lucide-react";


export default function SocialLogin() {
  return (
        <button className="flex items-center justify-center w-full p-2 text-gray-700 bg-white border-2 border-green-500 rounded-lg shadow-md hover:bg-green-100 transition-all duration-300">
          <RectangleGogglesIcon className="w-6 h-6 mr-2" />
          <span className="font-medium">Sign in with Google</span>
        </button>
  )
}
