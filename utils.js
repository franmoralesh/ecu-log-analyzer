// utils.js

function getColumn(data, columnName){

    const values = [];

    data.forEach(row=>{

        values.push(row[columnName]);

    });

    return values;

}
