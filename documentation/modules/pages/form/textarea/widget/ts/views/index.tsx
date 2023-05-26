import * as React from "react";
import { CopyableImplementation } from "@bgroup/ui/copyable-implementation";
import { Results } from "./results";
import { implementation } from "./implementation";

export /*bundle*/
function View() {
  return (
    <div className="view">
      <div className="component-info">
        <h3>Import:</h3>
        <CopyableImplementation>{`import { Textarea } from '@bgroup/ui/form';`}</CopyableImplementation>
      </div>
      <div className="component-implementation">
        <div className="component-info">
          <h3>Implementation: </h3>
          <CopyableImplementation>{implementation}</CopyableImplementation>
        </div>

        <div className="component-result">
          <h3>Result:</h3>
          <Results />
        </div>
      </div>
    </div>
  );
}
