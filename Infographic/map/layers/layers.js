var wms_layers = [];
var format_SpillsPer100KAcres_0 = new ol.format.GeoJSON();
var features_SpillsPer100KAcres_0 = format_SpillsPer100KAcres_0.readFeatures(json_SpillsPer100KAcres_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SpillsPer100KAcres_0 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_SpillsPer100KAcres_0.addFeatures(features_SpillsPer100KAcres_0);var lyr_SpillsPer100KAcres_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SpillsPer100KAcres_0, 
                style: style_SpillsPer100KAcres_0,
    title: 'Spills Per 100K Acres<br />\
    <img src="styles/legend/SpillsPer100KAcres_0_0.png" />  0.0 - 0.5 <br />\
    <img src="styles/legend/SpillsPer100KAcres_0_1.png" />  0.5 - 1.5 <br />\
    <img src="styles/legend/SpillsPer100KAcres_0_2.png" />  1.5 - 2.7 <br />\
    <img src="styles/legend/SpillsPer100KAcres_0_3.png" />  2.7 - 4.7 <br />\
    <img src="styles/legend/SpillsPer100KAcres_0_4.png" />  4.7 - 11.1 <br />'
        });

lyr_SpillsPer100KAcres_0.setVisible(true);
var layersList = [lyr_SpillsPer100KAcres_0];
lyr_SpillsPer100KAcres_0.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'COUNTY_': 'COUNTY_', 'COUNTY_ID': 'COUNTY_ID', 'CO_NUMBER': 'CO_NUMBER', 'CO_FIPS': 'CO_FIPS', 'ACRES_SF': 'ACRES_SF', 'ACRES': 'ACRES', 'FIPS': 'FIPS', 'COUNTY': 'COUNTY', 'ST': 'ST', 'SpillCount': 'Spill Count', '100k Acres': '100k Acres', 'Per100kAcr': 'Spills Per 100k Acres ', '_SpillNum': '_SpillNum', });
lyr_SpillsPer100KAcres_0.set('fieldImages', {'AREA': 'Hidden', 'PERIMETER': 'Hidden', 'COUNTY_': 'Hidden', 'COUNTY_ID': 'Hidden', 'CO_NUMBER': 'Hidden', 'CO_FIPS': 'Hidden', 'ACRES_SF': 'Hidden', 'ACRES': 'Hidden', 'FIPS': 'Hidden', 'COUNTY': 'TextEdit', 'ST': 'Hidden', 'SpillCount': 'TextEdit', '100k Acres': 'Hidden', 'Per100kAcr': 'TextEdit', '_SpillNum': 'Hidden', });
lyr_SpillsPer100KAcres_0.set('fieldLabels', {'COUNTY': 'no label', 'SpillCount': 'inline label', 'Per100kAcr': 'inline label', });
lyr_SpillsPer100KAcres_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});