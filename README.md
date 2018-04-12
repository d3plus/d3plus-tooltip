# d3plus-tooltip

[![NPM Release](http://img.shields.io/npm/v/d3plus-tooltip.svg?style=flat)](https://www.npmjs.org/package/d3plus-tooltip) [![Build Status](https://travis-ci.org/d3plus/d3plus-tooltip.svg?branch=master)](https://travis-ci.org/d3plus/d3plus-tooltip) [![Dependency Status](http://img.shields.io/david/d3plus/d3plus-tooltip.svg?style=flat)](https://david-dm.org/d3plus/d3plus-tooltip) [![Gitter](https://img.shields.io/badge/-chat_on_gitter-brightgreen.svg?style=flat&logo=gitter-white)](https://gitter.im/d3plus/) [![1.0 progress](https://img.shields.io/badge/1.0_progress-100%25-brightgreen.svg?style=flat)](https://github.com/d3plus/d3plus-tooltip/projects/1)

A javascript-only tooltip.

## Installing

If you use NPM, run `npm install d3plus-tooltip --save`. Otherwise, download the [latest release](https://github.com/d3plus/d3plus-tooltip/releases/latest). The released bundle supports AMD, CommonJS, and vanilla environments. You can also load directly from [d3plus.org](https://d3plus.org):

```html
<script src="https://d3plus.org/js/d3plus-tooltip.v0.3.full.min.js"></script>
```

[width]: 205
[height]: 135

## Getting Started

This module gives the ability to create tooltips in Javascript with no CSS required. It takes an array of [data](https://github.com/d3plus/d3plus-tooltip#Tooltip.data) just like most other [D3plus modules](https://github.com/d3plus), and creates a tooltip for each data point.

In this example, and in the majority of use cases, only 1 tooltip is needed.

```js
var data = [
  {"title": "D3plus Tooltip", "body": "Check out this cool table:", "x": 100, "y": 120, "label": "Position"}
];

new d3plus.Tooltip()
  .data(data)
  .thead(["Axis", function(d) { return d.label; }])
  .tbody([
    ["x", function(d) { return d.x; }],
    ["y", function(d) { return d.y; }]
  ])
  .render();
```


[<kbd><img src="/example/getting-started.png" width="205px" /></kbd>](https://d3plus.org/examples/d3plus-tooltip/getting-started/)

[Click here](https://d3plus.org/examples/d3plus-tooltip/getting-started/) to view this example live on the web.





## API Reference

##### 
* [Tooltip](#Tooltip)

---

<a name="Tooltip"></a>
#### **Tooltip** [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L8)


This is a global class, and extends all of the methods and functionality of <code>BaseClass</code>.


* [Tooltip](#Tooltip) ⇐ <code>BaseClass</code>
    * [new Tooltip()](#new_Tooltip_new)
    * [.arrow([*value*])](#Tooltip.arrow)
    * [.arrowStyle([*value*])](#Tooltip.arrowStyle)
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
    * [.position([*value*])](#Tooltip.position)
    * [.tableStyle([*value*])](#Tooltip.tableStyle)
    * [.tbody([*value*])](#Tooltip.tbody)
    * [.tbodyStyle([*value*])](#Tooltip.tbodyStyle)
    * [.thead([*value*])](#Tooltip.thead)
    * [.theadStyle([*value*])](#Tooltip.theadStyle)
    * [.title([*value*])](#Tooltip.title)
    * [.titleStyle([*value*])](#Tooltip.titleStyle)
    * [.width([*value*])](#Tooltip.width)


<a name="new_Tooltip_new" href="#new_Tooltip_new">#</a> new **Tooltip**()

Creates HTML tooltips in the body of a webpage.





<a name="Tooltip.arrow" href="#Tooltip.arrow">#</a> Tooltip.**arrow**([*value*]) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L269)

Sets the inner HTML content of the arrow element, which by default is empty.


This is a static method of [<code>Tooltip</code>](#Tooltip).
default accessor

```js
   function value(d) {
  return d.arrow || "";
}
```


<a name="Tooltip.arrowStyle" href="#Tooltip.arrowStyle">#</a> Tooltip.**arrowStyle**([*value*]) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L286)

If *value* is specified, sets the arrow styles to the specified values and returns this generator. If *value* is not specified, returns the current arrow styles.


This is a static method of [<code>Tooltip</code>](#Tooltip).
default styles

```js
   {
     "content": "",
     "border-width": "10px",
     "border-style": "solid",
     "border-color": "rgba(255, 255, 255, 0.75) transparent transparent transparent",
     "position": "absolute"
   }
```


<a name="Tooltip.background" href="#Tooltip.background">#</a> Tooltip.**background**([*value*]) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L295)

If *value* is specified, sets the background accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current background accessor.


This is a static method of [<code>Tooltip</code>](#Tooltip).


<a name="Tooltip.body" href="#Tooltip.body">#</a> Tooltip.**body**([*value*]) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L308)

If *value* is specified, sets the body accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current body accessor.


This is a static method of [<code>Tooltip</code>](#Tooltip).
default accessor

```js
function value(d) {
  return d.body || "";
}
```


<a name="Tooltip.bodyStyle" href="#Tooltip.bodyStyle">#</a> Tooltip.**bodyStyle**([*value*]) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L323)

If *value* is specified, sets the body styles to the specified values and returns this generator. If *value* is not specified, returns the current body styles.


This is a static method of [<code>Tooltip</code>](#Tooltip).
default styles

```js
{
  "font-family": "'Roboto', 'Helvetica Neue', 'HelveticaNeue', 'Helvetica', 'Arial', sans-serif",
  "font-size": "12px",
  "font-weight": "400"
}
```


<a name="Tooltip.border" href="#Tooltip.border">#</a> Tooltip.**border**([*value*]) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L332)

If *value* is specified, sets the border accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current border accessor.


This is a static method of [<code>Tooltip</code>](#Tooltip).


<a name="Tooltip.borderRadius" href="#Tooltip.borderRadius">#</a> Tooltip.**borderRadius**([*value*]) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L341)

If *value* is specified, sets the border-radius accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current border-radius accessor.


This is a static method of [<code>Tooltip</code>](#Tooltip).


<a name="Tooltip.className" href="#Tooltip.className">#</a> Tooltip.**className**([*value*]) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L350)

If *value* is specified, sets the class name to the specified string and returns this generator. If *value* is not specified, returns the current class name.


This is a static method of [<code>Tooltip</code>](#Tooltip).


<a name="Tooltip.data" href="#Tooltip.data">#</a> Tooltip.**data**([*data*]) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L359)

If *data* is specified, sets the data array to the specified array and returns this generator. If *data* is not specified, returns the current data array.


This is a static method of [<code>Tooltip</code>](#Tooltip).


<a name="Tooltip.duration" href="#Tooltip.duration">#</a> Tooltip.**duration**([*ms*]) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L368)

If *ms* is specified, sets the duration accessor to the specified function or number and returns this generator. If *ms* is not specified, returns the current duration accessor.


This is a static method of [<code>Tooltip</code>](#Tooltip).


<a name="Tooltip.footer" href="#Tooltip.footer">#</a> Tooltip.**footer**([*value*]) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L381)

If *value* is specified, sets the footer accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current footer accessor.


This is a static method of [<code>Tooltip</code>](#Tooltip).
default accessor

```js
function value(d) {
  return d.footer || "";
}
```


<a name="Tooltip.footerStyle" href="#Tooltip.footerStyle">#</a> Tooltip.**footerStyle**([*value*]) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L396)

If *value* is specified, sets the footer styles to the specified values and returns this generator. If *value* is not specified, returns the current footer styles.


This is a static method of [<code>Tooltip</code>](#Tooltip).
default styles

```js
{
  "font-family": "'Roboto', 'Helvetica Neue', 'HelveticaNeue', 'Helvetica', 'Arial', sans-serif",
  "font-size": "12px",
  "font-weight": "400"
}
```


<a name="Tooltip.height" href="#Tooltip.height">#</a> Tooltip.**height**([*value*]) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L405)

If *value* is specified, sets the height accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current height accessor.


This is a static method of [<code>Tooltip</code>](#Tooltip).


<a name="Tooltip.id" href="#Tooltip.id">#</a> Tooltip.**id**([*value*]) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L418)

If *value* is specified, sets the id accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current id accessor.


This is a static method of [<code>Tooltip</code>](#Tooltip).
default accessor

```js
function value(d, i) {
  return d.id || "" + i;
}
```


<a name="Tooltip.offset" href="#Tooltip.offset">#</a> Tooltip.**offset**([*value*]) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L427)

If *value* is specified, sets the offset accessor to the specified function or number and returns this generator. If *value* is not specified, returns the current offset accessor.


This is a static method of [<code>Tooltip</code>](#Tooltip).


<a name="Tooltip.padding" href="#Tooltip.padding">#</a> Tooltip.**padding**([*value*]) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L436)

If *value* is specified, sets the padding accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current padding accessor.


This is a static method of [<code>Tooltip</code>](#Tooltip).


<a name="Tooltip.pointerEvents" href="#Tooltip.pointerEvents">#</a> Tooltip.**pointerEvents**([*value*]) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L445)

If *value* is specified, sets the pointer-events accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current pointer-events accessor.


This is a static method of [<code>Tooltip</code>](#Tooltip).


<a name="Tooltip.position" href="#Tooltip.position">#</a> Tooltip.**position**([*value*]) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L458)

If *value* is specified, sets the position accessor to the specified function or array and returns this generator. If *value* is not specified, returns the current position accessor. If *value* is an HTMLElement, positions the Tooltip near that HTMLElement. Otherwise, coordinate points must be in reference to the client viewport, not the overall page.


This is a static method of [<code>Tooltip</code>](#Tooltip).
default accessor

```js
   function value(d) {
    return [d.x, d.y];
  }
```


<a name="Tooltip.tableStyle" href="#Tooltip.tableStyle">#</a> Tooltip.**tableStyle**([*value*]) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L472)

If *value* is specified, sets the table styles to the specified values and returns this generator. If *value* is not specified, returns the current table styles.


This is a static method of [<code>Tooltip</code>](#Tooltip).
default styles

```js
{
  "border-spacing": "0",
  "width": "100%"
}
```


<a name="Tooltip.tbody" href="#Tooltip.tbody">#</a> Tooltip.**tbody**([*value*]) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L481)

If *value* is specified, sets the contents of the table body to the specified array of functions or strings and returns this generator. If *value* is not specified, returns the current table body data.


This is a static method of [<code>Tooltip</code>](#Tooltip).


<a name="Tooltip.tbodyStyle" href="#Tooltip.tbodyStyle">#</a> Tooltip.**tbodyStyle**([*value*]) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L497)

If *value* is specified, sets the table body styles to the specified values and returns this generator. If *value* is not specified, returns the current table body styles.


This is a static method of [<code>Tooltip</code>](#Tooltip).
default styles

```js
{
  "font-family": "'Roboto', 'Helvetica Neue', 'HelveticaNeue', 'Helvetica', 'Arial', sans-serif",
  "font-size": "12px",
  "font-weight": "600",
  "text-align": "center"
}
```


<a name="Tooltip.thead" href="#Tooltip.thead">#</a> Tooltip.**thead**([*value*]) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L506)

If *value* is specified, sets the contents of the table head to the specified array of functions or strings and returns this generator. If *value* is not specified, returns the current table head data.


This is a static method of [<code>Tooltip</code>](#Tooltip).


<a name="Tooltip.theadStyle" href="#Tooltip.theadStyle">#</a> Tooltip.**theadStyle**([*value*]) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L522)

If *value* is specified, sets the table head styles to the specified values and returns this generator. If *value* is not specified, returns the current table head styles.


This is a static method of [<code>Tooltip</code>](#Tooltip).
default styles

```js
{
  "font-family": "'Roboto', 'Helvetica Neue', 'HelveticaNeue', 'Helvetica', 'Arial', sans-serif",
  "font-size": "12px",
  "font-weight": "600",
  "text-align": "center"
}
```


<a name="Tooltip.title" href="#Tooltip.title">#</a> Tooltip.**title**([*value*]) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L535)

If *value* is specified, sets the title accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current title accessor.


This is a static method of [<code>Tooltip</code>](#Tooltip).
default accessor

```js
function value(d) {
  return d.title || "";
}
```


<a name="Tooltip.titleStyle" href="#Tooltip.titleStyle">#</a> Tooltip.**titleStyle**([*value*]) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L551)

If *value* is specified, sets the title styles to the specified values and returns this generator. If *value* is not specified, returns the current title styles.


This is a static method of [<code>Tooltip</code>](#Tooltip).
default styles

```js
{
  "font-family": "'Roboto', 'Helvetica Neue', 'HelveticaNeue', 'Helvetica', 'Arial', sans-serif",
  "font-size": "14px",
  "font-weight": "600",
  "padding-bottom": "5px"
}
```


<a name="Tooltip.width" href="#Tooltip.width">#</a> Tooltip.**width**([*value*]) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L560)

If *value* is specified, sets the width accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current width accessor.


This is a static method of [<code>Tooltip</code>](#Tooltip).

---



###### <sub>Documentation generated on Thu, 12 Apr 2018 14:34:49 GMT</sub>
