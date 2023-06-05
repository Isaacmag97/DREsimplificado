    let rb = document.querySelector('.rb');
    let dd = document.querySelector('.dd');
    let cc = document.querySelector('.cc');
    let dv = document.querySelector('.dv');
    let da = document.querySelector('.da');
    let df = document.querySelector('.df');
    let pic = document.querySelector('.pic');
    let resultado_liquido = document.querySelector('.resLexp');
     

function calcular_dre() {
     resultado_liquido.innerHTML = parseFloat(rb.value) - parseFloat(dd.value) - parseFloat(cc.value) - parseFloat(dv.value) - parseFloat(da.value) - parseFloat(df.value) - parseFloat(pic.value)
}













