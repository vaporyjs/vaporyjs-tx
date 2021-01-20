/* jshint ignore:start */
Package.describe({
  name: 'mjbecze:vaporyjs-tx',
  version: '0.4.0',
  summary: 'An simple module for creating, manipulating and signing vapory transactions',
  git: 'https://github.com/vaporyjs/vaporyjs-tx',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
})

Package.onUse(function (api) {
  api.versionsFrom('1.0.3.2')

  api.export(['VapTx'], ['client'])

  api.addFiles('dist/vaporyjs-tx.js', 'client')
  api.addFiles('package-init.js', 'client')
})
