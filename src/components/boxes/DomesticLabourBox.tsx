import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";

function DomesticLabor() {
    return (
        <section className="space-y-6 p-6 bg-gray-50 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800">
                The Burden of Domestic Labor and the Promise of AI Powered Robotics
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
                {/* Section 1 */}
                <AccordionItem value="vision">
                    <AccordionTrigger className="text-lg font-semibold text-gray-800">
                        Vision of AI in Domestic Labor
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed">
                        The vision of human-like robots assisting with daily tasks has long
                        captivated the public imagination, driven by a desire to reduce the
                        burdens of domestic labor. Recent strides in robotics and AI have
                        brought us closer to this vision, enabling machines capable of more
                        complex interactions and task management (Jain, 2024). However,
                        despite these technological advancements, domestic labor remains a
                        significant and gendered challenge worldwide, with women
                        disproportionately bearing the brunt of responsibilities,
                        particularly in areas like elder care and meal preparation.
                    </AccordionContent>
                </AccordionItem>

                {/* Section 2 */}
                <AccordionItem value="implications">
                    <AccordionTrigger className="text-lg font-semibold text-gray-800">
                        Implications of Domestic Labor
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed">
                        The implications of this burden are profound, impacting not only
                        women's economic and social opportunities but also the overall
                        quality of life for those requiring care. The potential for
                        AI-powered domestic robots to provide assistance and alleviate this
                        burden is promising. These intelligent machines, which range from
                        robotic cleaners and automated food preparation devices to
                        conversational AI for elderly companionship, represent a new
                        frontier in labor-saving technology (Robotics, 2024; Wikipedia,
                        2024). As research and development continue, there is hope that
                        these technologies will be both accessible and transformative,
                        offering meaningful support and relief from the demands of domestic
                        labor (Jain, 2024).
                    </AccordionContent>
                </AccordionItem>

                {/* Section 3 */}
                <AccordionItem value="robotic-solutions">
                    <AccordionTrigger className="text-lg font-semibold text-gray-800">
                        Robotic Solutions for Domestic Labor
                    </AccordionTrigger>
                    <AccordionContent>
                        <p className="text-gray-600 leading-relaxed">
                            AI-powered robots offer a range of solutions that can help
                            address the challenges of domestic labor, making daily tasks more
                            manageable and lessening the burden on individuals, especially
                            women and caregivers.
                        </p>
                        <ul className="list-disc pl-6 text-gray-600 space-y-2">
                            <li>
                                <strong className="text-gray-800">Robotic Cleaners:</strong>{" "}
                                Devices like robotic vacuum cleaners and floor washers can take
                                care of everyday cleaning tasks, freeing up time for more
                                meaningful activities.
                            </li>
                            <li>
                                <strong className="text-gray-800">
                                    Automated Food Preparation:
                                </strong>{" "}
                                Robots like robotic chefs and smart kitchen assistants can
                                assist with meal preparation, streamlining cooking processes
                                and improving efficiency.
                            </li>
                            <li>
                                <strong className="text-gray-800">Companion Robots:</strong>{" "}
                                AI-driven companions for the elderly provide companionship,
                                help with monitoring health, and assist in managing daily
                                routines, making life easier for both the elderly and
                                caregivers.
                            </li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>

                {/* Section 4 */}
                <AccordionItem value="looking-ahead">
                    <AccordionTrigger className="text-lg font-semibold text-gray-800">
                        Looking Ahead
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed">
                        As we look to the future, the hope is that AI and robotics will not
                        only alleviate the burdens of domestic labor but also empower
                        individuals, particularly women, by reducing the time spent on
                        routine tasks and enhancing opportunities for economic and social
                        advancement. By creating robots that are accessible, intuitive, and
                        effective, we can take significant steps toward transforming the way
                        we think about work, caregiving, and household responsibilities.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </section>
    );
}

export default DomesticLabor;
