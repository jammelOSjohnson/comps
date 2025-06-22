import React from "react";
import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button success rounded primary>
          Click Here
        </Button>
      </div>
      <div>
        <Button danger outline>
          Click Here
        </Button>
      </div>
      <div>
        <Button warning>Click Here</Button>
      </div>
      <div>
        <Button secondary outline>
          Click Here
        </Button>
      </div>
    </div>
  );
}

export default App;
