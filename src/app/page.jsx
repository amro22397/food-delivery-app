import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
    
    <Hero />
    <HomeMenu />
    <section className="text-center my-16">
      <SectionHeaders 
      subHeader={'Our story'}
      mainHeader={'About us'}
      />
      <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col
      gap-4">
        <p className="">
          Lorem ipsum dolor sit amet, ipsum dolor sit amet
          ipsum dolor sit amet ipsum dolor sit amet
          ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet
          ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet.
        </p>
        <p className="max-w-2xl mx-auto mt-4">
          Lorem ipsum dolor sit amet, ipsum dolor sit amet
          ipsum dolor sit amet ipsum dolor sit amet
          ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet
          ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet.
        </p>
      </div>
      </section>   
      <section className="text-center my-4">
        <SectionHeaders 
        subHeader={"Don't hesitate"}
        mainHeader={'Contact Us'}
        />
        <div className="mt-8">
          <a href="tel:+96879335801" className="text-4xl">
            +968 79335801
          </a>
        </div>
      </section>
      
    </>
  );
}
