'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Loader2, CheckCircle2 } from 'lucide-react'

export function AtlasTicketForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    
    try {
      const response = await fetch('https://formspree.io/f/xreakgkr', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setIsSuccess(true)
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch (error) {
      alert('Error submitting form. Please check your connection.')
    } finally {
      setIsLoading(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center p-6 text-center space-y-4">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-slate-900">Request Sent!</h3>
        <p className="text-slate-600">
          Thank you for your interest in Atlas Beach Club. Our team will contact you shortly to confirm your reservation.
        </p>
        <Button onClick={() => setIsSuccess(false)} variant="outline" className="mt-4">
          Send Another Request
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-1">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" name="name" placeholder="Enter your full name" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" name="email" type="email" placeholder="Enter your email" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="whatsapp">WhatsApp Number</Label>
        <Input id="whatsapp" name="whatsapp" type="tel" placeholder="+62..." required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="ticketType">Ticket Option</Label>
        <Select name="ticketType" required>
          <SelectTrigger>
            <SelectValue placeholder="Select ticket type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="General Admission">General Admission</SelectItem>
            <SelectItem value="VIP Daybed">VIP Daybed</SelectItem>
            <SelectItem value="VVIP Sofa">VVIP Sofa</SelectItem>
            <SelectItem value="Event Ticket">Specific Event Ticket</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="date">Preferred Date</Label>
        <Input id="date" name="date" type="date" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="guests">Number of Guests</Label>
        <Input id="guests" name="guests" type="number" min="1" placeholder="2" required />
      </div>

      <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white" disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          'Submit Request'
        )}
      </Button>
      
      <p className="text-xs text-center text-slate-500 mt-4">
        We will contact you via WhatsApp or Email to confirm availability and payment.
      </p>
    </form>
  )
}
