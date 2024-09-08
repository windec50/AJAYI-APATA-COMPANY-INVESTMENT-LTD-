var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_AJAYI_APATA_PLOT_UPDATED_1 = new ol.format.GeoJSON();
var features_AJAYI_APATA_PLOT_UPDATED_1 = format_AJAYI_APATA_PLOT_UPDATED_1.readFeatures(json_AJAYI_APATA_PLOT_UPDATED_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AJAYI_APATA_PLOT_UPDATED_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AJAYI_APATA_PLOT_UPDATED_1.addFeatures(features_AJAYI_APATA_PLOT_UPDATED_1);
var lyr_AJAYI_APATA_PLOT_UPDATED_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AJAYI_APATA_PLOT_UPDATED_1, 
                style: style_AJAYI_APATA_PLOT_UPDATED_1,
                interactive: true,
                title: '<img src="styles/legend/AJAYI_APATA_PLOT_UPDATED_1.png" /> AJAYI_APATA_PLOT_UPDATED'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_AJAYI_APATA_PLOT_UPDATED_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_AJAYI_APATA_PLOT_UPDATED_1];
lyr_AJAYI_APATA_PLOT_UPDATED_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PIN': 'PIN', 'PLOT_NO': 'PLOT_NO', 'BLOCK': 'BLOCK', 'TITLE': 'TITLE', 'ADDRESS': 'ADDRESS', 'LAND_USE': 'LAND_USE', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'PHONE_NO': 'PHONE_NO', 'AREA_HA': 'AREA_HA', 'SEARCH': 'SEARCH', });
lyr_AJAYI_APATA_PLOT_UPDATED_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'PIN': 'TextEdit', 'PLOT_NO': 'TextEdit', 'BLOCK': 'TextEdit', 'TITLE': 'TextEdit', 'ADDRESS': 'TextEdit', 'LAND_USE': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'PHONE_NO': 'TextEdit', 'AREA_HA': 'TextEdit', 'SEARCH': 'TextEdit', });
lyr_AJAYI_APATA_PLOT_UPDATED_1.set('fieldLabels', {'OBJECTID': 'no label', 'PIN': 'inline label', 'PLOT_NO': 'inline label', 'BLOCK': 'inline label', 'TITLE': 'inline label', 'ADDRESS': 'inline label', 'LAND_USE': 'inline label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'inline label', 'PHONE_NO': 'no label', 'AREA_HA': 'inline label', 'SEARCH': 'no label', });
lyr_AJAYI_APATA_PLOT_UPDATED_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});