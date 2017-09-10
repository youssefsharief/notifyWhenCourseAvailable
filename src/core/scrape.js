
const cheerio = require('cheerio');
const request = require('request');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

function scrape(req, res) {
    const url = 'https://ssb.aucegypt.edu:4444/PROD/bwckschd.p_disp_dyn_sched';
    request(url, function (err, response, html) {
        if (err) return res.status(400).json(err)
        var $ = cheerio.load(html);
        var x = $('#term_input_id').val(201810)
        $('#id____UID0').click()
        

        // res.status(200).json(x)
        
        
    })
}

module.exports = { scrape }



function simpleStringify (object){
    var simpleObject = {};
    for (var prop in object ){
        if (!object.hasOwnProperty(prop)){
            continue;
        }
        if (typeof(object[prop]) == 'object'){
            continue;
        }
        if (typeof(object[prop]) == 'function'){
            continue;
        }
        simpleObject[prop] = object[prop];
    }
    return JSON.stringify(simpleObject); // returns cleaned up JSON
};