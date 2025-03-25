"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { LogoFormData } from "./logo-design-form"

interface Step1FormProps {
  formData: LogoFormData
  updateFormData: (data: Partial<LogoFormData>) => void
}

export function Step1Form({ formData, updateFormData }: Step1FormProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => updateFormData({ name: e.target.value })}
          placeholder="Enter your full name"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => updateFormData({ email: e.target.value })}
          placeholder="Enter your email address"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => updateFormData({ phone: e.target.value })}
          placeholder="Enter your phone number"
        />
      </div>
    </div>
  )
}

