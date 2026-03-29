import { HeroSection } from "@/components/home/hero";
import { AboutSection } from "@/components/home/about";
import { StudioSection } from "@/components/home/studio";
import { LocationSection } from "@/components/home/location";
import { getDemoParams } from "@/lib/demo-params";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function HomePage(props: Props) {
  const params = await getDemoParams(props.searchParams);

  return (
    <div className="flex flex-col w-full h-full">
      <HeroSection field={params.field} />
      <AboutSection 
        name={params.name} 
        fieldDisplay={params.fieldDisplay} 
        isFemale={params.isFemale} 
        prefix={params.prefix}
      />
      <StudioSection />
      <LocationSection city={params.city} address={params.address} />
    </div>
  );
}
