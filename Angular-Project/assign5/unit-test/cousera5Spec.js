describe('Favorite Dish', function () {

  var favoriteDish;
  var $httpBackend;
  var ApiBasePath;

  beforeEach(function () {
    module('public');

    inject(function ($injector) {
      favoriteDish = $injector.get('ClientServices');
      $httpBackend = $injector.get('$httpBackend');
      ApiBasePath = $injector.get('ApiPath');
    });
  });

  it('should return favorite dish name and description', function() {
      var x= 'l1';
    $httpBackend.whenGET(ApiBasePath + "/menu_items/" + x+".json").respond(['Chicken Masala', 'Real Good']);
    favoriteDish.getFavoriteDish(x).then(function(response) {
      expect(response.data).toEqual(['Chicken Masala', 'Real Good']);
    });
    $httpBackend.flush();
  });

});