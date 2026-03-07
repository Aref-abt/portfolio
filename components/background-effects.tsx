"use client"

export function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Ambient glow orbs */}
      <div 
        className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full animate-pulse-glow"
        style={{
          background: 'radial-gradient(circle, oklch(0.5 0.12 195 / 0.15) 0%, transparent 70%)',
        }}
      />
      <div 
        className="absolute top-[30%] right-[-15%] w-[500px] h-[500px] rounded-full animate-pulse-glow"
        style={{
          background: 'radial-gradient(circle, oklch(0.55 0.1 220 / 0.12) 0%, transparent 70%)',
          animationDelay: '2s',
        }}
      />
      <div 
        className="absolute bottom-[-10%] left-[20%] w-[700px] h-[700px] rounded-full animate-pulse-glow"
        style={{
          background: 'radial-gradient(circle, oklch(0.45 0.08 200 / 0.1) 0%, transparent 70%)',
          animationDelay: '4s',
        }}
      />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(oklch(0.7 0.1 195 / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, oklch(0.7 0.1 195 / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  )
}
