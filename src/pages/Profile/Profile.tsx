"use client"

import { useState } from "react"
import ViewProfile from "./ViewProfile"
import EditProfile from "./EditProfile"

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false)

  // Mock user data (replace with API)
  const [user, setUser] = useState({
    name: "Arif",
    email: "arif@gmail.com",
    memberSince: "Sep 26, 2024",
    mobile: "+8801700000008",
    whatsapp: "+8801402667768",
    institute: "UAP",
    gender: "Male",
    fatherName: "Mizanur",
    motherName: "Dilruba",
    description: "arif@gmail.com",
    academicLevel: "Grade 3.37",
    medium: "Bangla",
    dob: "2000-08-06",
  })

  return (
    <div className="py-12">
      {!isEditing ? (
        <ViewProfile user={user} onEdit={() => setIsEditing(true)} />
      ) : (
        <EditProfile
          user={user}
          onCancel={() => setIsEditing(false)}
          onSave={(updatedUser) => {
            setUser(updatedUser) // update state with changes
            setIsEditing(false)
          }}
        />
      )}
    </div>
  )
}
