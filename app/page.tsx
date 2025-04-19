import Photo from "@/components/client/ui/Photo";
import Socials from "@/components/client/ui/Socials";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full p-4 xl:p-0">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        <div className="order-2 xl:order-1 xl:flex-grow">
          <div className="text-center xl:text-center">
            <span className="text-xl">Desenvolvedor Full Stack</span>
            <h1 className="h1 mb-6 text-accent">Caio Lucas Silveira</h1>
            <div className="flex justify-center">
              <p className="max-w-[600px] mb-9 text-xl text-white/80 text-center">
                Profissional com experiência em desenvolvimento de software, com
                conhecimento em PHP, JavaScript, TypeScript, Java, Python, SQL,
                MongoDB e etc. Possui sólidos conhecimentos em bancos de dados
                relacionais e não relacionais, estrutura de dados e API RESTful.
              </p>
            </div>
            <div className="flex flex-col xl:flex-row items-center gap-8 xl:justify-center">
              <Link href="assets/CV-2025.pdf" download target="_blank">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  Download CV
                  <FiDownload className="text-cl" />
                </Button>
              </Link>
              <div className="mb-8 xl:mb-0">
                <Socials />
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 xl:order-2 my-4 xl:my-0 xl:flex-grow-[1.2]">
          <Photo />
        </div>
      </div>
    </section>
  );
}
