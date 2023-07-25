ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([45.741952, 13.854782, 45.863252, 13.957312]);
var wms_layers = [];

var format_OCHAKontorLinkedVillagesGDB_South_0 = new ol.format.GeoJSON();
var features_OCHAKontorLinkedVillagesGDB_South_0 = format_OCHAKontorLinkedVillagesGDB_South_0.readFeatures(json_OCHAKontorLinkedVillagesGDB_South_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_OCHAKontorLinkedVillagesGDB_South_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OCHAKontorLinkedVillagesGDB_South_0.addFeatures(features_OCHAKontorLinkedVillagesGDB_South_0);
var lyr_OCHAKontorLinkedVillagesGDB_South_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OCHAKontorLinkedVillagesGDB_South_0, 
                style: style_OCHAKontorLinkedVillagesGDB_South_0,
                interactive: true,
    title: 'OCHAKontorLinkedVillagesGDB_South<br />\
    <img src="styles/legend/OCHAKontorLinkedVillagesGDB_South_0_0.png" />  1 - 100 <br />\
    <img src="styles/legend/OCHAKontorLinkedVillagesGDB_South_0_1.png" />  100 - 250 <br />\
    <img src="styles/legend/OCHAKontorLinkedVillagesGDB_South_0_2.png" />  250 - 500 <br />\
    <img src="styles/legend/OCHAKontorLinkedVillagesGDB_South_0_3.png" />  500 - 1000 <br />\
    <img src="styles/legend/OCHAKontorLinkedVillagesGDB_South_0_4.png" />  1000 - 31384 <br />'
        });
var format_viilags_population180_1 = new ol.format.GeoJSON();
var features_viilags_population180_1 = format_viilags_population180_1.readFeatures(json_viilags_population180_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_viilags_population180_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_viilags_population180_1.addFeatures(features_viilags_population180_1);
var lyr_viilags_population180_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_viilags_population180_1, 
                style: style_viilags_population180_1,
                interactive: true,
    title: 'viilags_population180<br />\
    <img src="styles/legend/viilags_population180_1_0.png" />  0 - 100 <br />\
    <img src="styles/legend/viilags_population180_1_1.png" />  100 - 500 <br />\
    <img src="styles/legend/viilags_population180_1_2.png" />  500 - 1000 <br />\
    <img src="styles/legend/viilags_population180_1_3.png" />  1000 - 2500 <br />\
    <img src="styles/legend/viilags_population180_1_4.png" />  2500 - 2042410 <br />'
        });
var format_HF_VONO120Districts_2 = new ol.format.GeoJSON();
var features_HF_VONO120Districts_2 = format_HF_VONO120Districts_2.readFeatures(json_HF_VONO120Districts_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_HF_VONO120Districts_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HF_VONO120Districts_2.addFeatures(features_HF_VONO120Districts_2);
var lyr_HF_VONO120Districts_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HF_VONO120Districts_2, 
                style: style_HF_VONO120Districts_2,
                interactive: true,
                title: '<img src="styles/legend/HF_VONO120Districts_2.png" /> HF_VONO120Districts'
            });

