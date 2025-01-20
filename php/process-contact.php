/**
 * Este script procesa los datos enviados desde un formulario de contacto y los guarda en una base de datos MySQL.
 * 
 * Variables de conexión a la base de datos:
 * - $host: Dirección del servidor de la base de datos.
 * - $dbname: Nombre de la base de datos.
 * - $username: Nombre de usuario para la conexión a la base de datos.
 * - $password: Contraseña para la conexión a la base de datos.
 * 
 * El script realiza las siguientes acciones:
 * 1. Establece una conexión con la base de datos utilizando PDO.
 * 2. Verifica si la solicitud se realizó mediante el método POST.
 * 3. Filtra y sanitiza los datos recibidos del formulario (nombre, correo, mensaje).
 * 4. Verifica que los campos no estén vacíos.
 * 5. Inserta los datos en la tabla 'mensajes' de la base de datos.
 * 6. Maneja errores de conexión y consulta.
 * 
 * Notas:
 * - Si los datos no se reciben por POST, se muestra un mensaje de error.
 * - Si ocurre un error durante la conexión o la consulta, se muestra un mensaje de error.
 */
 
<?php
$host = "brfgmpg5i3efrxid4mjd-mysql.services.clever-cloud.com";
$dbname = "brfgmpg5i3efrxid4mjd";
$username = "u3ccwxgnpek4chrw";
$password = "1Ci47mnQbnsUC2A2HozP";

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {

        if (isset($_POST['name'])) {
            $nombre = filter_var($_POST['name'], FILTER_SANITIZE_STRING) ?? '';
        }

        if (isset($_POST['email'])) {
            $correo = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL) ?? '';
        }

        if (isset($_POST['message'])) {
            $mensaje = filter_var($_POST['message'], FILTER_SANITIZE_STRING) ?? '';
        }

        if (empty($nombre) || empty($correo) || empty($mensaje)) {
            exit;
        }

        $sql = "INSERT INTO mensajes (nombre, correo, mensaje) VALUES (:nombre, :correo, :mensaje)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':nombre', $nombre);
        $stmt->bindParam(':correo', $correo);
        $stmt->bindParam(':mensaje', $mensaje);

        if ($stmt->execute()) {
            header('Location: ../thanks.html');
        } else {
            echo "Error: Could not save data.<br>";
        }
    } else {
        echo "Error: No data received by POST.<br>";
    }
} catch (PDOException $e) {
    echo "Error in connection or query: " . $e->getMessage();
}
?>
