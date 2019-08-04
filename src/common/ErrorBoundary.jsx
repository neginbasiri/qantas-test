import React, {Component} from 'react';

export default class ErrorBoundary extends Component {

  state = { hasError: false };
  
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1 className="text-danger">Something went wrong...</h1>;
    }

    return this.props.children; 
  }
}