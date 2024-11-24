
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
   
                    tooltip: {
                        pointFormat: '{point.properties.name}: <b>{point.value}</b>'
                    }
                }]
            });
        })();
        
        (async () => {
            const data = [
                ['br-ac', 3.5],
                ['br-al', 4.2],
                ['br-am', 3.8],
                ['br-ap', 4.0],
                ['br-ba', 3.7],
                ['br-ce', 4.5],
                ['br-df', 5.0],
                ['br-es', 4.1],
                ['br-go', 4.3],
                ['br-ma', 3.6],
                ['br-mt', 4.0],
                ['br-ms', 4.8],
                ['br-mg', 3.9],
                ['br-pa', 3.4],
                ['br-pb', 4.2],
                ['br-pr', 4.7],
                ['br-pe', 4.4],
                ['br-pi', 3.3],
                ['br-rj', 4.9],
                ['br-rn', 4.0],
                ['br-ro', 4.1],
                ['br-rr', 4.6],
                ['br-rs', 4.8],
                ['br-sc', 4.6],
                ['br-se', 3.8],
                ['br-sp', 5.2],
                ['br-to', 3.7]
            ];
        
            const geojson = await fetch(
                'https://code.highcharts.com/mapdata/countries/br/br-all.geo.json'
            ).then(response => response.json());
        
            Highcharts.mapChart('fuelConsumptionMap', {
                chart: { map: geojson },
                title: { text: 'Consumo Médio de Combustível por Estado (Km/L)' },
                colorAxis: {
                    min: 3,
                    max: 5.5,
                    stops: [
                        [0, '#ffedea'],
                        [0.5, '#ffa07a'],
                        [1, '#8b0000']
                    ]
                },
                mapNavigation: {
                    enabled: true,
                    buttonOptions: {
                        verticalAlign: 'bottom'
                    }
                },
                series: [{
                    data,
                    keys: ['hc-key', 'value'],
                    joinBy: 'hc-key',
                    name: 'Km/L',
                    tooltip: { pointFormat: '{point.properties.name}: <b>{point.value} Km/L</b>' }
                }]
            });
        })();

        (async () => {
            const data = [
                ['br-ac', 82],
                ['br-al', 76],
                ['br-am', 85],
                ['br-ap', 88],
                ['br-ba', 70],
                ['br-ce', 95],
                ['br-df', 98],
                ['br-es', 80],
                ['br-go', 87],
                ['br-ma', 73],
                ['br-mt', 82],
                ['br-ms', 90],
                ['br-mg', 79],
                ['br-pa', 68],
                ['br-pb', 84],
                ['br-pr', 91],
                ['br-pe', 89],
                ['br-pi', 65],
                ['br-rj', 93],
                ['br-rn', 81],
                ['br-ro', 83],
                ['br-rr', 86],
                ['br-rs', 94],
                ['br-sc', 90],
                ['br-se', 75],
                ['br-sp', 97],
                ['br-to', 70]
            ];
        
            const geojson = await fetch(
                'https://code.highcharts.com/mapdata/countries/br/br-all.geo.json'
            ).then(response => response.json());
        
            Highcharts.mapChart('punctualityMap', {
                chart: { map: geojson },
                title: { text: 'Pontualidade dos Ônibus por Estado (%)' },
                colorAxis: {
                    min: 60,
                    max: 100,
                    stops: [
                        [0, '#e0f3f8'],
                        [0.5, '#99d8c9'],
                        [1, '#2ca25f']
                    ]
                },
                mapNavigation: {
                    enabled: true,
                    buttonOptions: {
                        verticalAlign: 'bottom'
                    }
                },
                series: [{
                    data,
                    keys: ['hc-key', 'value'],
                    joinBy: 'hc-key',
                    name: 'Pontualidade (%)',
                    tooltip: { pointFormat: '{point.properties.name}: <b>{point.value}%</b>' }
                }]
            });
        })();

        (async () => {
            const data = [
                ['br-ac', 45],
                ['br-al', 50],
                ['br-am', 60],
                ['br-ap', 55],
                ['br-ba', 40],
                ['br-ce', 70],
                ['br-df', 75],
                ['br-es', 50],
                ['br-go', 55],
                ['br-ma', 45],
                ['br-mt', 58],
                ['br-ms', 62],
                ['br-mg', 50],
                ['br-pa', 48],
                ['br-pb', 53],
                ['br-pr', 68],
                ['br-pe', 63],
                ['br-pi', 42],
                ['br-rj', 72],
                ['br-rn', 54],
                ['br-ro', 57],
                ['br-rr', 59],
                ['br-rs', 69],
                ['br-sc', 65],
                ['br-se', 49],
                ['br-sp', 80],
                ['br-to', 46]
            ];
        
            const geojson = await fetch(
                'https://code.highcharts.com/mapdata/countries/br/br-all.geo.json'
            ).then(response => response.json());
        
            Highcharts.mapChart('capacityMap', {
                chart: { map: geojson },
                title: { text: 'Capacidade Média de Passageiros por Estado' },
                colorAxis: {
                    min: 40,
                    max: 80,
                    stops: [
                        [0, '#ffeda0'],
                        [0.5, '#feb24c'],
                        [1, '#f03b20']
                    ]
                },
                mapNavigation: {
                    enabled: true,
                    buttonOptions: {
                        verticalAlign: 'bottom'
                    }
                },
                series: [{
                    data,
                    keys: ['hc-key', 'value'],
                    joinBy: 'hc-key',
                    name: 'Capacidade Média',
                    tooltip: { pointFormat: '{point.properties.name}: <b>{point.value} passageiros</b>' }
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

        Highcharts.chart('analise_ocupacao', {
            chart: {
                type: 'column',
                height: Math.max(200, document.getElementById('analise_ocupacao').offsetHeight || 0) 
            },
            title: {
                text: 'Ocupação Média dos Ônibus por Ano',
                align: 'left'
            },
            subtitle: {
                text: 'Fonte: Sistema de Gerenciamento de Transporte Público',
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
                    text: 'Ocupação Média (%)'
                }
            },
            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}%</b><br/>',
                shared: true
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        format: '{point.y:.0f}%'
                    }
                }
            },
            series: [{
                name: 'Baixa Ocupação (até 50%)',
                data: [30, 40, 25] 
            }, {
                name: 'Média Ocupação (51% a 80%)',
                data: [50, 45, 60] 
            }, {
                name: 'Alta Ocupação (acima de 80%)',
                data: [20, 15, 15] 
            }]
        });

        Highcharts.chart('analise_reclamacoes', {
            chart: {
                type: 'bar',
                height: Math.max(200, document.getElementById('analise_reclamacoes').offsetHeight || 0) 
            },
            title: {
                text: 'Reclamações de Usuários por Categoria',
                align: 'left'
            },
            subtitle: {
                text: 'Fonte: Central de Atendimento ao Usuário',
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
                    text: 'Número de Reclamações'
                }
            },
            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',
                shared: true
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            series: [{
                name: 'Pontualidade',
                data: [120, 150, 100] 
            }, {
                name: 'Conforto',
                data: [80, 100, 90] 
            }, {
                name: 'Segurança',
                data: [50, 40, 30] 
            }]
        });

        Highcharts.chart('analise_emissoes', {
            chart: {
                type: 'line',
                height: Math.max(200, document.getElementById('analise_emissoes').offsetHeight || 0) 
            },
            title: {
                text: 'Evolução das Emissões de CO₂ no Transporte Público',
                align: 'left'
            },
            subtitle: {
                text: 'Fonte: Relatório Ambiental Urbano',
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
                    text: 'Emissões de CO₂ (toneladas)'
                }
            },
            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} toneladas</b><br/>',
                shared: true
            },
            series: [{
                name: 'Frota Diesel',
                data: [1000, 800, 1200] 
            }, {
                name: 'Frota Etanol',
                data: [200, 60, 150] 
            }]
        });

        
        
    }
}

