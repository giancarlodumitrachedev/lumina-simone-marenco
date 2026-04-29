"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Quanto dura generalmente una seduta?",
    answer: "Una seduta di psicoterapia dura in media 50-60 minuti. Il primo colloquio conoscitivo può richiedere leggermente più tempo per permettere una raccolta completa delle informazioni anamnestiche."
  },
  {
    question: "Come funziona il primo colloquio?",
    answer: "Il primo incontro serve a conoscerci. Ascolterò il motivo per cui hai deciso di rivolgerti a me e valuteremo insieme se e come iniziare un percorso. Non c'è alcun obbligo di continuare se non ti senti a tuo agio."
  },
  {
    question: "Ogni quanto avvengono gli incontri?",
    answer: "Generalmente propongo incontri a cadenza settimanale o quindicinale, a seconda della situazione e degli obiettivi terapeutici. La frequenza viene sempre concordata insieme e può variare nel corso del tempo."
  },
  {
    question: "È garantito il segreto professionale?",
    answer: "Assolutamente sì. Tutto ciò che viene condiviso durante le sedute è strettamente confidenziale e protetto dal Codice Deontologico degli Psicologi Italiani (Art. 11), a totale tutela della tua privacy."
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary/80 font-semibold tracking-wider uppercase text-sm mb-4 block">
            Domande Frequenti
          </span>
          <h2 className="text-secondary-foreground font-heading text-4xl md:text-5xl font-semibold mb-6">
            Hai dei dubbi?
          </h2>
          <p className="text-lg text-foreground/80">
            Ecco le risposte alle domande più comuni sul percorso terapeutico.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="border border-border/60 rounded-2xl overflow-hidden bg-card"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/5 transition-colors"
                >
                  <span className="font-semibold text-lg text-secondary-foreground pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-6 pt-0 text-foreground/70 leading-relaxed border-t border-border/20 mt-2">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
