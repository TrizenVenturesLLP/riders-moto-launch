import { Zap } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center justify-center gap-3 mb-8">
      <div className="relative">
        <div className="bg-primary p-3 rounded-lg glow-effect">
          <Zap className="w-8 h-8 text-primary-foreground" />
        </div>
        {/* Smoke effect elements */}
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-muted-foreground/20 rounded-full smoke-animation" />
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-muted-foreground/30 rounded-full smoke-animation" style={{ animationDelay: '2s' }} />
      </div>
      <div className="text-center">
        <h1 className="text-2xl md:text-3xl font-hero font-bold text-foreground">
          RIDERS MOTO SHOP
        </h1>
        <p className="text-sm text-muted-foreground uppercase tracking-wider">
          Driven by Passion Powered by Parts
        </p>
      </div>
    </div>
  );
};

export default Logo;