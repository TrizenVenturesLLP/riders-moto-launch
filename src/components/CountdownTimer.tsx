import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: string;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      
      setIsActive(false);
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  if (!isActive) {
    return (
      <div className="text-center">
        <div className="text-4xl md:text-6xl font-hero text-accent font-bold mb-4">
          🚀 WE'RE LIVE!
        </div>
        <p className="text-muted-foreground">Welcome to Riders Moto Shop!</p>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
      {timeUnits.map((unit, index) => (
        <div 
          key={unit.label} 
          className="text-center countdown-animation"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="bg-card border border-border rounded-lg p-4 md:p-6 min-w-[80px] md:min-w-[120px] glow-effect">
            <div className="text-2xl md:text-4xl lg:text-5xl font-hero font-bold text-primary mb-2">
              {formatNumber(unit.value)}
            </div>
            <div className="text-xs md:text-sm uppercase tracking-wider text-muted-foreground font-semibold">
              {unit.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;