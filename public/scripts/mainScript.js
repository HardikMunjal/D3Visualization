var app = angular.module('visualApp',  []);
app.controller('visualCtrl', function($scope, $http, $sce) {
    $scope.firstName  = "Hardik";
    $scope.lastName = "Munjal";
    $scope.myWelcome='';


    console.log('coming here');
    var q=Math.random(); 
    $http.get("http://localhost:4000/ticket?q="+q)
    .then(function(response) {

        console.log(response.data.ticket.redirect);
        $scope.usernamex = response.data.ticket.UserId;

    //var u1 = "http://10.2.5.160/hclnode/single?appid=ec09cfab-eea7-4841-a8f2-7b007a5f47fc&obj=jZJSMec&opt=nointeraction&select=clearall";
    // var u2= "http://10.2.5.160/hclnode/single?appid=ec09cfab-eea7-4841-a8f2-7b007a5f47fc&obj=JvjzhN&opt=nointeraction&select=clearall";
    // var u3="http://10.2.5.160/hclnode/single?appid=ec09cfab-eea7-4841-a8f2-7b007a5f47fc&obj=SsJXfkv&opt=nointeraction&select=clearall";


    var u1="http://10.2.5.160/hclnode/single?appid=ec09cfab-eea7-4841-a8f2-7b007a5f47fc&obj=pPDwmm&opt=nointeraction&select=clearall";

    var str2 = "&QlikTicket=";
    var str3 = response.data.ticket.Ticket;
    $scope.url1 = u1.concat(str2, str3);
    // $scope.url2 = u2.concat(str2, str3);
    // $scope.url3 = u3.concat(str2, str3);
    // $scope.url4 = u4.concat(str2, str3);

    console.log('url1',$scope.url1);
    // console.log($scope.url2);
    // console.log($scope.url3);
    // console.log($scope.url4);


    $scope.url1x = $sce.trustAsResourceUrl($scope.url1);
    // $scope.url2x = $sce.trustAsResourceUrl($scope.url2);
    // $scope.url3x = $sce.trustAsResourceUrl($scope.url3);
    // $scope.url4x = $sce.trustAsResourceUrl($scope.url4);
    $scope.myWelcome = response.data.ticket.redirect;
});



    
    console.log($scope.username);
    var formData = {};
    formData.username = $scope.username;
    formData.password = $scope.password;

 $scope.loadmore = function () {

    console.log('coming at loadmore');
    var u2= "http://10.2.5.160/hclnode/single?appid=ec09cfab-eea7-4841-a8f2-7b007a5f47fc&obj=JvjzhN&opt=nointeraction&select=clearall";
    var u3="http://10.2.5.160/hclnode/single?appid=ec09cfab-eea7-4841-a8f2-7b007a5f47fc&obj=SsJXfkv&opt=nointeraction&select=clearall";
    var u4="http://10.2.5.160/hclnode/single?appid=ec09cfab-eea7-4841-a8f2-7b007a5f47fc&obj=jZJSMec&opt=nointeraction&select=clearall";

    $scope.url2x = $sce.trustAsResourceUrl(u2);
    $scope.url3x = $sce.trustAsResourceUrl(u3);
    $scope.url4x = $sce.trustAsResourceUrl(u4);
    $scope.show=true;
}

});
