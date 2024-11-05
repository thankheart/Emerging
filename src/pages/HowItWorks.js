// src/pages/HowItWorks.js
import React from "react";

function HowItWorks() {
  return (
    <section>
      <h2>Task Execution</h2>
      <p>
        The humanoid robot uses machine learning and sensor technology to
        recognize, plan, and perform various domestic tasks. By leveraging
        facial and voice recognition, the robot personalizes its interactions,
        ensuring an intuitive and effective user experience.
      </p>
      <h3>Capabilities</h3>
      <ul>
        <li>
          <strong>Cleaning:</strong> Equipped with vacuuming, mopping, and
          sweeping functions, the robot can autonomously maintain clean floors,
          adjust to different surfaces, and avoid obstacles.
        </li>
        <li>
          <strong>Cooking Assistance:</strong> The robot assists with meal
          preparation, from organizing ingredients to providing recipe guidance,
          making cooking more accessible for users with limited mobility.
        </li>
        <li>
          <strong>Organizing:</strong> Utilizing object detection, the robot can
          identify misplaced items and assist in tidying up spaces, helping
          maintain an orderly household environment.
        </li>
      </ul>
    </section>
  );
}

export default HowItWorks;
