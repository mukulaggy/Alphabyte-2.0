import { useState } from 'react';
import { motion } from "framer-motion";


export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(3);
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const faqItems = [
    {
      question: "What is AlphaByte Hackathon?",
      answer: "AlphaByte is a 36-hour hackathon where participants work on innovative solutions to real-world problems. It's organized by GDGC PCCOE and features multiple tracks including Web Development, AI/ML, and Blockchain."
    },
    {
      question: "Who can participate?",
      answer: "Any college student can participate. Teams should have 3-4 members, and cross-college teams are allowed."
    },
    {
      question: "What are the prizes?",
      answer: "The total prize pool is ₹2L+, with additional sponsor track prizes and special mentions."
    },
    {
      question: "What should I bring?",
      answer: "Laptop, charger, and student ID are mandatory. For offline rounds, accommodation will be provided."
    }
  ];

  return (
    <div className=" min-h-screen bg-black text-white relative overflow-hidden flex justify-center items-center">
      <div className="w-full max-w-2xl ">
        <h1 className="text-5xl font-bold text-center ">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
          {...fadeIn}
        >
          FAQS
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4" />
        </motion.h1>
        </h1>

        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="bg-neutral-800/50 backdrop-blur-sm rounded-xl border border-neutral-700 overflow-hidden"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-neutral-700/50 transition-colors"
              >
                <span className="text-lg font-medium">{item.question}</span>
                <svg 
                  className={`w-6 h-6 transform transition-transform ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div 
                className={`px-6 py-4 border-t border-neutral-700 ${openIndex === index ? 'block' : 'hidden'}`}
              >
                <p className="text-neutral-300">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}