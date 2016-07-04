import React, { Component } from 'react';
import { Link } from 'react-router';
import IconButton from 'material-ui/IconButton';
import Build from 'material-ui/svg-icons/action/build';
import FontIcon from 'material-ui/FontIcon';

const style = {
  footer: {
    position: 'relative',
    height: 135,
    verticalAlign: 'bottom',
    backgroundColor: '#212121',
    color: '#585858',
  },
  icon: {
    color: '#585858',
  }

}
export default class Footer extends Component {

  render(){
    return (
      <footer style={style.footer} >
        <div>
          <div>Built By</div><div><Love style={style.icon} color="#585858"/></div><div> Joey Cursoli, Doug Cole, and Drew Baugher</div>
          <div><IconButton linkButton={true} href="https://github.com/tribarbe/techprep"><FontIcon style={style.icon} className="muidocs-icon-custom-github" color="#585858" hoverColor="#FFF"/></IconButton></div>
        </div>
      </footer>
    );
  }
}