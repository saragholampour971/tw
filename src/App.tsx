import React from 'react';
import Navbar from "src/components/navbar/Navbar";
import SeriesDetail from "src/components/series-detail";
import ErrorBoundary from "src/components/error-boundary";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <React.Suspense fallback={<p>loading...</p>}>
          <Navbar/>
          <SeriesDetail/>
        </React.Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
