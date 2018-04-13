[width]: 400
[height]: 400

# Tooltip Positioned with a Selection String

The following example demonstrates calling the [`.position( )` method](https://d3plus.org/docs/#Tooltip.position) in the [Tooltip class](https://github.com/d3plus/d3plus-tooltip) with a selection string that selects an HTML element to use as an anchor point.

```html
<div id="square"></div>
```

```css
#square {
  background-color: blue;
  height: 25px;
  width: 25px;
  position: absolute;
  left: 50%;
  top: 50%;
}
```

```js
var tip = new d3plus.Tooltip()
  .data([{title: "Test Tooltip"}])
  .position("#square")
  .render();
```
