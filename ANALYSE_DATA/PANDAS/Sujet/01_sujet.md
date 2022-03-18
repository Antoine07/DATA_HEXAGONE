
# 01 Sujet 

Vous allez maintenant étudier l'écart des salaires des habitants de la ville de Boston par département sur l'année 2018. Récupérez le fichier csv à l'adresse suivante :
[Analyse Boston](https://data.boston.gov/dataset/employee-earnings-report/resource/31358fd1-849a-48e0-8285-e813f6efbdf1)

Puis une fois dans votre notebook tapez la ligne de code suivante pour importer les données dans un DataFrame :

```python
# DataFrame
boston = pd.read_csv('./data/boston.csv')
```

### Préparation des données

1. Formatez les données de la colonne TOTAL EARNINGS pour les rendre compatibles avec un type numérique. Vous utilisez la méthode astype, voyez exemple ci-dessous :

```python
df[colunm].astype(float)
```

2. Ordonnez les écarts par ordre décroissant.