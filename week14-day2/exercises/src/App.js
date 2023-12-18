import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import BuggyCounter from './BuggyCounter';

function App(){
    return (
      <div>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
        <ErrorBoundary>
          <BuggyCounter />
          <BuggyCounter />
        </ErrorBoundary>
      </div>
    )
}

export default App;



