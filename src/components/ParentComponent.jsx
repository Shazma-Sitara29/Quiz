// src/components/ParentComponent.js
import React, { useState } from 'react';
import CategorySelection from './Categroy';

function ParentComponent() {
  const [category, setCategory] = useState(null);

  return (
    <div>
      <CategorySelection setCategory={setCategory} />
      {category && <p>You selected: {category}</p>}
    </div>
  );
}

export default ParentComponent;
