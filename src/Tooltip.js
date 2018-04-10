import {select} from "d3-selection";
import {transition} from "d3-transition";

import {accessor, BaseClass, constant, prefix, stylize} from "d3plus-common";

import Popper from "popper.js";

/**
    @class Tooltip
    @extends BaseClass
    @desc Creates HTML tooltips in the body of a webpage.
*/
export default class Tooltip extends BaseClass {

  /**
      @memberof Tooltip
      @desc Invoked when creating a new class instance, and sets any default parameters.
      @private
  */
  constructor() {

    super();
    this._arrow = accessor("arrow", "");
    this._arrowStyle = {
      "content": "",
      "background": "inherit",
      "border": "inherit",
      "border-width": "0 1px 1px 0",
      "height": "10px",
      "position": "absolute",
      "transform": "rotate(45deg) translateX(-50%)",
      "width": "10px",
      "z-index": "-1"
    };
    this._background = constant("rgba(255, 255, 255, 1)");
    this._body = accessor("body", "");
    this._bodyStyle = {
      "font-family": "'Roboto', 'Helvetica Neue', 'HelveticaNeue', 'Helvetica', 'Arial', sans-serif",
      "font-size": "12px",
      "font-weight": "400",
      "z-index": "1"
    };
    this._border = constant("1px solid rgba(0, 0, 0, 0.1)");
    this._borderRadius = constant("2px");
    this._className = "d3plus-tooltip";
    this._data = [];
    this._duration = constant(200);
    this._footer = accessor("footer", "");
    this._footerStyle = {
      "font-family": "'Roboto', 'Helvetica Neue', 'HelveticaNeue', 'Helvetica', 'Arial', sans-serif",
      "font-size": "12px",
      "font-weight": "400",
      "z-index": "1"
    };
    this._height = constant("auto");
    this._id = (d, i) => d.id || `${i}`;
    this._offset = constant(10);
    this._padding = constant("5px");
    this._pointerEvents = constant("auto");
    this._position = d => [d.x, d.y];
    this._prefix = prefix();
    this._tableStyle = {
      "border-spacing": "0",
      "width": "100%"
    };
    this._tbody = [];
    this._tbodyStyle = {
      "font-family": "'Roboto', 'Helvetica Neue', 'HelveticaNeue', 'Helvetica', 'Arial', sans-serif",
      "font-size": "12px",
      "text-align": "center"
    };
    this._thead = [];
    this._theadStyle = {
      "font-family": "'Roboto', 'Helvetica Neue', 'HelveticaNeue', 'Helvetica', 'Arial', sans-serif",
      "font-size": "12px",
      "font-weight": "600",
      "text-align": "center"
    };
    this._title = accessor("title", "");
    this._titleStyle = {
      "font-family": "'Roboto', 'Helvetica Neue', 'HelveticaNeue', 'Helvetica', 'Arial', sans-serif",
      "font-size": "14px",
      "font-weight": "600"
    };
    this._width = constant("auto");
  }

