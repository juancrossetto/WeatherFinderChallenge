import React, { Component, ErrorInfo, ReactNode } from 'react';
import './styles.css';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  message: string;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    message: '',
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, message: error.message };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  retry = () => {
    this.setState({
      hasError: false,
      message: '',
    });
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="error_boundary-main">
          <div className="error-boundary-container">
            <h1 data-testid="errorboundary-title" className="error-boundary-container__title">
              An error has occurred
            </h1>
            <p className="error-boundary-container__text">{this.state.message}</p>
            <button className="error-boundary-container__button" onClick={this.retry}>
              Retry
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
