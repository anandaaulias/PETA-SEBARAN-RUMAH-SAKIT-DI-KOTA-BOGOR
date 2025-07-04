var wms_layers = [];


        var lyr_EsriDarkGray_0 = new ol.layer.Tile({
            'title': 'Esri Dark Gray',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_AdministrasiKecamatanKotaBogor2_1 = new ol.format.GeoJSON();
var features_AdministrasiKecamatanKotaBogor2_1 = format_AdministrasiKecamatanKotaBogor2_1.readFeatures(json_AdministrasiKecamatanKotaBogor2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdministrasiKecamatanKotaBogor2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdministrasiKecamatanKotaBogor2_1.addFeatures(features_AdministrasiKecamatanKotaBogor2_1);
var lyr_AdministrasiKecamatanKotaBogor2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdministrasiKecamatanKotaBogor2_1, 
                style: style_AdministrasiKecamatanKotaBogor2_1,
                popuplayertitle: 'Administrasi Kecamatan Kota Bogor (2)',
                interactive: true,
    title: 'Administrasi Kecamatan Kota Bogor (2)<br />\
    <img src="styles/legend/AdministrasiKecamatanKotaBogor2_1_0.png" /> Bogor Barat<br />\
    <img src="styles/legend/AdministrasiKecamatanKotaBogor2_1_1.png" /> Bogor Selatan<br />\
    <img src="styles/legend/AdministrasiKecamatanKotaBogor2_1_2.png" /> Bogor Tengah<br />\
    <img src="styles/legend/AdministrasiKecamatanKotaBogor2_1_3.png" /> Bogor Timur<br />\
    <img src="styles/legend/AdministrasiKecamatanKotaBogor2_1_4.png" /> Bogor Utara<br />\
    <img src="styles/legend/AdministrasiKecamatanKotaBogor2_1_5.png" /> Tanah Sareal<br />' });
var format_RumahSakitKotaBogor_2 = new ol.format.GeoJSON();
var features_RumahSakitKotaBogor_2 = format_RumahSakitKotaBogor_2.readFeatures(json_RumahSakitKotaBogor_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahSakitKotaBogor_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahSakitKotaBogor_2.addFeatures(features_RumahSakitKotaBogor_2);
var lyr_RumahSakitKotaBogor_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahSakitKotaBogor_2, 
                style: style_RumahSakitKotaBogor_2,
                popuplayertitle: 'Rumah Sakit Kota Bogor',
                interactive: true,
                title: '<img src="styles/legend/RumahSakitKotaBogor_2.png" /> Rumah Sakit Kota Bogor'
            });

lyr_EsriDarkGray_0.setVisible(true);lyr_AdministrasiKecamatanKotaBogor2_1.setVisible(true);lyr_RumahSakitKotaBogor_2.setVisible(true);
var layersList = [lyr_EsriDarkGray_0,lyr_AdministrasiKecamatanKotaBogor2_1,lyr_RumahSakitKotaBogor_2];
lyr_AdministrasiKecamatanKotaBogor2_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKC': 'WADMKC', 'Penduduk': 'Penduduk', 'Luas': 'Luas', });
lyr_RumahSakitKotaBogor_2.set('fieldAliases', {'id': 'id', 'Keterangan': 'Keterangan', 'Foto': 'Foto', });
lyr_AdministrasiKecamatanKotaBogor2_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKC': 'TextEdit', 'Penduduk': 'Range', 'Luas': 'Range', });
lyr_RumahSakitKotaBogor_2.set('fieldImages', {'id': 'TextEdit', 'Keterangan': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_AdministrasiKecamatanKotaBogor2_1.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'Penduduk': 'inline label - always visible', 'Luas': 'inline label - always visible', });
lyr_RumahSakitKotaBogor_2.set('fieldLabels', {'id': 'inline label - always visible', 'Keterangan': 'inline label - always visible', 'Foto': 'inline label - always visible', });
lyr_RumahSakitKotaBogor_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});