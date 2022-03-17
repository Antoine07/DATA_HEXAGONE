db.books.remove({});
db.categories.remove({});

const categories = 
[
    { name : "Programmation"},
    { name : "SQL"},
    { name : "NoSQL"}
];

const books = [
    { title : "Python"},  
    { title : "JS" }, 
    {title : "PosgreSQL"}, 
    {title : "MySQL"}, 
    {title : "MongoDB"} 
];

db.createCollection('books');
db.createCollection('categories');

db.books.insertMany(books);
db.categories.insertMany(categories);

const programmation = db.categories.findOne({ name : "Programmation"} );
const sql = db.categories.findOne({ name : "SQL"} );
const noSql = db.categories.findOne({ name : "NoSQL"} );

db.books.updateMany(
    { title : { $in : ['Python', 'JS']}},
    {
        $set : {
            category_id :  programmation._id
        }
    }
);

db.books.updateMany(
    { title : { $in : ['PosgreSQL', 'MySQL']}},
    {
        $set : {
            category_id :  sql._id
        }
    }
);

db.books.updateMany(
    { title : { $in : ['MongoDB']}},
    {
        $set : {
            category_id :  noSql._id
        }
    }
);

// vérifications des mises à jour

db.books.find({}, { _id : 1, category_id : 1 }).pretty();
db.categories.find({}, { _id : 1, category_id : 1 }).pretty();
