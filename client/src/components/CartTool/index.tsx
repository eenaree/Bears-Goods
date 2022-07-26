import * as React from 'react';
import CartAllCheckbox from './CartAllCheckbox';
import DeleteAction from './DeleteAction';

export default function CartTool(): React.ReactElement {
  return (
    <div>
      <CartAllCheckbox />
      <DeleteAction />
    </div>
  );
}
