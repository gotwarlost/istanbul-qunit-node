var q = require('qunit');

q.options.coverage = true;
q.run({ code: 'lib/main.js', tests:'test/main.test' }, function(err, report) {
    console.dir(report);
});


