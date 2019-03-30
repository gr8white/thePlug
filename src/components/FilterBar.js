import React, { Component } from 'react'
import bulmaAccordion from 'bulma-extensions/bulma-accordion/src/js/index.js'
import { connect } from 'react-redux';
import {sortByMaxPrice, sortByMinPrice, setBrand, setColor, setSize} from '../reducers/actions/filterActions'

class FilterBar extends Component{

  componentDidMount(){
    bulmaAccordion.attach()
  }

  handleSortByMaxPrice = () => { this.props.startSortByMaxPrice(); }

  handleSortByMinPrice = () => { this.props.startSortByMinPrice(); }

  handleSetBrand = (e) => { this.props.startSetBrand(e.target.value); }

  handleSetColor = (e) => { this.props.startSetColor(e.target.value); }

  handleSetSize = (e) => { this.props.startSetSize(e.target.value); }

  handleResetFilter = () => {
    document.getElementById("filterForm").reset();
    console.log("filters reset")
  }

  render(){
    return (
      <div className="box filterBar">
        <h5 className="title is-5">Filters</h5>
        <form className="accordions is-fixed-top" id="filterForm" style={{width: 100 + '%'}}>
          <article className="accordion is-primary">
            <div className="accordion-header toggle">
              <p>Brand</p>
            </div>
            <div className="accordion-body">
              <div className="accordion-content" id="filter-brand-input" onChange={this.handleSetBrand}>
                <div className="columns">
                  <div className="column">
                    <label className="checkbox">
                      <input type="checkbox"/>
                      Nike
                    </label>
                    <label className="checkbox">
                      <input type="checkbox"/>
                      Jordan
                    </label>
                    <label className="checkbox">
                      <input type="checkbox"/>
                      Vans
                    </label>
                    <label className="checkbox">
                      <input type="checkbox"/>
                      Fear of God
                    </label>
                    <label className="checkbox">
                      <input type="checkbox"/>
                      Kith
                    </label>
                  </div>
                  <div className="column">
                    <label className="checkbox">
                      <input type="checkbox"/>
                      Adidas
                    </label>
                    <label className="checkbox">
                      <input type="checkbox"/>
                      Converse
                    </label>
                    <label className="checkbox">
                      <input type="checkbox"/>
                      Off-White
                    </label>
                    <label className="checkbox">
                      <input type="checkbox"/>
                      Yeezy
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article className="accordion is-primary">
            <div className="accordion-header toggle">
              <p>Color</p>
            </div>
            <div className="accordion-body">
              <div className="accordion-content" id="filter-color-input" onChange={this.handleSetColor}>
                <div className="columns">
                  <div className="column">
                    <label className="checkbox">
                      <input type="checkbox"/>
                      Black
                    </label>
                    <label className="checkbox">
                      <input type="checkbox"/>
                      Yellow
                    </label>
                    <label className="checkbox">
                      <input type="checkbox"/>
                      Red
                    </label>
                    <label className="checkbox">
                      <input type="checkbox"/>
                      Green
                    </label>
                    <label className="checkbox">
                      <input type="checkbox"/>
                      Multi-Color
                    </label>
                  </div>
                  <div className="column">
                    <label className="checkbox">
                      <input type="checkbox"/>
                      White
                    </label>
                    <label className="checkbox">
                      <input type="checkbox"/>
                      Blue
                    </label>
                    <label className="checkbox">
                      <input type="checkbox"/>
                      Green
                    </label>
                    <label className="checkbox">
                      <input type="checkbox"/>
                      Pink
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article className="accordion is-primary">
            <div className="accordion-header toggle">
              <p>Size</p>
            </div>
            <div className="accordion-body" >
              <div className="buttons sizeButtons" onClick={this.handleSetSize}>
                <span className="button is-primary is-outlined">7</span>
                <span className="button is-primary is-outlined">7.5</span>
                <span className="button is-primary is-outlined">8</span>
                <span className="button is-static">8.5</span>
                <span className="button is-static">9</span>
                <span className="button is-primary is-outlined">9.5</span>
                <span className="button is-static">10</span>
                <span className="button is-primary is-outlined">10.5</span>
                <span className="button is-primary is-outlined">11</span>
                <span className="button is-primary is-outlined">11.5</span>
                <span className="button is-primary is-outlined">12</span>
                <span className="button is-primary is-outlined">12.5</span>
              </div>
            </div>
          </article>
          <article className="accordion is-primary">
            <div className="accordion-header toggle">
              <p>Price</p>
            </div>
            <div className="accordion-body">
              <div className="accordion-content">
              <span className="button is-primary is-outlined" onClick={this.handleSortByMinPrice}>Price Low to High</span>
                <span className="button is-primary is-outlined" onClick={this.handleSortByMaxPrice}>Price High to Low</span>
              </div>
            </div>
          </article>
        </form>
        <button className="button is-fullwidth is-primary" style={{marginTop: 20 + 'px'}} onClick={this.handleResetFilter}>Reset Filters</button>
      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     products: selectProducts(state.sneakers.sneakers, state.filters),
//   };
// };

const mapDispatchToProps = (dispatch) => ({
  startSortByMaxPrice: () => dispatch(sortByMaxPrice()),
  startSortByMinPrice: () => dispatch(sortByMinPrice()),
  startSetBrand: (brand) => dispatch(setBrand(brand)),
  startSetColor: (color) => dispatch(setColor(color)),
  startSetSize: (size) => dispatch(setSize(size))
});

export default connect(null, mapDispatchToProps)(FilterBar)

