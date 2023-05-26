import * as React from "react";
import { CopyableImplementation } from "@bgroup/ui/copyable-implementation";
import { Result } from "./result";
import { implementation } from "./implementation";
export /*bundle*/
function View() {
  return (
    <div className="view">
      <div className="component-info">
        <h3>Import:</h3>
        <CopyableImplementation>{`import { SwiperSlider } from "@bgroup/ui/swiper-component"`}</CopyableImplementation>
      </div>
      <div className="component-implementation">
        <div className="component-info">
          <h3>Implementation:</h3>
          <CopyableImplementation>{implementation}</CopyableImplementation>
        </div>
        <div className="component-result">
          <h3>Result:</h3>
          <Result />
        </div>
      </div>
    </div>
  );
}
