"use strict";

import angular from "angular";
import "angular-bootstrap";
import "angular-ui-router";

import * as main from "./main";

angular.element(document).ready(() => {
  angular.bootstrap(document, [main.name], {
    strictDi: true
  });
});
