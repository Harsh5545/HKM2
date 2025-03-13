"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type Message = {
  id: number
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: "👋 Hi there! I'm the HKM virtual assistant. How can I help you today?",
    sender: "bot",
    timestamp: new Date(),
  },
]

// Predefined responses for common questions
const responses: Record<string, string> = {
  hello: "Hello! How can I assist you with information about our courses?",
  hi: "Hi there! How can I help you today?",
  courses:
    "We offer courses in 3D Animation, Game Design, VFX, Graphics Design, 3D Architecture, Video Editing, and 3D Jewellery Design. Which one are you interested in?",
  fees: "Our course fees vary depending on the program and duration. For detailed fee information, please specify which course you're interested in or contact our admissions office at +91 96648 33542.",
  duration:
    "Course durations range from 3 months to 2 years depending on the program. Please specify which course you're interested in for more details.",
  placement:
    "We have a dedicated placement cell that helps students find job opportunities. We maintain a placement rate of over 95% with our industry partners.",
  demo: "Yes, we offer free demo classes for all our courses. You can book one by visiting our campus or calling us at +91 96648 33542.",
  location: "We are located at 123 Adajan, Surat, Gujarat 395009, India.",
  contact: "You can reach us at +91 96648 33542 or email us at info@harikrishnamultimedia.com.",
  faculty: "Our faculty members are industry professionals with years of experience in their respective fields.",
  software:
    "We teach industry-standard software including Adobe Creative Suite, Autodesk Maya, 3ds Max, ZBrush, Unity, Unreal Engine, and more.",
  certificate:
    "Yes, upon successful completion of the course, you will receive a certification from Harikrishna Multimedia Institute.",
  batch:
    "We have regular weekday batches as well as weekend batches for working professionals. New batches start every month.",
  admission:
    "The admission process is simple. You can visit our campus or call us to schedule a counseling session. After the session, you can enroll in your chosen course by paying the registration fee.",
  "thank you": "You're welcome! Feel free to reach out if you have any more questions.",
  thanks: "You're welcome! Is there anything else you'd like to know?",
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
    }
  }, [messages, isOpen])

  const handleSendMessage = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate bot thinking
    setTimeout(() => {
      const botResponse = getBotResponse(input.toLowerCase())

      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1000)
  }

  const getBotResponse = (input: string): string => {
    // Check for keywords in the input
    for (const [keyword, response] of Object.entries(responses)) {
      if (input.includes(keyword)) {
        return response
      }
    }

    // Default response if no keywords match
    return "I'm not sure I understand. Could you please rephrase your question? Or you can call us at +91 96648 33542 for immediate assistance."
  }

  return (
    <>
      {/* Chat button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 bg-primary text-white rounded-full p-4 shadow-lg hover:bg-primary-600 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 right-6 z-50 w-80 sm:w-96 h-[500px] bg-white dark:bg-gray-800 rounded-lg shadow-xl flex flex-col overflow-hidden"
          >
            {/* Chat header */}
            <div className="bg-primary text-white p-4 flex items-center justify-between">
              <div className="flex items-center">
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarImage src="/images/logo-icon.png" alt="HKM" />
                  <AvatarFallback>HKM</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium">HKM Assistant</h3>
                  <p className="text-xs text-white/80">Online</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-primary-600 rounded-full"
                onClick={() => setIsOpen(false)}
              >
                <X size={18} />
              </Button>
            </div>

            {/* Chat messages */}
            <div className="flex-1 p-4 overflow-y-auto">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-4 flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.sender === "user"
                        ? "bg-primary text-white rounded-tr-none"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-tl-none"
                    }`}
                  >
                    <p>{message.text}</p>
                    <p
                      className={`text-xs mt-1 ${
                        message.sender === "user" ? "text-white/70" : "text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="mb-4 flex justify-start">
                  <div className="max-w-[80%] rounded-lg p-3 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-tl-none">
                    <div className="flex space-x-1">
                      <div
                        className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Chat input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSendMessage()
                }}
                className="flex items-center gap-2"
              >
                <Input
                  type="text"
                  placeholder="Type your message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" size="icon" className="bg-primary hover:bg-primary-600">
                  <Send size={18} />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

