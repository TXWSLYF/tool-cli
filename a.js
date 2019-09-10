(function() {
  var hello_world = function() {};

  window['toolLoaderJsonp'] &&
    window['toolLoaderJsonp'].define &&
    window['toolLoaderJsonp'].define(
      'hello_world',
      '0.0.1',
      hello_world.default,
    );
})();
