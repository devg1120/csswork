<script>

import 'uikit'
import 'uikit/dist/css/uikit.min.css'
import "flex-splitter-directive"
import "flex-splitter-directive/styles.min.css"

//import Spreadsheet from "x-data-spreadsheet";

import Nav from './lib/Nav.svelte'
import Counter from './lib/Counter.svelte'
import Card from './lib/Card.svelte'
import Video from './lib/Video.svelte'
import Panel from './lib/Panel.svelte'
import Table from './lib/Table.svelte'
import Grid from './lib/Grid.svelte'
import Param from './lib/Param.svelte'
import Select from './lib/Select.svelte'
import Tree from './lib/Tree.svelte'
//import Sheet from './lib/Sheet.svelte'
//import Graph from './lib/svelte-cytoscape-demo/src/App.svelte'
import Graph from './lib/Graph.svelte'
import Ngraph from './lib/network_cytoscape.svelte'

</script>

<main>
<Nav />
<div class="app">
    <div class="header">ヘッダー</div>
    <div data-flex-splitter-horizontal class="main">
        <div id="sidebar" class="sidebar">
            <ul uk-tab>
                <li class="uk-active"><a href="#">Left</a></li>
                <li><a href="#">Item</a></li>
                <li><a href="#">Item</a></li>
            </ul>
            <Counter />
        </div>
        <div role="separator" tabindex="1"></div>
        <div  data-flex-splitter-vertical class="content">

            <div class="flex-content">
                <ul uk-tab>
                    <li><a href="#">Card</a></li>
                    <li><a href="#">Video</a></li>
                    <li><a href="#">Item</a></li>
                    <li><a href="#">Item</a></li>
                    <li><a href="#">Item</a></li>
                    <li><a href="#">Item</a></li>
                    <li><a href="#">Item</a></li>
                </ul>
                <div class="uk-switcher uk-margin">
                    <Ngraph />
		    <Video />
		    <Panel />
		    <Table />
		    <Grid />
		    <Param />
		    <Select />
                </div>
            </div>
	   
           <div role="separator" tabindex="1"></div>
-
	      <Graph />

<!--
	      <Graph />
	    <div class="flexd-content">
	      <Ngraph />
	    </div>
-->

        </div>
        <div role="separator" tabindex="1"></div>
        <div id="r-sidebar" class="r-sidebar">
	   <Tree />
        </div>
    </div>
    <div class="footer">footer</div>
</div>
</main>

<style>

main {
  width: 100vw;
  height:100vh;
}
.app {
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
}

.header {
  height: 42px;
  background-color: lightcyan;
  box-sizing: border-box;
  border: 1px solid blue;
}

.footer {
  height: 42px;
  background-color: lightcyan;
  box-sizing: border-box;
  border: 1px solid #6600cc;
}
.main {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
}

.sidebar {
  width: 18%;
  /*width: 296px;*/
  background-color: moccasin;
  box-sizing: border-box;
  border: 1px solid chocolate;
}

.r-sidebar {
  width: 15%;
  /*width: 296px;*/
  background-color: moccasin;
  box-sizing: border-box;
  border: 1px solid yellow;
}
.content {
  width: 60%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.flex-content {
  flex-grow: 1;
  height:50%;
  /*background-color: palegoldenrod;*/
  box-sizing: border-box;
  border: 1px solid green;
}

.fixed-content { 
  height:48%;
  background-color: thistle;
  box-sizing: border-box;
  border: 1px solid darkmagenta;
}

</style>
