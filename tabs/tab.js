let btnAddRow = document.getElementById('btn-plus')
let btnRemoveRow = document.getElementById('btn-less')
let tab = document.querySelector('table')
let tBody = document.querySelector('tbody')
let tabRows = tab.rows.length
let btnAddColumn = document.querySelector('#add-column')
let btnRemoveColumn = document.querySelector('#remove-column')

let cells = tab.rows[0].cells.length;

//btnRemoveRow.removeAttribute('disabled')  
let newRow = document.createElement('tr')
newRow.setAttribute('style', 'border: 1px solid black;')

for(let i = 0; i < cells; i++) {
    let newCase = document.createElement('td')
    newCase.setAttribute('style','border: 1px solid black; height: 20px;')
    newRow.append(newCase);
}

tBody.append(newRow)

function addRow() {  
    btnRemoveRow.removeAttribute('disabled')  
    let newRow = document.createElement('tr')
    newRow.setAttribute('style', 'border: 1px solid black;')
    for(let i = 0; i < cells; i++) {
        let newCase = document.createElement('td')
        newCase.setAttribute('style','border: 1px solid black; height: 20px;')
        newRow.append(newCase);
    }    
    tBody.append(newRow)
}

function removeRow() {
    if(tBody.rows.length > 1) {
        tBody.removeChild(tBody.lastChild)
    } else {
        btnRemoveRow.setAttribute('disabled', 'disabled')
    }    
}

function addColumn() {
    btnRemoveColumn.removeAttribute('disabled')
    cells++
    for(let i = 1; i < tab.rows.length; i++) {
        let newCol = document.createElement('td')
        newCol.setAttribute('style', `border: 1px solid black; width: 100px;`)
        tab.rows[i].append(newCol)
    }
}

function removeColumn() {
    if(cells > 2) {
        cells--
        for(let i = 0; i < tab.rows.length-1; i++) {
            tBody.rows[i].deleteCell(tab.rows[i].cells.length-1)
        }
    } else {
        btnRemoveColumn.setAttribute('disabled', 'disabled')
    }  
}

btnAddRow.addEventListener('click', () => { addRow() })
btnRemoveRow.addEventListener('click', () => { removeRow()})

btnAddColumn.addEventListener('click', () => { addColumn()})
btnRemoveColumn.addEventListener('click', () => { removeColumn()})

