const selectList = document.querySelectorAll('.select');

selectList.forEach(select => {
    const box = document.createElement('div');
    box.setAttribute('class', 'custom-select');

    const ul = document.createElement('ul');
    ul.setAttribute('class', 'custom-select__list');

    const options = [...select.options];

    options.forEach((item, index) => {
        const li = document.createElement('li');
        li.setAttribute('class', 'item');
        li.setAttribute('id', item.value);
        li.innerHTML = item.label;

        li.addEventListener('click', () => {
            if (box.classList.contains('open')) {
                box.classList.remove('open');

                select.value = li.id;

                const listItems = [...ul.children];
                
                const sortList = listItems.filter(item => item.id !== li.id);
                sortList.unshift(...listItems.filter(item => item.id === li.id));

                ul.innerHTML = '';

                sortList.forEach(item => {
                    ul.insertAdjacentElement('beforeend', item);
                })
            } else {
                box.classList.add('open');
            }
        })

        ul.insertAdjacentElement('beforeend', li);
    })

    select.insertAdjacentElement('afterend', box);
    box.insertAdjacentElement('beforeend', ul);
})
