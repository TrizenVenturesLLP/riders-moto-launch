import { Zap } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
      <div className="relative">
        <div className="bg-primary p-2 sm:p-3 rounded-lg glow-effect">
          <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
        </div>
        {/* Smoke effect elements */}
        <div className="absolute -top-2 -right-2 w-3 h-3 sm:w-4 sm:h-4 bg-muted-foreground/20 rounded-full smoke-animation" />
        <div className="absolute -top-1 -right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-muted-foreground/30 rounded-full smoke-animation" style={{ animationDelay: '2s' }} />
      </div>
      <div className="text-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-hero font-bold text-foreground leading-tight">
          RIDERS MOTO SHOP
        </h1>
        <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider mt-1">
          Driven by Passion Powered by Parts
        </p>
      </div>
    </div>
  );
};

export default Logo;