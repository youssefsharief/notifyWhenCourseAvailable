const jsdom = require("jsdom");
const { JSDOM } = jsdom;

let serializedWebsite
function scrapeByjsdom(req, res) {

    if (serializedWebsite) return res.status(200).json(serializedWebsite)
    else JSDOM.fromURL("https://ssb.aucegypt.edu:4444/PROD/bwckschd.p_disp_dyn_sched").then(dom => {
        serializedWebsite = dom.serialize()
    });
    return res.status(200).json(serializedWebsite)


}

module.exports = { scrapeByjsdom }


