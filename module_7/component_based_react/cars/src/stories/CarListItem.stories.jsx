
import CarListItem from '../CarListItem';

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

const pending = { id: 1, model: 'F-150', make: 'Ford', price: 5000, status: 'AVAILABLE' };
const sold = { id: 2, model: 'Corolla', make: 'Toyota', price: 2000, status: 'SOLD'};

storiesOf("CarListItem", module)
  .add("AVAILABLE", () => <CarListItem {...pending} onStatusChange={action('Mark As Sold', {data: [ pending.id ]})} />)
  .add("SOLD", () => <CarListItem {...sold} />)