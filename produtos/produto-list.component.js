//Regist produtoList components on produtoList module
angular.
module('produtoList').
component('produtoList',{
	templateUrl: 'produtos/produto-list.tamplate.html',
	controller: function produtoListContoller($http) {
		var self = this;
		self.orderProp = 'age';

	$http.get('anax.online:1337').then(function(response) {

		self.produtos = response.data;
	});
	} 
});