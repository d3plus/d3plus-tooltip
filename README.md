# d3plus-tooltip

A javascript-only tooltip.

## Installing

If using npm, `npm install d3plus-tooltip`. Otherwise, you can download the [latest release from GitHub](https://github.com/d3plus/d3plus-tooltip/releases/latest) or load from a [CDN](https://cdn.jsdelivr.net/npm/d3plus-tooltip@1).

```js
import modules from "d3plus-tooltip";
```

d3plus-tooltip can be loaded as a standalone library or bundled as part of [D3plus](https://github.com/d3plus/d3plus). ES modules, AMD, CommonJS, and vanilla environments are supported. In vanilla, a `d3plus` global is exported:

```html
<script src="https://cdn.jsdelivr.net/npm/d3plus-tooltip@1"></script>
<script>
  console.log(d3plus);
</script>
```

## Examples

Live examples can be found on [d3plus.org](https://d3plus.org/), which includes a collection of example visualizations using [d3plus-react](https://github.com/d3plus/d3plus-react/). These examples are powered by the [d3plus-storybook](https://github.com/d3plus/d3plus-storybook/) repo, and PRs are always welcome. :beers:

## API Reference

##### 
* [Tooltip](#Tooltip)

##### 
* [generateReference](#generateReference) - Creates a reference element for popper.

---

<a name="Tooltip"></a>
#### **Tooltip** [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L22)


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
    * [.footer([*value*])](#Tooltip.footer)
    * [.footerStyle([*value*])](#Tooltip.footerStyle)
    * [.height([*value*])](#Tooltip.height)
    * [.id([*value*])](#Tooltip.id)
    * [.offset([*value*])](#Tooltip.offset)
    * [.padding([*value*])](#Tooltip.padding)
    * [.parent([*value*])](#Tooltip.parent)
    * [.pointerEvents([*value*])](#Tooltip.pointerEvents)
    * [.position([*value*])](#Tooltip.position)
    * [.tableStyle([*value*])](#Tooltip.tableStyle)
    * [.tbody([*value*])](#Tooltip.tbody)
    * [.tbodyStyle([*value*])](#Tooltip.tbodyStyle)
    * [.thead([*value*])](#Tooltip.thead)
    * [.theadStyle([*value*])](#Tooltip.theadStyle)
    * [.title([*value*])](#Tooltip.title)
    * [.titleStyle([*value*])](#Tooltip.titleStyle)
    * [.trStyle([*value*])](#Tooltip.trStyle)
    * [.tdStyle([*value*])](#Tooltip.tdStyle)
    * [.width([*value*])](#Tooltip.width)


<a name="new_Tooltip_new" href="#new_Tooltip_new">#</a> new **Tooltip**()

Creates HTML tooltips in the body of a webpage.





<a name="Tooltip.arrow" href="#Tooltip.arrow">#</a> Tooltip.**arrow**([*value*]) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L336)

Sets the inner HTML content of the arrow element, which by default is empty.


This is a static method of [<code>Tooltip</code>](#Tooltip).
default accessor

```js
   function value(d) {
  return d.arrow || "";
}
```


<a name="Tooltip.arrowStyle" href="#Tooltip.arrowStyle">#</a> Tooltip.**arrowStyle**([*value*]) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L353)

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


<a name="Tooltip.background" href="#Tooltip.background">#</a> Tooltip.**background**([*value*]) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L362)

If *value* is specified, sets the background accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current background accessor.


This is a static method of [<code>Tooltip</code>](#Tooltip).


<a name="Tooltip.body" href="#Tooltip.body">#</a> Tooltip.**body**([*value*]) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L375)

If *value* is specified, sets the body accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current body accessor.


This is a static method of [<code>Tooltip</code>](#Tooltip).
default accessor

```js
function value(d) {
  return d.body || "";
}
```


<a name="Tooltip.bodyStyle" href="#Tooltip.bodyStyle">#</a> Tooltip.**bodyStyle**([*value*]) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L390)

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


<a name="Tooltip.border" href="#Tooltip.border">#</a> Tooltip.**border**([*value*]) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L399)

If *value* is specified, sets the border accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current border accessor.


This is a static method of [<code>Tooltip</code>](#Tooltip).


<a name="Tooltip.borderRadius" href="#Tooltip.borderRadius">#</a> Tooltip.**borderRadius**([*value*]) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L408)

If *value* is specified, sets the border-radius accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current border-radius accessor.


This is a static method of [<code>Tooltip</code>](#Tooltip).


<a name="Tooltip.className" href="#Tooltip.className">#</a> Tooltip.**className**([*value*]) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L417)

If *value* is specified, sets the class name to the specified string and returns this generator. If *value* is not specified, returns the current class name.


This is a static method of [<code>Tooltip</code>](#Tooltip).


<a name="Tooltip.data" href="#Tooltip.data">#</a> Tooltip.**data**([*data*]) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L426)

If *data* is specified, sets the data array to the specified array and returns this generator. If *data* is not specified, returns the current data array.


This is a static method of [<code>Tooltip</code>](#Tooltip).


<a name="Tooltip.footer" href="#Tooltip.footer">#</a> Tooltip.**footer**([*value*]) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L439)

If *value* is specified, sets the footer accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current footer accessor.


This is a static method of [<code>Tooltip</code>](#Tooltip).
default accessor

```js
function value(d) {
  return d.footer || "";
}
```


<a name="Tooltip.footerStyle" href="#Tooltip.footerStyle">#</a> Tooltip.**footerStyle**([*value*]) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L454)

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


<a name="Tooltip.height" href="#Tooltip.height">#</a> Tooltip.**height**([*value*]) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L463)

If *value* is specified, sets the height accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current height accessor.


This is a static method of [<code>Tooltip</code>](#Tooltip).


<a name="Tooltip.id" href="#Tooltip.id">#</a> Tooltip.**id**([*value*]) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L476)

If *value* is specified, sets the id accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current id accessor.


This is a static method of [<code>Tooltip</code>](#Tooltip).
default accessor

```js
function value(d, i) {
  return d.id || "" + i;
}
```


<a name="Tooltip.offset" href="#Tooltip.offset">#</a> Tooltip.**offset**([*value*]) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L485)

If *value* is specified, sets the offset accessor to the specified function or number and returns this generator. If *value* is not specified, returns the current offset accessor.


This is a static method of [<code>Tooltip</code>](#Tooltip).


<a name="Tooltip.padding" href="#Tooltip.padding">#</a> Tooltip.**padding**([*value*]) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L494)

If *value* is specified, sets the padding accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current padding accessor.


This is a static method of [<code>Tooltip</code>](#Tooltip).


<a name="Tooltip.parent" href="#Tooltip.parent">#</a> Tooltip.**parent**([*value*]) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L503)

Sets the DOM element that the tooltip will be appended to.


This is a static method of [<code>Tooltip</code>](#Tooltip).


<a name="Tooltip.pointerEvents" href="#Tooltip.pointerEvents">#</a> Tooltip.**pointerEvents**([*value*]) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L512)

If *value* is specified, sets the pointer-events accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current pointer-events accessor.


This is a static method of [<code>Tooltip</code>](#Tooltip).


<a name="Tooltip.position" href="#Tooltip.position">#</a> Tooltip.**position**([*value*]) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L525)

If *value* is specified, sets the position accessor to the specified function or array and returns this generator. If *value* is not specified, returns the current position accessor. If *value* is an HTMLElement, anchors the Tooltip to that HTMLElement. If *value* is a selection string, anchors the Tooltip to the HTMLElement selected by that string. Otherwise, coordinate points must be in reference to the client viewport, not the overall page.


This is a static method of [<code>Tooltip</code>](#Tooltip).
default accessor

```js
   function value(d) {
    return [d.x, d.y];
  }
```


<a name="Tooltip.tableStyle" href="#Tooltip.tableStyle">#</a> Tooltip.**tableStyle**([*value*]) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L540)

If *value* is specified, sets the table styles to the specified values and returns this generator. If *value* is not specified, returns the current table styles.


This is a static method of [<code>Tooltip</code>](#Tooltip).
default styles

```js
{
  "border-collapse": "collapse",
  "border-spacing": "0",
  "width": "100%"
}
```


<a name="Tooltip.tbody" href="#Tooltip.tbody">#</a> Tooltip.**tbody**([*value*]) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L549)

If *value* is specified, sets the contents of the table body to the specified array of functions or strings and returns this generator. If *value* is not specified, returns the current table body data.


This is a static method of [<code>Tooltip</code>](#Tooltip).


<a name="Tooltip.tbodyStyle" href="#Tooltip.tbodyStyle">#</a> Tooltip.**tbodyStyle**([*value*]) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L565)

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


<a name="Tooltip.thead" href="#Tooltip.thead">#</a> Tooltip.**thead**([*value*]) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L574)

If *value* is specified, sets the contents of the table head to the specified array of functions or strings and returns this generator. If *value* is not specified, returns the current table head data.


This is a static method of [<code>Tooltip</code>](#Tooltip).


<a name="Tooltip.theadStyle" href="#Tooltip.theadStyle">#</a> Tooltip.**theadStyle**([*value*]) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L590)

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


<a name="Tooltip.title" href="#Tooltip.title">#</a> Tooltip.**title**([*value*]) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L603)

If *value* is specified, sets the title accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current title accessor.


This is a static method of [<code>Tooltip</code>](#Tooltip).
default accessor

```js
function value(d) {
  return d.title || "";
}
```


<a name="Tooltip.titleStyle" href="#Tooltip.titleStyle">#</a> Tooltip.**titleStyle**([*value*]) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L619)

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


<a name="Tooltip.trStyle" href="#Tooltip.trStyle">#</a> Tooltip.**trStyle**([*value*]) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L632)

An object with CSS keys and values to be applied to all <tr> elements inside of each <tbody>.


This is a static method of [<code>Tooltip</code>](#Tooltip).
default styles

```js
  {
    "border-top": "1px solid rgba(0, 0, 0, 0.1)"
  }
```


<a name="Tooltip.tdStyle" href="#Tooltip.tdStyle">#</a> Tooltip.**tdStyle**([*value*]) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L641)

An object with CSS keys and values to be applied to all <td> elements inside of each <tr>.


This is a static method of [<code>Tooltip</code>](#Tooltip).


<a name="Tooltip.width" href="#Tooltip.width">#</a> Tooltip.**width**([*value*]) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L650)

If *value* is specified, sets the width accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current width accessor.


This is a static method of [<code>Tooltip</code>](#Tooltip).

---

<a name="generateReference"></a>
#### d3plus.**generateReference**(position) [<>](https://github.com/d3plus/d3plus-tooltip/blob/master/src/Tooltip.js#L11)

Creates a reference element for popper.


This is a global function.
**Prrivate**:   

---



###### <sub>Documentation generated on Fri, 24 Feb 2023 18:49:49 GMT</sub>
