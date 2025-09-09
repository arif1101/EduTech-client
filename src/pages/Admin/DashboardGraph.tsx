import { Card, CardContent } from "@/components/ui/card"
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts"

export default function DashboardGraph() {
  // Example data
  const enrollmentData = [
    { month: "2025-Mar", enrolled: 0, signup: 0 },
    { month: "2025-Apr", enrolled: 0, signup: 0 },
    { month: "2025-May", enrolled: 0, signup: 0 },
    { month: "2025-Jun", enrolled: 0, signup: 0 },
    { month: "2025-Jul", enrolled: 0, signup: 0 },
    { month: "2025-Aug", enrolled: 0, signup: 0 },
    { month: "2025-Sep", enrolled: 1, signup: 1 },
  ]

  const coursePopularity = [
    { name: "Advanced JavaScript Programming", total: 35 },
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Enrollment Trend */}
      <Card className="shadow-sm rounded-2xl">
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-4">Student Enrollment Trend</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={enrollmentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="enrolled" stroke="#6366f1" name="enrolled" />
              <Line type="monotone" dataKey="signup" stroke="#a855f7" name="signup" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Course Popularity */}
      <Card className="shadow-sm rounded-2xl">
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-4">Course Popularity</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={coursePopularity}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="total" fill="#34d399" name="total" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
