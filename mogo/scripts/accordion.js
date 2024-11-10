function openAccordion(item) {
  const content = item.querySelector('.directions-item__content');
  // content.style.maxHeight = content.scrollHeight + 'px';
  content.style.maxHeight = '180px'; 
  item.classList.add('directions-item--active');
}

function closeAccordion(item) {
  const content = item.querySelector('.directions-item__content');
  content.style.maxHeight = 0;
  item.classList.remove('directions-item--active');
}

export function initAccordion() {
  const accordionItems = document.querySelectorAll('.directions-item');

  accordionItems.forEach((item, index) => {
    const content = item.querySelector('.directions-item__content');

    if (index === 0) {
      item.classList.add('directions-item--active');
      // content.style.maxHeight = content.scrollHeight + 'px';
      content.style.maxHeight = '180px'; 
    } else {
      content.style.maxHeight = 0;
    }
  });

  accordionItems.forEach(item => {
    const header = item.querySelector('.directions-item__header');
    
    header.addEventListener('click', () => {
      if (item.classList.contains('directions-item--active')) {
        return;
      }

      accordionItems.forEach(i => {
        if (i.classList.contains('directions-item--active')) {
          closeAccordion(i);
        }
      });

      openAccordion(item);
    });
  });
}
