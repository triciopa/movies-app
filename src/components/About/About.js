import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <div>
        <h2>The revolution team</h2>
        <div id="post">
          <h3>Born separately and destiny joined us</h3>
          <p>
            The history of the team begin with crazy bad-tempered old people who
            got dirty lips and drools a lot. Then a bunch of deformed and
            ill-looking babies from medieval times came to play, only for us to
            notice that we need to make an effort to filter who was entering our
            exclusive squad.
          </p>
          <p>
            Then the centuries went by, and after a long list of sargeants and
            corporals that were sent-off because of having crazy popping eyes, a
            right and fair pair of high commanders portrayed the scene.
          </p>
          <p>
            Luckily, after several attempts from the Dark side to divide and
            conquer our headquarter, we have managed to recover some marvelous
            paintings which describes vigorously the spirit of this joint
            venture:
          </p>
          <div className="museum">
            <img src="https://media.discordapp.net/attachments/803407061203025931/811759384027856956/IMG_20210217_214331.jpg?width=800&height=670" />
            <img src="https://cdn.discordapp.com/attachments/803407061203025931/811756674389508136/images.png" />
            <img src="https://cdn.discordapp.com/attachments/803407061203025931/811758091233656912/IMG_20210217_213824.jpg" />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