  /**
      The inner return object and draw function that gets assigned the public methods.
      @private
  */
  render(callback) {

    const that = this;

    const tooltips = select("body").selectAll(`.${this._className}`)
      .data(this._data, this._id);

    const enter = tooltips.enter().append("div")
      .attr("class", this._className);

    const update = tooltips.merge(enter);

    /**
        Creates DIV elements with a unique class and styles.
        @private
    */
    function divElement(cat) {
      enter.append("div").attr("class", `d3plus-tooltip-${cat}`)
                         .attr("id", (d, i) => `d3plus-tooltip-${cat}-${d ? that._id(d, i) : ""}`);

      const div = update.select(`.d3plus-tooltip-${cat}`).html(that[`_${cat}`]);
      stylize(div, that[`_${cat}Style`]);
    }

    /**
        Fetches table contents given functions or values.
        @private
    */
    function cellContent(d) {
      if (typeof d === "function") {
        const datum = select(this.parentNode.parentNode).datum();
        return d(datum, that._data.indexOf(datum));
      }
      else return d;
    }

    /**
        Sets styles for both enter and update.
        @private
    */
    function boxStyles(box) {

      box
        .style("background", that._background)
        .style(`${that._prefix}border-radius`, that._borderRadius)
        .style("pointer-events", that._pointerEvents)
        .style("padding", that._padding)
        .style("width", that._width)
        .style("height", that._height)
        .style("border", function(d, i) {
          const b = select(this).style("border");
          return b !== "0px none rgb(0, 0, 0)" ? b : that._border(d, i);
        });
    }

    divElement("title");
    divElement("body");

    const tableEnter = enter.append("table").attr("class", "d3plus-tooltip-table");
    const table = update.select(".d3plus-tooltip-table");
    stylize(table, this._tableStyle);

    tableEnter.append("thead").attr("class", "d3plus-tooltip-thead");
    const tableHead = update.select(".d3plus-tooltip-thead");
    stylize(tableHead, this._theadStyle);
    const th = tableHead.selectAll("th").data(this._thead);
    th.enter().append("th").merge(th).html(cellContent);
    th.exit().remove();

    tableEnter.append("tbody").attr("class", "d3plus-tooltip-tbody");
    const tableBody = update.select(".d3plus-tooltip-tbody");
    stylize(tableBody, this._tbodyStyle);
    const tr = tableBody.selectAll("tr").data(this._tbody);
    const trEnter = tr.enter().append("tr");
    tr.exit().remove();
    const trUpdate = tr.merge(trEnter);
    const td = trUpdate.selectAll("td").data(d => d);
    td.enter().append("td").merge(td).html(cellContent);

    divElement("footer");

    divElement("arrow");

    enter.call(boxStyles);

    const t = transition().duration(this._duration);

    update
      .attr("id", (d, i) => `d3plus-tooltip-${d ? this._id(d, i) : ""}`)
      .transition(t)
        .style("opacity", 1)
        .call(boxStyles);

    tooltips.exit()
      .transition(t)
        .style("opacity", 0)
      .remove();

    for (let i = 0; i < this._data.length; i++) {
      const d = that._data[i];

      if (d) {
        const tooltip = document.getElementById(`d3plus-tooltip-${that._id(d, i)}`);
        const arrow = document.getElementById(`d3plus-tooltip-arrow-${that._id(d, i)}`);
        const arrowHeight = arrow.getBoundingClientRect().height;
        arrow.style.bottom = `-${arrowHeight / 2 + 1}px`;

        const arrowOffset = arrowHeight / 4;

        const referenceObject = Array.isArray(that._position(d, i)) ? {
          clientWidth: 0,
          clientHeight: 0,
          getBoundingClientRect: () => ({
            top: that._position(d)[1] - arrowOffset,
            right: that._position(d)[0] - arrowOffset,
            bottom: that._position(d)[1] - arrowOffset,
            left: that._position(d)[0] - arrowOffset,
            width: 0,
            height: 0
          })
        }
          : that._position(d, i);

        new Popper(referenceObject, tooltip, {
          placement: "top",
          modifiers: {
            arrow: {
              element: arrow
            },
            flip: {
              enabled: false
            },
            offset: {offset: `0,${that._offset()}`}
          },
          onCreate({instance}) {
            document.onmousemove = () => {
              instance.scheduleUpdate();
            };
          }
        });
      }
    }

    if (callback) setTimeout(callback, this._duration + 100);

    return this;

  }

  /**
   @memberof Tooltip
   @desc Sets the inner HTML content of the arrow element, which by default is empty.
   @param {Function|String} [*value*]
   @example <caption>default accessor</caption>
   function value(d) {
  return d.arrow || "";
}
   */
  arrow(_) {
    return arguments.length ? (this._arrow = typeof _ === "function" ? _ : constant(_), this) : this._arrow;
  }

  /**
   @memberof Tooltip
   @desc If *value* is specified, sets the arrow styles to the specified values and returns this generator. If *value* is not specified, returns the current arrow styles.
   @param {Object} [*value*]
   @example <caption>default styles</caption>
   {
     "content": "",
     "border-width": "10px",
     "border-style": "solid",
     "border-color": "rgba(255, 255, 255, 0.75) transparent transparent transparent",
     "position": "absolute"
   }
   */
  arrowStyle(_) {
    return arguments.length ? (this._arrowStyle = Object.assign(this._arrowStyle, _), this) : this._arrowStyle;
  }

  /**
      @memberof Tooltip
      @desc If *value* is specified, sets the background accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current background accessor.
      @param {Function|String} [*value* = "rgba(255, 255, 255, 0.75)"]
  */
  background(_) {
    return arguments.length ? (this._background = typeof _ === "function" ? _ : constant(_), this) : this._background;
  }

  /**
      @memberof Tooltip
      @desc If *value* is specified, sets the body accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current body accessor.
      @param {Function|String} [*value*]
      @example <caption>default accessor</caption>
function value(d) {
  return d.body || "";
}
  */
  body(_) {
    return arguments.length ? (this._body = typeof _ === "function" ? _ : constant(_), this) : this._body;
  }

