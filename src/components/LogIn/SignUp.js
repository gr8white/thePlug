import React, { Component } from 'react'

export default class SignUp extends Component {
  render() {
    return (
      <div>
        <label class="label">Sign Up</label>
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input class="input" type="name" placeholder="Name"/>
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input class="input" type="email" placeholder="Email"/>
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input class="input" type="password" placeholder="Password"/>
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control">
            <button class="button is-success">
              Sign Up
            </button>
          </p>
        </div>
      </div>
    )
  }
}

