//funcion anonima auto ejecutable
(function(){
    console.log("MI primer IIFFE")
})();
(function(){
    console.log("MI segunda IIFFE")
})();
//la crockford
((function(){

})())
//unaria
+function(){

}();
//facebook
!function(){

}();