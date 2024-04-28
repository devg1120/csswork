<nav class="uk-navbar-container">
         <div class="uk-container uk-container-expand">
             <div uk-navbar>
                 <div class="uk-navbar-left">
                     <a class="uk-navbar-item uk-logo" href="#">Logo</a>
                     <ul class="uk-navbar-nav">
                         <li class="uk-active"><a href="#">Active</a></li>
                         <li>
                             <a href="#">Parent</a>
                             <div class="uk-navbar-dropdown">
                                 <ul class="uk-nav uk-navbar-dropdown-nav">
                                     <li class="uk-active"><a href="#">Active</a></li>
                                     <li class="uk-parent">
                                         <a href="#">Parent</a>
                                         <ul class="uk-nav-sub">
                                             <li><a href="#">Sub item</a></li>
                                             <li><a href="#">Sub item</a></li>
                                         </ul>
                                     </li>
                                     <li class="uk-nav-header">Header</li>
                                     <li><a href="#"><span class="uk-margin-small-right" uk-icon="icon: table"></span> Item</a></li>
                                     <li><a href="#"><span class="uk-margin-small-right" uk-icon="icon: thumbnails"></span> Item</a></li>
                                     <li class="uk-nav-divider"></li>
                                     <li><a href="#"><span class="uk-margin-small-right" uk-icon="icon: trash"></span> Item</a></li>
                                 </ul>
                             </div>
                         </li>
                         <li><a href="#">Item</a></li>
                         <li><a href="#">Item</a></li>
                     </ul>
                     <div class="uk-navbar-item">
                         <div>Some <a href="#">Link</a></div>
                     </div>
                     <div class="uk-navbar-item">
                         <form action="javascript:void(0)">
                             <input class="uk-input uk-form-width-small" type="text" placeholder="Input" aria-label="Input">
                             <button class="uk-button uk-button-default">Button</button>
                             <button class="uk-button uk-button-default" uk-toggle="target: #sidebar" type="button">Toggle</button>
                             <button class="uk-button uk-button-default" uk-toggle="target: #r-sidebar" type="button">Toggle</button>
     			<!--
                             <button class="uk-button uk-button-default" uk-toggle="target: #x-spreadsheet-demo" type="button">Toggle</button>
			     -->
                             <button class="uk-button uk-button-default" uk-toggle="target: #graph" type="button">Toggle</button>
     			
                         </form>
                     </div>
                 </div>
                 <div class="uk-navbar-right">
                     <ul class="uk-navbar-nav">
                         <li class="uk-active"><a href="#">Active</a></li>
                         <li>
                             <a href="#">Parent</a>
                             <div class="uk-navbar-dropdown">
                                 <ul class="uk-nav uk-navbar-dropdown-nav">
                                     <li class="uk-active"><a href="#">Active</a></li>
                                     <li class="uk-parent">
                                         <a href="#">Parent</a>
                                         <ul class="uk-nav-sub">
                                             <li><a href="#">Sub item</a></li>
                                             <li><a href="#">Sub item</a></li>
                                         </ul>
                                     </li>
                                     <li class="uk-nav-header">Header</li>
                                     <li><a href="#"><span class="uk-margin-small-right" uk-icon="icon: table"></span> Item</a></li>
                                     <li><a href="#"><span class="uk-margin-small-right" uk-icon="icon: thumbnails"></span> Item</a></li>
                                     <li class="uk-nav-divider"></li>
                                     <li><a href="#"><span class="uk-margin-small-right" uk-icon="icon: trash"></span> Item</a></li>
                                 </ul>
                             </div>
                         </li>
                         <li><a href="#">Item</a></li>
                     </ul>
                     <a class="uk-navbar-toggle uk-navbar-toggle-animate" href uk-navbar-toggle-icon></a>
                     <div class="uk-navbar-dropdown" uk-drop="mode: click; cls-drop: uk-navbar-dropdown; boundary: !.uk-navbar; stretch: x; flip: false">
                         <ul class="uk-nav uk-navbar-dropdown-nav">
                             <li class="uk-active"><a href="#">Active</a></li>
                             <li class="uk-parent">
                                 <a href="#">Parent</a>
                                 <ul class="uk-nav-sub">
                                     <li><a href="#">Sub item</a></li>
                                     <li><a href="#">Sub item</a></li>
                                 </ul>
                             </li>
                             <li class="uk-nav-header">Header</li>
                             <li><a href="#"><span class="uk-margin-small-right" uk-icon="icon: table"></span> Item</a></li>
                             <li><a href="#"><span class="uk-margin-small-right" uk-icon="icon: thumbnails"></span> Item</a></li>
                             <li class="uk-nav-divider"></li>
                             <li><a href="#"><span class="uk-margin-small-right" uk-icon="icon: trash"></span> Item</a></li>
                         </ul>
                     </div>
                 </div>
             </div>
         </div>
     </nav>

<style>
.uk-navbar-container,
.uk-navbar,
.uk-navbar-nav,
.uk-navbar-item, 
.uk-navbar-nav>li>a, 
.uk-navbar-toggle 
{
   min-height: 50px;
   color: #ffffff;
}

.uk-navbar-container:not(.uk-navbar-transparent) 
{
   /*background: #3399ff;*/
   background: #0080ff;
}

</style>
