
"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Check, Zap, Crown } from "lucide-react"
import { cn } from "@/lib/utils"

interface Feature {
  name: string
  description: string
  included: boolean
}

interface PricingTier {
  name: string
  price: number
  description: string
  features: Feature[]
  highlight?: boolean
  badge?: string
  icon: React.ReactNode
}

interface PricingSectionProps {
  tiers: PricingTier[]
  className?: string
}

function PricingSection({ tiers, className }: PricingSectionProps) {
  const buttonStyles = {
    default: cn(
      "h-12 bg-white dark:bg-slate-900",
      "hover:bg-slate-50 dark:hover:bg-slate-800",
      "text-slate-900 dark:text-slate-100",
      "border border-slate-200 dark:border-slate-800",
      "hover:border-slate-300 dark:hover:border-slate-700",
      "shadow-sm hover:shadow-md",
      "text-sm font-medium",
    ),
    highlight: cn(
      "h-12 bg-indigo-600",
      "hover:bg-indigo-700",
      "text-white",
      "shadow-[0_1px_15px_rgba(99,102,241,0.3)]",
      "hover:shadow-[0_1px_20px_rgba(99,102,241,0.4)]",
      "font-semibold text-base",
    ),
  }

  const badgeStyles = cn(
    "px-4 py-1.5 text-sm font-medium",
    "bg-indigo-600",
    "text-white",
    "border-none shadow-lg",
  )

  return (
    <section
      id="pricing"
      className={cn(
        "relative bg-gradient-to-br from-slate-50 to-indigo-50",
        "py-24",
        "overflow-hidden",
        className,
      )}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 mb-16">
          <div className="inline-flex items-center space-x-2 bg-indigo-100 rounded-full px-4 py-2">
            <Zap className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-semibold text-indigo-700">Pricing Plans</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 text-center leading-tight">
            Choose Your
            <br />
            <span className="text-indigo-600">Wellness Journey</span>
          </h2>
          <p className="text-xl text-slate-600 text-center max-w-2xl">
            Start your mental health journey with our free plan or upgrade for premium features
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={cn(
                "relative group backdrop-blur-sm",
                "rounded-3xl transition-all duration-300",
                "flex flex-col",
                tier.highlight
                  ? "bg-white shadow-2xl border-2 border-indigo-200 scale-105"
                  : "bg-white shadow-lg border border-slate-200",
                "hover:shadow-xl hover:scale-105",
              )}
              style={{ 
                animationDelay: `${index * 150}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {tier.badge && tier.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className={badgeStyles}>{tier.badge}</Badge>
                </div>
              )}

              <div className="p-8 flex-1">
                <div className="flex items-center justify-center mb-6">
                  <div
                    className={cn(
                      "p-4 rounded-2xl",
                      tier.highlight
                        ? "bg-indigo-100 text-indigo-600"
                        : "bg-slate-100 text-slate-600",
                    )}
                  >
                    {tier.icon}
                  </div>
                </div>

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-2 mb-2">
                    {tier.price === 0 ? (
                      <span className="text-5xl font-bold text-slate-900">Free</span>
                    ) : (
                      <>
                        <span className="text-5xl font-bold text-slate-900">₹{tier.price}</span>
                        <span className="text-lg text-slate-500">/month</span>
                      </>
                    )}
                  </div>
                  <p className="text-slate-600">
                    {tier.description}
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {tier.features.map((feature) => (
                    <div key={feature.name} className="flex gap-3">
                      <div
                        className={cn(
                          "mt-1 p-0.5 rounded-full flex-shrink-0",
                          feature.included
                            ? "text-green-600"
                            : "text-slate-400",
                        )}
                      >
                        <Check className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-slate-900">
                          {feature.name}
                        </div>
                        <div className="text-sm text-slate-500">
                          {feature.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 pt-0">
                <Button
                  className={cn(
                    "w-full relative transition-all duration-300",
                    tier.highlight
                      ? buttonStyles.highlight
                      : buttonStyles.default,
                  )}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {tier.price === 0 ? "Get Started Free" : "Start Premium"}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}

const defaultTiers = [
  {
    name: "Free Plan",
    price: 0,
    description: "Perfect for getting started with mental wellness",
    icon: <Zap className="w-8 h-8" />,
    features: [
      {
        name: "Basic Mood Tracking",
        description: "Log your daily emotions and moods",
        included: true,
      },
      {
        name: "Limited AI Chat",
        description: "5 conversations per week with AI therapist",
        included: true,
      },
      {
        name: "Basic Journaling",
        description: "Simple daily journal entries",
        included: true,
      },
      {
        name: "Premium Features",
        description: "Advanced insights and unlimited access",
        included: false,
      },
      {
        name: "Professional Support",
        description: "Access to licensed therapists",
        included: false,
      },
    ],
  },
  {
    name: "Premium",
    price: 199,
    description: "Complete mental wellness toolkit",
    highlight: true,
    badge: "Most Popular",
    icon: <Crown className="w-8 h-8" />,
    features: [
      {
        name: "Advanced Mood Analytics",
        description: "Detailed insights and trend analysis",
        included: true,
      },
      {
        name: "Unlimited AI Therapist",
        description: "24/7 conversations with AI support",
        included: true,
      },
      {
        name: "Premium Journaling",
        description: "Guided prompts and AI insights",
        included: true,
      },
      {
        name: "Sleep & Meditation",
        description: "Guided sessions and sleep stories",
        included: true,
      },
      {
        name: "Professional Support",
        description: "Monthly sessions with licensed therapists",
        included: true,
      },
    ],
  },
]

export { PricingSection, defaultTiers }
