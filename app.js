// app.js
// Aquí irán las funciones para dibujar gráficos

function drawGraph(x, y, title, xLabel, yLabel){

    Plotly.newPlot("graph", [

        {
            x: x,
            y: y,
            mode: "lines",
            name: title
        }

    ], {

        title: title,

        xaxis: {
            title: xLabel
        },

        yaxis: {
            title: yLabel
        }

    });

}
