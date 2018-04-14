var newsArticle = new XMLHttpRequest();
var nObj;
newsArticle.open('GET', 'https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=54a810253a1d4516ab56308320fc2de7', true);

newsArticle.onload = function() {
    console.log(newsArticle);
    if(newsArticle.status == 200){
        nObj = JSON.parse(newsArticle.responseText);
        console.log(nObj);
    }
    console.log(nObj.articles[0].title);
    document.getElementById('title').innerHTML = nObj.articles[0].title;
    document.getElementById('description').innerHTML = nObj.articles[0].description;
    var imgPath = nObj.articles[0].urlToImage;
    document.getElementById('image').src = imgPath;
};

newsArticle.send();