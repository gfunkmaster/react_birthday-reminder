import React, { useState } from 'react';

import List from './List';
import data from './data';

function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
     <section className='container'>
       <h3>{people.length} Birthdays today</h3>
        {people.map((person) => <List key={person.id} {...person} />
        )}
       <button onClick={() => setPeople([])}>Clear All</button>
     </section>
    </main>
  )
}

export default App;
