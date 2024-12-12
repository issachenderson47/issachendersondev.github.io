import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div>
      <Typewriter
        options={{
          strings: [
            "Infrastructure",
            "DevOps",
            "AI-Agents",
            "Security-First",
            "Information Security",
            "Multi-Cloud",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
      <div style={{ height: "20px" }} /> {/* Spacer */}
    </div>
  );
}

export default Type;