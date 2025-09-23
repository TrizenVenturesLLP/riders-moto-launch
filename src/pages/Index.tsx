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
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 bg-gradient-glow" />
      </div>

      {/* Main Content */}
      <main className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 py-8 md:py-16">
          <div className="container mx-auto max-w-6xl">
            
            {/* Logo Section */}
            <div className="text-center mb-6 sm:mb-8 hero-entrance">
              <Logo />
            </div>

            {/* Hero Text */}
            <div className="text-center mb-8 sm:mb-12 space-y-3 sm:space-y-6 hero-entrance px-4" style={{ animationDelay: '0.3s' }}>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-headline font-bold leading-tight text-glow">
                🚀 <span className="text-primary block sm:inline mt-2 sm:mt-0">Launching Soon</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-body font-normal">
                A one stop shop for all bike accessories
              </p>
            </div>

            {/* Countdown Timer */}
            {/* <div className="mb-16 hero-entrance" style={{ animationDelay: '0.6s' }}>
              <CountdownTimer targetDate={targetDate} />
            </div> */}

            {/* Email Signup */}
            <div className="mb-8 sm:mb-12 hero-entrance px-2" style={{ animationDelay: '0.9s' }}>
              <EmailSignup />
            </div>

            {/* Social Links */}
            <div className="mb-12 sm:mb-16 hero-entrance" style={{ animationDelay: '1.2s' }}>
              <SocialLinks />
            </div>

            {/* Contact Information */}
            <div className="hero-entrance px-2" style={{ animationDelay: '1.5s' }}>
              <div className="text-center max-w-md mx-auto">
                <div className="bg-card border border-border rounded-lg p-4 sm:p-6 shadow-subtle">
                  <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-primary">Brand Collaborations</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                    For brand collaborations, connect with above numbers
                  </p>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm">
                      <span className="text-muted-foreground">📞</span>
                      <a 
                        href="tel:9393333361" 
                        className="text-foreground hover:text-primary transition-colors font-medium break-all"
                      >
                        +91 93933 33361
                      </a>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm">
                      <span className="text-muted-foreground">✉️</span>
                      <a 
                        href="mailto:Piston@ridersmotoshop.com" 
                        className="text-foreground hover:text-primary transition-colors font-medium break-all"
                      >
                        Piston@ridersmotoshop.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer */}
        <footer className="relative z-10 py-4 sm:py-6 text-center border-t border-border/50">
          <div className="container mx-auto px-4">
            <p className="text-xs sm:text-sm text-muted-foreground mb-2">
              © 2024 Riders Moto Shop. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-xs">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <span className="text-muted-foreground hidden sm:inline">|</span>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <span className="text-muted-foreground hidden sm:inline">|</span>
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
