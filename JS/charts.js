
function chart_control(page) {
    if (page == 'rastreio') {
        (async () => {
            // Dados fictícios para cada estado do Brasil (exemplo de pontuação de desempenho dos ônibus)
            const data = [
                ['br-ac', 85],
                ['br-al', 70],
                ['br-am', 75],
                ['br-ap', 80],
                ['br-ba', 68],
                ['br-ce', 90],
                ['br-df', 95],
                ['br-es', 78],
                ['br-go', 85],
                ['br-ma', 72],
                ['br-mt', 80],
                ['br-ms', 88],
                ['br-mg', 76],
                ['br-pa', 70],
                ['br-pb', 82],
                ['br-pr', 88],
                ['br-pe', 85],
                ['br-pi', 65],
                ['br-rj', 92],
                ['br-rn', 78],
                ['br-ro', 80],
                ['br-rr', 83],
                ['br-rs', 90],
                ['br-sc', 87],
                ['br-se', 75],
                ['br-sp', 95],
                ['br-to', 72]
            ];
        
            // Carrega o mapa GeoJSON do Brasil
            const geojson = await fetch(
                'https://code.highcharts.com/mapdata/countries/br/br-all.geo.json'
            ).then(response => response.json());
        
            // Inicializa o mapa
            Highcharts.mapChart('mapExample', {
                chart: {
                    map: geojson,

                },
        
                title: {
                    text: 'Desempenho do Transporte de Ônibus por Estado - Brasil'
                },
        
                accessibility: {
                    typeDescription: 'Mapa do Brasil mostrando pontuação de desempenho do transporte público por estado.'
                },
        
                mapNavigation: {
                    enabled: true,
                    buttonOptions: {
                        verticalAlign: 'bottom'
                    }
                },
        
                colorAxis: {
                    min: 60,
                    max: 100,
                    stops: [
                        [0, '#f4e8e8'],  // Cor mais clara para pontuação baixa
                        [0.5, '#ff6961'],  // Cor intermediária
                        [1, '#2d572c']  // Cor mais escura para pontuação alta
                    ],
                    tickPixelInterval: 100
                },
        
                series: [{
                    data: data,
                    keys: ['hc-key', 'value'],
                    joinBy: 'hc-key',  // Use 'hc-key' to match the GeoJSON
                    name: 'Pontuação de Desempenho',
                    dataLabels: {
                        enabled: true,
                        format: '{point.properties.name}'
                    },
                    tooltip: {
                        pointFormat: '{point.properties.name}: <b>{point.value}</b>'
                    }
                }]
            });
        })();
        
        


        
        

    } else if (page == 'relatorio') {

        Highcharts.chart('analise_bus', {
            chart: {
                type: 'column',
                height: Math.max(200, document.getElementById('analise_bus').offsetHeight || 0) // Ensures min height of 200px
            },
            title: {
                text: 'Puntualidade no Transporte de Ônibus por Ano',
                align: 'left'
            },
            subtitle: {
                text: 'Fonte: Sistema de Monitoramento de Transporte Público',
                align: 'left'
            },
            xAxis: {
                categories: ['2019', '2020', '2021'],
                title: {
                    text: 'Ano'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Porcentagem de Ônibus (%)'
                }
            },
            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}%</b><br/>',
                shared: true
            },
            plotOptions: {
                column: {
                    stacking: 'percent',
                    dataLabels: {
                        enabled: true,
                        format: '{point.y:.0f}%'
                    }
                }
            },
            series: [{
                name: 'Pontual',
                data: [70, 65, 80] // valores fictícios
            }, {
                name: 'Atrasado',
                data: [20, 25, 15] // valores fictícios
            }, {
                name: 'Cancelado',
                data: [10, 10, 5] // valores fictícios
            }]
        });
    }
}

