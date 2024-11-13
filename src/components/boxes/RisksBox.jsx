import React from "react";
import '../../App.css';

const RisksBox = () => {
  return (
    <div className="box-content">
      <section>
      <h2>Ensuring Privacy and Safety</h2>
      <p>
        Our robots prioritize user privacy and safety with multiple safeguards
        in place, such as encrypted data storage, motion detection to avoid
        collisions, and user-friendly privacy controls.
      </p>
      <h3>Data Privacy Protocols</h3>
      <p>
        Data collected is anonymized and encrypted, ensuring the confidentiality
        and security of all user information. Users have full control over data
        collection settings, including options to limit or disable certain
        features.
      </p>
      <h3>Physical Safety Features</h3>
      <ul>
        <li>
          <strong>Obstacle Detection:</strong> Equipped with advanced sensors,
          the robot avoids furniture, pets, and users to ensure smooth and safe
          navigation.
        </li>
        <li>
          <strong>Emergency Shut-off:</strong> The robot can be deactivated with
          voice commands or a manual button, allowing for immediate
          disengagement.
        </li>
        <li>
          <strong>Audible and Visual Alerts:</strong> Alerts are issued for any
          unusual activity, and emergency contact notifications are available
          for elderly users.
        </li>
      </ul>
    </section>
    </div>
  );
};

export default RisksBox;