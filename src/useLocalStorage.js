import { useState, useEffect } from 'react';

const getCurrentLocalStorageList = () => {
  const list = localStorage.getItem('list');
  if (list) return JSON.parse(list);
  return [];
};

const saveNewListIntoLocalStorage = (list) => {
  const newList = JSON.stringify(list);
  const res = localStorage.setItem('list', newList);
  return true;
};

const nameValidation = (name) => {
  if (!name) return false;

  const typeStr = typeof name === 'string';
  const typeNum = typeof name === 'number';
  const isEmpty = typeStr && name.trim() === '';
  
  if (typeNum) return true;
  return typeStr && !isEmpty;
};

const useLocalStorage = (name = null) => {
  const [list, setList] = useState(getCurrentLocalStorageList());

  if (nameValidation(name)) setList(prev => [...prev, name]);
  return list;
}

export default useLocalStorage
