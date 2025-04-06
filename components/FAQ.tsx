'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  return (
    <section  className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-[#24565c]">Frequently Asked Questions ✈️</h2>

      <Accordion type="single" collapsible className="w-full space-y-6">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl md:text-2xl py-4">What documents do I need for international travel?</AccordionTrigger>
          <AccordionContent className="text-base md:text-lg leading-relaxed px-2 md:px-4">
            You typically need a valid passport, visa (if required), travel insurance, and proof of return or onward travel. Check specific country requirements before your trip.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-xl md:text-2xl py-4">Can I cancel or reschedule my booking?</AccordionTrigger>
          <AccordionContent className="text-base md:text-lg leading-relaxed px-2 md:px-4">
            Yes! Most of our bookings are flexible. You can cancel or reschedule depending on the provider&apos;s policy. Check your email confirmation or contact our support team.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-xl md:text-2xl py-4">Do you offer travel insurance?</AccordionTrigger>
          <AccordionContent className="text-base md:text-lg leading-relaxed px-2 md:px-4">
            Absolutely! We offer optional travel insurance at checkout to cover trip delays, cancellations, and medical emergencies.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="text-xl md:text-2xl py-4">How do I get my e-tickets?</AccordionTrigger>
          <AccordionContent className="text-base md:text-lg leading-relaxed px-2 md:px-4">
            Your e-tickets will be sent to your registered email immediately after booking. You can also access them anytime from your account dashboard.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default FAQ;
