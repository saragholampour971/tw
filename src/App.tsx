import React from 'react';
import Navbar from "src/components/navbar/Navbar";
import SeriesDetail from "src/components/series-detail";

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<p>loading...</p>}>
        <Navbar/>
        <SeriesDetail/>
      </React.Suspense>

    </div>
  );
}

export default App;
