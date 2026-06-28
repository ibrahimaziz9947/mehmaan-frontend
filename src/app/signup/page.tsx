"use client";

import { useState } from "react";
import Link from "next/link";
import { User, Building } from "lucide-react";
import AuthLayout from "@/layouts/AuthLayout";
import { Input } from "@/components/ui/Input";
import { RoleSelectionCard } from "@/components/ui/RoleSelectionCard";
import { UserRole } from "@/types/auth";

export default function SignupPage() {
  const [role, setRole] = useState<UserRole>("guest");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ firstName?: string; lastName?: string; email?: string; password?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { firstName?: string; lastName?: string; email?: string; password?: string } = {};
    if (!firstName) newErrors.firstName = "First name is required";
    if (!lastName) newErrors.lastName = "Last name is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    else if (password.length < 8) newErrors.password = "Password must be at least 8 characters";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});

    // Mock client-side signup behavior
    console.log("Signup attempted with:", { role, firstName, lastName, email, password });
    alert(`Mock ${role === "vendor" ? "Host" : "Guest"} Signup Successful! Backend integration coming soon.`);
  };

  return (
    <AuthLayout
      title="Create an account"
      subtitle="Join Mehmaan to discover and book elegant spaces."
      imageUrl="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1200"
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        
        {/* Role Selection */}
        <div className="flex flex-col mb-2">
          <span className="text-sm font-medium text-foreground mb-3">I am signing up as a:</span>
          <div className="flex flex-col sm:flex-row gap-4" role="radiogroup">
            <RoleSelectionCard
              title="Guest"
              description="I want to discover and book elegant spaces."
              icon={User}
              selected={role === "guest"}
              onClick={() => setRole("guest")}
            />
            <RoleSelectionCard
              title="Host / Vendor"
              description="I want to list and manage my properties."
              icon={Building}
              selected={role === "vendor"}
              onClick={() => setRole("vendor")}
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-5">
          <Input
            label="First Name"
            type="text"
            placeholder="John"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            error={errors.firstName}
          />
          <Input
            label="Last Name"
            type="text"
            placeholder="Doe"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            error={errors.lastName}
          />
        </div>
        <Input
          label="Email"
          type="email"
          placeholder="john.doe@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
        />
        <Input
          label="Password"
          type="password"
          placeholder="Create a strong password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
        />
        
        <p className="text-xs text-muted-foreground mt-1">
          By creating an account, you agree to our{" "}
          <Link href="#" className="text-primary hover:text-accent transition-colors">Terms of Service</Link> and{" "}
          <Link href="#" className="text-primary hover:text-accent transition-colors">Privacy Policy</Link>.
        </p>

        <button type="submit" className="btn-primary w-full mt-2 py-3 text-base">
          Create {role === "vendor" ? "Host" : "Guest"} Account
        </button>

        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-surface px-4 text-muted-foreground">Or sign up with</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button type="button" className="btn-outline w-full flex items-center justify-center gap-2 py-2.5">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Google
          </button>
          <button type="button" className="btn-outline w-full flex items-center justify-center gap-2 py-2.5">
            <svg className="w-5 h-5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Facebook
          </button>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-4">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-primary hover:text-accent transition-colors">
            Sign in
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
