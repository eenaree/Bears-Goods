import * as React from 'react';
import type { SerializedStyles } from '@emotion/react';

interface Props {
  id: string;
  checked: boolean;
  onChange: () => void;
  name?: string;
  label?: string;
  css?: SerializedStyles;
}

export default function CheckBox({
  id,
  checked,
  onChange,
  ...props
}: Props): React.ReactElement {
  return (
    <span {...props}>
      <input
        type="checkbox"
        id={id}
        name={props.name}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>{props.label}</label>
    </span>
  );
}
