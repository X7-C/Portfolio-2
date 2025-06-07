import React from "react";
import "./BackgroundTeeth.css";

const BackgroundTeeth = () => {
  const teethCount = 40;
  const spacing = 100;

  return (
    <div className="background-teeth">
      <div className="teeth-column left-teeth">
        {Array.from({ length: teethCount }).map((_, i) => (
          <React.Fragment key={`left-${i}`}>
            <div 
              className="tooth tooth-left-up"
              style={{ 
                top: `${i * spacing}px`,
                animationDelay: `${i * 0.1}s`
              }}
            />
            <div 
              className="tooth tooth-left-down"
              style={{ 
                top: `${i * spacing + spacing/2}px`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          </React.Fragment>
        ))}
      </div>
      
      <div className="teeth-column right-teeth">
        {Array.from({ length: teethCount }).map((_, i) => (
          <React.Fragment key={`right-${i}`}>
            <div 
              className="tooth tooth-right-up"
              style={{ 
                top: `${i * spacing}px`,
                animationDelay: `${i * 0.1}s`
              }}
            />
            <div 
              className="tooth tooth-right-down"
              style={{ 
                top: `${i * spacing + spacing/2}px`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default BackgroundTeeth;