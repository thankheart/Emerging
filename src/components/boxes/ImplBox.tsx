const ImplBox = () => {
    return (
        <section className="space-y-6 p-6 bg-gray-50 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800">Task Execution</h2>
            <p className="text-gray-600 leading-relaxed">
                The humanoid robot uses machine learning and sensor technology to
                recognize, plan, and perform various domestic tasks. By leveraging
                facial and voice recognition, the robot personalizes its interactions,
                ensuring an intuitive and effective user experience.
            </p>

            <h3 className="text-xl font-semibold text-gray-800">Capabilities</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-3">
                <li>
                    <strong className="text-gray-800">Cleaning:</strong> Equipped with
                    vacuuming, mopping, and sweeping functions, the robot can
                    autonomously maintain clean floors, adjust to different surfaces, and
                    avoid obstacles.
                </li>
                <li>
                    <strong className="text-gray-800">Cooking Assistance:</strong> The
                    robot assists with meal preparation, from organizing ingredients to
                    providing recipe guidance, making cooking more accessible for users
                    with limited mobility.
                </li>
                <li>
                    <strong className="text-gray-800">Organizing:</strong> Utilizing
                    object detection, the robot can identify misplaced items and assist
                    in tidying up spaces, helping maintain an orderly household
                    environment.
                </li>
            </ul>
        </section>
    );
};

export default ImplBox;
