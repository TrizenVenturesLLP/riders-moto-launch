import CountdownTimer from '@/components/CountdownTimer';
import EmailSignup from '@/components/EmailSignup';
import SocialLinks from '@/components/SocialLinks';
import Logo from '@/components/Logo';
import heroBackground from '@/assets/hero-background.jpg';

const Index = () => {
  // Set launch date to 30 days from now (easily configurable)
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 30);
  const targetDate = launchDate.toISOString();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Background with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-background/85" />
        <div className="absolute inset-0 bg-gradient-glow" />
      </div>

      {/* Main Content */}
      <main className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col justify-center px-4 py-8 md:py-16">
          <div className="container mx-auto max-w-6xl">
            
            {/* Logo Section */}
            <div className="text-center mb-8 hero-entrance">
              <Logo />
            </div>

            {/* Hero Text */}
            <div className="text-center mb-12 space-y-4 hero-entrance" style={{ animationDelay: '0.3s' }}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-hero font-bold text-glow">
                🚀 <span className="text-primary">LAUNCHING SOON</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Your ultimate destination for{' '}
                <span className="text-primary font-semibold">premium bike parts</span>{' '}
                and{' '}
                <span className="text-accent font-semibold">performance accessories</span>
              </p>
            </div>

            {/* Countdown Timer */}
            <div className="mb-16 hero-entrance" style={{ animationDelay: '0.6s' }}>
              <CountdownTimer targetDate={targetDate} />
            </div>

            {/* Email Signup */}
            <div className="mb-12 hero-entrance" style={{ animationDelay: '0.9s' }}>
              <EmailSignup />
            </div>

            {/* Social Links */}
            <div className="hero-entrance" style={{ animationDelay: '1.2s' }}>
              <SocialLinks />
            </div>

          </div>
        </div>

        {/* Footer */}
        <footer className="relative z-10 py-6 text-center border-t border-border/50">
          <div className="container mx-auto px-4">
            <p className="text-sm text-muted-foreground mb-2">
              © 2024 Riders Moto Shop. All rights reserved.
            </p>
            <div className="flex justify-center gap-4 text-xs">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <span className="text-muted-foreground">|</span>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <span className="text-muted-foreground">|</span>
              <a href="mailto:info@ridersmotoshop.com" className="text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </footer>
      </main>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating smoke effects */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-muted-foreground/5 rounded-full smoke-animation" />
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-primary/10 rounded-full smoke-animation" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-accent/5 rounded-full smoke-animation" style={{ animationDelay: '6s' }} />
      </div>
    </div>
  );
};

export default Index;
