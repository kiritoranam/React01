import { Fragment } from 'react';

import MealsSummary from './MealsSummery';
import AvailableMeals from './AvailableMeal';

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;