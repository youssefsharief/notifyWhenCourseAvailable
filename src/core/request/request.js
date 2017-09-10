const request = require('request');
const cheerio = require('cheerio')
const bod = `term_in=201810&sel_subj=dummy&sel_day=dummy
&sel_schd=dummy&sel_insm=dummy&sel_camp=dummy&sel_levl=dummy
&sel_sess=dummy&sel_instr=dummy&sel_ptrm=dummy&sel_attr=dummy
&sel_subj=ACCT&sel_crse=&sel_title=&sel_schd=%25&sel_from_cred=
&sel_to_cred=&sel_camp=%25&sel_levl=%25&sel_ptrm=%25&begin_hh=0&begin_mi=0&begin_ap=a&end_hh=0&end_mi=0&end_ap=aName`

function getRemainingSeats(CRN) {
    return new Promise((resolve, reject) => {
        request.post('https://ssb.aucegypt.edu:4444/PROD/crse_submit.submit_proc', { body: bod }, function (error, response, body) {
            if(error) reject(error)
            const $ = cheerio.load(body)
            var x = $(`tr:contains(${CRN})`).children()[11]
            resolve(parseInt($(x).text()))
        });
    })
}

module.exports =getRemainingSeats
