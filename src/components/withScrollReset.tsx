import React, { useEffect } from 'react';

// Higher-order component that resets scroll position on component mount
function withScrollReset<P extends object>(WrappedComponent: React.ComponentType<P>): React.FC<P> {
  return (props: P) => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return <WrappedComponent {...props} />;
  };
}

export default withScrollReset; 