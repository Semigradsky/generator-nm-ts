var dts = require('dts-bundle');
var path = require('path');

dts.bundle({
    name: '<%= moduleName %>',
    main: path.join('lib', 'index.d.ts')
});
