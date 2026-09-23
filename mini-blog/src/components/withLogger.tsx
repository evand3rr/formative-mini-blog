import React, { useEffect } from "react";

const withLogger = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const ComponentWithLogger: React.FC<P> = (props) => {
    useEffect(() => {
      console.log(`${WrappedComponent.name} mounted`);
      return () => {
        console.log(`${WrappedComponent.name} unmounted`);
      };
    }, []);

    return <WrappedComponent {...props} />;
  };

  return ComponentWithLogger;
};

export default withLogger;
