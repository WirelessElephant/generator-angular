(function () {
  'use strict';
  /**
   * @ngdoc service
   * @name <%= scriptAppName %>.<%= cameledName %>
   * @description
   * # <%= cameledName %>
   * Service in the <%= scriptAppName %>.
   */

  class <%= cameledName %>Service {

    constructor (/* Injected names go here */) {
      // instanciation logic goes here
    }

    static get $injector () {
      return [
        // injectables go here
      ]
    }
  }

  angular.module('<%= scriptAppName %>')
    .service('<%= cameledName %>', <%= cameledName %>Service)
})()
