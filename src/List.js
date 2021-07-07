import { useState } from 'react';

const List = () => {
  const [name, setName] = useState('');
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        console.log(name);
        setName(() => '');
      }}>
      <input type='text' value={name} onChange={e => setName(() => e.target.value)} />
      <button type='submit'>추가</button>
      </form>
    </div>
  )
}

export default List
