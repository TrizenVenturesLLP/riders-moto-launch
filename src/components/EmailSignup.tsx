import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Mail, Check } from 'lucide-react';

const EmailSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    if (!validateEmail(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call - replace with actual backend integration
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Store email locally for demo (replace with actual API call)
      const existingEmails = JSON.parse(localStorage.getItem('ridersEmails') || '[]');
      if (!existingEmails.includes(email)) {
        existingEmails.push(email);
        localStorage.setItem('ridersEmails', JSON.stringify(existingEmails));
      }

      setIsSubmitted(true);
      toast({
        title: "🏍️ You're In!",
        description: "We'll notify you the moment we launch!",
      });
    } catch (error) {
      toast({
        title: "Oops!",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-4 sm:mb-6 text-accent">
          <Check className="w-12 h-12 sm:w-16 sm:h-16 mx-auto animate-pulse" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold mb-2 text-accent">You're All Set! 🚀</h3>
        <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
          We'll send you an exclusive early access invitation when we launch.
        </p>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Keep an eye on your inbox for <span className="font-semibold text-foreground break-all">{email}</span>
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto px-4">
      <div className="text-center mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 leading-tight">
          Be the First to Know! 🏁
        </h3>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          Get exclusive early access and special launch discounts
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-hero pl-12"
            disabled={isLoading}
          />
        </div>
        
        <Button 
          type="submit" 
          className="btn-hero w-full"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
              Joining the Ride...
            </>
          ) : (
            'Notify Me 🚀'
          )}
        </Button>
      </form>
      
      <p className="text-xs sm:text-sm text-muted-foreground text-center mt-3 sm:mt-4 leading-relaxed">
        We respect your inbox. No spam, just launch updates.
      </p>
    </div>
  );
};

export default EmailSignup;