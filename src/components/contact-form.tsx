
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

export function ContactForm() {
  const accessKey = "ae0ad4eb-cdea-4a41-8c5e-88d48daf4951";

  return (
    <form
      action="https://api.web3forms.com/submit"
      method="POST"
      className="space-y-6"
    >
      <input type="hidden" name="access_key" value={accessKey} />
      <input type="hidden" name="redirect" value="https://web3forms.com/success" />
      
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" name="name" placeholder="Your Name" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" name="email" placeholder="your.email@example.com" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell me about your project or just say hi!"
          className="min-h-[120px]"
          required
        />
      </div>
      
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

      <Button type="submit" className="w-full" size="lg">
        Send Message
        <Send className="ml-2 h-5 w-5" />
      </Button>
    </form>
  );
}