lyr_OCHAKontorLinkedVillagesGDB_South_0.setVisible(true);lyr_viilags_population180_1.setVisible(true);lyr_HF_VONO120Districts_2.setVisible(true);
var layersList = [lyr_OCHAKontorLinkedVillagesGDB_South_0,lyr_viilags_population180_1,lyr_HF_VONO120Districts_2];
lyr_OCHAKontorLinkedVillagesGDB_South_0.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'fid_1': 'fid_1', 'h3': 'h3', 'population': 'population', 'Count_': 'Count_', 'Sum_OBJECT': 'Sum_OBJECT', 'Sum_FAMILY': 'Sum_FAMILY', 'Sum_HOUSE': 'Sum_HOUSE', 'Sum_MALE': 'Sum_MALE', 'Sum_FEMALE': 'Sum_FEMALE', 'Sum_TOT_M_': 'Sum_TOT_M_', 'Sum_POINT_': 'Sum_POINT_', 'Sum_POINT1': 'Sum_POINT1', 'Sum_FID_1': 'Sum_FID_1', 'Sum_OBJE_1': 'Sum_OBJE_1', 'Sum_DISTRI': 'Sum_DISTRI', 'Sum_GOVERN': 'Sum_GOVERN', 'Sum_O_ID': 'Sum_O_ID', 'Sum_MALE0_': 'Sum_MALE0_', 'Sum_MALE5_': 'Sum_MALE5_', 'Sum_MALE15': 'Sum_MALE15', 'Sum_MALE45': 'Sum_MALE45', 'Sum_MALE_6': 'Sum_MALE_6', 'Sum_FEMA_1': 'Sum_FEMA_1', 'Sum_FEMA_2': 'Sum_FEMA_2', 'Sum_FEMA_3': 'Sum_FEMA_3', 'Sum_FEMA_4': 'Sum_FEMA_4', 'Sum_FEMA_5': 'Sum_FEMA_5', 'Sum_TOTAL': 'Sum_TOTAL', 'Sum_MALE_1': 'Sum_MALE_1', 'Sum_FEMA_6': 'Sum_FEMA_6', 'Sum_Distan': 'Sum_Distan', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_viilags_population180_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GEN_NAME': 'GEN_NAME', 'V_C_NAME': 'V_C_NAME', 'PP_D': 'PP_D', 'TOT_M_F': 'TOT_M_F', });
lyr_HF_VONO120Districts_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'Governorat': 'Governorat', 'DistrictID': 'DistrictID', 'FacilityID': 'FacilityID', 'FType': 'FType', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_OCHAKontorLinkedVillagesGDB_South_0.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'fid_1': 'TextEdit', 'h3': 'TextEdit', 'population': 'TextEdit', 'Count_': 'TextEdit', 'Sum_OBJECT': 'TextEdit', 'Sum_FAMILY': 'TextEdit', 'Sum_HOUSE': 'TextEdit', 'Sum_MALE': 'TextEdit', 'Sum_FEMALE': 'TextEdit', 'Sum_TOT_M_': 'TextEdit', 'Sum_POINT_': 'TextEdit', 'Sum_POINT1': 'TextEdit', 'Sum_FID_1': 'TextEdit', 'Sum_OBJE_1': 'TextEdit', 'Sum_DISTRI': 'TextEdit', 'Sum_GOVERN': 'TextEdit', 'Sum_O_ID': 'TextEdit', 'Sum_MALE0_': 'TextEdit', 'Sum_MALE5_': 'TextEdit', 'Sum_MALE15': 'TextEdit', 'Sum_MALE45': 'TextEdit', 'Sum_MALE_6': 'TextEdit', 'Sum_FEMA_1': 'TextEdit', 'Sum_FEMA_2': 'TextEdit', 'Sum_FEMA_3': 'TextEdit', 'Sum_FEMA_4': 'TextEdit', 'Sum_FEMA_5': 'TextEdit', 'Sum_TOTAL': 'TextEdit', 'Sum_MALE_1': 'TextEdit', 'Sum_FEMA_6': 'TextEdit', 'Sum_Distan': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_viilags_population180_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'GEN_NAME': 'TextEdit', 'V_C_NAME': 'TextEdit', 'PP_D': 'TextEdit', 'TOT_M_F': 'TextEdit', });
lyr_HF_VONO120Districts_2.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'Governorat': 'Range', 'DistrictID': 'Range', 'FacilityID': 'TextEdit', 'FType': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_OCHAKontorLinkedVillagesGDB_South_0.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'fid_1': 'no label', 'h3': 'no label', 'population': 'inline label', 'Count_': 'no label', 'Sum_OBJECT': 'no label', 'Sum_FAMILY': 'no label', 'Sum_HOUSE': 'no label', 'Sum_MALE': 'no label', 'Sum_FEMALE': 'no label', 'Sum_TOT_M_': 'inline label', 'Sum_POINT_': 'no label', 'Sum_POINT1': 'no label', 'Sum_FID_1': 'no label', 'Sum_OBJE_1': 'no label', 'Sum_DISTRI': 'no label', 'Sum_GOVERN': 'no label', 'Sum_O_ID': 'no label', 'Sum_MALE0_': 'no label', 'Sum_MALE5_': 'no label', 'Sum_MALE15': 'no label', 'Sum_MALE45': 'no label', 'Sum_MALE_6': 'no label', 'Sum_FEMA_1': 'no label', 'Sum_FEMA_2': 'no label', 'Sum_FEMA_3': 'no label', 'Sum_FEMA_4': 'no label', 'Sum_FEMA_5': 'no label', 'Sum_TOTAL': 'no label', 'Sum_MALE_1': 'no label', 'Sum_FEMA_6': 'no label', 'Sum_Distan': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_viilags_population180_1.set('fieldLabels', {'OBJECTID': 'no label', 'GEN_NAME': 'no label', 'V_C_NAME': 'no label', 'PP_D': 'no label', 'TOT_M_F': 'no label', });
lyr_HF_VONO120Districts_2.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'Governorat': 'no label', 'DistrictID': 'no label', 'FacilityID': 'no label', 'FType': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_HF_VONO120Districts_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});