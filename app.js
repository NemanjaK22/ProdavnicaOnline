class Artikal
{
    constructor(naziv, cena, opis)
    {
        this.naziv = naziv
        this.cena = cena
        this.opis = opis
    }
}

let artikli = []

function createArtikalRows()
{
    let table = document.querySelector("#artikli-body")

    for(let i = 0; i < artikli.length; i++)
    {
        let tr = document.createElement("tr")

        let rb = document.createElement("td")
        let naziv = document.createElement("td")
        let cena = document.createElement("td")

        rb.textContent = i+1
        naziv.textContent = artikli[i].naziv
        cena.textContent = artikli[i].cena

        tr.appendChild(rb)
        tr.appendChild(naziv)
        tr.appendChild(cena)
        tr.addEventListener('click', function() {
            displayArtikalDetails(artikli[i])
        })

        table.appendChild(tr)

    }
}

function displayArtikalDetails(artikal)
{
    let p = document.createElement("p")

    p.innerHTML = "Naziv: " + artikal.naziv + "<br>" + "Cena: " + artikal.cena + "<br>" +  "Opis: " + artikal.opis

    let detalji = document.querySelector("#prodavnicaDetails")
     if (detalji.firstChild) { //Ako postoji potomak, ukloni ga
        detalji.firstChild.remove()
    }
    detalji.appendChild(p)
}

function initializeArtikals()
{
    artikli = [
        new Artikal("Fudzi jabuka", 40, "Socne crvene jabuke, cena po kilogramu"),
        new Artikal("Milka Cokolada", 50, "Mlecna cokolada milka 200 g"),
        new Artikal("Rosa", 20, "Voda za pice 1l")
    ]
    createArtikalRows()
}
document.addEventListener('DOMContentLoaded', initializeArtikals)

function handleSubmission()
{
    let submitBtn = document.querySelector('#submitBtn')
    submitBtn.addEventListener('click', function()
    {
        const forma = document.querySelector("forma")
        const formData = newFormData(forma)
        const naziv = formData.get("naziv")
        const cena = formData.get("cena")
        const opis = formData.get("opis")

        const noviArtikal = new Artikal(naziv,cena,opis)
        artikli.push(noviArtikal)

        createArtikalRows()
    })
}

