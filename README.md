# d3plus-tooltip

[![NPM Release](http://img.shields.io/npm/v/d3plus-tooltip.svg?style=flat-square)](https://www.npmjs.org/package/d3plus-tooltip)
[![Build Status](https://travis-ci.org/d3plus/d3plus-tooltip.svg?branch=master)](https://travis-ci.org/d3plus/d3plus-tooltip)
[![Dependency Status](http://img.shields.io/david/d3plus/d3plus-tooltip.svg?style=flat-square)](https://david-dm.org/d3plus/d3plus-tooltip)

A javascript-only tooltip.

## Installing

If you use NPM, `npm install d3plus-tooltip`. Otherwise, download the [latest release](https://github.com/d3plus/d3plus-tooltip/releases/latest). The released bundle supports AMD, CommonJS, and vanilla environments. Create a [custom bundle using Rollup](https://github.com/rollup/rollup) or your preferred bundler. You can also load directly from [d3plus.org](https://d3plus.org):

```html
<script src="https://d3plus.org/js/d3plus-tooltip.v0.1.full.min.js"></script>
```

[width]: 205
[height]: 135

## Getting Started

This module gives the ability to create tooltips in Javascript with no CSS required. It takes an array of [data](https://github.com/d3plus/d3plus-tooltip#tooltip.data) just like most other [D3plus modules](https://github.com/d3plus), and creates a tooltip for each data point.

In this example, and in most use cases, only 1 tooltip is created.

```js
var data = [
  {"title": "D3plus Tooltip", "body": "Check out this cool table:", "x": 100, "y": 120, "label": "Position"}
];

d3plus.tooltip()
  .data(data)
  .thead(["Axis", function(d) { return d.label; }])
  .tbody([
    ["x", function(d) { return d.x; }],
    ["y", function(d) { return d.y; }]
  ])
  ();
```

*Please note the `()` at the end of the chain of commands. This is what tells the [tooltip](https://github.com/d3plus/d3plus-tooltip#tooltip) to finally render to the page, and allows setting multiple properties without it trying to render after each one is set.*


[Click here](https://d3plus.org/examples/d3plus-tooltip/getting-started/) to view this example live on the web.

[![Getting Started](/example/getting-started.png)](https://d3plus.org/examples/d3plus-tooltip/getting-started/)





## API Reference
<a name="tooltip"></a>

### tooltip([data])
Creates HTML tooltips in the body of a webpage. If *data* is specified, immediately draws the tooltips based on the specified array and returns this generator. If *data* is not specified on instantiation, it can be passed/updated after instantiation using the [data](#tooltip.data) method.

**Kind**: global function  

| Param | Type | Default |
| --- | --- | --- |
| [data] | <code>Array</code> | <code>[]</code> | 


* [tooltip([data])](#tooltip)
    * [.background([*value*])](#tooltip.background)
    * [.body([*value*])](#tooltip.body)
    * [.bodyStyle([*value*])](#tooltip.bodyStyle)
    * [.border([*value*])](#tooltip.border)
    * [.borderRadius([*value*])](#tooltip.borderRadius)
    * [.className([*value*])](#tooltip.className)
    * [.config([*value*])](#tooltip.config)
    * [.data([*data*])](#tooltip.data)
    * [.duration([*ms*])](#tooltip.duration)
    * [.footer([*value*])](#tooltip.footer)
    * [.footerStyle([*value*])](#tooltip.footerStyle)
    * [.height([*value*])](#tooltip.height)
    * [.id([*value*])](#tooltip.id)
    * [.offset([*value*])](#tooltip.offset)
    * [.padding([*value*])](#tooltip.padding)
    * [.pointerEvents([*value*])](#tooltip.pointerEvents)
    * [.tableStyle([*value*])](#tooltip.tableStyle)
    * [.tbody([*value*])](#tooltip.tbody)
    * [.tbodyStyle([*value*])](#tooltip.tbodyStyle)
    * [.thead([*value*])](#tooltip.thead)
    * [.theadStyle([*value*])](#tooltip.theadStyle)
    * [.title([*value*])](#tooltip.title)
    * [.titleStyle([*value*])](#tooltip.titleStyle)
    * [.translate([*value*])](#tooltip.translate)
    * [.width([*value*])](#tooltip.width)

<a name="tooltip.background"></a>

#### tooltip.background([*value*])
If *value* is specified, sets the background accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current background accessor.

**Kind**: static method of <code>[tooltip](#tooltip)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [*value*] | <code>function</code> &#124; <code>String</code> | <code>&quot;rgba(255, 255, 255, 0.75)&quot;</code> | 

<a name="tooltip.body"></a>

#### tooltip.body([*value*])
If *value* is specified, sets the body accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current body accessor.

**Kind**: static method of <code>[tooltip](#tooltip)</code>  

| Param | Type |
| --- | --- |
| [*value*] | <code>function</code> &#124; <code>String</code> | 

**Example** *(default accessor)*  
```js
function value(d) {
  return d.body || "";
}
```
<a name="tooltip.bodyStyle"></a>

#### tooltip.bodyStyle([*value*])
If *value* is specified, sets the body styles to the specified values and returns this generator. If *value* is not specified, returns the current body styles.

**Kind**: static method of <code>[tooltip](#tooltip)</code>  

| Param | Type |
| --- | --- |
| [*value*] | <code>Object</code> | 

**Example** *(default styles)*  
```js
{
  "font-family": "Verdana",
  "font-size": "10px",
  "font-weight": "400"
}
```
<a name="tooltip.border"></a>

#### tooltip.border([*value*])
If *value* is specified, sets the border accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current border accessor.

**Kind**: static method of <code>[tooltip](#tooltip)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [*value*] | <code>function</code> &#124; <code>String</code> | <code>&quot;1px solid rgba(0, 0, 0, 0.1)&quot;</code> | 

<a name="tooltip.borderRadius"></a>

#### tooltip.borderRadius([*value*])
If *value* is specified, sets the border-radius accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current border-radius accessor.

**Kind**: static method of <code>[tooltip](#tooltip)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [*value*] | <code>function</code> &#124; <code>String</code> | <code>&quot;2px&quot;</code> | 

<a name="tooltip.className"></a>

#### tooltip.className([*value*])
If *value* is specified, sets the class name to the specified string and returns this generator. If *value* is not specified, returns the current class name.

**Kind**: static method of <code>[tooltip](#tooltip)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [*value*] | <code>String</code> | <code>&quot;d3plus-tooltip&quot;</code> | 

<a name="tooltip.config"></a>

#### tooltip.config([*value*])
If *value* is specified, sets the methods that correspond to the key/value pairs and returns this generator. If *value* is not specified, returns the current configuration.

**Kind**: static method of <code>[tooltip](#tooltip)</code>  

| Param | Type |
| --- | --- |
| [*value*] | <code>Object</code> | 

<a name="tooltip.data"></a>

#### tooltip.data([*data*])
If *data* is specified, sets the data array to the specified array and returns this generator. If *data* is not specified, returns the current data array.

**Kind**: static method of <code>[tooltip](#tooltip)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [*data*] | <code>Array</code> | <code>[]</code> | 

<a name="tooltip.duration"></a>

#### tooltip.duration([*ms*])
If *ms* is specified, sets the duration accessor to the specified function or number and returns this generator. If *ms* is not specified, returns the current duration accessor.

**Kind**: static method of <code>[tooltip](#tooltip)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [*ms*] | <code>function</code> &#124; <code>Number</code> | <code>200</code> | 

<a name="tooltip.footer"></a>

#### tooltip.footer([*value*])
If *value* is specified, sets the footer accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current footer accessor.

**Kind**: static method of <code>[tooltip](#tooltip)</code>  

| Param | Type |
| --- | --- |
| [*value*] | <code>function</code> &#124; <code>String</code> | 

**Example** *(default accessor)*  
```js
function value(d) {
  return d.footer || "";
}
```
<a name="tooltip.footerStyle"></a>

#### tooltip.footerStyle([*value*])
If *value* is specified, sets the footer styles to the specified values and returns this generator. If *value* is not specified, returns the current footer styles.

**Kind**: static method of <code>[tooltip](#tooltip)</code>  

| Param | Type |
| --- | --- |
| [*value*] | <code>Object</code> | 

**Example** *(default styles)*  
```js
{
  "font-family": "Verdana",
  "font-size": "10px",
  "font-weight": "400"
}
```
<a name="tooltip.height"></a>

#### tooltip.height([*value*])
If *value* is specified, sets the height accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current height accessor.

**Kind**: static method of <code>[tooltip](#tooltip)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [*value*] | <code>function</code> &#124; <code>String</code> | <code>&quot;auto&quot;</code> | 

<a name="tooltip.id"></a>

#### tooltip.id([*value*])
If *value* is specified, sets the id accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current id accessor.

**Kind**: static method of <code>[tooltip](#tooltip)</code>  

| Param | Type |
| --- | --- |
| [*value*] | <code>function</code> &#124; <code>String</code> | 

**Example** *(default accessor)*  
```js
function value(d, i) {
  return d.id || "" + i;
}
```
<a name="tooltip.offset"></a>

#### tooltip.offset([*value*])
If *value* is specified, sets the offset accessor to the specified function or number and returns this generator. If *value* is not specified, returns the current offset accessor.

**Kind**: static method of <code>[tooltip](#tooltip)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [*value*] | <code>function</code> &#124; <code>Number</code> | <code>10</code> | 

<a name="tooltip.padding"></a>

#### tooltip.padding([*value*])
If *value* is specified, sets the padding accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current padding accessor.

**Kind**: static method of <code>[tooltip](#tooltip)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [*value*] | <code>function</code> &#124; <code>String</code> | <code>&quot;5px&quot;</code> | 

<a name="tooltip.pointerEvents"></a>

#### tooltip.pointerEvents([*value*])
If *value* is specified, sets the pointer-events accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current pointer-events accessor.

**Kind**: static method of <code>[tooltip](#tooltip)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [*value*] | <code>function</code> &#124; <code>String</code> | <code>&quot;auto&quot;</code> | 

<a name="tooltip.tableStyle"></a>

#### tooltip.tableStyle([*value*])
If *value* is specified, sets the table styles to the specified values and returns this generator. If *value* is not specified, returns the current table styles.

**Kind**: static method of <code>[tooltip](#tooltip)</code>  

| Param | Type |
| --- | --- |
| [*value*] | <code>Object</code> | 

**Example** *(default styles)*  
```js
{
  "border-spacing": "0",
  "width": "100%"
}
```
<a name="tooltip.tbody"></a>

#### tooltip.tbody([*value*])
If *value* is specified, sets the contents of the table body to the specified array of functions or strings and returns this generator. If *value* is not specified, returns the current table body data.

**Kind**: static method of <code>[tooltip](#tooltip)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [*value*] | <code>Array</code> | <code>[]</code> | 

<a name="tooltip.tbodyStyle"></a>

#### tooltip.tbodyStyle([*value*])
If *value* is specified, sets the table body styles to the specified values and returns this generator. If *value* is not specified, returns the current table body styles.

**Kind**: static method of <code>[tooltip](#tooltip)</code>  

| Param | Type |
| --- | --- |
| [*value*] | <code>Object</code> | 

**Example** *(default styles)*  
```js
{
  "font-family": "Verdana",
  "font-size": "10px",
  "font-weight": "600",
  "text-align": "center"
}
```
<a name="tooltip.thead"></a>

#### tooltip.thead([*value*])
If *value* is specified, sets the contents of the table head to the specified array of functions or strings and returns this generator. If *value* is not specified, returns the current table head data.

**Kind**: static method of <code>[tooltip](#tooltip)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [*value*] | <code>Array</code> | <code>[]</code> | 

<a name="tooltip.theadStyle"></a>

#### tooltip.theadStyle([*value*])
If *value* is specified, sets the table head styles to the specified values and returns this generator. If *value* is not specified, returns the current table head styles.

**Kind**: static method of <code>[tooltip](#tooltip)</code>  

| Param | Type |
| --- | --- |
| [*value*] | <code>Object</code> | 

**Example** *(default styles)*  
```js
{
  "font-family": "Verdana",
  "font-size": "10px",
  "font-weight": "600",
  "text-align": "center"
}
```
<a name="tooltip.title"></a>

#### tooltip.title([*value*])
If *value* is specified, sets the title accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current title accessor.

**Kind**: static method of <code>[tooltip](#tooltip)</code>  

| Param | Type |
| --- | --- |
| [*value*] | <code>function</code> &#124; <code>String</code> | 

**Example** *(default accessor)*  
```js
function value(d) {
  return d.title || "";
}
```
<a name="tooltip.titleStyle"></a>

#### tooltip.titleStyle([*value*])
If *value* is specified, sets the title styles to the specified values and returns this generator. If *value* is not specified, returns the current title styles.

**Kind**: static method of <code>[tooltip](#tooltip)</code>  

| Param | Type |
| --- | --- |
| [*value*] | <code>Object</code> | 

**Example** *(default styles)*  
```js
{
  "font-family": "Verdana",
  "font-size": "12px",
  "font-weight": "600",
  "padding-bottom": "5px"
}
```
<a name="tooltip.translate"></a>

#### tooltip.translate([*value*])
If *value* is specified, sets the translate accessor to the specified function or array and returns this generator. If *value* is not specified, returns the current translate accessor.

**Kind**: static method of <code>[tooltip](#tooltip)</code>  

| Param | Type |
| --- | --- |
| [*value*] | <code>function</code> &#124; <code>Array</code> | 

**Example** *(default accessor)*  
```js
function value(d) {
  return [d.x, d.y];
}
```
<a name="tooltip.width"></a>

#### tooltip.width([*value*])
If *value* is specified, sets the width accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current width accessor.

**Kind**: static method of <code>[tooltip](#tooltip)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [*value*] | <code>function</code> &#124; <code>String</code> | <code>&quot;auto&quot;</code> | 



###### <sub>Documentation generated on Mon, 25 Jul 2016 14:55:44 GMT</sub>
