import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";

const BenefitsBox = () => {
    return (
        <section className="space-y-6 p-6 bg-gray-50 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800">
                Why Humanoid Robots for Domestic Assistance?
            </h2>
            <p className="text-gray-600">
                Humanoid robots offer convenience and support for daily household
                management, especially for elderly individuals and primary caregivers.
                By automating essential tasks, users can enjoy more freedom and reduced
                physical strain.
            </p>

            <Accordion type="single" collapsible className="space-y-4">
                {/* Benefits Section */}
                <AccordionItem value="benefits">
                    <AccordionTrigger className="text-lg font-semibold text-gray-800">
                        Benefits of Humanoid Robots
                    </AccordionTrigger>
                    <AccordionContent>
                        <ul className="list-disc pl-5 text-gray-600 space-y-2">
                            <li>
                                <strong className="text-gray-800">Time Savings and Convenience:</strong> By automating repetitive tasks like cleaning, cooking, and laundry, humanoid robots can save households hours each day. This allows individuals more time for work, leisure, and personal pursuits, enhancing overall quality of life.
                            </li>
                            <li>
                                <strong className="text-gray-800">Increased Gender Equality:</strong>{" "}
                                Domestic responsibilities have traditionally fallen disproportionately on women. By delegating routine tasks to robots, women have more opportunities to participate fully in the workforce, leading to a more balanced division of responsibilities.
                            </li>
                            <li>
                                <strong className="text-gray-800">Economic Productivity:</strong> By reducing the time spent on unpaid housework, AI robots could enable more people, particularly women, to engage in paid work, driving substantial economic gains.
                            </li>
                            <li>
                                <strong className="text-gray-800">Reduced Workload:</strong> Automating routine tasks allows caregivers and elderly users to spend more time on meaningful activities.
                            </li>
                            <li>
                                <strong className="text-gray-800">Enhanced Safety:</strong>{" "}
                                <Popover>
                                    <PopoverTrigger className="text-blue-500 underline cursor-pointer">
                                        Robots can be programmed to follow safety protocols
                                    </PopoverTrigger>
                                    <PopoverContent className="p-4 bg-white rounded-lg shadow-lg text-gray-800">
                                        Robots are designed to detect hazards and respond proactively, minimizing accidents in households.
                                    </PopoverContent>
                                </Popover>
                                , minimizing accidents and assisting users in emergency scenarios.
                            </li>
                            <li>
                                <strong className="text-gray-800">Better Quality of Life:</strong> By handling strenuous tasks, robots support mental and physical well-being.
                            </li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>

                {/* User Testimonials Section */}
                <AccordionItem value="testimonials">
                    <AccordionTrigger className="text-lg font-semibold text-gray-800">
                        Support for Improved Elderly's Quality of Life
                    </AccordionTrigger>
                    <AccordionContent>
                        <ul className="list-disc pl-5 text-gray-600 space-y-2">
                            <li>
                                <strong>Reduced Physical Strain and Risk of Injury:</strong> Household
                                chores like vacuuming, mopping, and tidying up often require bending,
                                lifting, and repetitive movements that can be physically taxing. AI
                                robots can take over these tasks, reducing the risk of injury, which
                                is crucial for individuals with limited strength or mobility.
                            </li>
                            <li>
                                <strong>Enhanced Daily Hygiene and Comfort:</strong> A clean,
                                organized living space significantly contributes to physical and
                                mental well-being. Robots can maintain cleanliness by routinely
                                vacuuming, dusting, and sanitizing surfaces, helping to reduce
                                allergens and bacteria in the home. This is especially beneficial for
                                individuals who may find cleaning difficult.
                            </li>
                            <li>
                                <strong>
                                    Greater Independence and Reduced Reliance on Caregivers:
                                </strong>
                                With robots handling household upkeep, elderly or disabled individuals
                                can maintain their independence longer, reducing the need for
                                full-time caregiving support solely for cleaning purposes.
                            </li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </section>
    );
};

export default BenefitsBox;
