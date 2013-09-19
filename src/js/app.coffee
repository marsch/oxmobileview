define [
  'loglevel'
], (log) ->
  'use strict'


  class Application
    initialize: () ->
      log.info 'init application'

