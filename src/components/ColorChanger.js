import React from 'react';

export default function ColorChanger(props) {
  return (
    <select className="dropDownContainer" onChange={ (e) => props.update(e.target.value) } disabled={ props.allowEdit === 'false' }>
      <option value="black"> Black </option>
      <option value="blue"> Blue </option>
      <option value="green"> Green </option>
    </select>
  )
}

// * Open `EditToggle`, `ColorChanger.js`, `FamilyChanger.js`, and `SizeChanger.js` from `src/components/`.
// * Add `props` as a parameter to the component's function.
// * Locate the `select` tag, in all four files, and add an `onChange` prop:
//   * The `onChange` should use an arrow function to capture the `event`. 
//   * Inside the arrow function call the `update` prop with the value of the target from the `event`.
//   * Parse Int the value of the target when in `SizeChanger.js`. 
// * Locate the `select` tag, in `ColorChanger`, `FamilyChanger`, and `SizeChanger`, and add a `disabled` prop:
//   * The `select` element should be `disabled` if `allowEdit` from <b>props</b> is equal to `"false"`.