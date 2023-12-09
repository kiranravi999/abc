let authorElement=document.getElementById('author');
let bookTitleElement=document.getElementById('bookTitle');
let publicationYearElement=document.getElementById('publicationYear');
let booksContainerElement=document.getElementById('booksContainer');
let addBookElement=document.getElementById('addBook');
let books=document.getElementById('book');

addBookElement.onclick=function(){
  onAddBook()
}

function onRemoveBookItem(bookItemId){
   booksContainerElement.removeChild(bookItemId);
}
function onAddBook(){

  let  authorData=authorElement.value;
  let titleData=bookTitleElement.value;
  let  publicationYearData=publicationYearElement.value;
  
  if (!authorData|| !titleData || !publicationYearData) {
    alert('Please enter valid book details.');
    return;
  }

  let bookItem=document.createElement('li');
  let bookItemId=Date.now();
  bookItem.id=bookItemId;
  bookItem.classList.add('list-group-item', 'd-flex', 'justify-content-between','align-items-center');
  booksContainerElement.appendChild(bookItem);

  let titleElement=documment.createElement('h4');
  titleElement.textContent=titleData;
  titleElement.classList.add('font-weight-bold');
  bookItem.appendChild(titleElement);

  let authorElement=documment.createElement('p');
  titleElement.value=`by${authorData}, Year:${publicationYearData}`;
  titleElement.classList.add('font-weight-bold');
  bookItem.appendChild(titleElement);

  let removeButton=document.createElement('button');
  removeButton.classList.add('btn', 'btn-danger');
  removeButton.onclick=function(){
      onRemoveBookItem(bookItemId);
  }
  bookItem.appendChild(removeButton);
  
}



 