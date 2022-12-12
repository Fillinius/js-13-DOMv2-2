let tasks = [
  {
      id: '1138465078061',
      completed: false,
      text: 'Посмотреть урок по JavaScript',
  },
  {
      id: '1138465078062',
      completed: false,
      text: 'Выполнить тест после урока',
  },
  {
      id: '1138465078063',
      completed: false,
      text: 'Выполнить ДЗ после урока',
  },
]
 
const task = tasks.map((task, id)=>{
  return (
  `<div class="task-item" data-task-id="${id+1}">
  <div class="task-item__main-container">
      <div class="task-item__main-content">
          <form class="checkbox-form">
              <input class="checkbox-form__checkbox" type="checkbox" id="${"task"+ id+1}" ${task.completed? checked : ''}>
              <label for="${"task"+ id+1}"></label>
          </form>
          <span class="task-item__text">
              ${task.text}
          </span>
      </div>
      <button class="task-item__delete-button default-button delete-button" data-delete-task-id="5">
          Удалить
      </button>
  </div>
</div>`
)
})
const main = document.querySelector('.tasks-list')
main.innerHTML = task

const newSpan = document.createElement('span')
newSpan.className = 'error-message-block'
newSpan.textContent = 'Проверка состояния ошибки'
const newSpanMain = document.querySelector('.task-item__main-content')
newSpanMain.append(newSpan)

const list = tasks.map((item)=>{
    return (item.text)})
const listJoin = list.join('; ')
console.log(listJoin);

const form = document.querySelector('.create-task-block')
form.addEventListener('submit',(event)=>{
  event.preventDefault()
  const{target} = event
//   console.log(target);
  const task = target.taskName
  const value = task.value
    console.log('значениe value:',value); //Получили доступ к значению value
    // начало решения 2 задачи
          
console.log('Проверка состояния массива:',tasks);
      if (value==='') {
        newSpan.textContent = 'Название задачи не должно быть пустым'
      }
      
     else if (value === list) {
      newSpan.textContent = 'Такое имя уже есть'
    } else   {
      newSpan.textContent = ''
     tasks.push({id: Date.now(), completed: false, text: value})

     const main1 = document.querySelector('.tasks-list')
     main1.insertAdjacentHTML('afterend',`<div class="task-item" data-task-id="${Date.now()}">
     <div class="task-item__main-container">
         <div class="task-item__main-content">
             <form class="checkbox-form">
                 <input class="checkbox-form__checkbox" type="checkbox" id="${Date.now()}" ${task.completed? checked : ''}>
                 <label for="${Date.now()}"></label>
             </form>
             <span class="task-item__text">
                 ${value}
             </span>
         </div>
         <button class="task-item__delete-button default-button delete-button" data-delete-task-id="5">
             Удалить
         </button>
     </div>
     </div>`)
    }
})