  /**
      @memberof Tooltip
      @desc If *value* is specified, sets the body styles to the specified values and returns this generator. If *value* is not specified, returns the current body styles.
      @param {Object} [*value*]
      @example <caption>default styles</caption>
{
  "font-family": "'Roboto', 'Helvetica Neue', 'HelveticaNeue', 'Helvetica', 'Arial', sans-serif",
  "font-size": "12px",
  "font-weight": "400"
}
  */
  bodyStyle(_) {
    return arguments.length ? (this._bodyStyle = Object.assign(this._bodyStyle, _), this) : this._bodyStyle;
  }

  /**
      @memberof Tooltip
      @desc If *value* is specified, sets the border accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current border accessor.
      @param {Function|String} [*value* = "1px solid rgba(0, 0, 0, 0.1)"]
  */
  border(_) {
    return arguments.length ? (this._border = typeof _ === "function" ? _ : constant(_), this) : this._border;
  }

  /**
      @memberof Tooltip
      @desc If *value* is specified, sets the border-radius accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current border-radius accessor.
      @param {Function|String} [*value* = "2px"]
  */
  borderRadius(_) {
    return arguments.length ? (this._borderRadius = typeof _ === "function" ? _ : constant(_), this) : this._borderRadius;
  }

  /**
      @memberof Tooltip
      @desc If *value* is specified, sets the class name to the specified string and returns this generator. If *value* is not specified, returns the current class name.
      @param {String} [*value* = "d3plus-tooltip"]
  */
  className(_) {
    return arguments.length ? (this._className = _, this) : this._className;
  }

  /**
      @memberof Tooltip
      @desc If *data* is specified, sets the data array to the specified array and returns this generator. If *data* is not specified, returns the current data array.
      @param {Array} [*data* = []]
  */
  data(_) {
    return arguments.length ? (this._data = _, this) : this._data;
  }

  /**
      @memberof Tooltip
      @desc If *ms* is specified, sets the duration accessor to the specified function or number and returns this generator. If *ms* is not specified, returns the current duration accessor.
      @param {Function|Number} [*ms* = 200]
  */
  duration(_) {
    return arguments.length ? (this._duration = typeof _ === "function" ? _ : constant(_), this) : this._duration;
  }

  /**
      @memberof Tooltip
      @desc If *value* is specified, sets the footer accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current footer accessor.
      @param {Function|String} [*value*]
      @example <caption>default accessor</caption>
function value(d) {
  return d.footer || "";
}
  */
  footer(_) {
    return arguments.length ? (this._footer = typeof _ === "function" ? _ : constant(_), this) : this._footer;
  }

  /**
      @memberof Tooltip
      @desc If *value* is specified, sets the footer styles to the specified values and returns this generator. If *value* is not specified, returns the current footer styles.
      @param {Object} [*value*]
      @example <caption>default styles</caption>
{
  "font-family": "'Roboto', 'Helvetica Neue', 'HelveticaNeue', 'Helvetica', 'Arial', sans-serif",
  "font-size": "12px",
  "font-weight": "400"
}
  */
  footerStyle(_) {
    return arguments.length ? (this._footerStyle = Object.assign(this._footerStyle, _), this) : this._footerStyle;
  }

  /**
      @memberof Tooltip
      @desc If *value* is specified, sets the height accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current height accessor.
      @param {Function|String} [*value* = "auto"]
  */
  height(_) {
    return arguments.length ? (this._height = typeof _ === "function" ? _ : constant(_), this) : this._height;
  }

  /**
      @memberof Tooltip
      @desc If *value* is specified, sets the id accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current id accessor.
      @param {Function|String} [*value*]
      @example <caption>default accessor</caption>
function value(d, i) {
  return d.id || "" + i;
}
  */
  id(_) {
    return arguments.length ? (this._id = typeof _ === "function" ? _ : constant(_), this) : this._id;
  }

  /**
      @memberof Tooltip
      @desc If *value* is specified, sets the offset accessor to the specified function or number and returns this generator. If *value* is not specified, returns the current offset accessor.
      @param {Function|Number} [*value* = 10]
  */
  offset(_) {
    return arguments.length ? (this._offset = typeof _ === "function" ? _ : constant(_), this) : this._offset;
  }

  /**
      @memberof Tooltip
      @desc If *value* is specified, sets the padding accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current padding accessor.
      @param {Function|String} [*value* = "5px"]
  */
  padding(_) {
    return arguments.length ? (this._padding = typeof _ === "function" ? _ : constant(_), this) : this._padding;
  }

