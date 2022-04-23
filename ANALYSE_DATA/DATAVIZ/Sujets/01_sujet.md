# Bitcoin

1. Récupérez les données dans le dossier Data sur les Bitcoin.

2. Créez un premier graphique plot sur la colonne Close.

Pour indiquez à Pandas que l'on souhaite définir nos index comme des dates, modifiez les index numériques en date :

```python
# dans la fonction csv de Pandas
index_col='Date',
parse_dates=True
```

3. Créez un graphique de l'évolution du Bitcoin en 2020, avec les index vous pouvez faire du slicing ou accéder à un index bitcoin['2020']

4. Etudiez, maintenant l'évolution du Bitcoin jusqu'à 2021.

5. Utilisez la méthode resample pour regrouper les données par mois, voyez la documentation. Calculez la moyenne de la valeur du Bitcoin par mois sur l'année 2021. Utilisez la méthode mean sur votre DataFrame.

6. Si on utilise la méthode std (écart-type) dans le code suivant, interprétez le sens de l'évolution du graphique.

![bitcoin](images/std_bitcoin.png)

7. Créez un graphique qui reprends sur l'année 2021 l'évolution du Bitcoin.

8. En utilisant la fonction **resample**, en regroupant vos données par semaine, et la fonction **aggregate**, créez un DataFrame des moyennes, écart-types et min/max. Vous utilisez la fonction suivante **plt.fill_between** pour créer une zone d'incertitude autour du graphique des moyennes :

![bitcoin](images/zone_max_min.png)
