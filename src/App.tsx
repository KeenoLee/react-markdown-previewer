import React, { useState } from "react";
import Header from "./components/Header";
import MarkdownGuide from "./components/MarkdownGuide";
import MarkdownInput from "./components/MarkdownInput";
import MarkdownOutput from "./components/MarkdownOutput";

const App: React.FC = () => {
  const [markdown, setMarkdown] = useState("# Hello World");
  const [showGuide, setShowGuide] = useState(false);

  const handleToggleGuide = () => {
    setShowGuide(!showGuide);
  };

  return (
    <div>
      <Header onToggleGuide={handleToggleGuide} />
      {showGuide && <MarkdownGuide />}
      <MarkdownInput value={markdown} onChange={setMarkdown} />
      <MarkdownOutput markdown={markdown} />
    </div>
  );
};

export default App;
