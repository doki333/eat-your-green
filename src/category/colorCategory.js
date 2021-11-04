import * as React from "react";

function ColorPanel() {
  return (
    <div className="color-Panel">
      <div>
        <span className="gys">●</span>
        <span>경양식</span>
      </div>
      <div>
        <span className="hs">●</span>
        <span>한식</span>
      </div>
      <div>
        <span className="cafe">●</span>
        <span>카페</span>
      </div>
      <div>
        <span className="etc">●</span>
        <span>기타</span>
      </div>
    </div>
  );
}

export default React.memo(ColorPanel);
