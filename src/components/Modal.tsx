import { motion, AnimatePresence } from 'framer-motion'

type SubjectModalProps = {
  subject: string
  isOpen: boolean
  onClose: () => void
}

export default function SubjectModal({ subject, isOpen, onClose }: SubjectModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed inset-x-4 top-1/2 -translate-y-1/2 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 max-w-lg w-full bg-[#1A1B3B] p-6 rounded-lg shadow-[0_0_15px_rgba(187,46,143,0.1)] border border-[#404163]"
          >
            <h3 className="text-[#BB2E8F] text-xl mb-4">Sujet de la consultation</h3>
            <p className="text-[#E2E2E8]">{subject}</p>
            <button
              onClick={onClose}
              className="mt-6 w-full bg-[#BB2E8F] text-white py-2 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Fermer
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}