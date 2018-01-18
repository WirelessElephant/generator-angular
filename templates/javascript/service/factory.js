(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name <%= scriptAppName %>.<%= cameledName %>
   * @description
   * # <%= cameledName %>
   * Factory in the <%= scriptAppName %>.
   * You think you want a factory.
   * You really want a service.
   *
   * Trust me.
   */

  class <%= cameledName %>Service {

    constructor (/* Injectables go here */) {
      // Initialization logic goes here. No Promises allowed.
    }

    static get $injector () {
      return [
        // list your injectable names here
      ]
    }
  }

  angular.module('<%= scriptAppName %>')
    .service('<%= cameledName %>', <%= cameledName %>Service)

})()
