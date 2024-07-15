let todoList=
[
  {item:'Buy Milk',
  duedate:'16/07/2024'},
  {item:'Go to college',
    duedate:'16/07/2024'}];
displayItems();



function addTodo()
{
  let inputElement=document.querySelector('#todoInput'); 
  let dateElement=document.querySelector('#todoDate');
  let todoItem=inputElement.value;
  let todoDate=dateElement.value;
  console.log(todoItem);
  todoList.push({item: todoItem, duedate:todoDate});
  inputElement.value='';
 
  displayItems();
}

function displayItems(){
  let containerElement=Element=document.querySelector('.todoContainer');

  let newHtml='';
  for(let i=0;i<todoList.length;i++)
  {
    // let item=todoList[i].item;
    // let duedate=todoList[i].duedate;
    let{item,duedate}=todoList[i];
    newHtml+=`
    
    <span>${item}</span>
    <span>${duedate}</span>
    <button class="button2" onclick="todoList.splice(${i},1) 
    displayItems();"> Delete </button>
    
    `;
  }
  containerElement.innerHTML = newHtml;
}