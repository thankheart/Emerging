import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";

function FutureBox() {
    return (
        <section className="space-y-6 p-6 bg-gray-50 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800">
                Future of Household Automation
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
                {/* Section 1 */}
                <AccordionItem value="future-impact">
                    <AccordionTrigger className="text-lg font-semibold text-gray-800">
                        Future Impact of Automation
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed">
                        Looking toward the future, household automation is anticipated to
                        make a significant impact on daily life, with an estimated 40% of
                        chores potentially automated in the next decade (MIT Sloan, 2024).
                        This rapid growth in task automation is driven by advancements in AI
                        and robotics, enabling robots to handle increasingly complex
                        household tasks. Future household robots equipped with language
                        models (LXMs) could adapt to specific user preferences, refining
                        their actions based on real-time feedback. This level of
                        customization not only aims to reduce the time individuals spend on
                        chores but also enhances quality of life, especially for aging
                        populations and individuals with physical limitations.
                    </AccordionContent>
                </AccordionItem>

                {/* Section 2 */}
                <AccordionItem value="leading-companies">
                    <AccordionTrigger className="text-lg font-semibold text-gray-800">
                        Leading Companies in Automation
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed">
                        Companies like Dyson and Sanctuary AI are at the forefront of these
                        developments, investing in robotic models that expand beyond basic
                        cleaning functions. Dyson’s upcoming line of household robots, for
                        example, is designed to perform tasks like plant watering and food
                        preparation, moving closer to achieving full autonomy in domestic
                        settings (BBC, 2023; Dyson, 2022). Future advancements could include
                        fully autonomous cooking, comprehensive home monitoring, and
                        precision cleaning, shifting domestic environments toward user
                        convenience and support.
                    </AccordionContent>
                </AccordionItem>

                {/* Section 3 */}
                <AccordionItem value="current-capabilities">
                    <AccordionTrigger className="text-lg font-semibold text-gray-800">
                        Current Capabilities
                    </AccordionTrigger>
                    <AccordionContent>
                        <p className="text-gray-600 leading-relaxed">
                            Today’s humanoid robots already offer functionalities that assist
                            with everyday tasks:
                        </p>
                        <ul className="list-disc pl-6 text-gray-600 space-y-2">
                            <li>
                                <strong className="text-gray-800">Cleaning:</strong> Equipped
                                with vacuuming, mopping, and sweeping functions, these robots
                                autonomously maintain clean floors, adjust to different
                                surfaces, and avoid obstacles.
                            </li>
                            <li>
                                <strong className="text-gray-800">Cooking Assistance:</strong>{" "}
                                Robots assist with meal preparation, organizing ingredients, and
                                providing recipe guidance, making cooking more accessible for
                                users with limited mobility.
                            </li>
                            <li>
                                <strong className="text-gray-800">Organizing:</strong> Utilizing
                                object detection, robots can identify misplaced items and assist
                                in tidying up spaces, maintaining an orderly household.
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
                        As robotic technology continues to advance, further breakthroughs in
                        AI-driven automation will make household tasks easier, faster, and
                        more personalized. From fully autonomous kitchens to AI-powered home
                        monitoring systems, the future holds the promise of a new era in
                        domestic convenience and independence, particularly for aging
                        populations and individuals with physical disabilities.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </section>
    );
}

export default FutureBox;
