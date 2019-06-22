"use strict";
exports.__esModule = true;
// https://github.com/evoluteur/d3-table-cards
// (c) 2018 Olivier Giulieri
require("./style");
var d3 = require("d3");
var ShuffleCards = /** @class */ (function () {
    function ShuffleCards(data, layoutConfig) {
        var _this = this;
        this.animTime = 650;
        this.selectors = {
            parentId: '#holder',
            itemClass: '.item',
            titleClass: 'title',
            descriptionClass: 'description'
        };
        this.layoutConfig = {
            table: {
                // ---- row position & size
                top: function (d, i) { return 40 + i * 29 + 'px'; },
                left: 0 + 'px',
                height: 28 + 'px',
                width: 590 + 'px'
            },
            cards: {
                // ---- card position & size
                top: function (d, i) { return Math.floor(i / _this.getCardsPerRow()) * 90 + 'px'; },
                left: function (d, i) { return (i % _this.getCardsPerRow()) * 200 + 'px'; },
                height: 80 + 'px',
                width: 188 + 'px'
            }
        };
        this.data = data;
        this.layoutConfig = layoutConfig;
    }
    ShuffleCards.prototype.setData = function (data) {
        this.data = data;
        this.render();
    };
    ShuffleCards.prototype.getCardsPerRow = function () {
        var width = window.innerWidth - 20;
        return Math.floor(width / 200);
    };
    ShuffleCards.prototype.getLayoutInfo = function (style) {
        if (this.layoutConfig[style]) {
            return this.layoutConfig[style];
        }
        else {
            return this.layoutConfig.cards;
        }
    };
    ShuffleCards.prototype.render = function (currentLayout) {
        if (currentLayout === void 0) { currentLayout = 'cards'; }
        var l = this.getLayoutInfo(currentLayout);
        this.holder = d3.select(this.selectors.parentId);
        var sel = this.holder.selectAll(this.selectors.itemClass)
            .data(this.data, function (d) { return d.id; })
            .enter()
            .append('div')
            .attr('class', function (d) { return 'item'; });
        sel.insert('div')
            .attr('class', this.selectors.titleClass)
            .html(function (d) { return d.name; });
        sel.insert('div')
            .attr('class', this.selectors.descriptionClass)
            .html(function (d) { return d.id + ' ' + d.michael; });
        this.layout(currentLayout, function (d) { return ''; }, true, false);
    };
    ShuffleCards.prototype.redraw = function (style) {
        this.layout(style);
    };
    ShuffleCards.prototype.sort = function (key, direction) {
        this.data.sort(direction > 0 ?
            function (a, b) {
                return (a[key] + a.name).localeCompare(b[key] + b.name);
            } :
            function (a, b) {
                return (b[key] + b.name).localeCompare((a[key] + a.name));
            });
    };
    ShuffleCards.prototype.layout = function (layout, getItemClass, skipAnim, skipChildren) {
        if (getItemClass === void 0) { getItemClass = function (d) { return ''; }; }
        if (skipAnim === void 0) { skipAnim = false; }
        if (skipChildren === void 0) { skipChildren = false; }
        var l = this.getLayoutInfo(layout), t = d3.transition().duration(skipAnim ? 0 : this.animTime);
        this.holder.attr("class", layout);
        this.holder.selectAll(this.selectors.itemClass)
            .data(this.data, function (d) { return d.id; })
            .transition(t)
            .style('left', l.left)
            .style('top', l.top)
            .style('height', l.height)
            .style('width', l.width)
            .attr('class', getItemClass);
        if (!skipChildren) {
            var totalHeight = 20 + (layout === 'cards' ?
                Math.ceil(this.data.length / this.getCardsPerRow()) * 90 : 40 + this.data.length * 29);
            this.holder.transition(t)
                .style('height', totalHeight);
        }
    };
    return ShuffleCards;
}());
exports.ShuffleCards = ShuffleCards;
