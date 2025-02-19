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
import { useNavigate } from "react-router-dom";
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
      } else {
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
    <Form  {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mx-auto w-[80%] my-4">
        {/* Username Field */}
        <div className="">
            <p className="m-0 md:text-[20px] font-semibold">Login</p>
        </div>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter username" {...field} />
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
                <Input type="password" placeholder="Enter password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

         {/* Error Message */}
        {error && <p className="text-red-500">{error}</p>}

        {/* Submit Button */}
        <Button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </Button>
      </form>
    </Form>
  );
}
