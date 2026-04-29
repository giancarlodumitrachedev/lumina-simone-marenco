import Image from "next/image";
import { SmartLink } from "@/components/smart-link";
import { getDemoParams } from "@/lib/demo-params";

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
              Sono uno psicologo e psicoterapeuta psicoanalitico. Svolgo l&apos;attività professionale e clinica dal 2011.
            </p>
            <p className="mb-4">
              In questi anni, dopo aver conseguito la specializzazione in psicoterapia, ho continuato ininterrottamente la mia formazione per approfondire e ampliare le aree cliniche di mia competenza. Credo fermamente nell&apos;importanza dell&apos;aggiornamento continuo per poter offrire ai miei pazienti il supporto più efficace possibile.
            </p>
            <p className="mb-8">
              Mi occupo di svariate dinamiche cliniche: dai disturbi d&apos;ansia a quelli dell&apos;umore, supportando le persone attraverso le problematiche di coppia, le questioni relazionali legate al ciclo di vita, lo stress lavoro correlato (burnout), la genitorialità, le problematiche adolescenziali, fino ai disturbi dell&apos;apprendimento e dell&apos;alimentazione.
            </p>
            
            <SmartLink
              href="/contatti"
              className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md text-lg font-medium transition-all shadow-md no-underline"
            >
              Richiedi una consulenza
            </SmartLink>
          </div>
        </div>
      </div>
    </div>
  );
}
