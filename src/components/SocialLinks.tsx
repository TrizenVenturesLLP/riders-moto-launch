import { Instagram, Facebook, MessageCircle } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://instagram.com/ridersmotoshop',
      color: 'hover:text-pink-500',
      bgColor: 'hover:bg-pink-500/10',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      href: 'https://facebook.com/ridersmotoshop',
      color: 'hover:text-blue-500',
      bgColor: 'hover:bg-blue-500/10',
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      href: 'https://wa.me/1234567890',
      color: 'hover:text-green-500',
      bgColor: 'hover:bg-green-500/10',
    },
  ];

  return (
    <div className="flex justify-center gap-4">
      {socialLinks.map((social) => {
        const IconComponent = social.icon;
        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              flex items-center justify-center w-12 h-12 
              bg-secondary rounded-full border border-border
              transition-all duration-300 transform hover:scale-110
              ${social.color} ${social.bgColor}
              hover:shadow-glow
            `}
            aria-label={`Follow us on ${social.name}`}
          >
            <IconComponent className="w-5 h-5" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;