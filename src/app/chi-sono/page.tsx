import Image from "next/image";
import { getDemoParams } from "@/lib/demo-params";
import { SmartLink } from "@/components/smart-link";

export const metadata = { title: "Chi Sono | Lumina Psicologo" };

export default async function ChiSonoPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await getDemoParams(searchParams);
  
  const imageUrl = params.isFemale 
    ? "/Assets/psychologist-portrait-f.webp"
    : "/Assets/psychologist-portrait-m.webp";

  return (
    <div className="py-24 bg-background min-h-[calc(100vh-140px)]">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-secondary-foreground font-heading text-4xl md:text-5xl font-semibold mb-8 text-center">
          Chi Sono
        </h1>
        <div className="flex flex-col md:flex-row gap-12 items-start mt-12 md:mt-16">
          <div className="w-full md:w-1/3 relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl shrink-0">
            <Image
              src={imageUrl}
              alt={`Ritratto di ${params.name}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
          <div className="w-full md:w-2/3 prose prose-lg prose-slate text-foreground/80">
            <h2 className="text-3xl font-medium text-primary mb-6">
              {params.name} <span className="text-foreground/50 font-normal">| {params.fieldDisplay}</span>
            </h2>
            <p className="mb-4">
              La mia passione per la psicologia nasce dal desiderio profondo di comprendere l'essere umano in tutte le sue sfaccettature. 
              Nel corso della mia carriera, ho affinato un approccio terapeutico che integra competenze cliniche rigorose con una reale 
              ed empatica presenza relazionale.
            </p>
            <p className="mb-4">
              Mi sono specializzato attraverso anni di studio e pratica clinica, sviluppando una solida esperienza nel trattamento 
              delle {params.fieldDisplay.toLowerCase()} e delle difficoltà emotive in generale. Il mio obiettivo principale è fornire uno spazio sicuro dove 
              i pazienti possano esplorare se stessi senza il timore di essere giudicati.
            </p>
            <p className="mb-8">
              Lavorando insieme, cercheremo non solo di alleviare il sintomo o il disagio immediato, ma di rintracciare le radici 
              profonde delle dinamiche interiori, promuovendo un cambiamento autentico e duraturo.
            </p>
            
            <SmartLink
              href="/contatti"
              className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md text-lg font-medium transition-all shadow-md mt-4 no-underline"
            >
              Prenota un primo colloquio
            </SmartLink>
          </div>
        </div>
      </div>
    </div>
  );
}
