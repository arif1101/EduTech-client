"use client"

import { useState } from "react"
import ViewProfile from "./ViewProfile"
import EditProfile from "./EditProfile"

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false)

  // Mock user data (replace with API)
  const [user, setUser] = useState({
    name: "Mohsin",
    email: "mohsinamin953@gmail.com",
    memberSince: "Sep 26, 2024",
    mobile: "+8801784241318",
    whatsapp: "+8801534115844",
    institute: "Du",
    gender: "Male",
    fatherName: "Nafizul",
    motherName: "AMMA",
    description: "mohsinamin953@gmail.com",
    academicLevel: "Grade 4",
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
