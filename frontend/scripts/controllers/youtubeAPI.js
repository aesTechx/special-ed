angular.module('SED.youtube', [])
.controller('youtube', function($scope, $state,$http) {
	$http.get('https://www.googleapis.com/youtube/', {
    params: {
      key: 'AIzaSyBFmKDjSjosPKcAmr-9Fc7AXGtIH3FHI9Y',
      type: 'video',
      maxResults: '10',
      pageToken: $scope.nextPageToken,
      part: 'id,snippet',
      fields: 'items/id,items/snippet/title,items/snippet/description',
      q: this.query
    }
  })
	.success( function (data) {
    if (data.items.length === 0) {
      $scope.label = 'No results were found!';
    }else{
    	console.log(data.items);
    }
    // VideosService.listResults(data, $scope.nextPageToken);
    // $scope.nextPageToken = data.nextPageToken;
    // $log.info(data);
  })
  .error( function () {
    //$log.info('Search error');
  })
});