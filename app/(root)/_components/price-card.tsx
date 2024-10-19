import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { FaCircleCheck } from "react-icons/fa6";
import { Dot } from "lucide-react";
import { PricingCardProps } from "@/types";

export function PricingCard({
  plan,
  price,
  isMonthly,
  description,
  features,
  subFeatures,
  isPopular,
  buttonLabel,
  originalPrice,
  discount,
}: PricingCardProps) {
  const isGrowthOrBooster = plan === "Growth" || plan === "Booster";

  return (
    <Card
      className={cn(
        "flex flex-col gap-6 rounded-2xl p-6 md:p-8 shadow-lg",
        isPopular
          ? "bg-gradient-to-b from-blue-600 via-blue-900 to-neutral-900 text-white"
          : "bg-white dark:bg-gray-800 dark:border-gray-700"
      )}
    >
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-medium">{plan}</h3>
          {isPopular && (
            <div className="rounded-full bg-blue-100 text-blue-900 px-2 py-1 text-xs font-medium">
              Popular
            </div>
          )}
        </div>
      </div>

      <div className="flex items-baseline gap-2 -mt-2">
        <div>
          <p className="text-4xl font-bold">
            {price}{" "}
            {isGrowthOrBooster && (
              <span className="text-sm font-normal">
                /{isMonthly ? "month" : "year"}
              </span>
            )}
          </p>
          {description && (
            <p
              className={`text-sm mt-7 ${
                isPopular ? "text-blue-100" : "text-gray-500 dark:text-gray-400"
              }`}
            >
              {description}
            </p>
          )}
        </div>
      </div>

      {discount && (
        <div className="flex items-center gap-2">
          <div className="text-sm font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">
            {discount}
          </div>
          {originalPrice && (
            <span
              className={`text-lg font-semibold line-through ${
                isPopular ? "text-blue-200" : "text-gray-400"
              }`}
            >
              {originalPrice}
            </span>
          )}
        </div>
      )}

      <div className="flex flex-col h-full gap-4">
        <div className="min-h-[22rem]">
          <ul className="grid gap-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <FaCircleCheck
                  className={cn(
                    "min-h-4 min-w-4 mt-0.5",
                    isPopular ? "text-gray-100" : "text-gray-600"
                  )}
                />
                <span
                  className={cn(
                    isPopular
                      ? "text-blue-50"
                      : "text-gray-700 dark:text-gray-300",
                    index === 0 && isGrowthOrBooster ? "font-bold" : ""
                  )}
                >
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <Separator
          className={cn(
            "w-full bg-blue-200 h-[1.5px] rounded-md",
            isPopular ? "bg-blue-200" : ""
          )}
        />

        <div className="mt-2">
          {subFeatures && (
            <ul className="grid gap-2">
              {subFeatures.map((feature, index) => (
                <li key={index} className="flex items-start text-sm">
                  <Dot
                    size={24}
                    className={cn(
                      "min-w-6 -ml-2",
                      isPopular ? "text-blue-200" : "text-gray-400"
                    )}
                  />
                  <span
                    className={
                      isPopular
                        ? "text-blue-50 font-semibold"
                        : "text-gray-500 font-semibold"
                    }
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <Button
        className={cn(
          "w-full mt-4 font-medium",
          isPopular
            ? "bg-white text-blue-900 hover:bg-blue-50"
            : "bg-blue-600 text-white hover:bg-blue-700"
        )}
      >
        {buttonLabel}
      </Button>
    </Card>
  );
}
