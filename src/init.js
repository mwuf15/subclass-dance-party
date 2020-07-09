$(document).ready(function () {
  window.dancers = [];

  $('.addDancerButton').on('click', function (event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    console.log($(this).data())
    console.log($(this).data('dancer-maker-function-name'))
    // console.log(dancerMakerFunctionName) // makeBlinkyDancer

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    console.log(window)
    console.log(window['dancerMakerFunctionName'])
    console.log(dancerMakerFunction)

    console.log('now?')
    console.log(window.dancer)
    // make a dancer with a random position
    // console.log(new dancerMakerFunction(10, 20, Math.random() * 1000))

    // dancerMakerFunction is logging out blinkyDancer.js
    // but when involking, its' undefined;

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });
});

