# d3plus-tooltip

[![NPM Release](http://img.shields.io/npm/v/d3plus-tooltip.svg?style=flat)](https://www.npmjs.org/package/d3plus-tooltip)
[![Build Status](https://travis-ci.org/d3plus/d3plus-tooltip.svg?branch=master)](https://travis-ci.org/d3plus/d3plus-tooltip)
[![Dependency Status](http://img.shields.io/david/d3plus/d3plus-tooltip.svg?style=flat)](https://david-dm.org/d3plus/d3plus-tooltip)
[![Slack](https://img.shields.io/badge/Slack-Click%20to%20Join!-green.svg?style=social)](https://goo.gl/forms/ynrKdvusekAwRMPf2)

A javascript-only tooltip.

## Installing

If you use NPM, `npm install d3plus-tooltip`. Otherwise, download the [latest release](https://github.com/d3plus/d3plus-tooltip/releases/latest). The released bundle supports AMD, CommonJS, and vanilla environments. Create a [custom bundle using Rollup](https://github.com/rollup/rollup) or your preferred bundler. You can also load directly from [d3plus.org](https://d3plus.org):

```html
<script src="https://d3plus.org/js/d3plus-tooltip.v0.2.full.min.js"></script>
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


[<kbd><img src="/example/getting-started.png" width="205px" /></kbd>](https://d3plus.org/examples/d3plus-tooltip/getting-started/)

[Click here](https://d3plus.org/examples/d3plus-tooltip/getting-started/) to view this example live on the web.





## API Reference
### Classes

<dl>
<dt><a href="#Tooltip">Tooltip</a> ⇐ <code>BaseClass</code></dt>
<dd></dd>
</dl>

### Functions

<dl>
<dt><a href="#prefix">prefix()</a></dt>
<dd><p>Returns the appropriate vendor prefix to use in CSS styles.</p>
</dd>
</dl>

<a name="Tooltip"></a>

### Tooltip ⇐ <code>BaseClass</code>
**Kind**: global class  
**Extends:** <code>BaseClass</code>  

* [Tooltip](#Tooltip) ⇐ <code>BaseClass</code>
    * [new Tooltip()](#new_Tooltip_new)
    * [.background([*value*])](#Tooltip.background)
    * [.body([*value*])](#Tooltip.body)
    * [.bodyStyle([*value*])](#Tooltip.bodyStyle)
    * [.border([*value*])](#Tooltip.border)
    * [.borderRadius([*value*])](#Tooltip.borderRadius)
    * [.className([*value*])](#Tooltip.className)
    * [.data([*data*])](#Tooltip.data)
    * [.duration([*ms*])](#Tooltip.duration)
    * [.footer([*value*])](#Tooltip.footer)
    * [.footerStyle([*value*])](#Tooltip.footerStyle)
    * [.height([*value*])](#Tooltip.height)
    * [.id([*value*])](#Tooltip.id)
    * [.offset([*value*])](#Tooltip.offset)
    * [.padding([*value*])](#Tooltip.padding)
    * [.pointerEvents([*value*])](#Tooltip.pointerEvents)
    * [.tableStyle([*value*])](#Tooltip.tableStyle)
    * [.tbody([*value*])](#Tooltip.tbody)
    * [.tbodyStyle([*value*])](#Tooltip.tbodyStyle)
    * [.thead([*value*])](#Tooltip.thead)
    * [.theadStyle([*value*])](#Tooltip.theadStyle)
    * [.title([*value*])](#Tooltip.title)
    * [.titleStyle([*value*])](#Tooltip.titleStyle)
    * [.translate([*value*])](#Tooltip.translate)
    * [.width([*value*])](#Tooltip.width)

<a name="new_Tooltip_new"></a>

#### new Tooltip()
Creates HTML tooltips in the body of a webpage.

<a name="Tooltip.background"></a>

#### Tooltip.background([*value*])
If *value* is specified, sets the background accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current background accessor.

**Kind**: static method of <code>[Tooltip](#Tooltip)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [*value*] | <code>function</code> &#124; <code>String</code> | <code>&quot;rgba(255, 255, 255, 0.75)&quot;</code> | 

<a name="Tooltip.body"></a>

#### Tooltip.body([*value*])
If *value* is specified, sets the body accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current body accessor.

**Kind**: static method of <code>[Tooltip](#Tooltip)</code>  

| Param | Type |
| --- | --- |
| [*value*] | <code>function</code> &#124; <code>String</code> | 

**Example** *(default accessor)*  
```js
function value(d) {
  return d.body || "";
}
```
<a name="Tooltip.bodyStyle"></a>

#### Tooltip.bodyStyle([*value*])
If *value* is specified, sets the body styles to the specified values and returns this generator. If *value* is not specified, returns the current body styles.

**Kind**: static method of <code>[Tooltip](#Tooltip)</code>  

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
<a name="Tooltip.border"></a>

#### Tooltip.border([*value*])
If *value* is specified, sets the border accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current border accessor.

**Kind**: static method of <code>[Tooltip](#Tooltip)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [*value*] | <code>function</code> &#124; <code>String</code> | <code>&quot;1px solid rgba(0, 0, 0, 0.1)&quot;</code> | 

<a name="Tooltip.borderRadius"></a>

#### Tooltip.borderRadius([*value*])
If *value* is specified, sets the border-radius accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current border-radius accessor.

**Kind**: static method of <code>[Tooltip](#Tooltip)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [*value*] | <code>function</code> &#124; <code>String</code> | <code>&quot;2px&quot;</code> | 

<a name="Tooltip.className"></a>

#### Tooltip.className([*value*])
If *value* is specified, sets the class name to the specified string and returns this generator. If *value* is not specified, returns the current class name.

**Kind**: static method of <code>[Tooltip](#Tooltip)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [*value*] | <code>String</code> | <code>&quot;d3plus-tooltip&quot;</code> | 

<a name="Tooltip.data"></a>

#### Tooltip.data([*data*])
If *data* is specified, sets the data array to the specified array and returns this generator. If *data* is not specified, returns the current data array.

**Kind**: static method of <code>[Tooltip](#Tooltip)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [*data*] | <code>Array</code> | <code>[]</code> | 

<a name="Tooltip.duration"></a>

#### Tooltip.duration([*ms*])
If *ms* is specified, sets the duration accessor to the specified function or number and returns this generator. If *ms* is not specified, returns the current duration accessor.

**Kind**: static method of <code>[Tooltip](#Tooltip)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [*ms*] | <code>function</code> &#124; <code>Number</code> | <code>200</code> | 

<a name="Tooltip.footer"></a>

#### Tooltip.footer([*value*])
If *value* is specified, sets the footer accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current footer accessor.

**Kind**: static method of <code>[Tooltip](#Tooltip)</code>  

| Param | Type |
| --- | --- |
| [*value*] | <code>function</code> &#124; <code>String</code> | 

**Example** *(default accessor)*  
```js
function value(d) {
  return d.footer || "";
}
```
<a name="Tooltip.footerStyle"></a>

#### Tooltip.footerStyle([*value*])
If *value* is specified, sets the footer styles to the specified values and returns this generator. If *value* is not specified, returns the current footer styles.

**Kind**: static method of <code>[Tooltip](#Tooltip)</code>  

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
<a name="Tooltip.height"></a>

#### Tooltip.height([*value*])
If *value* is specified, sets the height accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current height accessor.

**Kind**: static method of <code>[Tooltip](#Tooltip)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [*value*] | <code>function</code> &#124; <code>String</code> | <code>&quot;auto&quot;</code> | 

<a name="Tooltip.id"></a>

#### Tooltip.id([*value*])
If *value* is specified, sets the id accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current id accessor.

**Kind**: static method of <code>[Tooltip](#Tooltip)</code>  

| Param | Type |
| --- | --- |
| [*value*] | <code>function</code> &#124; <code>String</code> | 

**Example** *(default accessor)*  
```js
function value(d, i) {
  return d.id || "" + i;
}
```
<a name="Tooltip.offset"></a>

#### Tooltip.offset([*value*])
If *value* is specified, sets the offset accessor to the specified function or number and returns this generator. If *value* is not specified, returns the current offset accessor.

**Kind**: static method of <code>[Tooltip](#Tooltip)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [*value*] | <code>function</code> &#124; <code>Number</code> | <code>10</code> | 

<a name="Tooltip.padding"></a>

#### Tooltip.padding([*value*])
If *value* is specified, sets the padding accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current padding accessor.

**Kind**: static method of <code>[Tooltip](#Tooltip)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [*value*] | <code>function</code> &#124; <code>String</code> | <code>&quot;5px&quot;</code> | 

<a name="Tooltip.pointerEvents"></a>

#### Tooltip.pointerEvents([*value*])
If *value* is specified, sets the pointer-events accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current pointer-events accessor.

**Kind**: static method of <code>[Tooltip](#Tooltip)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [*value*] | <code>function</code> &#124; <code>String</code> | <code>&quot;auto&quot;</code> | 

<a name="Tooltip.tableStyle"></a>

#### Tooltip.tableStyle([*value*])
If *value* is specified, sets the table styles to the specified values and returns this generator. If *value* is not specified, returns the current table styles.

**Kind**: static method of <code>[Tooltip](#Tooltip)</code>  

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
<a name="Tooltip.tbody"></a>

#### Tooltip.tbody([*value*])
If *value* is specified, sets the contents of the table body to the specified array of functions or strings and returns this generator. If *value* is not specified, returns the current table body data.

**Kind**: static method of <code>[Tooltip](#Tooltip)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [*value*] | <code>Array</code> | <code>[]</code> | 

<a name="Tooltip.tbodyStyle"></a>

#### Tooltip.tbodyStyle([*value*])
If *value* is specified, sets the table body styles to the specified values and returns this generator. If *value* is not specified, returns the current table body styles.

**Kind**: static method of <code>[Tooltip](#Tooltip)</code>  

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
<a name="Tooltip.thead"></a>

#### Tooltip.thead([*value*])
If *value* is specified, sets the contents of the table head to the specified array of functions or strings and returns this generator. If *value* is not specified, returns the current table head data.

**Kind**: static method of <code>[Tooltip](#Tooltip)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [*value*] | <code>Array</code> | <code>[]</code> | 

<a name="Tooltip.theadStyle"></a>

#### Tooltip.theadStyle([*value*])
If *value* is specified, sets the table head styles to the specified values and returns this generator. If *value* is not specified, returns the current table head styles.

**Kind**: static method of <code>[Tooltip](#Tooltip)</code>  

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
<a name="Tooltip.title"></a>

#### Tooltip.title([*value*])
If *value* is specified, sets the title accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current title accessor.

**Kind**: static method of <code>[Tooltip](#Tooltip)</code>  

| Param | Type |
| --- | --- |
| [*value*] | <code>function</code> &#124; <code>String</code> | 

**Example** *(default accessor)*  
```js
function value(d) {
  return d.title || "";
}
```
<a name="Tooltip.titleStyle"></a>

#### Tooltip.titleStyle([*value*])
If *value* is specified, sets the title styles to the specified values and returns this generator. If *value* is not specified, returns the current title styles.

**Kind**: static method of <code>[Tooltip](#Tooltip)</code>  

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
<a name="Tooltip.translate"></a>

#### Tooltip.translate([*value*])
If *value* is specified, sets the translate accessor to the specified function or array and returns this generator. If *value* is not specified, returns the current translate accessor.

**Kind**: static method of <code>[Tooltip](#Tooltip)</code>  

| Param | Type |
| --- | --- |
| [*value*] | <code>function</code> &#124; <code>Array</code> | 

**Example** *(default accessor)*  
```js
function value(d) {
  return [d.x, d.y];
}
```
<a name="Tooltip.width"></a>

#### Tooltip.width([*value*])
If *value* is specified, sets the width accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current width accessor.

**Kind**: static method of <code>[Tooltip](#Tooltip)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [*value*] | <code>function</code> &#124; <code>String</code> | <code>&quot;auto&quot;</code> | 

<a name="prefix"></a>

### prefix()
Returns the appropriate vendor prefix to use in CSS styles.

**Kind**: global function  


###### <sub>Documentation generated on Wed, 19 Oct 2016 03:46:55 GMT</sub>
