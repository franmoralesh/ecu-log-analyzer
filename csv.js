function splitCSVLine(line){

    const result = [];
    let current = "";
    let insideQuotes = false;

    for(let i = 0; i < line.length; i++){

        const char = line[i];

        if(char === '"'){

            insideQuotes = !insideQuotes;

        }else if(char === "," && !insideQuotes){

            result.push(current);

            current = "";

        }else{

            current += char;

        }

    }

    result.push(current);

    return result;

}
