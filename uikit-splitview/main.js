/*
import './node_modules/uikit/dist/css/uikit.min.css'
import './node_modules/uikit/dist/js/uikit.min.js'
import "./flex-splitter-directive/index.js"
import "./flex-splitter-directive/styles.min.css"
*/

import 'uikit'
import 'uikit/dist/css/uikit.min.css'
import "flex-splitter-directive"
import "flex-splitter-directive/styles.min.css"

import Spreadsheet from "x-data-spreadsheet";

import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'


document.querySelector('#sidebar-content').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

const s = new Spreadsheet("#x-spreadsheet-demo")
