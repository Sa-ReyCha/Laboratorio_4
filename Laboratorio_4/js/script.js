$(document).ready(function(){ // esto es para que se cargue el codigo de misma manera


    // BotonClear
    $("#ButtonClear").click(function(){
    let seleccion_todos = $("[name='texto']")

    for(let i =0;i < seleccion_todos.length; i++){
        seleccion_todos[i].checked = false
    }
    })

    // ButtonMark
    $("#ButtonMark").click(function(){
    let seleccion_todos = $("[name='texto']")

    for(let i =0;i < seleccion_todos.length; i++){
        seleccion_todos[i].checked = true
    }
    
    })

    // ButtonDelete
    $("#ButtonDelete").click(function(){
    $("#todoList").html("") // esto no elimina las etiquetas
    })

    // ButtonPost
    $("#ButtonPost").click(function(e){
    e.preventDefault()
    let texto = $('#TextArea').val()
    $('#todoList').append(`<input type="checkbox" name="texto"/> <label>${texto}</label> <br>`)
    })

// Necesito crear una variable la cual es la que va a 
// leer el texto



})