// https://github.com/evoluteur/d3-table-cards
// (c) 2018 Olivier Giulieri
import './style';
import * as d3 from "d3";

export class ShuffleCards {
  animTime = 650;

  selectors = {
    parentId: '#holder',
    itemClass: '.item',
    titleClass: 'title',
    descriptionClass: 'description'
  };

  layoutConfig = {
    table: {
      // ---- row position & size
      top: (d, i) => 40+i*29+'px',
      left: 0+'px',
      height: 28+'px',
      width: 590+'px',
    },
    cards: {
      // ---- card position & size
      top: (d, i) => Math.floor(i/this.getCardsPerRow()) * 90 + 'px',
      left: (d, i) => (i%this.getCardsPerRow()) * 200 + 'px',
      height: 80+'px',
      width: 188+'px'
    }
  };

  holder; // = d3.select(this.selectors.parentId);

  data;
  
  constructor(data, layoutConfig) {
    this.data = data;
    this.layoutConfig = layoutConfig;
  }

  setData(data) {
    this.data = data;
    this.render();
  }

  getCardsPerRow(): number {
    const width = window.innerWidth - 20;
    return Math.floor(width / 200);
  }

  getLayoutInfo(style) {
    if(this.layoutConfig[style]) {
      return this.layoutConfig[style];
    }
    else {
      return this.layoutConfig.cards;
    } 
  }

  render(currentLayout: string = 'cards'){
    const l = this.getLayoutInfo(currentLayout);
    this.holder = d3.select(this.selectors.parentId);
    const sel = this.holder.selectAll(this.selectors.itemClass)
      .data(this.data, d => d.id)
      .enter()
      .append('div')
      .attr('class', d => 'item');

    sel.insert('div')
      .attr('class', this.selectors.titleClass)
      .html(d => d.name);
    sel.insert('div')
      .attr('class', this.selectors.descriptionClass)
      .html(d => d.id + ' ' + d.michael);

    this.layout(currentLayout,(d) => '', true, false);
  }

  redraw(style) {
    this.layout(style);
  }

  sort(key: string, direction: number) {
    this.data.sort(direction > 0 ? 
      (a, b) => {
        return (a[key] + a.name).localeCompare(b[key] + b.name);
      } : 
      (a, b) => {
        return (b[key] + b.name).localeCompare((a[key] + a.name));
      });
  }

  layout(layout: string, getItemClass = (d) => '', skipAnim = false, skipChildren = false){
    const l = this.getLayoutInfo(layout),
          t = d3.transition().duration(skipAnim ? 0 : this.animTime);
    
    this.holder.attr("class", layout);

    this.holder.selectAll(this.selectors.itemClass)
      .data(this.data, d =>  d.id)
      .transition(t)
      .style('left', l.left)
      .style('top', l.top)
      .style('height', l.height)
      .style('width', l.width)
      .attr('class', getItemClass);

    if(!skipChildren) {
      const totalHeight = 20+(layout === 'cards' ?
          Math.ceil(this.data.length / this.getCardsPerRow()) * 90 : 40 + this.data.length * 29);

      this.holder.transition(t)
        .style('height', totalHeight);
    }
  }

}