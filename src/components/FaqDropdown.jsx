import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FaqDropdown({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleButtonClick() {
    setIsOpen((prev) => !prev);
  }
  return (
    <div>
      <div className="border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h5 className="py-5 text-sm text-gray-800">{title}</h5>
          <button className="p-2" onClick={handleButtonClick}>
            <motion.svg
              animate={
                isOpen
                  ? { rotate: 180, color: 'hsl(0, 94%, 66%)' }
                  : { color: '#5267DF' }
              }
              transition={{
                duration: 0.1,
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="12"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                d="M1 1l8 8 8-8"
              />
            </motion.svg>
          </button>
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="faq"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                collapsed: { opacity: 0, height: 0 },
                open: { opacity: 1, height: 'auto' },
              }}
              transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
              className={` text-gray-500 overflow-hidden`}
            >
              <motion.p
                key="p"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{ collapsed: { opactity: 0 }, open: { opacity: 1 } }}
                transition={{ duration: 0.3 }}
                className="pb-7 origin-[top center] text-sm"
              >
                {description}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
