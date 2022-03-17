
/**

Exercice que fait cette requête ?

*/

db.restaurants.mapReduce(
    function(){
        const countGradeA = this.grades.filter( g => g.grade == 'A').length
        emit(this.cuisine, countGradeA);
    },
    function (k, v){ return Array.sum(v)},
    { out : "numberA"}
);
