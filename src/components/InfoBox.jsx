import React, {useState} from "react"
import '../App.css';

function InfoBox({ title, children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className={`info-box ${isExpanded ? 'active' : ''}`} onClick={toggleExpand}>
      {isExpanded ? (
        <div className="info-details">
          <h2>{title}</h2>
          <div className="info-content">{children}</div>
          <button onClick={(e) => { e.stopPropagation(); setIsExpanded(false); }}>Close</button>
        </div>
      ) : (
        <div className="info-summary">
          <h3>{title}</h3>
          <p>Click to see more details...</p>
        </div>
      )}
    </div>
  );
}

export default InfoBox;
