<?php

http_response_code(204);

$data = file_get_contents('php://input');

if ($data = json_decode($data)) {
  $data = json_encode(
    $data,
    JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES
  );

$file = 'reports.json';
$current = file_get_contents($file);
file_put_contents($file, $data . "\n", FILE_APPEND);
}

?>
