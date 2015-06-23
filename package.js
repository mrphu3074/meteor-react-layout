Package.describe({
    name: 'izzilab:react-layout',
    version: '0.0.1',
    summary: 'Define layouts for reactjs. Support flow-router, ion:router',
    git: '',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('0.9.0');
    // event emitter to communcate with region
    api.use(["raix:eventemitter@0.1.2", "reactjs:react@0.2.4"]);
    api.addFiles('react-layout.jsx', 'client');
    api.export('IZReactLayout', 'client');
});

Package.onTest(function(api) {
    api.use('tinytest');
    api.use('izzilab:react-layout');
    api.addFiles('react-layout-tests.js');
});
