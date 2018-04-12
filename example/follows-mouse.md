[width]: 400
[height]: 400

# Tooltip Follows Mouse

In this example, the tooltip follows the mouse. It demonstrates the behavior of the tooltip at different positions on the screen, especially near the edges.

```css
body {
  background-color: #444;
}
```

```js
var tips = new d3plus.Tooltip()
    .data([{title: "Test Tooltip"}])
    .render();

  window.addEventListener("mousemove", function(e) {
    tips
      .position([e.pageX, e.pageY])
      .render();
  });
```
