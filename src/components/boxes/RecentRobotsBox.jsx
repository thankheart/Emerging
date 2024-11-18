import React from "react";
import '../../App.css';

const RecentRobotsBox = () => {
  return (
    <div className="box-content">
<section>
      <h2>Recent Humanoid Robots</h2>
      <div className="robot-list">
        <div className="robot-item">
          <h3>Boston Dynamics Atlas</h3>
          <p>
            Atlas is a highly agile humanoid robot developed by Boston Dynamics.
            Known for its dynamic balancing and agility, it can perform a
            variety of complex movements like jumping, running, and even
            gymnastics.
          </p>
          <a
            href="https://www.bostondynamics.com/atlas"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more about Atlas
          </a>
        </div>

        <div className="robot-item">
          <h3>Tesla Optimus</h3>
          <p>
            Optimus is Tesla's humanoid robot prototype aimed at taking on
            general-purpose tasks in industries and homes. It's designed to
            handle repetitive tasks and is powered by Tesla’s AI systems.
          </p>
          <a
            href="https://www.tesla.com/en_ca/AI"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more about Optimus
          </a>
        </div>

        <div className="robot-item">
          <h3>Honda Asimo</h3>
          <p>
            Asimo, a groundbreaking robot from Honda, was one of the earliest
            humanoid robots to perform complex tasks autonomously. While now
            retired, it set standards in the industry.
          </p>
          <a
            href="https://global.honda/en/robotics/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more about Asimo
          </a>
        </div>
      </div>
    </section>
    </div>
  );
};

export default RecentRobotsBox;