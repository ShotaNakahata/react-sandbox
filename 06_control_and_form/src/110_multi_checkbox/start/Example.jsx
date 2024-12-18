import { useState } from "react";

// POINT 複数チェックボックスの実装
const Example = () => {
  const [fruits, setFruits] = useState([
    { label: "Apple", value: 100, checked: false },
    { label: "Banana", value: 200, checked: false },
    { label: "Cherry", value: 300, checked: false },
  ]);

  const [sum, setSum] = useState(0);
  const clicked = (e) => {
    const newFruits = fruits.map((fruit) => {
      let newFruit = { ...fruit };
      if (newFruit.label === e.target.value) {
        newFruit.checked = !fruit.checked;
      }
      return newFruit;
    });
    setFruits(newFruits);
    setSum(newFruits.filter(fruit=>fruit.checked)
    .reduce((acc,fruit)=>{
      return acc+=fruit.value
    },0))
  };
  return (
    <div>
      {fruits.map((fruit) => {
        return (
          <div>
            <input
              type="checkbox"
              id={fruit.label}
              value={fruit.label}
              checked={fruit.checked}
              onChange={clicked}
            />
            <label key={fruit.label} htmlFor={fruit.label}>
              {fruit.label}:{fruit.value}
            </label>
          </div>
        );
      })}
      <div>合計: {sum}</div>
    </div>
  );
};

export default Example;
