"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
// Import stylesheets
require("./style.scss");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var operator_data_1 = require("./operator-data");
var d3_table_cards_1 = require("./d3-table-cards");
// console.clear();
var data = operator_data_1.data;
var orderElem = document.getElementById('order');
renderSortButtons(orderElem, Object.keys(operator_data_1.data[0]));
var layoutConfig = {
    table: {
        // ---- row position & size
        top: function (d, i) { return 40 + i * 29 + 'px'; },
        left: 0 + 'px',
        height: 28 + 'px',
        width: 590 + 'px'
    },
    cards: {
        // ---- card position & size
        top: function (d, i) { return Math.floor(i / getCardsPerRow()) * 90 + 'px'; },
        left: function (d, i) { return (i % getCardsPerRow()) * 200 + 'px'; },
        height: 80 + 'px',
        width: 188 + 'px'
    }
};
var shuffleCards = new d3_table_cards_1.ShuffleCards(operator_data_1.data, layoutConfig);
// ==========================================================================
var layoutTableBtn = document.getElementById('table');
var layoutCardBtn = document.getElementById('cards');
var windowResize$ = rxjs_1.fromEvent(window, 'resize');
var layoutTable$ = rxjs_1.fromEvent(layoutTableBtn, 'click');
var layoutCard$ = rxjs_1.fromEvent(layoutCardBtn, 'click');
var currentLayout = 'cards';
shuffleCards.render(currentLayout);
// =============
var state$ = rxjs_1.merge(layoutCard$.pipe(operators_1.mapTo({ layout: 'cards' })), layoutTable$.pipe(operators_1.mapTo({ layout: 'table' })), rxjs_1.defer(getObservableFromFilterbuttons)
    .pipe(operators_1.mergeAll(), operators_1.map(function (o) { return ({ sortKey: o.target.id.split('-').pop() }); }))).pipe(operators_1.startWith({
    layout: 'cards',
    sortKey: 'id',
    sortDirection: 1
}), operators_1.scan(function (state, command) {
    command.sortDirection = (command.sortKey && command.sortKey === state.sortKey) ? -state.sortDirection : 1;
    return __assign({}, state, command);
}));
var layout$ = state$.pipe(operators_1.map(function (s) { return s['layout']; }), operators_1.distinctUntilChanged());
var sortKey$ = state$.pipe(operators_1.map(function (s) { return s['sortKey']; }), operators_1.distinctUntilChanged());
var sortDirection$ = state$.pipe(operators_1.map(function (s) { return s['sortDirection']; }), operators_1.distinctUntilChanged());
rxjs_1.merge(sortKey$.pipe(rxjs_1.combineLatest(windowResize$), operators_1.tap(function (_a) {
    var s = _a[0], w = _a[1];
    return shuffleCards.layout(currentLayout, getItemClassFactory(s));
})), layout$
    .pipe(operators_1.tap(function (layout) { return shuffleCards.layout(layout); })), rxjs_1.combineLatest(sortKey$, sortDirection$, layout$)
    .pipe(operators_1.tap(function (_a) {
    var s = _a[0], d = _a[1], l = _a[2];
    shuffleCards.sort(s, d);
    shuffleCards.layout(l, getItemClassFactory(s), false, true);
})))
    .subscribe();
// ========================================================================
function getItemClassFactory(sortKey) {
    return function (d) {
        // console.log('group-' + d[sortKey]);
        return 'item group-' + d[sortKey];
    };
}
function renderSortButtons(parent, keys) {
    parent.innerHTML = keys
        .map(function (k) {
        return "<button class=\"sort\" id=\"sort-" + k + "\">" + k + "</button>";
    })
        .join('');
}
function getObservableFromFilterbuttons() {
    var obs = [];
    document.querySelectorAll('.sort')
        .forEach(function (elem) {
        obs.push(rxjs_1.fromEvent(elem, 'click'));
    });
    return rxjs_1.from(obs);
}
function getCardsPerRow() {
    var width = window.innerWidth - 20;
    return Math.floor(width / 200);
}
