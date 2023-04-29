<?php
    include("conexao.php");

    $nome = $_POST['name'];
    $nascimento = $_POST['nascimento'];
    $cep = $_POST['cep'];
    $rua = $_POST['rua'];
    $bairro = $_POST['bairro'];
    $cidade = $_POST['cidade'];

    $sql = "INSERT INTO tbcadastro(nome,nascimento,cep,rua,bairro,cidade ) VALUES('$nome','$nascimento','$cep','$rua','$bairro','$cidade')";

    if(mysqli_query($conexao,$sql)){
        echo "usuario cadastrado";
    }

    
?>