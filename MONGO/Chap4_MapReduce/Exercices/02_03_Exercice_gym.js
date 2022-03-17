/**
 * 
01 Calculez le nombre d'hommes et de femmes dans la collection sportif à l'aide du Pattern MapReduce.
 */

db.sportif.mapReduce(
    function(){
        emit(this.Sexe.toUpperCase(), 1)
    },
    function (k, v) {
        return Array.sum(v);
    },
    {out : { inline : 1 }}
)

/**
 * 02 Calculez le nombre de sportifs jouant pour chaque sport. 
 */

 db.sportif.mapReduce(
    function () {
        if (Array.isArray(this.Sports.Jouer)) {
            this.Sports.Jouer.forEach(sport => {
                emit(sport, 1);
            })
        } else
            emit(this.Sports.Jouer, 1);
    },
    function (k, v) {
        return Array.sum(v);
    },
    {
        query: { Sports: { $exists: true } },
        out: { inline: 1 }
    }
);