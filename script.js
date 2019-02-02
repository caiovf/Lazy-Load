var LazyLoad = function() {
  var _elements = document.querySelectorAll('[data-lazyimg]');
  
  // Define a dobra superior, inferior e laterais da tela
  var windowOffset = 6;
  var windowTop = 0;
  var windowBottom = window.innerHeight - ( window.innerHeight / windowOffset );
  var windowLeft = 0;
  var windowRight = window.innerWidth;
  var bool = false;
  var sourceList;
  var pictureMediaScreen;
  var pictureSrc;

  // Verificar se o elemento pai é um picture

  function isPicture(element) {
  	if (element.parentElement.nodeName == "PICTURE") {
  		bool = true;
		sourceList = element.parentElement.querySelectorAll('source');
  	}else {
  		bool = false;
  	}
  	return bool;
  }

  // Função para inserir no atributo src

  function insertSrc(element) {
  	element.src = element.dataset.lazyimg;
  }

  // Inicia o lazyLoad

  function start(element) {
  	if (isPicture(element)) {
  		for (var i = sourceList.length - 1; i >= 0; i--) {
  			// console.log(sourceList[i]);
			pictureMediaScreen = sourceList[i].getAttribute("media");
			pictureMediaScreen = pictureMediaScreen.split(/[^\w\s]/,4);
			pictureMediaScreen = pictureMediaScreen.filter(function (el){return el != "";});
			// pictureMediaScreen = pictureMediaScreen.splice(0,0);
			pictureSrc = sourceList[i].getAttribute("srcset");
			console.log(pictureMediaScreen)
  		}
  	} else {
    	insertSrc(element);
  	}
  }

  function isElementOnScreen(element) {
    // Obtem o boundingbox do elemento
    var elementRect = element.getBoundingClientRect();
    var elementTop = elementRect.top;
    var elementBottom = elementRect.bottom;
    var elementLeft = elementRect.left;
    var elementRight = elementRect.right;

    // Verifica se o elemento esta na tela
    return ( elementTop <= windowBottom ) 
    && ( elementBottom >= windowTop ) 
    && ( elementLeft <= windowRight ) 
    && ( elementRight >= windowLeft );
  }

  // Percorre o array de elementos, verifica se tem elemento na tela e inicia animação do mesmo
  function checkElementsOnScreen(elements) {
    elements instanceof Event && (elements = _elements);
    for ( var i = 0, len = elements.length; i < len; i++ ) {
      // Passa para o proximo laço se o elemento ja estiver animado
      if (elements[i].onload) continue;
      isElementOnScreen( elements[i] ) && start( elements[i] );
    }
  } 

  // Inicia os eventos
  window.addEventListener('load', checkElementsOnScreen, false);
  window.addEventListener('scroll', checkElementsOnScreen, false);
  window.addEventListener('resize', checkElementsOnScreen, false);

  // Retorna funcoes publicas
  return {
    start,
    isElementOnScreen,
    checkElementsOnScreen,
  };
}();