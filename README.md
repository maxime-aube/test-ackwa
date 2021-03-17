#Objectif

Affichage des coordonnées d’une entreprise en provenance de la base officielle SIRENE :
[https://entreprise.data.gouv.fr/api_doc/sirene]

#Principe

• Saisie en « front » du SIRET avec contrôle de format (14 chiffres)
• Invocation AJAX asynchrone d’un code PHP qui lui-même invoque via REST l’API SIRENE
• Récupération dénomination, adresse, coordonnées et date du dernier traitement
• Affichage dénomination, adresse, date du dernier traitement et marqueur sur carte
• Si l’entreprise est inactive (cf. état administratif) sa dénomination et son marqueur seront en « rouge »
• ATTENTION aux homonymes !

#Technologies

• Front
• Cartographie
• Back
• Client REST
: HTML, CSS, JS
: https://leafletjs.com
: PHP 7, Composer
: https://github.com/tcdent/php-restclient

#Livrable
• Lien GITHub avec README.md et codes commentés
