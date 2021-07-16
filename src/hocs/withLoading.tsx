import React from 'react';

type HocProps = {
  isLoading: boolean;
  [propName: string]: unknown;
};

const WithLoading = (Component: React.FC<unknown>) =>
  function WihLoadingComponent({ isLoading, ...props }: HocProps): JSX.Element {
    return !isLoading ? (
      <Component {...props} />
    ) : (
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only" />
        </div>
      </div>
    );
  };

export default WithLoading;
