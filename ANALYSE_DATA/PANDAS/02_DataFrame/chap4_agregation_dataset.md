
# Agrégation

## Group By

La méthode **groupby** sur un objet Pandas permet de regrouper des données en fonction d'une colonne ou de plusieurs colonnes. Elle permet alors d'appliquer une fonction d'aggrégation sur ce groupe, comme par exemple la moyenne ou une somme.

Le **groupby** est similaire dans sa définition au groupby SQL que nous verrons par la suite.

```python

df = pd.DataFrame({
    'Animal': [
    'Falcon', 'Falcon',
    'Parrot', 'Parrot'
    ],
    'Max Speed': [380., 370., 24., 26.]
})

df.groupby(['Animal'])

```

Une fois que vous avez groupé les valeurs par nom de colonne ou de lignes, vous pouvez appliquer une fonction d'agrégation :

```python
df.groupby(['Animal'])
.aggregate(lambda x : sum(x))
```

![groupby appliquer une fonction d'agrégation](images//groupby001.png)

Voic le schéma général du groupby dans Pandas :

![groupby schéma](images/groupby003.png)

## 00_Exercice somme des prix

Soit le DataFrame Fruit suivant calculez par genre de fruit la somme des prix TTC. Définissez votre propre fonction pour calculer le prix TTC et appliquez la sur le groupement :

```python
df_prices = pd.DataFrame({
    'Fruit': [
        'Orange', 'Orange', 'Orange',
        'Banana', 'Banana', 'raspberry'
    ],
    'Price HT': [1.5, 1.75, 1., 0.5, 1., 0.75]
})
```

## 01_Exercice de regroupement par pays

1. Reprenez le dataset suivant et donnez le nombre d'enfant(s) par ville dans un tableau à deux colonnes **city** & **num_children**.

2. Quel est l'écart des ages des habitants par ville ?

3. Est-ce que les femmes mariées ont plus d'enfant que les hommes divorcés ?

4. Quelle est la ville ou les femmes ont le plus de chien ? Même question pour les hommes ?
Vous pourrez utiliser idxmax pour déterminer la valeur rechercher. Voyez la définition suivante :
*Retourne l'index de la première occurrence du maximum sur l'axe demandé.*

```python
import pandas as pd
import numpy as np

dataset = {
    'name':['john','mary','peter','jeff','bill','lisa','jose'],
    'age':[23,78,22,19,45,33,20],
    'gender':['M','F','M','M','M','F','M'],
    'city':['Paris','Lille','Paris','Lille',
    'Paris','Bordeaux','Bordeaux'],
    'num_children':[3,0,2,4,3,1,5],
    'num_pet':[5,1,0,5,2,2,3],
    'status' : ['married', 'married', 'married', 'divorced', 'divorced', 'married', 'married']
}

df = pd.DataFrame(dataset)
```

## 02_Exercice pourboires

Vous allez travailler avec un jeu de données : **tips**, pourboires dans un restaurant.

Récupérez la source à l'adresse suivante : [tips](https://raw.githubusercontent.com/pandas-dev/pandas/master/doc/data/tips.csv)

L'adresse pour récupérer les données en ligne se trouve : 

```text
https://raw.githubusercontent.com/pandas-dev/pandas/master/doc/data/tips.csv
```

Vous pouvez enregistrerer ce fichier à la racine de vos notebooks, puis importez le dans votre notebook de la manière suivante 

```python
tips = pd.read_csv('data/tips.csv')
```

Ou directement l'importez dans votre Notebook comme suit :

```python
address = "https://raw.githubusercontent.com/pandas-dev/pandas/master/doc/data/tips.csv"
tips = pd.read_csv(address)

```

Affichez les premiers résultats :

```python
tips.head()
```

1. Ajoutez une colonne **tips_perct** au DataFrame tips, elle calculera le pourcentage de chaque pourboire par rapport au total.

2. Quelles sont les pourcentages des pourboires par rapport au sex et à la consommation de tabac ? Donnez leurs moyennes et écarts types.
Utilisez la méthode suivante sur votre groupement :

```python
agg(['mean', 'std'])
```

3. Calculez l'étendue des pourboires pour les femmes qu'elles fument ou ne fument pas. Créez une fonction peak_to_peak et appliquez cette fonction, comme une fonction d'agrégation, à votre groupement à l'aide de la fonction agg de Pandas.

Vous pouvez encore une fois utiliser la méthode agg pour appliquer votre fonction au groupement.

4. En utilisant le même regroupement par sex et smoker et en utilisant la fonction agg de Pandas, calculez le max des pourboires ainsi que le nombre. Vous pouvez passer à la méthode agg un dictionnaire pour spécifier les fonctions à appliquer par colonne.