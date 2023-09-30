// var confirmed = [566, 673, 790, 900, 1030, 1183, 1306, 1518, 1624, 1796, 2031];
// var recovered = [42, 49, 60, 75, 87, 114, 139, 183, 199, 215];
// var death = [0, 2, 2, 2, 2, 3, 4, 10, 14, 16, 20, 23];

// var ctx = document.getElementById("mychart");

// var mychart = new Chart(ctx, {
//     type: 'line',
//     data: {
//         labels: day,
//         datasets: [
//             {
//                 data: confirmed,
//                 label: "Confirmed Cases",
//                 borderColor: "#4933FF",
//                 fill: false
//             },
//             {
//                 data: recovered,
//                 label: "Recovered Cases",
//                 borderColor: "#00FF0C",
//                 fill: false
//             },
//             {
//                 data: death,
//                 label: "Death Cases",
//                 borderColor: "#00FF0C",
//                 fill: false
//             }
//         ]
//     }
// });
var ctx = document.getElementById('myChart');

var stars = [135850, 52122, 148825, 16939, 9763];
var frameworks = ["React", "Angular", "Vue", "Hyperapp", "Omi"];

var myChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: frameworks,
        datasets: [
            {
                label: "Github Stars",
                data: stars,
            },
        ],
    },
});