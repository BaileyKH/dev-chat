import { cn } from "@/lib/utils";

import BoxReveal from "@/components/magicui/box-reveal";
import PulsatingButton from "@/components/magicui/pulsating-button.tsx";
import DotPattern from "@/components/magicui/dot-pattern";


export const Home = () => {

    return(
        <main>
            <section className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-background p-20 mt-6">
                <div className="w-1/2 flex justify-center items-center">
                    <div className="h-full w-full max-w-[32rem] items-center justify-center overflow-hidden pt-8">
                        <BoxReveal boxColor={"#7e00ff"} duration={1}>
                            <p className="text-[3.8rem] font-semibold">
                            DevChat<span className="text-primAccent">.</span>
                            </p>
                        </BoxReveal>
                    
                        <BoxReveal boxColor={"#7e00ff"} duration={1}>
                            <h2 className="mt-[.5rem] text-[1.3rem]">
                            Communication and Collaboration for{" "}
                            <span className="text-primAccent">Developers</span>
                            </h2>
                        </BoxReveal>
                    
                        <BoxReveal boxColor={"#7e00ff"} duration={1}>
                            <div className="mt-[1.5rem]">
                            <p>
                                -&gt; 20+ free and open-source animated components built with
                                <span className="font-semibold text-primAccent"> React</span>,
                                <span className="font-semibold text-primAccent"> Typescript</span>,
                                <span className="font-semibold text-primAccent"> Tailwind CSS</span>,
                                and
                                <span className="font-semibold text-primAccent"> Framer Motion</span>
                                . <br />
                                -&gt; 100% open-source, and customizable. <br />
                            </p>
                            </div>
                        </BoxReveal>
                    
                        <BoxReveal boxColor={"#7e00ff"} duration={1}>
                            <PulsatingButton 
                                className="mt-[1.6rem] bg-primAccent dark:bg-primAccent text-primLight dark:text-primLight mx-2 mb-2"
                                duration="3s"
                                pulseColor="#8000ff55"
                                >Get Started
                            </PulsatingButton>
                        </BoxReveal>
                    </div>
                </div>
                <div className="w-1/2"></div>
                <DotPattern
                    className={cn(
                    "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
                    )}
                    width={20}
                    height={20}
                    cx={1}
                    cy={1}
                    cr={1}
                />
            </section>
        </main>
    );
}