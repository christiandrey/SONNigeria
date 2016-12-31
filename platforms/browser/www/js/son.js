//Phonegap scripts
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
      // console.log("Device is now ready");

      $('.sonWebsites').on('click', 'a', function (event) {
          event.preventDefault();
          cordova.InAppBrowser.open($(this).attr('href'), '_blank');
          return false;
      });

      $('.otherWebsites').on('click', 'a', function (event) {
          event.preventDefault();
          cordova.InAppBrowser.open('http://'+$(this).attr('href'), '_blank');
          return false;
      });

      $('.partnersAffiliates').on('click', 'a', function (event) {
          event.preventDefault();
          cordova.InAppBrowser.open($(this).attr('href'), '_blank');
          return false;
      });
    }
};
//End of Phonegap Scripts

$(document).ready(function(){
  app.initialize();
  var today = new Date();
  var worldstandardsday = new Date();
  // worldstandardsday.setFullYear(2017, 11, 10);
  worldstandardsday.setMonth(9);
  worldstandardsday.setDate(14);
  if (worldstandardsday.toString() == today.toString()) {
      alert("Today is World Standards Day!\nIt is celebrated on the 14th of October every year.");
  };

  // $('.sonWebsites a').click(function(event){
  //   event.preventDefault();
  //   window.open($(this).attr('href'), '_system');
  //   console.log('Clicked intercepted');
  // })
})


//Index page scripts
setTimeout(function(){
  $('.loadingIcon').addClass('hidden');
  $('.continue').removeClass('hidden')
},3000);


$('.continue').click(function(){
  window.location.assign('navpage.html');
})


// if (sessionStorage.visitMarker) {
//   if (sessionStorage.visitMarker == '1') {
//     window.location.assign("navpage.html");
//     console.log("The session storage is " + sessionStorage.visitMarker)
//   }
//   if (sessionStorage.visitMarker == '0'){
//     $('.continue').click(function(){
//       sessionStorage.visitMarker = '1';
//       console.log("The session storage is " + sessionStorage.visitMarker)
//     })
//   }
// }
//End of Index page scripts
$('.hamburger').click(function(){
  $('.navIframe').contents().find('.navContentWrapper').removeClass('hidden');
  $('.navIframe').contents().find('.navPageIndicator').removeClass('hidden');
  $('.navIframe').contents().find('.navInnerPage').addClass('hidden');
  $('.navIframe').contents().find('.navHeader').addClass('hidden');
  $('.navIframe').contents().find('.navContentPseudoWrapper').css('left',"0%");
  $('.navIframe').toggleClass('navIframeAnimation')
})

$('.pageHeader').find('.hamburger').click(function(){
  $(this).toggleClass('is-active');
})

$('.articlePage').scroll(function(){
  if ($('.articlePage').scrollTop() >= 87) {
    // $('.subPageHeader').removeClass('hidden')
    $('.subPageHeader').slideDown();
  }
  if ($('.articlePage').scrollTop() < 87){
    // $('.subPageHeader').addClass('hidden')
    $('.subPageHeader').slideUp();
  }
})

// document.addEventListener('deviceready', function(){
//   console.log('Device is now ready ooooo');
//
// $('.sonWebsites').on('click', 'a', function (event) {
//     event.preventDefault();
//     cordova.InAppBrowser.open($(this).attr('href'), '_system');
//     return false;
// });
//
// $('.otherWebsites').on('click', 'a', function (event) {
//     event.preventDefault();
//     cordova.InAppBrowser.open('http://'+$(this).attr('href'), '_system');
//     return false;
// });
//
// $('.partnersAffiliates').on('click', 'a', function (event) {
//     event.preventDefault();
//     cordova.InAppBrowser.open($(this).attr('href'), '_system');
//     return false;
// });
//
// // //Cordova Notification
// // cordova.plugins.notification.local.schedule({
// //         id: 10,
// //         title: "Meeting in 15 minutes!",
// //         text: "Jour fixe Produktionsbesprechung",
// //         at: today_at_3_36_am
// // });
// //
// // //End of Cordova Notification
// });

// document.addEventListener("deviceready", onDeviceReady, false);
// function onDeviceReady(){
//   console.log("Device is now ready");
//
//   $('.sonWebsites').on('click', 'a', function (event) {
//       event.preventDefault();
//       cordova.InAppBrowser.open($(this).attr('href'), '_system');
//       return false;
//   });
//
//   $('.otherWebsites').on('click', 'a', function (event) {
//       event.preventDefault();
//       cordova.InAppBrowser.open('http://'+$(this).attr('href'), '_system');
//       return false;
//   });
//
//   $('.partnersAffiliates').on('click', 'a', function (event) {
//       event.preventDefault();
//       cordova.InAppBrowser.open($(this).attr('href'), '_system');
//       return false;
//   });
// }
