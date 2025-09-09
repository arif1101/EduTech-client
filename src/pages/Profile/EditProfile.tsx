/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { toast } from "sonner"

interface EditProfileProps {
  user: any
  onCancel: () => void
  onSave: (updatedUser: any) => void
}

export default function EditProfile({ user, onCancel, onSave }: EditProfileProps) {
  const [formData, setFormData] = useState(user)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    onSave(formData) // send updated data back
    toast.success("Profile updated successfully")
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Edit Profile</h3>
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border rounded p-2"
          placeholder="Name"
        />
        <input
          type="text"
          name="fatherName"
          value={formData.fatherName}
          onChange={handleChange}
          className="border rounded p-2"
          placeholder="Father Name"
        />
        <input
          type="text"
          name="motherName"
          value={formData.motherName}
          onChange={handleChange}
          className="border rounded p-2"
          placeholder="Mother Name"
        />
        <input
          type="text"
          name="institute"
          value={formData.institute}
          onChange={handleChange}
          className="border rounded p-2"
          placeholder="Institute"
        />
        <input
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          className="border rounded p-2"
          placeholder="Mobile"
        />
        <input
          type="text"
          name="whatsapp"
          value={formData.whatsapp}
          onChange={handleChange}
          className="border rounded p-2"
          placeholder="WhatsApp"
        />
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          className="border rounded p-2"
        />
        <input
          type="text"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="border rounded p-2"
          placeholder="Gender"
        />
        <input
          type="text"
          name="academicLevel"
          value={formData.academicLevel}
          onChange={handleChange}
          className="border rounded p-2"
          placeholder="Academic Level"
        />
        <input
          type="text"
          name="medium"
          value={formData.medium}
          onChange={handleChange}
          className="border rounded p-2"
          placeholder="Medium"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="border rounded p-2 col-span-2"
          placeholder="Description"
        />
      </div>

      <Button onClick={handleSubmit} className="w-full">
        Save Changes
      </Button>
    </div>
  )
}
