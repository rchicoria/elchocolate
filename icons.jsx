'use strict';

import React from 'react';

/*
 * Subset of the SVG icon collection from the Polymer project (goo.gl/N7SB5G)
 */
export default React.createClass({
  propTypes: {
    icon: React.PropTypes.string.isRequired,
    size: React.PropTypes.string
  },
  getDefaultProps() {
    return {
      size: '24px'
    };
  },
  renderGraphic() {
    switch (this.props.icon) {
      case 'logo':
		  return (
			<g>
				<path d="M23.9,9.8c-0.1-0.4-0.1-0.6-0.3-0.7l0,0c-0.1-0.1-0.2-0.2-0.3-0.2c-0.3,0-0.5,0.1-0.6,0.4
					c0,0.1,0,0.2,0.1,0.3l0,0c0.4,0.6-0.1,1.1-0.2,1.1c-1.1,0.9-2,0.8-3-0.3c-0.6-0.6-1.1-1.3-1.9-1.7c-1.2-0.6-2.4-0.8-3.6-0.3
					c-0.6,0.3-1.1,0.7-1.5,1.3c-0.1,0.1-0.2,0.2-0.3,0.3c-0.1-0.1-0.2-0.2-0.2-0.3c-0.5-0.6-0.9-1-1.5-1.3C9.5,8,8.3,8.3,7.2,8.9
					c-0.8,0.4-1.4,1-1.9,1.7c-0.9,1.1-1.9,1.1-3,0.3C2.1,10.7,1.6,10.4,2,9.7l0,0c0.1-0.2,0.1-0.3,0.1-0.5c0-0.3-0.3-0.4-0.6-0.4
					C1.4,8.9,1.4,9,1.3,9.1l0,0C1.2,9.3,1.1,9.5,1.1,9.8c-0.1,0.5,0,1.1,0.1,1.5c0.6,1.8,1.5,2.9,3,3.5c0.5,1.1,0.1,1.9,0.6,1.9
					c0.4,0,0.2-1.1,0.4-1.4c0,0,0.1-0.2,0.4-0.2c0,0,0,0,0.1,0c0,0,0,0,0.1,0c0.3,0.1,0.5,0,0.6,0.6c0,0.3,0.2,0.4,0.4,0.3
					c0.2-0.1,0.3-0.6,0.5-0.6c1.6,0,3-0.5,4.4-1.6c0.4-0.3,0.7-0.6,1.1-1c0.4,0.4,0.7,0.6,1.1,1c0.4,0.3,0.7,0.6,1.2,0.7l0,0
					c0.3,0.1,0.4,0.4,0.4,0.7c0,0.4,0,0.6,0.2,0.6s0.2-0.2,0.2-0.5c0-0.3-0.1-0.6,0.2-0.6c0.2,0.1,0.4,0.2,0.6,0.2
					c0.6,0.2,1.2,0.2,1.8,0.2c0.1,0,0.1,0,0.1,0l0,0c0.3,0,0.5,0.4,0.5,0.5c0,0.1,0.2,0.2,0.3,0.1c0.1-0.1,0-0.6,0.1-0.6l0,0
					c0.2,0,0.4-0.1,0.4,0.7c0,0.6,0.2,0.6,0.3,0.6c0.1-0.1,0.1-0.6,0.1-1.1c0-0.3,0.2-0.4,0.5-0.5l0,0c1.8-0.6,2.9-1.8,3.5-3.6
					C24,10.9,24.1,10.3,23.9,9.8z"/>
			</g>
		  );
      case 'arrow-down':
        return (
          <g><path d="M7.41 7.84l4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z"/></g>
        );
      case 'arrow-up':
        return (
          <g><path d="M7.41 15.41l4.59-4.58 4.59 4.58 1.41-1.41-6-6-6 6z"/></g>
        );
    }
  },
  render() {
    return (
      <svg viewBox="0 0 25 25"
        height={this.props.size}
        width={this.props.size}
		fill={this.props.color}
        preserveAspectRatio="xMidYMid meet">
        {this.renderGraphic()}
      </svg>
    );
  }
});