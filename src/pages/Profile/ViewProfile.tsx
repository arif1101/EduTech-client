/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button"
import { User, Mail, Calendar, Phone, BookOpen, Building, Globe, MessageCircle } from "lucide-react"

interface ViewProfileProps {
  user: any
  onEdit: () => void
}

export default function ViewProfile({ user, onEdit }: ViewProfileProps) {
  return (
    <div className="">
    <div className="flex justify-between mb-6 px-4">
        <h4 className="text-2xl font-bold text-sky-500">Profile</h4>
        <Button onClick={onEdit} className="bg-sky-500 hover:bg-sky-600">Edit</Button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Left card */}
      <div className="bg-white p-6 rounded-lg shadow space-y-4">
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-3 gap-1">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-6 h-6 rounded-full bg-gray-400" />
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-green-600" />
            <span className="font-medium">{user.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-green-600" />
            <span>{user.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-green-600" />
            <span>Member Since {user.memberSince}</span>
          </div>
        </div>
      </div>

      {/* Right card */}
      <div className="md:col-span-2 bg-white p-6 rounded-lg shadow space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Profile Details</h3>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <p><Phone className="inline w-4 h-4 mr-1" /> Mobile: {user.mobile}</p>
          <p><BookOpen className="inline w-4 h-4 mr-1" /> Academic Level: {user.academicLevel}</p>
          <p><Building className="inline w-4 h-4 mr-1" /> Institute: {user.institute}</p>
          <p><Globe className="inline w-4 h-4 mr-1" /> Medium: {user.medium}</p>
          <p><MessageCircle className="inline w-4 h-4 mr-1" /> WhatsApp: {user.whatsapp}</p>
          <p><Calendar className="inline w-4 h-4 mr-1" /> Date of Birth: {user.dob}</p>
          <p>Gender: {user.gender}</p>
        </div>
        <hr />
        <p><strong>Father&apos;s Name:</strong> {user.fatherName}</p>
        <p><strong>Mother&apos;s Name:</strong> {user.motherName}</p>
        <p><strong>Description:</strong> {user.description}</p>
      </div>
    </div>
    </div>
  )
}
