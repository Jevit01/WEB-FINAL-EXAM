// This is definitely a start. Stil missing the ability
// to add a comment and to do favoriting.
// Search should filter upon submit, not on change.

// Missing componenets for poplular and genre with their functionality.
// Please refer to the instructions for those details.

// Good backend, you got this, keep on a pushing!

import React, { Component } from "react";
import { MyContext } from "../../Provider/MyProvider.js";

class Songs extends Component {
  render() {
    return (
      <>
        <MyContext.Consumer>
          {context => {
            return (
              <>
                <br />
                <br />
                <form onSubmit={context.func.handleSubmit}>
                  <input
                    type="text"
                    value={context.state.input}
                    onChange={context.func.handleChange}
                    placeholder="Search Song"
                    className="find"
                  />
                  <input type="submit" value="Search By Title" />
                </form>
                <br />
                <div>{context.func.songs()}</div>
                <br />
              </>
            );
          }}
        </MyContext.Consumer>
      </>
    );
  }
}

export default Songs;
