const React = require('react');
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";

class Footer extends React.Component {

    constructor(props) {
      super(props);
      console.log('Initializing Header.')
    }
  
    render() {
  
      return (
        <div className="pages-header-container">
          <div className="header-wrapper">
            <h1>We’re a creative studio specialised in visual essays and interactive documentaries.</h1>
          </div>
        </div>
      );
    }
  }
  
  module.exports = Footer;

  // <div className="header-cta"><a href="https://buymeacoffee.com/buriedsignals" target="_blank" rel="noreferrer">BUY US COFFEE</a></div>