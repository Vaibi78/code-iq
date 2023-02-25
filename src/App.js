// import logo from './logo.svg';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// // Comment
// export default App;

// Ideas for app
// Teach about commenting
// Flash code snippets and ask for result of the code
// Flash short questions and ask for the code
// Select a coding language

import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('Learning');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="App">
      <div className="header">
        <img src="logo.png" alt="logo" onClick={() => handleTabClick('Home')} />
        <div className="tabs">
          <div className={`tab ${activeTab === 'Learning' ? 'active' : ''}`} onClick={() => handleTabClick('Learning')}>Learning</div>
          <div className={`tab ${activeTab === 'Practice' ? 'active' : ''}`} onClick={() => handleTabClick('Practice')}>Practice</div>
        </div>
      </div>
      <div className="middle">
        <h1>Code-IQ</h1>
      </div>
      <div className="content">
        {activeTab === 'Learning' && <LearningPage />}
        {activeTab === 'Practice' && <PracticePage />}
      </div>
    </div>
  );
}

function LearningPage() {
  return <h2>Learning Page</h2>;
}

function PracticePage() {
  return <h2>Practice Page</h2>;
}

export default App;
