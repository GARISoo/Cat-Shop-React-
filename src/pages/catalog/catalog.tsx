import Card from '../../components/card/card';
import cardsData from '../../data/cardsData';

import './catalog.scss';

const Catalog = () => (
  <div className="catalog">
    {cardsData.map((el) => {
      const card = cardsData.find((e) => e.id === el.id);
      return (
        <Card
          id={el.id}
          title={el.title}
          img={el.img}
          amount={el.amount}
          price={el.price}
          selectedCard={card}
        />
      );
    })}
  </div>
);

export default Catalog;
