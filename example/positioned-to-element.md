[width]: 400
[height]: 400

# Tooltip Positioned to HTML Element

The `.position( )` method in the Tooltip class will accept an array of two numbers representing x and y values (`[x, y]`), a function that returns an array of two numbers, or an HTML element. If an HTML element is supplied, the tooltip will be positioned near that element.

```html
<div id="square"></div>
```

```css
#square {
  background-color: red;
  height: 25px;
  width: 25px;
  position: absolute;
  left: 50%;
  top: 50%;
}
```

```js
var square = document.getElementById("square");

var tips = new d3plus.Tooltip()
  .data([{title: "Test Tooltip"}])
  .position(square)
  .render();
```
