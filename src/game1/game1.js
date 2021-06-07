function sound(value) {
   var audio = new Audio(); // Создаём новый элемент Audio
   audio.src = value; // Указываем путь к звуку "клика"
   audio.autoplay = true; // Автоматически запускаем
}

// function asArr(arrayLike) {
//   return [].slice.call(arrayLike, 0)
// }
//
// function setActiveArticle(articlesNodes, activeArticleNode) {
//   articlesNodes.forEach(function(articleNode) {
//     if (articleNode === activeArticleNode) {
//       articleNode.classList.add('current')
//     } else {
//       articleNode.classList.remove('current')
//     }
//   })
// }
//
// function getNextArticle(articlesNodes, articleNode) {
//   var articleIndex = articlesNodes.indexOf(articleNode)
//   var totalArticlesIndexes = articlesNodes.length - 1
//   if (articleIndex === totalArticlesIndexes) {
//     return articlesNodes[0]
//   } else {
//     return articlesNodes[articleIndex + 1]
//   }
// }
//
// function getPrevArticle(articlesNodes, articleNode) {
//   var articleIndex = articlesNodes.indexOf(articleNode)
//   var totalArticlesIndexes = articlesNodes.length - 1
//   if (articleIndex === 0) {
//     return articlesNodes[totalArticlesIndexes]
//   } else {
//     return articlesNodes[articleIndex - 1]
//   }
// }
//
// var ACTIVE_ARTICLE_DEFAULT_INDEX = 0
// function main() {
//   var articlesNodes = asArr(document.querySelectorAll('.news li'))
//   var nextNode1 = document.querySelector('.next1')
//   var nextNode2 = document.querySelector('.next2')
//
//   console.log('got', articlesNodes)
//   var currentlyActiveArticle = articlesNodes[ACTIVE_ARTICLE_DEFAULT_INDEX]
//
//   setActiveArticle(articlesNodes, currentlyActiveArticle)
//
//   nextNode1.addEventListener('click', function () {
//     var nextArticle1 = getNextArticle(articlesNodes, currentlyActiveArticle)
//     setActiveArticle(articlesNodes, nextArticle1)
//     currentlyActiveArticle = nextArticle1
//   })
//
//   nextNode2.addEventListener('click', function () {
//     var nextArticle2 = getNextArticle(articlesNodes, currentlyActiveArticle)
//     setActiveArticle(articlesNodes, nextArticle2)
//     currentlyActiveArticle = nextArticle2
//   })
// }
//
// main()