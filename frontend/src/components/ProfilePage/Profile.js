// Think about only showing the form for the posted tab.
// I was on favorites and didn't know that it was
// working until I went to posted and saw I'd made about
// five posts while trying :-).
// Add CSS effect so I know which toggle i'm on.
// Favoriting should still work.
// Posts I should still be able to comment and
// see whom posted. I should be able to go vist other
// peoples profils. 


import React, { Component } from "react";
import PostForm from "./PostForm.js";
import SongDisplay from "../SongDisplay.js";
import { MyContext } from "../../Provider/MyProvider.js";
const axios = require("axios");

class Profile extends Component {
  render() {
    return (
      <>
        <MyContext.Consumer>
          {context => {
            let nameSearch = context.state.users.map(res => {
              if (res.id === 1) {
                return res.username;
              }
              return nameSearch;
            });

            return (
              <>
                <h2 className="username">{nameSearch}</h2>
                <br />
                <PostForm showUsersPosts={context.func.showUsersPosts} />
                <br />
                <button onClick={context.func.showUsersPosts}>Posts</button>
                <button onClick={context.func.showFavorites}>Favorites</button>
                {context.state.compDisplay === "posts" ? (
                  <div>{context.func.usersSongs()}</div>
                ) : (
                  ""
                )}
                {context.state.compDisplay === "favs" ? (
                  <div>{context.func.fav()}</div>
                ) : (
                  ""
                )}
                <br />
              </>
            );
          }}
        </MyContext.Consumer>
      </>
    );
  }
}

export default Profile;
