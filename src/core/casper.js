

var casper = require('casper').create();
casper.start('https://ssb.aucegypt.edu:4444/PROD/bwckschd.p_disp_dyn_sched');

casper.then(function() {
    document.querySelector('#term_input_id [value="201810"]').selected = true
    document.getElementById('#term_input_id').click()
    this.echo('First Page: ' + window);
});

casper.thenOpen('http://phantomjs.org', function() {
    this.echo('Second Page: ' + this.getTitle());
});

casper.run();

// document.querySelector('#term_input_id [value="201810"]').selected = true
// $('#term_input_id').val(201810)