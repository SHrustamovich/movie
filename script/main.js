let moviesList = document.getElementById('moviesList') 
let BookList = document.getElementById('Booklist')
let SelectRaiting = document.getElementById('selectTwo') 
let button = document.getElementById('button')
let Bookmark = [];
let SortMovie = [];


      for(let i=0;i<movies.length;i++){
        var li =document.createElement('li')
        li.setAttribute('class', 'col-6 border border-2 m-2',)
        moviesList.appendChild(li)
       
        var MovieCard = document.createElement('div')
        MovieCard.setAttribute('class','card')
       li.appendChild(MovieCard);
       
       var CardImg = document.createElement('img')
       CardImg.setAttribute('class','card-img-top')
       // CardImg.width=200
       // CardImg.height=200
       CardImg.setAttribute('src',movies[i].smallThumbnail)
       MovieCard.appendChild(CardImg)
       
       var CardBody = document.createElement('div')
       CardBody.setAttribute('class','card-body')
       li.appendChild(CardBody)
       
       var CardTitle = document.createElement('h5')
       CardTitle.setAttribute('class','card-title')
       CardTitle.textContent = movies[i].title;
       CardBody.appendChild(CardTitle)
       
       var CardText = document.createElement('p')
       CardText.setAttribute('class','card-title')
       CardText.textContent = movies[i].year;
       CardBody.appendChild(CardText)
       
       var CardText = document.createElement('p')
       CardText.setAttribute('class','card-title')
       CardText.textContent = movies[i].imdbRating;
       CardBody.appendChild(CardText)
       
       var CardText = document.createElement('p')
       CardText.setAttribute('class','card-title')
       CardText.textContent = movies[i].categories.join(', ').toLowerCase();
       CardBody.appendChild(CardText)
       
       var buttonCard = document.createElement('div')
       buttonCard.setAttribute('class','d-flex m-2')
       CardBody.appendChild(buttonCard)
       
       var watchButton = document.createElement('button')
       watchButton.classList.add('btn','btn-primary','btn-sm')
       watchButton.setAttribute('type','button')
       watchButton.setAttribute('id','watchButton')
       watchButton.textContent = 'Watch trailler'
       buttonCard.appendChild(watchButton)
       
       var infoButton = document.createElement('button')
       infoButton.classList.add('btn','btn-success','btn-sm','mx-2')
       infoButton.setAttribute('type','button')
       infoButton.setAttribute('id','infoButton')
       infoButton.textContent = 'More info'
       buttonCard.appendChild(infoButton)
       
       var bookmarkButton = document.createElement('button')
       bookmarkButton.classList.add('btn','btn-info','btn-sm')
       bookmarkButton.setAttribute('type','button')
       bookmarkButton.setAttribute('id','bookmarkButton')
       bookmarkButton.textContent = 'Bookmark'
       bookmarkButton.dataset.id = i;
       buttonCard.appendChild(bookmarkButton)
      }
       
      


moviesList.addEventListener('click', function(e){
    var count = Number(e.target.dataset.id);
    let moviesArr = (Array) =>{
        for(var i=0;i<1;i++){
            var bookmarkLI = document.createElement('li')
            bookmarkLI.setAttribute('class','list-group-item')
            BookList.appendChild(bookmarkLI);

            var Bookmarkwrapper = document.createElement('div')
            Bookmarkwrapper.setAttribute('class','col-2')
            bookmarkLI.appendChild(Bookmarkwrapper);

            var moviesName = document.createElement('h5')
            moviesName.setAttribute('class','h5')
            moviesName.textContent = Array[Array.length-1];
            Bookmarkwrapper.appendChild(moviesName)

            var buttonWrapper = document.createElement('div');
            bookmarkLI.appendChild(buttonWrapper);

            var remove = document.createElement('button');
            remove.setAttribute('type', 'button');
            remove.setAttribute('id', 'remove')
            remove.setAttribute('class', 'btn btn-danger');
            remove.dataset.id = i;
            remove.textContent = 'Remove'
            buttonWrapper.appendChild(remove);

            
        }
    }
    var countB = Bookmark.length+1;
    for(var i=0; i <countB; i++){
        if(Bookmark.length==0){
            Bookmark.push(movies[count].title);
        }else if(Bookmark[i]!=movies[count].title){
            Bookmark.push(movies[count].title)
        }
    }
    console.log(Bookmark[0]!=movies[count].title)
    console.log(Bookmark);

    moviesArr(Bookmark);
})
BookList.addEventListener('click',function(event){
    var countB = Number(event.target.dataset.id);
    if(event.target.matches('#remove')){
        Bookmark.splice(countB,1)
        event.target.parentNode.parentNode.remove();
    }
})

