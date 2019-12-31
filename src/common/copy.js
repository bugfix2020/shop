let copyWrap = document.createElement('pre')
copyWrap.id = 'copy-func-comp'
copyWrap.style = 'position:fixed; z-index:-999999; top:110%;overflow:hidden;'
copyWrap.innerHTML = `<div contenteditable='true' id='js-copy' className='copy-func-area'></div>`

document.body.append(copyWrap)

copyWrap = null

var copyEl = document.getElementById('js-copy')

function copy(text) {
    copyEl.innerText = text || ''
    copyEl.focus()
    var selectObj = window.getSelection()
    selectObj.selectAllChildren(copyEl)
    document.execCommand('copy', false, null)
}


export default copy