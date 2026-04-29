"use client";

import { motion } from "framer-motion";
import { Brain, HeartPulse, ShieldAlert, Sparkles, AlertCircle, Compass } from "lucide-react";

const issues = [
  {
    title: "Ansia e Attacchi di Panico",
    description: "Impariamo a gestire e disinnescare la paura soverchiante, restituendoti il controllo sul respiro e sulla tua vita quotidiana.",
    icon: <ShieldAlert className="w-6 h-6" />
  },
  {
    title: "Depressione e Umore",
    description: "Usciamo insieme dall'oscurità emotiva, ricostruendo passo dopo passo la motivazione e la capacità di provare gioia.",
    icon: <Brain className="w-6 h-6" />
  },
  {
    title: "Stress e Burnout",
    description: "Strumenti pratici per affrontare il sovraccarico lavorativo ed emotivo, prima che intacchi la tua salute fisica.",
    icon: <HeartPulse className="w-6 h-6" />
  },
  {
    title: "Difficoltà Relazionali",
    description: "Miglioriamo la comunicazione e la comprensione nei rapporti di coppia, familiari o sul luogo di lavoro.",
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    title: "Traumi e Ferite Passate",
    description: "Elaboriamo i vissuti dolorosi che continuano a condizionare le tue scelte presenti, per un futuro più leggero.",
    icon: <AlertCircle className="w-6 h-6" />
  },
  {
    title: "Crisi Esistenziali",
    description: "Ritroviamo una bussola interiore nei momenti di cambiamento profondo, lutto o perdita di significato.",
    icon: <Compass className="w-6 h-6" />
  }
];

export function IssuesGrid() {
  return (
    <section className="py-24 bg-background border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-secondary-foreground font-heading text-4xl md:text-5xl font-semibold mb-6">
            Quando chiedere aiuto?
          </h2>
          <p className="text-lg text-foreground/80">
            Ci sono momenti in cui il peso diventa troppo grande per essere portato da soli. 
            Insieme possiamo affrontare questi ostacoli.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {issues.map((issue, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card p-8 rounded-2xl shadow-sm border border-border/40 hover:shadow-md hover:border-primary/20 transition-all group"
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {issue.icon}
              </div>
              <h3 className="text-xl font-semibold text-secondary-foreground mb-3">
                {issue.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {issue.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
