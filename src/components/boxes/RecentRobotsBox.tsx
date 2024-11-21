const RecentRobotsBox = () => {
    return (
        <div className="space-y-6">
            <section>
                <h2 className="text-xl font-bold text-gray-800">Recent Humanoid Robots</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="p-4 border rounded-lg shadow-md bg-gray-50">
                        <h3 className="text-lg font-semibold text-gray-800">TidyBot</h3>
                        <p className="text-gray-600">
                            TidyBot is a domestic robot designed to assist with household
                            chores. Created specifically for home environments, it can pick up
                            objects, organize spaces, and maintain cleanliness, making it a
                            valuable helper in reducing household workload.
                        </p>
                        <a
                            href="https://tidybot.cs.princeton.edu/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline mt-2 inline-block"
                        >
                            Learn more about Tidy Bot
                        </a>
                    </div>
                    
                    <div className="p-4 border rounded-lg shadow-md bg-gray-50">
                        <h3 className="text-lg font-semibold text-gray-800">Google Aloha</h3>
                        <p className="text-gray-600">
                                        Google’s Aloha is an experimental humanoid robot designed for
                            interactive assistance. With advanced AI-driven language
                            capabilities, Aloha is developed to understand and respond to
                            complex human instructions, potentially assisting in both domestic
                            and workspace settings.
                        </p>
                        <a
                            href="https://mobile-aloha.github.io/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline mt-2 inline-block"
                        >
                            Learn more about Asimo
                        </a>
                    </div>

                    <div className="p-4 border rounded-lg shadow-md bg-gray-50">
                        <h3 className="text-lg font-semibold text-gray-800">Boston Dynamics Atlas</h3>
                        <p className="text-gray-600">
                            Atlas is a highly agile humanoid robot developed by Boston Dynamics. Known for its dynamic
                            balancing and agility, it can perform a variety of complex movements like jumping, running,
                            and even gymnastics.
                        </p>
                        <a
                            href="https://www.bostondynamics.com/atlas"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline mt-2 inline-block"
                        >
                            Learn more about Atlas
                        </a>
                    </div>

                    <div className="p-4 border rounded-lg shadow-md bg-gray-50">
                        <h3 className="text-lg font-semibold text-gray-800">Tesla Optimus</h3>
                        <p className="text-gray-600">
                            Optimus is Tesla's humanoid robot prototype aimed at taking on general-purpose tasks in
                            industries and homes. It's designed to handle repetitive tasks and is powered by Tesla’s AI
                            systems.
                        </p>
                        <a
                            href="https://www.youtube.com/watch?v=1t1KMXSBrBM"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline mt-2 inline-block"
                        >
                            Learn more about Optimus
                        </a>
                    </div>

                    

                    
                </div>
            </section>
        </div>
    );
};

export default RecentRobotsBox;
