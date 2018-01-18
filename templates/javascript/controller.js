(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name <%= scriptAppName %>.controller:<%= classedName %>Ctrl
   * @description
   * # <%= classedName %>Ctrl
   * Controller of the <%= scriptAppName %>
   */

  class <%= classedName %>Controller () {

    constructor () {
      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    }

    static get $inject () {
      return []
    }
  }


  angular.module('<%= scriptAppName %>')
    .controller('<%= classedName %>Ctrl', <%= classedName %>Controller)

})()
