'use strict';

angular.module('config', [])
  .constant('config', {
    'endpoint'    : "http://localhost:5000",
    'provider'    : "dex", // google, github, gitlab, keycloak, saml2 or basic
    'client_id'   : "test-client-id",
    'github_url'  : null,  // replace with your enterprise github senullrver
    'gitlab_url'  : null,
    'keycloak_url': null,
    'keycloak_realm': "master",  // replace with your keycloak realm
    'dex_url'     : "http://localhost:5556",
    'colors'      : {}, // use default colors
    'severity'    : {}, // use default severity codes
    'audio'       : {}, // no audio
    'tracking_id' : ""  // Google Analytics tracking ID eg. UA-NNNNNN-N
  });
