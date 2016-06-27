import {constant} from "d3plus-common";
import {select as d3Select} from "d3-selection";

function tooltipId(d, i) {
  return `${i}`;
}

function tooltipTranslate(d) {
  return [d.x, d.y];
}

export default function(data = []) {

  let border = constant("1px solid #444"),
      id = tooltipId,
      padding = constant(false),
      title = constant("Test"),
      translate = tooltipTranslate,
      width = constant(200);

  function tooltip(callback) {

    const tooltips = d3Select("body").selectAll(".d3plus-ui-tooltip")
      .data(data, id);

    const enter = tooltips.enter().append("div")
      .attr("class", "d3plus-ui-tooltip")
      .style("position", "absolute");

    enter.append("div").attr("class", "d3plus-ui-tooltip-title");

    tooltips.merge(enter)
      .attr("id", (d, i) => `d3plus-ui-tooltip-${id(d, i)}`)
      .style("left", (d, i) => `${translate(d, i)[0] - width(d, i) / 2}px`)
      .style("top", function(d, i) {
        return `${translate(d, i)[1] - this.offsetHeight}px`;
      })
      .style("width", (d, i) => `${width(d, i)}px`)
      .style("border", function(d, i) {
        const b = d3Select(this).style("border");
        return b !== "0px none rgb(0, 0, 0)" ? b : border(d, i);
      })
      .select(".d3plus-ui-tooltip-title").html(title);

    tooltips.exit().remove();

    if (callback) setTimeout(callback, 100);

    return tooltip;

  }

  tooltip.border = function(_) {
    return arguments.length ? (border = typeof _ === "function" ? _ : constant(_), tooltip) : border;
  };

  tooltip.id = function(_) {
    return arguments.length ? (id = typeof _ === "function" ? _ : constant(_), tooltip) : id;
  };

  tooltip.padding = function(_) {
    return arguments.length ? (padding = typeof _ === "function" ? _ : constant(_), tooltip) : padding;
  };

  tooltip.title = function(_) {
    return arguments.length ? (title = typeof _ === "function" ? _ : constant(_), tooltip) : title;
  };

  tooltip.translate = function(_) {
    return arguments.length ? (translate = typeof _ === "function" ? _ : constant(_), tooltip) : translate;
  };

  tooltip.width = function(_) {
    return arguments.length ? (width = typeof _ === "function" ? _ : constant(_), tooltip) : width;
  };

  return data.length ? tooltip() : tooltip;

}