  /**
      @memberof Tooltip
      @desc If *value* is specified, sets the pointer-events accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current pointer-events accessor.
      @param {Function|String} [*value* = "auto"]
  */
  pointerEvents(_) {
    return arguments.length ? (this._pointerEvents = typeof _ === "function" ? _ : constant(_), this) : this._pointerEvents;
  }

  /**
      @memberof Tooltip
      @desc If *value* is specified, sets the position accessor to the specified function or array and returns this generator. If *value* is not specified, returns the current position accessor. If *value* is an HTMLElement, positions the Tooltip near that HTMLElement.
      @param {Function|Array|HTMLElement} [*value*]
      @example <caption>default accessor</caption>
   function value(d) {
    return [d.x, d.y];
  }
   */
  position(_) {
    return arguments.length ? (this._position = typeof _ === "function" ? _ : constant(_), this) : this._position;
  }

  /**
      @memberof Tooltip
      @desc If *value* is specified, sets the table styles to the specified values and returns this generator. If *value* is not specified, returns the current table styles.
      @param {Object} [*value*]
      @example <caption>default styles</caption>
{
  "border-spacing": "0",
  "width": "100%"
}
  */
  tableStyle(_) {
    return arguments.length ? (this._tableStyle = Object.assign(this._tableStyle, _), this) : this._tableStyle;
  }

  /**
      @memberof Tooltip
      @desc If *value* is specified, sets the contents of the table body to the specified array of functions or strings and returns this generator. If *value* is not specified, returns the current table body data.
      @param {Array} [*value* = []]
  */
  tbody(_) {
    return arguments.length ? (this._tbody = _, this) : this._tbody;
  }

  /**
      @memberof Tooltip
      @desc If *value* is specified, sets the table body styles to the specified values and returns this generator. If *value* is not specified, returns the current table body styles.
      @param {Object} [*value*]
      @example <caption>default styles</caption>
{
  "font-family": "'Roboto', 'Helvetica Neue', 'HelveticaNeue', 'Helvetica', 'Arial', sans-serif",
  "font-size": "12px",
  "font-weight": "600",
  "text-align": "center"
}
  */
  tbodyStyle(_) {
    return arguments.length ? (this._tbodyStyle = Object.assign(this._tbodyStyle, _), this) : this._tbodyStyle;
  }

  /**
      @memberof Tooltip
      @desc If *value* is specified, sets the contents of the table head to the specified array of functions or strings and returns this generator. If *value* is not specified, returns the current table head data.
      @param {Array} [*value* = []]
  */
  thead(_) {
    return arguments.length ? (this._thead = _, this) : this._thead;
  }

  /**
      @memberof Tooltip
      @desc If *value* is specified, sets the table head styles to the specified values and returns this generator. If *value* is not specified, returns the current table head styles.
      @param {Object} [*value*]
      @example <caption>default styles</caption>
{
  "font-family": "'Roboto', 'Helvetica Neue', 'HelveticaNeue', 'Helvetica', 'Arial', sans-serif",
  "font-size": "12px",
  "font-weight": "600",
  "text-align": "center"
}
  */
  theadStyle(_) {
    return arguments.length ? (this._theadStyle = Object.assign(this._theadStyle, _), this) : this._theadStyle;
  }

  /**
      @memberof Tooltip
      @desc If *value* is specified, sets the title accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current title accessor.
      @param {Function|String} [*value*]
      @example <caption>default accessor</caption>
function value(d) {
  return d.title || "";
}
  */
  title(_) {
    return arguments.length ? (this._title = typeof _ === "function" ? _ : constant(_), this) : this._title;
  }

  /**
      @memberof Tooltip
      @desc If *value* is specified, sets the title styles to the specified values and returns this generator. If *value* is not specified, returns the current title styles.
      @param {Object} [*value*]
      @example <caption>default styles</caption>
{
  "font-family": "'Roboto', 'Helvetica Neue', 'HelveticaNeue', 'Helvetica', 'Arial', sans-serif",
  "font-size": "14px",
  "font-weight": "600",
  "padding-bottom": "5px"
}
  */
  titleStyle(_) {
    return arguments.length ? (this._titleStyle = Object.assign(this._titleStyle, _), this) : this._titleStyle;
  }

  /**
      @memberof Tooltip
      @desc If *value* is specified, sets the width accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current width accessor.
      @param {Function|String} [*value* = "auto"]
  */
  width(_) {
    return arguments.length ? (this._width = typeof _ === "function" ? _ : constant(_), this) : this._width;
  }

}
