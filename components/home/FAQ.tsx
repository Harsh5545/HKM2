"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What are the admission requirements for your courses?",
    answer:
      "Our courses are open to students with a passion for creativity and technology. While some advanced courses may require basic knowledge in the field, most of our beginner courses have no specific prerequisites. We conduct a brief counseling session to understand your goals and recommend the most suitable course.",
  },
  {
    question: "Do you provide job placement assistance?",
    answer:
      "Yes, we have a dedicated placement cell that helps students find job opportunities in the industry. We have partnerships with various companies and studios that regularly hire our graduates. Our placement assistance includes portfolio development, interview preparation, and connecting students with potential employers.",
  },
  {
    question: "What software will I learn during the courses?",
    answer:
      "Depending on your chosen course, you'll learn industry-standard software such as Adobe Creative Suite, Autodesk Maya, 3ds Max, ZBrush, Unity, Unreal Engine, Nuke, Houdini, and more. Our curriculum is regularly updated to include the latest software and techniques used in the industry.",
  },
  {
    question: "Are there any flexible timing options for working professionals?",
    answer:
      "Yes, we offer flexible timing options including weekend batches and evening classes specifically designed for working professionals. You can discuss your schedule requirements during the counseling session, and we'll try to accommodate your needs.",
  },
  {
    question: "Do you provide any certification after course completion?",
    answer:
      "Yes, upon successful completion of the course, students receive a certification from Harikrishna Multimedia Institute. Additionally, for certain courses, we also provide industry-recognized certifications from software companies like Autodesk, Adobe, etc.",
  },
]

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  return (
    <section ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="md:w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about our courses, admission process, and more.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-400">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

