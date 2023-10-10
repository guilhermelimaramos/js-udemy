import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
      posts: [
        {
          id: 1,
          title: 'This is the title 1',
          body: 'this is the body 1'
        },
        {
          id: 2,
          title: 'This is the title 2',
          body: 'this is the body 2'
        },
        {
          id: 3,
          title: 'This is the title 3',
          body: 'this is the body 3'
        },
      ]
  };


  render() {
    
    const { posts } = this.state;

    return (
      <div className="App">
        {posts.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))};
      </div>
    );
  }
}


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

export default App;
