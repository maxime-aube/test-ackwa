<?php
// autoload tcdent/php-restclient
require_once __DIR__ . 'vendor/autoload.php';

 
if (isset($_GET['siret'])) {

    $sirene_api_url = 'https://entreprise.data.gouv.fr/api/sirene/v3/etablissements/' . $_GET['siret'];

    //very basic API call 
    $api = new RestClient([
        'base_url' => $sirene_api_url, 
        'format' => "json", 
    ]);

    //send request
    $result = $api->get();

    //display response if everything went OK
    if ($result->info->http_code == 200) {
        var_dump($result->decode_response());
    }
}
