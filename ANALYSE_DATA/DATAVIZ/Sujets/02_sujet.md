# Sujet 02 : Indices de développement


## Introduction

La **Banque Mondiale** collecte des séries de données relatives au développement de tous les pays du monde. Ces données sont très verses, de l'éducation à léconomie, ne passant par létét des forêts ou les droits de femmes. Ces données sont recénsées depuis 1960, mais ne sont pas complètes pour tous les pays. 

Les données sont librment accessibles sur le site de la Banque Mondiale : https://datacatalog.worldbank.org/dataset/world-development-indicators

Dans ce sujet vous devez absolument utiliser une approche Dataviz et analyse de données avec respectivement les librairies : **Matplotlib** et **Pandas**, ainsi que leurs dépendances éventuelles.

Nous proposons une liste de questions afin d'étudier ce jeu de données, libre à vous d'avoir votre prorpe approche pour explorer et l'analyser en proposant vos propres réflexions/explorations.

## Contraintes

* Vous devez utiliser l'ensemble des notions aborder en cours.


## Mode opératoire :

### Etape 1 : Découverte

`Objectif : Modélisation des données (semi-structurées) et importation des données brutes (sans nettoyage préalable) dans un fichier`

Analysez les données et essayez d'appréhender la qualité et la pertinence de celles-ci, en utilisant des méthodes Pandas ou de Dataviz.


### Etape 2 : Examen

`Objectif : Nettoyage des données permettant de répondre aux questions`

La deuxième étape du travail consistera à examiner les données disponibles de manière à s'assurer qu'il n'y a pas d'aberrations. Vous écrirez des fonctions Python pour analyser la valeur de ces données « brutes ».

Exemples de points à considérer :

1. Lister les valeurs manquantes et choisir une stratégie pour les prendre en compte
1. Examiner si certaines valeurs sont aberrantes ou impossibles
1. Vérifier que toutes les valeurs sont bien cohérentes, typage.
1. Regrouper les “colonnes” qui seraient fragmentéees, ou inversement créer de nouvelles colonnes 
1. Vérifier les types associés aux données


### Etape 3 : Questions

#### Question 1 : 

1. Quelle est l'évolution de la mortalité maternelle dans les différents pays entre 1960 et 2019 ?
1. Quels sont les pays où la réduction a été la plus forte ?
1. Quelle est la moyenne de cet indicateur en 2019 ?

#### Question 2 : 

1. Quels sont les pays où l'augmentation de la consommation électrique est la plus forte ?
1. Quel sont les pays où la proportion d'énergies renouvelables est la plus grande ?

#### Question 3 :

1. Quels ont les pays où la proportion d'énergies renouvelables est la plus importante ?
1. Les pays où cette proportion s'est le plus accru ?

#### Question 4 :

1. Quels pays ont vu une augmentation ou une réduction de leurs forêts ?
1. La majorité des pays voient-ils une augmentation ?
1. En proportion de la surface de leur territoire national ?
1. Quel est le solde global ?

#### Question 5 :

1. Quels sont les pays où le taux de chômage des jeunes est le plus faible ?

#### Question 6 :

1. Quelle est la différence entre le taux de scolarisation des garçons et celui des filles en fonction des pays en 2019 ?
1. En fonction des aires géographiques ?
1. Où ce taux s'est-il le plus réduit depuis 20 ans ?

#### Question 7 :

1. Quels sont les pays où les espèces animales sont le plus menacées ?
1. Les grandes aires géographiques ?

#### Question 8 :

1. Quelle a été l'évolution de l'extrême pauvreté dans les différentes grandes aire géographiques ?
1. Quels sont les pays où les revenus des plus pauvres ont augmenté le plus vite par rappport à la moyenne ?

#### Question 9 :

1. Quels sont les pays où l'usage d'Internet est le plus répandu ?
1. L'usage des téléphones mobiles ?
1. Quels sont les pays où l'augmentation a été la plus forte depuis 15 ans ?

#### Question 10 :

1. Quelle est la proportion des pays ayant une législation contre les violences envers les femmes ?
1. Le taux de femmes ayant subi des violences ?
1. Le taux de femmes considérant les violences comme légitimes dans certains cas ?

#### Question 11 :

1. Quel est le taux du travail des enfants selon les pays ?