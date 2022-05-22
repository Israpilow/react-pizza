import React from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Header from '../header/Header';
import Home from '../../pages/Home';
import Empty from '../empty/Empty';

import { setPizzas, fetchPizzas } from '../../redux/actions/pizzas';

function App(props) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPizzas());
  }, []);
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empty" element={<Empty />} />
      </Routes>
    </div>
  );
}

export default App;

// class App extends React.Component {
//   state = {
//     pizzas: [],
//   };

// async componentDidMount() {
//   await axios.get('http://localhost:3000/db.json').then(({ data }) => {
//     // this.setState({
//     //   pizzas: data.pizzas,
//     // });
//     store.dispatch(setPizzas(data.pizzas));
//     console.log();
//   });
// }

//   render() {
//     return (
//       <div className="wrapper">
//         <AppContext.Provider value={{}}>
//           <Header />
//           <Routes>
//             <Route path="/" element={<Home items={this.props.pizzas} />} />
//             <Route path="/empty" element={<Empty />} />
//           </Routes>
//         </AppContext.Provider>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     pizzas: state.pizzas.items,
//   };
// };

// export default connect(mapStateToProps)(App);

// class App extends React.Component {
//   async componentDidMount() {
//     await axios.get('http://localhost:3000/db.json').then(({ data }) => {
//       store.dispatch(setPizzas(data.pizzas));
//       store.dispatch(setSortBy(data.sort));
//     });
//   }

//   render() {
//     console.log(this.props.pizzas);
//     return (
//       <div className="wrapper">
//         <AppContext.Provider value={{}}>
//           <Header />
//           <Routes>
//             <Route path="/" element={<Home items={this.props.pizzas} />} />
//             <Route path="/empty" element={<Empty />} />
//           </Routes>
//         </AppContext.Provider>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     pizzas: state.pizzas.items,
//   };
// };

// export default connect(mapStateToProps)(App);
