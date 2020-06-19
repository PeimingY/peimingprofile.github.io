$(document).ready(function(){
    $("#javaExp").mouseover(function(){
        $("#javaExp").html("1 year");
    }).mouseout(function(){
        $("#javaExp").html("Java");
    });

    $("#pythonExp").mouseover(function(){
        $($("#pythonExp")).html("0.5 year");
    }).mouseout(function(){
        $("#pythonExp").html("Python");
    });

    $("#sqlExp").mouseover(function(){
        $($("#sqlExp")).html("3 months");
    }).mouseout(function(){
        $("#sqlExp").html("Oracle SQL");
    });

    $("#sqlSerExp").mouseover(function(){
        $($("#sqlSerExp")).html("6 months");
    }).mouseout(function(){
        $("#sqlSerExp").html("SQL Server");
    });

    $("#mavenExp").mouseover(function(){
        $($("#mavenExp")).html("3 months");
    }).mouseout(function(){
        $("#mavenExp").html("Maven");
    });
    
    $("#gitExp").mouseover(function(){
        $("#gitExp").html("1 year");
    }).mouseout(function(){
        $("#gitExp").html("Git");
    });
});
