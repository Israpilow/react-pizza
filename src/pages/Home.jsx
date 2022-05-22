import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fetchPizzas } from '../redux/actions/pizzas';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { setAddPizza } from '../redux/actions/cart';

import Categories from '../components/Categories';
import SortPopup from '../components/SortPopup';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import LoadingBlock from '../components/PizzaBlock/LoadingBlock';

const catigoriesItems = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'popular' },
  { name: 'по цене', type: 'price' },
  { name: 'по алфавиту', type: 'name' },
];

function Home() {
  const dispatch = useDispatch();

  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, dispatch, sortBy]);

  const onActiveCategoryClick = React.useCallback(
    (index) => {
      dispatch(setCategory(index));
    },
    [dispatch],
  );

  const onActiveSortByClick = React.useCallback(
    (type) => {
      dispatch(setSortBy(type));
    },
    [dispatch],
  );

  const onAddToPizza = (obj) => {
    dispatch(setAddPizza(obj));
  };

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories items={catigoriesItems} onActiveItem={onActiveCategoryClick} />
          <SortPopup items={sortItems} onActiveItem={onActiveSortByClick} sortByActive={sortBy} />
        </div>
        <h2 className="content__title">
          {category !== null ? catigoriesItems[category] : 'Все пиццы'}
        </h2>
        <div className="content__items">
          {items.length > 1
            ? items.map((item) => {
                return (
                  <PizzaBlock
                    onCartItems={cartItems[item.id] && cartItems[item.id].items.length}
                    onAddToPizza={onAddToPizza}
                    {...item}
                    key={item.id}
                  />
                );
              })
            : Array(10).fill(<LoadingBlock />)}
        </div>
      </div>
    </div>
  );
}

export default Home;

// class Home extends React.Component {
//   componentDidMount() {
//     fetch('http://localhost:3000/db.json')
//       .then((resp) => {
//         return resp.json();
//       })
//       .then((json) => {
//         store.dispatch(setPizzas(json.pizzas));
//       });
//     // axios.get('http://localhost:3000/db.json').then(({ data }) => {
//     //   store.dispatch(setPizzas(data.pizzas));
//     // });
//   }
//   render() {
//     return (
//       <div className="content">
//         <div className="container">
//           <div className="content__top">
//             <Categories items={catigoriesItems} />
//             <SortPopup items={sortItems} />
//           </div>
//           <h2 className="content__title">Все пиццы</h2>
//           <div className="content__items">
//             {this.props.items.map((item) => {
//               return <PizzaBlock {...item} key={item.id} />;
//             })}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items,
//   };
// };

// export default connect(mapStateToProps)(Home);
