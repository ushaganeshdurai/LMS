import React from 'react'
import { CopyBlock } from 'react-code-blocks';
import { FaCopy } from 'react-icons/fa';
import copy from 'copy-to-clipboard';
const Angular = () => {
  const code = `<!DOCTYPE html>
  <html lang="en-US">
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
  <body>
  
  <div ng-app="">
    <p>Name : <input type="text" ng-model="name"></p>
    <h1>Hello {{name}}</h1>
  </div>
  
  </body>
  </html>`; 
const language = 'javascript';
  return (
    <div>
    <center><h1>Angular js</h1></center>
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

export default Angular