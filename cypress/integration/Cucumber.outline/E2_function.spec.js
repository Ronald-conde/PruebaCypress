/// <reference types="Cypress"/>
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
require('cypress-plugin-tab')
import "cypress-file-upload"
import POME2 from "../POM_E2.js";
const master = new POME2()
describe("Cargando datos desde archivo Json ubicado en Fixture",()=>{ 

    before(function(){ //No se puede hacer sin el before. 
        cy.fixture("TestPractice.json").then(function(data){ //cargamos el archivo Json dentro de nuestra variable data.
            //con cy.fixture accedemos a los archivos que tengamos dentro de fixture.
            globalThis.data=data;
        })
    })

// it("Prueba",() => {
//     cy.viewport(1280 * 1.3, 720 * 1.3);
//     master.visitar("https://demoqa.com/automation-practice-form","DEMOQA")
//     master.texto("#firstName", data.name)
//     master.texto("#lastName", data.apellidos)
//     master.texto("#userEmail",data.gmail)
//     master.Seleccionar("#gender-radio-1")
//     master.texto("#userNumber",data.numero)
//     cy.get("#dateOfBirthInput").click().then( ()=> {
//         master.Seleccion(".react-datepicker__month-select","July","6")
//         master.Seleccion(".react-datepicker__year-select","2003","2003")
//         master.Click(".react-datepicker__day--021")
//     })
//     master.Seleccionar("#hobbies-checkbox-3")
//     master.Subirfoto("#uploadPicture")
//     master.textoforzado("#state","NCR")
//     master.textoforzado("#city","Delhi")
//     master.Clickforzado("#submit")
// })
Given("Primer paso", () => {
    cy.viewport(1280 * 1.3, 720 * 1.3);
    master.visitar("https://demoqa.com/automation-practice-form","DEMOQA")
})
When("Segundo paso {word} {word} {word}",(nombre,apellido,correo) => {
    master.textoyTab("#firstName",nombre,apellido,correo)
})
When("Tercer paso",() => {
    master.Seleccionar("#gender-radio-1")
})
When("Cuarto paso {word}",(number) => {
    master.texto("#userNumber",number)
})
When("Quinto paso",() => {
        cy.get("#dateOfBirthInput").click().then( ()=> {
        master.Seleccion(".react-datepicker__month-select","July","6")
        master.Seleccion(".react-datepicker__year-select","2003","2003")
        master.Click(".react-datepicker__day--021")
        master.Seleccionar("#hobbies-checkbox-3")
        master.Subirfoto("#uploadPicture")
    })
})
And("Concatenar",() => {
    master.textoforzado("#state","NCR")
    master.textoforzado("#city","Delhi")
})
Then("Fin de la prueba",()=> {
    master.Clickforzado("#submit")
})
});