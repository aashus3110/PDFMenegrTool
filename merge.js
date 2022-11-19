const PDFMerger = require('pdf-merger-js');
var merger = new PDFMerger();

const mergePdfs = async (P1, P2) => {
    await merger.add(P1);
    await merger.add(P2);
    let d = new Date().getTime()
    await merger.save(`public/${d}.pdf`);
    return d
}
module.exports = { mergePdfs }