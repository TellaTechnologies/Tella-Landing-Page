"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logins from '../assets/image/login (2).svg'
const passwordRegex = /^(?=.*[a-z])(?=.*\d)[a-z\d]{8,}$/;


// Define form validation schema
const formSchema = z.object({
  username: z.string().min(5, {
    message: "Username must be at least 5 characters.",
  }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." })
    // .regex( {
    //   message:
    //     "Password must include at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.",
    // }),
});



export function Login() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("")
    const navigate = useNavigate()
  // Create form instance
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // Define submit handler

  const onSubmit = async (values) => {
    setLoading(true);
    setError("");
  
    try {
      const response = await axios.post(
        "http://ec2-44-205-21-123.compute-1.amazonaws.com:8080/api/v1/auth/login",
        values
      );
  
      // Extract token from response
      const token = response.data.data.access_token;
  
      if (token) {
        // Store token in localStorage
        localStorage.setItem("token", token);
  
        // Redirect user after successful login
        navigate("/accounts/agent/transactions");
      } else if(token=="undefined") {
        console.log("undefined")
        throw new Error("Token not received.");
      }
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Login failed. Try again.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="sm:flex bg-[#E0F0F8] items-center justify-center">
      <div className="bg-[#2097CF] p-8 sm:h-[100vh] sm:w-1/2">
          <div className="flex justify-center"> 
            <img src={Logins} className="lg:w-[440px] md:w-[400px] md:h-[250px] w-[300px] lg:h-[360px]" alt="" />
          </div>
          <div className=" md:mt-0 sm:mt-7">
            <p className="m-0 text-center lg:text-[24px] text-[20px] sm:text-[22px] text-white">Tella Technologies</p>
            <p className="m-0 lg:mt-4 sm:mt-5 md:mt-2 lg:text-[20px] md:text-[18px] text-white text-center">At Tella, we’re on a mission to empower micro and small businesses in Sub-Saharan Africa with the financial tools they need to succeed. Our platform bridges the gap for the un-banked, providing secure and affordable financial services that drive growth and inclusion</p>
          </div>
      </div>
      <div className="sm:w-1/2">
        <Form  {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mx-auto w-[80%] py-6 md:my-4">
            {/* Username Field */}
            <div className=" flex justify-center">
                <p className="m-0 md:text-[28px] lg:text-[32px] text-[24px]   font-semibold">Admin Login</p>
            </div>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input className="bg-white md:py-6 lg:py-7 py-4 " placeholder="Enter username" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
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
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" className="md:py-6 lg:py-7 py-4 bg-white" placeholder="Enter password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Error Message */}
            {error && <p className="text-red-500">{error}</p>}

            {/* Submit Button */}
            <Button className="w-full bg-[#2097CF] md:py-6" type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </Button>
            <div className="flex justify-center">
              <p className="m-0 text-center text-black">By clicking confrm, you agree with our <Link  className="text-black underline">Terms of Service</Link>  and <Link className="text-black underline">Privacy policy</Link> </p>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
