import React, { Component } from "react";
import { MyContext } from "../../Provider/MyProvider.js";


//Commenting not working.  I suggest add a console.log(req.body);
// in your post query and seeing why.

//Favoriting actions not functional :-(.

//Search should only filter on the sumbit. Not a
// live action search. Also, yours is only working
// for partial matches from the beginning of title.
//I should be able to just search rhapsody.
//songs don't show poster of song.

//Commenting text filling up all inputs... 


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
