import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Link, useNavigate } from "react-router"
import {toast} from "sonner"
import PasswordInput from "@/components/ui/PasswordInput"
import { useRegisterMutation } from "@/redux/features/auth/auth.api"

// ✅ Validation schema
const registerSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),

    phone: z
      .string()
      .min(10, "Phone number is too short")
      .max(15, "Phone number is too long"),

    email: z
    .string()
    .email("Invalid email address")
    .max(255, "Email is too long"),

    password: z
      .string()
      .min(6, "Password must be at least 6 characters"),
    //   .regex(
    //     /^(?=.*[A-Z])(?=.*[!@#$%^&*])/,
    //     "Password must contain at least one uppercase letter and one special character"
    //   ),

    confirmPassword: z
      .string()
      .min(6, "Confirm password must be at least 6 characters")
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });



export default function Register() {

  const [register] = useRegisterMutation()
  const navigate = useNavigate()
  
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: ""
    },
  })

  const onSubmit=async(data: z.infer<typeof registerSchema>) => {
    const userInfo = {
      name : data.name,
      email: data.email,
      phone : data.phone,
      password : data.password
    }
    

    try{
      const result = await register(userInfo).unwrap();
      console.log(result)
      toast.success("User created successfully")
      navigate("/login")
    console.log(userInfo)
    }catch(err){
      toast.error("user already exist")
      console.log(err)
      
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-sky-50 via-white to-sky-100 p-4">
      <Card className="w-full max-w-md shadow-xl border border-sky-100 rounded-2xl bg-white">
        <Link to="/">Home</Link>
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-sky-600 to-sky-400 bg-clip-text text-transparent">
            Create Account
          </CardTitle>
          <CardDescription className="text-gray-500">
            Register with your details to get started
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6"
            >
              {/* Name Field */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">Full Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="John Doe"
                        className="focus:ring-2 focus:ring-sky-400 focus:border-sky-400 rounded-xl"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="test@gmail.com"
                        className="focus:ring-2 focus:ring-sky-400 focus:border-sky-400 rounded-xl"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Phone Field */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">Phone</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="+8801XXXXXXXXX"
                        className="focus:ring-2 focus:ring-sky-400 focus:border-sky-400 rounded-xl"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password Field */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">Password</FormLabel>
                    <FormControl>
                      <PasswordInput {...field}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* confirm password field  */}
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">Confirm Password</FormLabel>
                    <FormControl>
                      <PasswordInput {...field}/>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
              {/* Register Button */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-sky-600 to-sky-400 hover:from-sky-700 hover:to-sky-500 text-white font-semibold rounded-xl shadow-md transition-transform hover:scale-[1.02]"
              >
                Register
              </Button>
            </form>
          </Form>
        </CardContent>

        <CardFooter className="flex flex-col gap-3">
          <p className="text-sm text-center text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="text-sky-600 font-medium hover:underline">Login</Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
