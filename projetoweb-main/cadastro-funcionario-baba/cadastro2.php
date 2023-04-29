
<?php

    include("conexao.php");

    $foto = $_POST['foto'].".jpg";
    $primeironome = strtoupper($_POST['primeironome']);
    $matricula_socio_responsavel = $_POST['matricula_socio_responsavel'];
    $funcao = $_POST['funcao'];
    $matricula_dp = $_POST['matricula_dp'];
    $nomecompleto = ucwords($_POST['nomecompleto']);
    $identidade = $_POST['identidade'];
    $admissao = $_POST['admissao'];
    $nascimento = $_POST['nascimento'];

    $mysqli = "INSERT INTO funcionariobaba(foto,primeironome,matricula_socio_responsavel,funcao,matricula_dp,nomecompleto,identidade,admissao,nascimento) 
                VALUES('$foto','$primeironome','$matricula_socio_responsavel','$funcao','$matricula_dp','$nomecompleto','$identidade','$admissao','$nascimento')";

    if(mysqli_query($conexao,$mysqli)){
        echo "usuario cadastrado";
    }


?>
