import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";

const RisksBox = () => {
    return (
        <section className="p-6 bg-gray-50 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Ensuring Privacy and Safety
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-4">
                    {/* Data Privacy Protocols */}
                    <Accordion type="single" collapsible>
                        <AccordionItem value="data-privacy">
                            <AccordionTrigger className="text-lg font-semibold text-gray-800">
                                Data Privacy Protocols
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600">
                                Data collected is anonymized and encrypted, ensuring the
                                confidentiality and security of all user information. Users
                                have full control over data collection settings, including
                                options to limit or disable certain features.
                            </AccordionContent>
                        </AccordionItem>

                        {/* Physical Safety Features */}
                        <AccordionItem value="physical-safety">
                            <AccordionTrigger className="text-lg font-semibold text-gray-800">
                                Physical Safety Features
                            </AccordionTrigger>
                            <AccordionContent>
                                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                                    <li>
                                        <strong className="text-gray-800">Obstacle Detection:</strong> Advanced sensors ensure smooth navigation, avoiding obstacles like furniture or pets.
                                    </li>
                                    <li>
                                        <strong className="text-gray-800">Emergency Shut-off:</strong> Robots can be deactivated instantly with voice commands or a manual button.
                                    </li>
                                    <li>
                                        <strong className="text-gray-800">Audible and Visual Alerts:</strong> Alerts notify users of unusual activity, and emergency contacts are notified for elderly users.
                                    </li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>

                        {/* Challenges in Integration */}
                        <AccordionItem value="challenges">
                            <AccordionTrigger className="text-lg font-semibold text-gray-800">
                                Challenges in Integration
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="text-gray-600">
                                    The integration of robotics and AI in domestic labor offers
                                    many benefits but also raises challenges like technical
                                    limitations, ethical concerns, and social implications.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                    {/* Gender Inequality */}
                    <Accordion type="single" collapsible>
                        <AccordionItem value="gender-inequality">
                            <AccordionTrigger className="text-lg font-semibold text-gray-800">
                                Gender Inequality
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="text-gray-600">
                                    Robotics should be positioned as tools for shared household
                                    use to avoid perpetuating gender stereotypes.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                        {/* Acceptance Among the Elderly */}
                        <AccordionItem value="elderly-acceptance">
                            <AccordionTrigger className="text-lg font-semibold text-gray-800">
                                Acceptance Among the Elderly
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="text-gray-600">
                                    Robots should be designed with features that enhance ease of
                                    use and meet the specific needs of elderly users.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                        {/* Data Privacy and Security */}
                        <AccordionItem value="privacy-security">
                            <AccordionTrigger className="text-lg font-semibold text-gray-800">
                                Data Privacy and Security
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="text-gray-600">
                                    Robots must comply with regulations like GDPR and implement
                                    robust encryption and anonymization to safeguard sensitive
                                    data.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                        {/* Job Displacement */}
                        <AccordionItem value="job-displacement">
                            <AccordionTrigger className="text-lg font-semibold text-gray-800">
                                Job Displacement and Economic Impact
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="text-gray-600">
                                    Domestic robotics could lead to job displacement in some
                                    sectors, but it can also create opportunities in AI and
                                    robotics development.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default RisksBox;
