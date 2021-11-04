import React from "react";
import "./select.css";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";

class Select extends React.Component {
  state = {
    isLoading: true,
  };
  componentDidMount() {
    this.setState({ isLoading: false });
  }
  render(props) {
    const { isLoading } = this.state;
    const { match } = this.props;

    return (
      <section className="sel_container">
        {isLoading ? (
          <div className="loader">
            <Spinner animation="border" variant="success" />
            <p>Loading...</p>
          </div>
        ) : (
          <div className="select">
            <div className="select__title">
              <p className="p1">Select Your Diet Type</p>
            </div>
            <div className="select__part">
              <div className="select__vegan">
                <h2>vegan</h2>
                <span className="vegan__icon">🌾</span>
                <div className="vegan__text">
                  <span>Fruits & Vegetables</span>
                  <span>Beans, Nuts and Seeds</span>
                  <span>Breads, rice, and pasta</span>
                  <span>Dairy alternatives</span>
                  <p>
                    <span className="Item_number">901</span> Items
                  </p>
                </div>
                <Link to={{ pathname: `/select/vegan`, state: { props } }}>
                  Click
                </Link>
              </div>
              <div className="select__ovo">
                <h2>ovo</h2>
                <span className="ovo__icon">🥚</span>
                <div className="ovo__text">
                  <span>Fruits & Vegetables</span>
                  <span>Beans, Nuts and Seeds</span>
                  <span>Oils & Beverages</span>
                  <span>Eggs and egg products</span>
                  <p>
                    <span className="Item_number">123</span> Items
                  </p>
                </div>
                <Link to={{ pathname: `${match.url}/ovo` }}>Click</Link>
              </div>
              <div className="select__lacto">
                <h2>lacto</h2>
                <span className="lacto__icon">🧀</span>
                <div className="lacto__text">
                  <span>Beans, Nuts and Seeds</span>
                  <span>Fruits & Vegetables</span>
                  <span>Protein foods like tofu</span>
                  <span>Dairy products & Honey</span>
                  <p>
                    <span className="Item_number">248</span> Items
                  </p>
                </div>
                <Link to={{ pathname: `${match.url}/lacto` }}>Click</Link>
              </div>
              <div className="select__lactoOvo">
                <h2>lacto-ovo</h2>
                <span className="lactoOvo__icon">🥛</span>
                <div className="lactoOvo__text">
                  <span>Fruits & Vegetables</span>
                  <span>Protein foods like tofu</span>
                  <span>seeds and nut butters</span>
                  <span>Dairy products & Cheese</span>
                  <p>
                    <span className="Item_number">28</span> Items
                  </p>
                </div>
                <Link to={{ pathname: `${match.url}/lactoOvo` }}>Click</Link>
              </div>
              <div className="select__pesce">
                <h2>pesce</h2>
                <span className="pesce__icon">🐟</span>
                <div className="pesce__text">
                  <span>Fruits & Vegetables</span>
                  <span>Protein foods</span>
                  <span>seeds and nut butters</span>
                  <span>SeaFoods like fish</span>
                  <p>
                    <span className="Item_number">351</span> Items
                  </p>
                </div>
                <Link to={{ pathname: `${match.url}/pesce` }}>Click</Link>
              </div>
            </div>
            <div className="select__bg"></div>
          </div>
        )}
      </section>
    );
  }
}
export default Select;
