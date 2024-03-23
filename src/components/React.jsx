import React from 'react'
import { CopyBlock } from 'react-code-blocks';
import { FaCopy } from 'react-icons/fa';
import copy from 'copy-to-clipboard';
const Reactc = () => {
  const install ='npx create-react-app appname'
  const code = `import React from 'react';
  import ReactDOM from 'react-dom/client';
  
  function Hello(props) {
    return <h1>Hello World!</h1>;
  }
  
  const container = document.getElementById("root");
  const root = ReactDOM.createRoot(container);
  root.render(<Hello />);`; 
const language = 'javascript';
  return (
    <div>
    <center><h1>React js Tutorial</h1></center>
    <h6>To get started install react by clicking below link</h6>
    <CopyBlock
  text={install}
  language={language}
  showLineNumbers={true}
  wrapLines={true}
  theme='dracula'
  codeBlock
  icon={<FaCopy />}
  onCopy={() => copy(code)}
/>
      <CopyBlock
  text={code}
  language={language}
  showLineNumbers={true}
  wrapLines={true}
  theme='dracula'
  codeBlock
  icon={<FaCopy />}
  onCopy={() => copy(code)}
/>
    </div>
  )
}

export default Reactc;