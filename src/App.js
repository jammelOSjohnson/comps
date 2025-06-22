import React from "react";
import Button from "./Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

function App() {
  return (
    <div>
      <div>
        <Button success rounded outline>
          <GoBell />
          Click Here
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoCloudDownload />
          Click Here
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          Click Here
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Click Here
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Click Here
        </Button>
      </div>
    </div>
  );
}

export default App;
