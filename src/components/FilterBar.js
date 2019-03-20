import React, { Component } from 'react'
import bulmaAccordion from 'bulma-extensions/bulma-accordion/src/js/index.js'

class FilterBar extends Component{

  componentDidMount(){
    bulmaAccordion.attach()
  }

  render(){
    return (
      <div className="box filterBar">
        <h5 className="title is-5">Filters</h5>
        <section className="accordions is-fixed-top" style={{width: 100 + '%'}}>
          <article className="accordion is-primary">
            <div className="accordion-header toggle">
              <p>Brand</p>
            </div>
            <div className="accordion-body">
              <div className="accordion-content">
                <div className="columns">
                  <div className="column">
                    <label class="checkbox">
                      <input type="checkbox"/>
                      Nike
                    </label>
                    <label class="checkbox">
                      <input type="checkbox"/>
                      Jordan
                    </label>
                    <label class="checkbox">
                      <input type="checkbox"/>
                      Vans
                    </label>
                    <label class="checkbox">
                      <input type="checkbox"/>
                      Fear of God
                    </label>
                    <label class="checkbox">
                      <input type="checkbox"/>
                      Kith
                    </label>
                  </div>
                  <div className="column">
                    <label class="checkbox">
                      <input type="checkbox"/>
                      Adidas
                    </label>
                    <label class="checkbox">
                      <input type="checkbox"/>
                      Converse
                    </label>
                    <label class="checkbox">
                      <input type="checkbox"/>
                      Off-White
                    </label>
                    <label class="checkbox">
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
              <div className="accordion-content">
                <div className="columns">
                  <div className="column">
                    <label class="checkbox">
                      <input type="checkbox"/>
                      Black
                    </label>
                    <label class="checkbox">
                      <input type="checkbox"/>
                      Yellow
                    </label>
                    <label class="checkbox">
                      <input type="checkbox"/>
                      Red
                    </label>
                    <label class="checkbox">
                      <input type="checkbox"/>
                      Green
                    </label>
                    <label class="checkbox">
                      <input type="checkbox"/>
                      Multi-Color
                    </label>
                  </div>
                  <div className="column">
                    <label class="checkbox">
                      <input type="checkbox"/>
                      White
                    </label>
                    <label class="checkbox">
                      <input type="checkbox"/>
                      Blue
                    </label>
                    <label class="checkbox">
                      <input type="checkbox"/>
                      Green
                    </label>
                    <label class="checkbox">
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
            <div className="accordion-body">
              <div className="buttons sizeButtons" >
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
                <label class="checkbox">
                  <input type="checkbox"/>
                  $1000 +
                </label>
                <br/>
                <label class="checkbox">
                  <input type="checkbox"/>
                  $500 - $999
                </label>
                <br/>
                <label class="checkbox">
                  <input type="checkbox"/>
                  $350 - $499
                </label>
                <br/>
                <label class="checkbox">
                  <input type="checkbox"/>
                  $100 - $349
                </label>
                <br/>
                <label class="checkbox">
                  <input type="checkbox"/>
                  Under $99
                </label>
              </div>
            </div>
          </article>
        </section>
        <button class="button is-fullwidth is-primary" style={{marginTop: 20 + 'px'}}>Set Filters</button>
      </div>
    )
  }
}

export default FilterBar

