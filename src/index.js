import React from "react";
import ReactDOM from "react-dom";
import ReactImageAnnotate from "react-image-annotate";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <ReactImageAnnotate
        selectedImage="http://via.placeholder.com/300.png/09f/fff%20C/O%20https://placeholder.com/"
        taskDescription="# Draw region around each face\n\nInclude chin and hair."
        images={[
          {
            src:
              "http://via.placeholder.com/300.png/09f/fff%20C/O%20https://placeholder.com/",
            name: "Image 1"
          }
        ]}
        regionClsList={["Man Face", "Woman Face"]}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
