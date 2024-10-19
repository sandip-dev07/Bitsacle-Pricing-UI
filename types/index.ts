export interface PricingCardProps {
  plan: string;
  price: string;
  isMonthly: boolean;
  description?: string;
  features: string[];
  subFeatures?: string[];
  isPopular: boolean;
  buttonLabel: string;
  originalPrice?: string;
  discount?: string;
}
