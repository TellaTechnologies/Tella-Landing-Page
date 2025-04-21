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
import Logins from '../assets/image/login (2).svg';

import NotificationsSystem, { atalhoTheme, setUpNotifications, useNotifications } from 'reapop';

// ✅ Set up notifications outside the component
setUpNotifications({
  defaultProps: {
    position: 'top-right',
    dismissible: true,
    dismissAfter: 4000,
  },
});

// 🔒 Validation Schema
const formSchema = z.object({
  username: z.string().min(5, {
    message: "Username must be at least 5 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long.",
  }),
});

export function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { notifications, notify, dismissNotification } = useNotifications();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (values) => {
    setLoading(true);
    setError("");

    notify({ title: "Processing...", status: "info" });

    try {
      const response = await axios.post(
        "http://ec2-44-205-21-123.compute-1.amazonaws.com:8080/api/v1/auth/login",
        values
      );

      const token = response.data.data.access_token;

      if (token && token !== "undefined") {
        localStorage.setItem("token", token);
        notify({ title: "Login Successful", status: "success" });

        navigate("/accounts/agent/transactions");
      } else {
        notify({ title: "Token missing", status: "error" });
        throw new Error("Token not received.");
      }
    } catch (err) {
      const errorMsg = err.response?.data?.message || "Login failed. Try again.";
      setError(errorMsg);
      notify({ title: "Login Error", message: errorMsg, status: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sm:flex bg-[#E0F0F8] items-center justify-center">
      <NotificationsSystem
        notifications={notifications}
        dismissNotification={(id) => dismissNotification(id)}
        theme={atalhoTheme}
      />

      <div className="bg-[#2097CF] p-8 sm:h-[100vh] sm:w-1/2">
        <div className="flex justify-center">
          <img
            src={Logins}
            className="lg:w-[440px] md:w-[400px] md:h-[250px] w-[300px] lg:h-[360px]"
            alt="Login Illustration"
          />
        </div>
        <div className="md:mt-0 sm:mt-7">
          <p className="m-0 text-center lg:text-[24px] text-[20px] sm:text-[22px] text-white">
            Tella Technologies
          </p>
          <p className="m-0 lg:mt-4 sm:mt-5 md:mt-2 lg:text-[20px] md:text-[18px] text-white text-center">
            At Tella, we’re on a mission to empower micro and small businesses in Sub-Saharan Africa with the financial tools they need to succeed. Our platform bridges the gap for the un-banked, providing secure and affordable financial services that drive growth and inclusion.
          </p>
        </div>
      </div>

      <div className="sm:w-1/2">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 mx-auto w-[80%] py-6 md:my-4"
          >
            <div className="flex justify-center">
              <p className="m-0 md:text-[28px] lg:text-[32px] text-[24px] font-semibold">
                Admin Login
              </p>
            </div>

            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-white md:py-6 lg:py-7 py-4"
                      placeholder="Enter username"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>This is your public display name.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      className="md:py-6 lg:py-7 py-4 bg-white"
                      placeholder="Enter password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {error && <p className="text-red-500">{error}</p>}

            <Button className="w-full bg-[#2097CF] md:py-6" type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </Button>

            <div className="flex justify-center">
              <p className="m-0 text-center text-black">
                By clicking confirm, you agree with our{" "}
                <Link className="text-black underline">Terms of Service</Link> and{" "}
                <Link className="text-black underline">Privacy Policy</Link>
              </p>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
