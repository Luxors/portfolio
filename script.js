"use strict";
import { list } from './list.js';

document.addEventListener('DOMContentLoaded', function() {
  const listEl = document.getElementById('list');

  if (!list?.length) {
    listEl.innerHTML = '<li class="list-item">There are no projects</li>';
    return;
  }

  const fragment = document.createDocumentFragment();
  
  list.forEach((item) => {
    const li = document.createElement('li');
    li.className = 'list-item';
    
    const a = document.createElement('a');
    a.href = `https://luxors.github.io/portfolio/${item.key}`;
    a.target = '_blank';
    a.className = 'list-item__link';
    a.textContent = item.name;
    
    li.appendChild(a);
    fragment.appendChild(li);
  });
  
  listEl.appendChild(fragment);
});