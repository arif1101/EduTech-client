/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import loginImage from "@/assets/loginImage.jpg"
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
import { toast } from "sonner"
import { useLoginMutation } from "@/redux/features/auth/auth.api"
import CredentialLogin from "@/components/CredentialLogin"

// ✅ Validation schema
const formSchema = z.object({
  email: z
    .string(),
    // .min(10, "Email is too short")
    // .max(15, "Email is too long"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

export default function LoginCard() {

    const [login] = useLoginMutation()
    const navigate = useNavigate()
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = async(data: z.infer<typeof formSchema>) => {
    
    try{
      const result = await login(data).unwrap()
      console.log(result)
      toast.success("Loged In")
      navigate("/")
    }catch(error: any){
        console.log(error)
    //   const errorMessage = error?.data?.message || "Something went wrong"
    //   toast.error(errorMessage)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-sky-50 via-white to-sky-100">

        <div className="md:w-6/12  w-full px-4">
            <div className="max-w-md mx-auto flex justify-between mb-4">
                <Button className="bg-sky-500 hover:bg-sky-600"><Link to="/">Home</Link></Button>
                <CredentialLogin/>
            </div>
            <Card className="w-full mx-auto max-w-md shadow-xl border border-sky-100 rounded-2xl bg-white">
                <CardHeader className="text-center space-y-2">
                <CardTitle className="text-3xl font-bold bg-gradient-to-r from-sky-600 to-sky-500 bg-clip-text text-transparent">
                    Welcome Back
                </CardTitle>
                <CardDescription className="text-gray-500">
                    Login with your email and password
                </CardDescription>
                </CardHeader>

                <CardContent>
                <Form {...form}>
                    <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                    >
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
                                className="focus:ring-2 focus:ring-sky-400 focus:border-sky-400 rounded-xl dark:text-black"
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
                            <div className="flex items-center justify-between">
                            <FormLabel className="text-gray-700 font-medium">Password</FormLabel>
                            <a
                                href="#"
                                className="text-sm text-sky-600 hover:underline"
                            >
                                Forgot?
                            </a>
                            </div>
                            <FormControl>
                            <Input
                                type="password"
                                placeholder="••••••••"
                                className="focus:ring-2 focus:ring-sky-400 focus:border-sky-400 rounded-xl dark:text-black"
                                {...field}
                            />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />

                    {/* Login Button */}
                    <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-700 hover:to-sky-600 text-white font-semibold rounded-xl shadow-md transition-transform hover:scale-[1.02]"
                    >
                        Login
                    </Button>
                    </form>
                </Form>
                </CardContent>

                <CardFooter className="flex flex-col gap-3">
                <Button
                    variant="outline"
                    className="w-full rounded-xl shadow-sm hover:bg-sky-50 border-sky-200 text-sky-600 dark:hover:text-sky-600"
                >
                    Login with Google
                </Button>
                <p className="text-sm text-center text-gray-500">
                    Don’t have an account?{" "}
                    <Link to="/register" className="text-sky-600 font-medium hover:underline">Sign up</Link>
                </p>
                </CardFooter>
            </Card>
        </div>

        <div className="w-6/12 hidden md:block">
            <img className='h-screen w-full' src={loginImage} alt="" />
        </div>
    </div>
  )
}
