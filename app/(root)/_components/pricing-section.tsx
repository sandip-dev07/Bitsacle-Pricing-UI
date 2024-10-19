"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { pricingPlans } from "@/utils/data";
import { PricingCard } from "./price-card";

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <section className="relative mx-auto max-w-7xl px-4 my-32">
      <div className="grid gap-6 px-4 md:gap-8 md:px-6">
        <div className="grid gap-1 text-center">
          <h2 className="space-y-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Pricing
          </h2>
          <p className="mt-3 text-sm text-gray-600 text-muted-foreground dark:text-gray-300 md:text-base">
            Choose the plan that fits your needs.
          </p>
        </div>

        <div className="flex items-center justify-center">
          <Tabs defaultValue="monthly" className="mb-8">
            <TabsList>
              <TabsTrigger
                value="monthly"
                onClick={() => setBillingCycle("monthly")}
              >
                Monthly
              </TabsTrigger>
              <TabsTrigger
                value="annual"
                onClick={() => setBillingCycle("annual")}
              >
                Annual
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-4 lg:gap-4">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              plan={plan.plan}
              price={
                billingCycle === "monthly"
                  ? plan.monthlyPrice
                  : plan.yearlyPrice
              }
              isMonthly={billingCycle === "monthly" ? true : false}
              description={plan.description}
              features={plan.features}
              subFeatures={plan.sub_features}
              isPopular={plan.isPopular}
              buttonLabel={plan.buttonLabel}
              originalPrice={plan.original_price}
              discount={plan.discount}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
