;(function($) {

    function initMap() {
        // plot marker on map by latitude & longitude
        var markers_data = [
            {latLng: [32.33, -85.00], name: 'Marker - USA'},
            {latLng: [80.33, 44.00], name: 'Marker - Russia'},
            {latLng: [-32.33, -85.00], name: 'Marker - Peru'},
            {latLng: [70.11, 75.00], name: 'Marker - Russia 2'},
            {latLng: [-12.33, -115.00], name: 'Marker - Big sea'},
            {latLng: [5.44, 103.00], name: 'Marker - Malaysia'}
        ];
        // show the size of marker
        var location_area_data = [
            49.1,
            14.6,
            32.8,
            77.0,
            22.9,
            51.8
        ];
        $('#map').vectorMap({
            map: 'world_mill_en',
            scaleColors: ['#C8EEFF', '#0071A4'],
            normalizeFunction: 'polynomial',
            zoomOnScroll:false,
            zoomMin:0.85,
            hoverColor: false,
            regionStyle:{
                initial: {
                    fill: '#a5ded9',
                    "fill-opacity": 1,
                    stroke: '#a5ded9',
                    "stroke-width": 0,
                    "stroke-opacity": 0
                },
                hover: {
                    "fill-opacity": 0.8
                },
                selected: {
                    fill: 'yellow'
                },
                selectedHover: { }
            },
            markerStyle: {
                initial: {
                    fill: '#f35958',
                    stroke: '#f35958',
                    "fill-opacity": 1,
                    "stroke-width": 6,
                    "stroke-opacity": 0.5,
                    r: 3
                },
                hover: {
                    stroke: 'black',
                    "stroke-width": 2
                },
                selected: {
                    fill: 'blue'
                },
                selectedHover: { }
            },
            backgroundColor: '#ffffff',
            markers : markers_data,
            series: {
                markers: [{
                    attribute: 'r',
                    scale: [3, 7],
                    values: location_area_data
                }]
            },
            onMarkerLabelShow: function(event, label, index){
                var text = label.text()
                    + '<br/>Data 1: for ' +  index
                    + '<br/>Data 2: for ' +  index;
                label.html(text);
            },
            onRegionLabelShow: function(event, label, code) {
                var text = label.text()
                    + '<br/>Data 1: ' +  code
                    + '<br/>Data 2: ' +  code + label.text();
                label.html(text);
            },
            onRegionClick: function(event, code) {
                console.log('Country ' + code + ' clicked');
            }
        });
    }

    initMap();


    $('.controller .reload').click(function () { 
        var el =$(this).parent().parent().parent();
        blockUI(el);
          window.setTimeout(function () {
               unblockUI(el);
            }, 1000);
    });
    $('.controller .remove').click(function () {
        $(this).parent().parent().hide(1000);
    });

    // show spinner
    function blockUI(el) {
        $(el).block({
            message: '<div class="loading-animator"></div>',
            css: {
                border: 'none', padding: '2px',
                backgroundColor: 'none'
            },
            overlayCSS: {
                backgroundColor: '#fff',
                opacity: 0.3,
                cursor: 'wait'
            }
        });
    }
    function unblockUI(el) {
        $(el).unblock();
    }
    
}) (jQuery);
