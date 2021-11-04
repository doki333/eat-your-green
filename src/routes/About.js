import React from "react";

function About() {
  return (
    <div className="about">
      <div className="about__bg1"></div>
      <div className="about__section">
        <img
          src="https://themissinggraph.files.wordpress.com/2011/04/wearewhatweeat-v-1-1-28apr2011.jpg"
          alt="vegetarianism introduction"
        ></img>
      </div>
      <div className="about__text">
        <p className="about__title">What's Vegetarianism?</p>
        <span className="about__explain">
          According to the Vegetarian Society, a vegetarian is someone who does
          not eat any meat, poultry, game, fish, shellfish, or by-products of
          animal slaughter. Vegetarian diets contain various levels of fruits,
          vegetables, grains, pulses, nuts, and seeds. The inclusion of dairy,
          honey, and eggs depends on the type of diet you follow.
        </span>
      </div>
      <div className="about__bg2"></div>
      <div className="about__bg3"></div>
    </div>
  );
}

export default About;
