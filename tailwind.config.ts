import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        // Surface colors
        surface: {
          soft: "hsl(var(--surface-soft))",
          card: "hsl(var(--surface-card))",
          hover: "hsl(var(--surface-hover))",
        },
        
        // Brand colors
        coral: {
          DEFAULT: "hsl(var(--coral-primary))",
          hover: "hsl(var(--coral-hover))",
          light: "hsl(var(--coral-light))",
        },
        
        // Indigo gradient
        indigo: {
          start: "hsl(var(--indigo-start))",
          end: "hsl(var(--indigo-end))",
          light: "hsl(var(--indigo-light))",
        },
        
        // Text colors
        text: {
          primary: "hsl(var(--text-primary))",
          secondary: "hsl(var(--text-secondary))",
          muted: "hsl(var(--text-muted))",
          white: "hsl(var(--text-white))",
        },
        
        // Functional colors
        success: {
          DEFAULT: "hsl(var(--success))",
          light: "hsl(var(--success-light))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          light: "hsl(var(--warning-light))",
        },
        error: {
          DEFAULT: "hsl(var(--error))",
          light: "hsl(var(--error-light))",
        },
        
        // Legacy shadcn colors (for compatibility)
        primary: {
          DEFAULT: "hsl(var(--coral-primary))",
          foreground: "hsl(var(--text-white))",
        },
        secondary: {
          DEFAULT: "hsl(var(--surface-soft))",
          foreground: "hsl(var(--text-primary))",
        },
        destructive: {
          DEFAULT: "hsl(var(--error))",
          foreground: "hsl(var(--text-white))",
        },
        muted: {
          DEFAULT: "hsl(var(--surface-soft))",
          foreground: "hsl(var(--text-muted))",
        },
        accent: {
          DEFAULT: "hsl(var(--indigo-light))",
          foreground: "hsl(var(--text-primary))",
        },
        popover: {
          DEFAULT: "hsl(var(--surface-card))",
          foreground: "hsl(var(--text-primary))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      backgroundImage: {
        'bg-gradient-primary': 'var(--gradient-primary)',
        'bg-gradient-indigo': 'var(--gradient-indigo)',
        'bg-gradient-success': 'var(--gradient-success)',
        'bg-gradient-surface': 'var(--gradient-surface)',
        'bg-gradient-glass': 'var(--gradient-glass)',
        'bg-gradient-purple': 'var(--gradient-purple)',
        'bg-gradient-emerald': 'var(--gradient-emerald)',
        'bg-gradient-rose': 'var(--gradient-rose)',
        'bg-gradient-aurora': 'var(--gradient-aurora)',
        'bg-gradient-sunset': 'var(--gradient-sunset)',
        'indigo-gradient': 'linear-gradient(135deg, hsl(var(--indigo-start)), hsl(var(--indigo-end)))',
        'coral-gradient': 'linear-gradient(135deg, hsl(var(--coral-primary)), hsl(var(--coral-hover)))',
        'purple-gradient': 'linear-gradient(135deg, hsl(var(--purple-start)), hsl(var(--purple-end)))',
        'emerald-gradient': 'linear-gradient(135deg, hsl(var(--emerald-start)), hsl(var(--emerald-end)))',
        'rose-gradient': 'linear-gradient(135deg, hsl(var(--rose-start)), hsl(var(--rose-end)))',
        'aurora-gradient': 'linear-gradient(135deg, hsl(var(--purple-start)), hsl(var(--indigo-start)), hsl(var(--indigo-end)), hsl(var(--emerald-start)))',
        'sunset-gradient': 'linear-gradient(135deg, hsl(var(--rose-start)), hsl(var(--coral-primary)), hsl(var(--warning)))',
        'shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
      },
      boxShadow: {
        soft: 'var(--shadow-soft)',
        medium: 'var(--shadow-medium)',
        large: 'var(--shadow-large)',
        coral: 'var(--shadow-coral)',
        indigo: 'var(--shadow-indigo)',
        success: 'var(--shadow-success)',
        purple: 'var(--shadow-purple)',
        glow: 'var(--shadow-glow)',
        'glow-indigo': 'var(--shadow-glow-indigo)',
      },
      transitionTimingFunction: {
        'smooth': 'var(--transition-smooth)',
        'bounce': 'var(--transition-bounce)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "scale-in": {
          "0%": {
            transform: "scale(0.95)",
            opacity: "0"
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1"
          }
        },
        "slide-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(40px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "slide-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-40px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "slide-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(40px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)"
          }
        },
        "slide-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(-40px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)"
          }
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0px)"
          },
          "50%": {
            transform: "translateY(-10px)"
          }
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow: "0 0 20px -8px hsl(351 100% 62% / 0.4)"
          },
          "50%": {
            boxShadow: "0 0 40px -4px hsl(351 100% 62% / 0.6)"
          }
        },
        "shimmer": {
          "0%": {
            backgroundPosition: "-200% 0"
          },
          "100%": {
            backgroundPosition: "200% 0"
          }
        },
        "gradient-shift": {
          "0%, 100%": {
            backgroundPosition: "0% 50%"
          },
          "50%": {
            backgroundPosition: "100% 50%"
          }
        },
        "bounce-gentle": {
          "0%, 100%": {
            transform: "translateY(0)"
          },
          "50%": {
            transform: "translateY(-5px)"
          }
        },
        "rotate-slow": {
          "0%": {
            transform: "rotate(0deg)"
          },
          "100%": {
            transform: "rotate(360deg)"
          }
        },
        "wiggle": {
          "0%, 100%": {
            transform: "rotate(-3deg)"
          },
          "50%": {
            transform: "rotate(3deg)"
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "scale-in": "scale-in 0.4s ease-out",
        "slide-up": "slide-up 0.6s ease-out",
        "slide-down": "slide-down 0.6s ease-out",
        "slide-left": "slide-left 0.6s ease-out",
        "slide-right": "slide-right 0.6s ease-out",
        "float": "float 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "gradient-shift": "gradient-shift 3s ease infinite",
        "bounce-gentle": "bounce-gentle 2s ease-in-out infinite",
        "rotate-slow": "rotate-slow 8s linear infinite",
        "wiggle": "wiggle 1s ease-in-out infinite"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
