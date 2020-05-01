const listGroup = document.querySelector('.list-group');

fetch(`https://todo-a7861.firebaseio.com/todos.json`).then(res => res.json()).then(res => res.forEach(cur => {
    const newLi = document.createElement('li');
        newLi.innerHTML = `
        <div class="app-list-item d-flex justify-content-between">
          <span class="app-list-item-label">
            ${cur.title}
          </span>
          <div class="d-flex flex-column">
            <div class="d-flex justify-content-center align-items-center">
              <button type="button" class="btn-check btn-sm">
                <i class="fa fa-check"></i>
              </button>
              <button type="button" class="btn-trash btn-sm">
                <i class="fa fa-trash-o"></i>
              </button>
              <i class="fa fa-heart"></i>
            </div>
          </div>
        </div>`;
        console.log(cur.title);
        
        listGroup.append(newLi)
        newLi.classList.add('list-group-item');
    })
);
