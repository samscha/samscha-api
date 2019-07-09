import React from 'react';
import { withRouter } from 'react-router-dom';

export default withRouter(
  class extends React.Component {
    componentDidUpdate(prevProps) {
      if (this.props.location.pathname !== prevProps.location.pathname) {
        window.scrollTo(0, 0);
      }
    }

    render() {
      return this.props.children;
    }
  },
);
