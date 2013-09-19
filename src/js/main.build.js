
require.config({
    baseUrl: './build/js',
    paths: {
        text: 'vendor/requirehogan/text',
        hgn: 'vendor/requirehogan/hgn',
        cs: 'vendor/requirecs/cs',
        css: 'vendor/requirecss/css',
        less: 'vendor/requireless/less',
        lessc: 'vendor/requireless/lessc',
        'lessc-server': 'vendor/requireless/lessc-server',
        'less-builder': 'vendor/requireless/less-builder',
        'css/css-builder': 'vendor/requirecss/css-builder',
        'css/normalize': 'vendor/requirecss/normalize',
        normalize: 'vendor/requirecss/normalize',
        'coffee-script': 'vendor/requirecs/coffee-script',
        hogan: 'vendor/requirehogan/hogan',
        loglevel: 'vendor/loglevel/loglevel',


    },
    shim: {
    }
});

require([
    'cs!app',
    'cs!config',
    'loglevel'
    ], function (Application, config, log) {
  'use strict';

  try {
    // use 'silent' to supress log messages
    // never use console.log directly PLZ
    log.setLevel(config.dev.loglevel);
  } catch (e) {
    // no console.log available
  }

  log.debug('app started');
  var app = new Application();
  app.initialize();

});



