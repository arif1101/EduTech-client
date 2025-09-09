import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, DollarSign, Users, FileText, Book, Star, Clock, Activity } from "lucide-react"

interface StatCardProps {
  title: string
  value: string | number
  icon: React.ReactNode
  color: string
}

const StatCard = ({ title, value, icon, color }: StatCardProps) => {
  return (
    <Card className="shadow-sm rounded-2xl">
      <CardContent className="flex flex-col gap-2 p-6">
        <div className="flex justify-between items-center">
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <span className={color}>{icon}</span>
        </div>
        <h2 className="text-2xl font-semibold">{value}</h2>
      </CardContent>
    </Card>
  )
}

export default function DashboardStats() {
  const stats = [
    { title: "Active Courses", value: 9, icon: <GraduationCap size={22} />, color: "text-green-500" },
    { title: "Total Revenue", value: 0, icon: <DollarSign size={22} />, color: "text-purple-500" },
    { title: "Enrolled Students", value: 35, icon: <Users size={22} />, color: "text-blue-500" },
    { title: "Exams Conducted", value: 1, icon: <FileText size={22} />, color: "text-red-500" },
    { title: "Total Books", value: 2, icon: <Book size={22} />, color: "text-yellow-500" },
    { title: "Avg. Course Rating", value: 0, icon: <Star size={22} />, color: "text-indigo-500" },
    { title: "Completion Rate", value: "90.19", icon: <Clock size={22} />, color: "text-pink-500" },
    { title: "Total Students", value: 41, icon: <Activity size={22} />, color: "text-teal-500" },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, i) => (
        <StatCard key={i} {...stat} />
      ))}
    </div>
  )
}
