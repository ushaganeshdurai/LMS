import React from 'react'
import { CopyBlock } from 'react-code-blocks';
import { FaCopy } from 'react-icons/fa';
import copy from 'copy-to-clipboard';
const Node = () => {
  const code = `const http = require('http');
  http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  }).listen(8080, () => {
    console.log('Server listening on port 8080');
  });`; 
const language = 'javascript';
  return (
    <div>
    <center><h1>Node js http module</h1></center>
    <h6>To get started install npm by clicking below link</h6>
    <a style={{textDecoration:'none'}} href='https://nodejs.org/en/download' >Node download</a>
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

export default Node