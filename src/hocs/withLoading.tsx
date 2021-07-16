import React from 'react';
/* eslint-disable  @typescript-eslint/no-explicit-any */
type HocProps = {
  isLoading: boolean;
  [propName: string]: any;
};

const WithLoading = (Component: React.FC<any>) =>
  function WihLoadingComponent({ isLoading, ...props }: HocProps): JSX.Element {
    return !isLoading ? (
      <Component {...props} />
    ) : (
      <div className="d-flex justify-content-center">
        <div
          className="spinner-border text-primary mt-2"
          style={{ width: '8rem', height: '8rem' }}
          role="status"
        >
          <span className="sr-only" />
        </div>
      </div>
    );
  };

export default WithLoading;
