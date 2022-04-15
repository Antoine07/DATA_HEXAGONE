# Prénoms des enfants aux Etats-Unis

Une fois que vous avez terminé vous devez me rendre votre travail (NoteBook) à mon adresse Hexagone. Zippez votre travail et donnez votre **nom_prenom** à votre dossier contenant les fichiers (NoteBooks), respectez la convention de nommage du dossier.

N'hésitez pas à me contacter sur Teams.

Vous avez 2 semaines à partir du 3 novembre. 

## Présentation & organisation

L'administration américaine de la sécurité sociale (USSSA ou SSA) a rendu publique les données sur la fréquence des prénoms attribués aux bébés depuis 1880 jusqu'en 2018.

Récupérez les sources **names.zip** à l'adresse suivante : [baby](https://www.ssa.gov/oact/babynames/limits.html), puis dézippez celle-ci dans un dossier Data à la racine de votre NoteBook.

Créez un Notbook pour répondre aux questions.

Dans le NoteBook importez les dépendances suivantes tout en haut de votre NoteBook (dans une cellule).

```python
import numpy as np
import pandas as pd

import matplotlib.pyplot as pp
import seaborn

# intégration des graphiques dans le notebook
%matplotlib inline
```

**seaborn** est un module qui repose sur Matplotlib et améliore le rendu des graphiques (optionel).

1. Récupérez le fichier yob1880.txt et créez un DataFrame names1880 à partir de ces données. Pour charger ce DataFrame vous utiliserez la méthode **read_csv** de Pandas. Renommez les colonnes avec l'argument **names** de cette méthode avec respectivement les noms suivants  : "name", "sex" et "births" :

```python
data_source_names = "./Data/names"
names1880 = pd.read_csv( 
    f"{data_source_names}/yob1880.txt", 
    names=['name', 'sex', 'births']
)
```

2. Donnez le nombre de naissances par sex pour l'année 1880.

3. Créez un script permettant de récupérer l'ensemble des prénons, sex et dates de naissance de 1880 à 2018 à partir des fichiers du dossier names (ensemble de fichiers datés). Puis utilisez la méthode **concat** de Pandas pour les rassembler en un seul DataFrame.

4. Agrégez les données pour avoir deux colonnes F et M. Et faites la sommes des naissances par sex et year. Utilisez une table de pivot. 

*Pour cette question nous vous donnons le code essayez de le comprendre et de donnez une explication (dans le NoteBook lui-même) clair de son traitement dans votre devoir :*

```python
total_births = names.pivot_table(
    values='births', 
    index=['year'],
    columns=['sex'], 
    aggfunc=np.sum
)
```

[documentation table de pivots](https://pandas.pydata.org/docs/user_guide/reshaping.html#)

5. Représentez graphiquement le nombre de naissances par année.

6. Ajoutez une colonne **prop_birth** pour renseigner la proportion du nombre de naissances par rapport au total des naissances par sex et année (groupby). 
Créez une fonction **add_prop_birth** qui calculera cette proportion pour chacun de ces groupes. Utilisez la méthode **apply** sur les groupement, elle s'appliquera à chaque valeur du groupement et non pas au groupement entier :

```python
def count_by_group(group):
    # Ajoutez la nouvelle colonne au groupement
    group['births'].astype(float) # mettre au bon format pour les calculs (proportion)

    return group
```

Dans la suite vous travaillerez sur le DataFrame names mis à jour avec les calculs précédents.

7. Vérifiez qu'en 1880 et pour les femmes que la proportion **prop_birth** est égale à 1, arrondissez à l'entier supérieur. 

8. Créez une fonction **sum_prop_birth** ou une lambda, elle fera la somme des naissances par groupement de sex et d'année, pensez à arrondir à l'entier supérieur. Vous devez dans ce cas utiliser la méthode **agg** dans le groupby.

Vérifiez maintenant que pour l'ensemble des groupements les sommes sont toutes égales à 1. Utilisez la méthode de Numpy : **np.allclose**.

9. Ordonnez les groupements sex et année par ordre de naissance décroissante. **Mettez à jour le DataFrame names**. Utilisez la méthode **sort_values** dans la fonction à appliquer au groupby.

10. Créez une fonction permettant d'extraire les 1000 prénons les plus représentés par regroupement, pensez à appliquer cette fonction à votre groupby.

```python
def topName1000():
    pass
```

*Dans la suite on travaillera avec des sous-ensembles de 1000 prénoms.*

11. Créez maintenant une table pivot du nombre de naissances par an et par prénoms.

12. Etudiez maintenant la tendance des prénoms suivants : "John" et "Harry" (faites un graphique).

13. Représentez graphiquement (histogramme) les 10 tops prénoms en 1880.
