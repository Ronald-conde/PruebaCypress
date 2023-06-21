Feature: Probando CucumberOutline

    Esto es una descripcion

    Scenario Outline: Nombre del escenario
        Given Primer paso
        When Segundo paso <nombre> <apellido> <correo>
        When Tercer paso
        When Cuarto paso <number>
        When Quinto paso
        And Concatenar
        Then Fin de la prueba

    Examples: 
        | nombre  | apellido    | number      | correo                 |
        | Ronald  | Conde       | 123456789   | ronaldconde1@gmail.com |
        | John    | Cena        | 987654321   | johnCena@gmail.com     |
        | Barry   | Allen       | 456789123   | BarryAllen@gmail.com   |       