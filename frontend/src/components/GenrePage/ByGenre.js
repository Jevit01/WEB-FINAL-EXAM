// Still missing all of functionality as Songs.js .
// However, I"m getting some odd behaivor here as well.
// All songs should show when page is listed and then
// they should be filtered down on the submit.
// I"m getting duplicates from yours and also getting
// ones to append to previous list. Exp. pop, rock, then pop.
// YOu'll get Grande a couple of times.

import React, { Component } from "react";
import { MyContext } from "../../Provider/MyProvider.js";
const axios = require("axios");

class ByGenre extends Component {
  render() {
    return (
      <>
        <MyContext.Consumer>
          {context => {
            console.log(context);
            return (
              <>
                <form onSubmit={context.func.handleGenreSubmit}>
                  <select
                    name="selectedGenre"
                    onChange={context.func.handleSelect}
                    value={Number(context.state.selectedGenre)}
                  >
                    <option value=""> </option>
                    {context.func.genreList()}
                  </select>
                  <button type="submit">Submit</button>
                </form>
                <div>{context.func.genreDisplay()}</div>
              </>
            );
          }}
        </MyContext.Consumer>
      </>
    );
  }
}

export default ByGenre;
