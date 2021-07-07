import { useState, useEffect } from 'react';

const getCurrentLocalStorageList = () => {
  const list = localStorage.getItem('list');
  if (list) return JSON.parse(list);
  return [];
}

const useLocalStorage = (name) => {
  const [list, setList] = useState(getCurrentLocalStorageList());
  
  setList(prev => prev.slice().push(name));
  
  
  return list;
}

export default useLocalStorage
