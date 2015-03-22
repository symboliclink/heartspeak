Meteor.startup(function() {
  // Potentially prompts the user to enable location services. We do this early
  // on in order to have the most accurate location by the time the user shares
    Geolocation.currentLocation();
    SketchList = new Ground.Collection('sketches', { connection: null });
    ChunkList = new Ground.Collection('chunks', { connection: null });

    if(ChunkList.findOne()==null)
        loadChunkData();
});

function loadChunkData(){
    var john = [
        {src: "B04___01_John________ENGESVN2DA.mp3", data:[{"verse_id":1,"verse_start":3.159},{"verse_id":2,"verse_start":10.132},{"verse_id":3,"verse_start":12.265},{"verse_id":4,"verse_start":17.291},{"verse_id":5,"verse_start":21.291},{"verse_id":6,"verse_start":26.344},{"verse_id":7,"verse_start":30.252},{"verse_id":8,"verse_start":35.675},{"verse_id":9,"verse_start":39.861},{"verse_id":10,"verse_start":44.278},{"verse_id":11,"verse_start":50.45},{"verse_id":12,"verse_start":54.768},{"verse_id":13,"verse_start":61.225},{"verse_id":14,"verse_start":68.053},{"verse_id":15,"verse_start":78.132},{"verse_id":16,"verse_start":89.556},{"verse_id":17,"verse_start":94.477},{"verse_id":18,"verse_start":100.424},{"verse_id":19,"verse_start":108.411},{"verse_id":20,"verse_start":116.715},{"verse_id":21,"verse_start":122.848},{"verse_id":22,"verse_start":134.742},{"verse_id":23,"verse_start":142.305},{"verse_id":24,"verse_start":153.079},{"verse_id":25,"verse_start":156.053},{"verse_id":26,"verse_start":163.887},{"verse_id":27,"verse_start":170.808},{"verse_id":28,"verse_start":177.132},{"verse_id":29,"verse_start":182.424},{"verse_id":30,"verse_start":191.848},{"verse_id":31,"verse_start":199.556},{"verse_id":32,"verse_start":208.252},{"verse_id":33,"verse_start":216.742},{"verse_id":34,"verse_start":229.609},{"verse_id":35,"verse_start":235.132},{"verse_id":36,"verse_start":239},{"verse_id":37,"verse_start":244.954},{"verse_id":38,"verse_start":249},{"verse_id":39,"verse_start":260.662},{"verse_id":40,"verse_start":270.318},{"verse_id":41,"verse_start":275.662},{"verse_id":42,"verse_start":282.675},{"verse_id":43,"verse_start":293.901},{"verse_id":44,"verse_start":300.649},{"verse_id":45,"verse_start":304.45},{"verse_id":46,"verse_start":314.026},{"verse_id":47,"verse_start":321.675},{"verse_id":48,"verse_start":330.132},{"verse_id":49,"verse_start":340.623},{"verse_id":50,"verse_start":346.848},{"verse_id":51,"verse_start":355.861}]}
        ,{src: "B04___02_John________ENGESVN2DA.mp3", data:[{"verse_id":1,"verse_start":3.066},{"verse_id":2,"verse_start":8.543},{"verse_id":3,"verse_start":11.927},{"verse_id":4,"verse_start":17.093},{"verse_id":5,"verse_start":24.715},{"verse_id":6,"verse_start":29.556},{"verse_id":7,"verse_start":36.517},{"verse_id":8,"verse_start":43.066},{"verse_id":9,"verse_start":49.94},{"verse_id":10,"verse_start":60.252},{"verse_id":11,"verse_start":71.689},{"verse_id":12,"verse_start":80.464},{"verse_id":13,"verse_start":88.728},{"verse_id":14,"verse_start":93.781},{"verse_id":15,"verse_start":100.755},{"verse_id":16,"verse_start":109.98},{"verse_id":17,"verse_start":117.874},{"verse_id":18,"verse_start":124.053},{"verse_id":19,"verse_start":130.093},{"verse_id":20,"verse_start":136.49},{"verse_id":21,"verse_start":145.649},{"verse_id":22,"verse_start":148.755},{"verse_id":23,"verse_start":157.53},{"verse_id":24,"verse_start":164.728},{"verse_id":25,"verse_start":170.768}]}
        ,{src: "B04___03_John________ENGESVN2DA.mp3", data:[{"verse_id":1,"verse_start":3.159},{"verse_id":2,"verse_start":8.026},{"verse_id":3,"verse_start":20.477},{"verse_id":4,"verse_start":28.596},{"verse_id":5,"verse_start":38.172},{"verse_id":6,"verse_start":48.159},{"verse_id":7,"verse_start":53.119},{"verse_id":8,"verse_start":57.252},{"verse_id":9,"verse_start":68.45},{"verse_id":10,"verse_start":73.318},{"verse_id":11,"verse_start":79.45},{"verse_id":12,"verse_start":89.49},{"verse_id":13,"verse_start":96.821},{"verse_id":14,"verse_start":103.185},{"verse_id":15,"verse_start":108.887},{"verse_id":16,"verse_start":113.172},{"verse_id":17,"verse_start":123.159},{"verse_id":18,"verse_start":130.715},{"verse_id":19,"verse_start":142.053},{"verse_id":20,"verse_start":151.808},{"verse_id":21,"verse_start":159.649},{"verse_id":22,"verse_start":168.755},{"verse_id":23,"verse_start":176.278},{"verse_id":24,"verse_start":183.57},{"verse_id":25,"verse_start":186.503},{"verse_id":26,"verse_start":191.834},{"verse_id":27,"verse_start":203.861},{"verse_id":28,"verse_start":210.04},{"verse_id":29,"verse_start":216.636},{"verse_id":30,"verse_start":229.728},{"verse_id":31,"verse_start":234.013},{"verse_id":32,"verse_start":244.543},{"verse_id":33,"verse_start":250.172},{"verse_id":34,"verse_start":255.093},{"verse_id":35,"verse_start":260.848},{"verse_id":36,"verse_start":264.517}]}
        ,{src: "B04___04_John________ENGESVN2DA.mp3", data:[{"verse_id":1,"verse_start":2.927},{"verse_id":2,"verse_start":9.808},{"verse_id":3,"verse_start":13.848},{"verse_id":4,"verse_start":17.464},{"verse_id":5,"verse_start":19.808},{"verse_id":6,"verse_start":25.94},{"verse_id":7,"verse_start":34.954},{"verse_id":8,"verse_start":41.172},{"verse_id":9,"verse_start":44.94},{"verse_id":10,"verse_start":59.424},{"verse_id":11,"verse_start":70.477},{"verse_id":12,"verse_start":80},{"verse_id":13,"verse_start":87.848},{"verse_id":14,"verse_start":93.464},{"verse_id":15,"verse_start":104.702},{"verse_id":16,"verse_start":113.94},{"verse_id":17,"verse_start":119.238},{"verse_id":18,"verse_start":129.278},{"verse_id":19,"verse_start":136.331},{"verse_id":20,"verse_start":142.834},{"verse_id":21,"verse_start":150.768},{"verse_id":22,"verse_start":160.291},{"verse_id":23,"verse_start":167.265},{"verse_id":24,"verse_start":178.318},{"verse_id":25,"verse_start":185.238},{"verse_id":26,"verse_start":194.517},{"verse_id":27,"verse_start":199.119},{"verse_id":28,"verse_start":210.596},{"verse_id":29,"verse_start":215.331},{"verse_id":30,"verse_start":221.821},{"verse_id":31,"verse_start":224.887},{"verse_id":32,"verse_start":230.238},{"verse_id":33,"verse_start":236.185},{"verse_id":34,"verse_start":241.477},{"verse_id":35,"verse_start":248.901},{"verse_id":36,"verse_start":259.728},{"verse_id":37,"verse_start":268.636},{"verse_id":38,"verse_start":273.887},{"verse_id":39,"verse_start":281.411},{"verse_id":40,"verse_start":288.517},{"verse_id":41,"verse_start":294.411},{"verse_id":42,"verse_start":297.291},{"verse_id":43,"verse_start":310.305},{"verse_id":44,"verse_start":314.702},{"verse_id":45,"verse_start":319.954},{"verse_id":46,"verse_start":329.013},{"verse_id":47,"verse_start":338.397},{"verse_id":48,"verse_start":347.305},{"verse_id":49,"verse_start":353.159},{"verse_id":50,"verse_start":359.848},{"verse_id":51,"verse_start":368.715},{"verse_id":52,"verse_start":374},{"verse_id":53,"verse_start":382.377},{"verse_id":54,"verse_start":390.848}]}
        ,{src: "B04___05_John________ENGESVN2DA.mp3", data:[{"verse_id":1,"verse_start":3.503},{"verse_id":2,"verse_start":8.265},{"verse_id":3,"verse_start":16.371},{"verse_id":4,"verse_start":21.225},{"verse_id":5,"verse_start":21.225},{"verse_id":6,"verse_start":24.98},{"verse_id":7,"verse_start":33.636},{"verse_id":8,"verse_start":47.093},{"verse_id":9,"verse_start":52.848},{"verse_id":10,"verse_start":59.649},{"verse_id":11,"verse_start":66.795},{"verse_id":12,"verse_start":75.146},{"verse_id":13,"verse_start":80.927},{"verse_id":14,"verse_start":88.026},{"verse_id":15,"verse_start":97.596},{"verse_id":16,"verse_start":101.914},{"verse_id":17,"verse_start":107.861},{"verse_id":18,"verse_start":113.914},{"verse_id":19,"verse_start":125.172},{"verse_id":20,"verse_start":139.556},{"verse_id":21,"verse_start":150.238},{"verse_id":22,"verse_start":158.834},{"verse_id":23,"verse_start":163.927},{"verse_id":24,"verse_start":173.159},{"verse_id":25,"verse_start":187},{"verse_id":26,"verse_start":197.119},{"verse_id":27,"verse_start":203.689},{"verse_id":28,"verse_start":210.371},{"verse_id":29,"verse_start":216.358},{"verse_id":30,"verse_start":225.159},{"verse_id":31,"verse_start":236.053},{"verse_id":32,"verse_start":242},{"verse_id":33,"verse_start":248.583},{"verse_id":34,"verse_start":252.821},{"verse_id":35,"verse_start":260.132},{"verse_id":36,"verse_start":266.675},{"verse_id":37,"verse_start":279.437},{"verse_id":38,"verse_start":288.093},{"verse_id":39,"verse_start":295.053},{"verse_id":40,"verse_start":303.04},{"verse_id":41,"verse_start":307.212},{"verse_id":42,"verse_start":309.834},{"verse_id":43,"verse_start":313.795},{"verse_id":44,"verse_start":322.252},{"verse_id":45,"verse_start":330.106},{"verse_id":46,"verse_start":339.04},{"verse_id":47,"verse_start":344.94}]}
        ,{src: "B04___06_John________ENGESVN2DA.mp3", data:[{"verse_id":1,"verse_start":3.013},{"verse_id":2,"verse_start":9.477},{"verse_id":3,"verse_start":15},{"verse_id":4,"verse_start":19.45},{"verse_id":5,"verse_start":23.768},{"verse_id":6,"verse_start":33.662},{"verse_id":7,"verse_start":38.132},{"verse_id":8,"verse_start":44.344},{"verse_id":9,"verse_start":49.132},{"verse_id":10,"verse_start":54.649},{"verse_id":11,"verse_start":64.411},{"verse_id":12,"verse_start":74.583},{"verse_id":13,"verse_start":82.477},{"verse_id":14,"verse_start":89.623},{"verse_id":15,"verse_start":96.503},{"verse_id":16,"verse_start":104.715},{"verse_id":17,"verse_start":109.411},{"verse_id":18,"verse_start":116.755},{"verse_id":19,"verse_start":120.331},{"verse_id":20,"verse_start":127.424},{"verse_id":21,"verse_start":132.252},{"verse_id":22,"verse_start":138.94},{"verse_id":23,"verse_start":152.636},{"verse_id":24,"verse_start":158.397},{"verse_id":25,"verse_start":167.45},{"verse_id":26,"verse_start":173.954},{"verse_id":27,"verse_start":184.914},{"verse_id":28,"verse_start":198.013},{"verse_id":29,"verse_start":203.45},{"verse_id":30,"verse_start":210.503},{"verse_id":31,"verse_start":220.344},{"verse_id":32,"verse_start":226.887},{"verse_id":33,"verse_start":238.371},{"verse_id":34,"verse_start":243.98},{"verse_id":35,"verse_start":248.808},{"verse_id":36,"verse_start":258.94},{"verse_id":37,"verse_start":264.053},{"verse_id":38,"verse_start":270.781},{"verse_id":39,"verse_start":277.278},{"verse_id":40,"verse_start":286.066},{"verse_id":41,"verse_start":296.874},{"verse_id":42,"verse_start":303.609},{"verse_id":43,"verse_start":314.026},{"verse_id":44,"verse_start":318.424},{"verse_id":45,"verse_start":325.768},{"verse_id":46,"verse_start":333.887},{"verse_id":47,"verse_start":340.252},{"verse_id":48,"verse_start":345.503},{"verse_id":49,"verse_start":348.477},{"verse_id":50,"verse_start":352.278},{"verse_id":51,"verse_start":357.901},{"verse_id":52,"verse_start":369.795},{"verse_id":53,"verse_start":377.358},{"verse_id":54,"verse_start":387.94},{"verse_id":55,"verse_start":395.106},{"verse_id":56,"verse_start":399.609},{"verse_id":57,"verse_start":406.066},{"verse_id":58,"verse_start":415.437},{"verse_id":59,"verse_start":424.821},{"verse_id":60,"verse_start":429.093},{"verse_id":61,"verse_start":436.013},{"verse_id":62,"verse_start":444.795},{"verse_id":63,"verse_start":449.901},{"verse_id":64,"verse_start":458.954},{"verse_id":65,"verse_start":469.119},{"verse_id":66,"verse_start":476.318},{"verse_id":67,"verse_start":481.146},{"verse_id":68,"verse_start":486.026},{"verse_id":69,"verse_start":495.132},{"verse_id":70,"verse_start":500.967},{"verse_id":71,"verse_start":508.318}]}
        ,{src: "B04___07_John________ENGESVN2DA.mp3", data:[{"verse_id":1,"verse_start":3.106},{"verse_id":2,"verse_start":10.543},{"verse_id":3,"verse_start":13.609},{"verse_id":4,"verse_start":20.477},{"verse_id":5,"verse_start":27.119},{"verse_id":6,"verse_start":30.185},{"verse_id":7,"verse_start":37.013},{"verse_id":8,"verse_start":43.927},{"verse_id":9,"verse_start":50.795},{"verse_id":10,"verse_start":53.954},{"verse_id":11,"verse_start":60.371},{"verse_id":12,"verse_start":65.662},{"verse_id":13,"verse_start":78.066},{"verse_id":14,"verse_start":82.053},{"verse_id":15,"verse_start":86.371},{"verse_id":16,"verse_start":93.199},{"verse_id":17,"verse_start":99.424},{"verse_id":18,"verse_start":107.742},{"verse_id":19,"verse_start":118.371},{"verse_id":20,"verse_start":125.702},{"verse_id":21,"verse_start":130.728},{"verse_id":22,"verse_start":136.49},{"verse_id":23,"verse_start":145.675},{"verse_id":24,"verse_start":156.967},{"verse_id":25,"verse_start":161.98},{"verse_id":26,"verse_start":168.291},{"verse_id":27,"verse_start":176.331},{"verse_id":28,"verse_start":183.623},{"verse_id":29,"verse_start":198.066},{"verse_id":30,"verse_start":202.94},{"verse_id":31,"verse_start":208.927},{"verse_id":32,"verse_start":216.543},{"verse_id":33,"verse_start":224.066},{"verse_id":34,"verse_start":231.291},{"verse_id":35,"verse_start":237.278},{"verse_id":36,"verse_start":248.887},{"verse_id":37,"verse_start":259.013},{"verse_id":38,"verse_start":270.159},{"verse_id":39,"verse_start":277.861},{"verse_id":40,"verse_start":288.411},{"verse_id":41,"verse_start":293.887},{"verse_id":42,"verse_start":301.967},{"verse_id":43,"verse_start":308.927},{"verse_id":44,"verse_start":312.464},{"verse_id":45,"verse_start":316.556},{"verse_id":46,"verse_start":323.384},{"verse_id":47,"verse_start":328.252},{"verse_id":48,"verse_start":332.623},{"verse_id":49,"verse_start":336.199},{"verse_id":50,"verse_start":339.45},{"verse_id":51,"verse_start":344.689},{"verse_id":52,"verse_start":351.053},{"verse_id":53,"verse_start":358.349}]}
        ,{src: "B04___08_John________ENGESVN2DA.mp3", data:[{"verse_id":1,"verse_start":2.728},{"verse_id":2,"verse_start":7.742},{"verse_id":3,"verse_start":14.662},{"verse_id":4,"verse_start":20.689},{"verse_id":5,"verse_start":27.702},{"verse_id":6,"verse_start":37.371},{"verse_id":7,"verse_start":46.053},{"verse_id":8,"verse_start":56.689},{"verse_id":9,"verse_start":59.98},{"verse_id":10,"verse_start":69.185},{"verse_id":11,"verse_start":76.834},{"verse_id":12,"verse_start":89.053},{"verse_id":13,"verse_start":101.914},{"verse_id":14,"verse_start":108.742},{"verse_id":15,"verse_start":124.305},{"verse_id":16,"verse_start":128.106},{"verse_id":17,"verse_start":136.887},{"verse_id":18,"verse_start":141.583},{"verse_id":19,"verse_start":147.662},{"verse_id":20,"verse_start":160.159},{"verse_id":21,"verse_start":168.185},{"verse_id":22,"verse_start":178.543},{"verse_id":23,"verse_start":186.252},{"verse_id":24,"verse_start":194.331},{"verse_id":25,"verse_start":203.199},{"verse_id":26,"verse_start":211.98},{"verse_id":27,"verse_start":221.781},{"verse_id":28,"verse_start":226},{"verse_id":29,"verse_start":237.927},{"verse_id":30,"verse_start":246.57},{"verse_id":31,"verse_start":250.331},{"verse_id":32,"verse_start":258.132},{"verse_id":33,"verse_start":262.225},{"verse_id":34,"verse_start":271.967},{"verse_id":35,"verse_start":280.57},{"verse_id":36,"verse_start":285.53},{"verse_id":37,"verse_start":289.715},{"verse_id":38,"verse_start":297.093},{"verse_id":39,"verse_start":303.649},{"verse_id":40,"verse_start":314.464},{"verse_id":41,"verse_start":322.821},{"verse_id":42,"verse_start":335.503},{"verse_id":43,"verse_start":347.755},{"verse_id":44,"verse_start":354.318},{"verse_id":45,"verse_start":373.675},{"verse_id":46,"verse_start":377.848},{"verse_id":47,"verse_start":384.079},{"verse_id":48,"verse_start":391.781},{"verse_id":49,"verse_start":398.199},{"verse_id":50,"verse_start":405.53},{"verse_id":51,"verse_start":411.662},{"verse_id":52,"verse_start":418.079},{"verse_id":53,"verse_start":432.331},{"verse_id":54,"verse_start":441.252},{"verse_id":55,"verse_start":452.026},{"verse_id":56,"verse_start":462.199},{"verse_id":57,"verse_start":468.556},{"verse_id":58,"verse_start":475.146},{"verse_id":59,"verse_start":483.742}]}
        ,{src: "B04___09_John________ENGESVN2DA.mp3", data:[{"verse_id":1,"verse_start":3.106},{"verse_id":2,"verse_start":6.861},{"verse_id":3,"verse_start":13.371},{"verse_id":4,"verse_start":21.781},{"verse_id":5,"verse_start":28.689},{"verse_id":6,"verse_start":33.013},{"verse_id":7,"verse_start":40.636},{"verse_id":8,"verse_start":49.596},{"verse_id":9,"verse_start":57.212},{"verse_id":10,"verse_start":68.079},{"verse_id":11,"verse_start":72.305},{"verse_id":12,"verse_start":83.411},{"verse_id":13,"verse_start":89.808},{"verse_id":14,"verse_start":93.901},{"verse_id":15,"verse_start":98.424},{"verse_id":16,"verse_start":107.623},{"verse_id":17,"verse_start":120.742},{"verse_id":18,"verse_start":131.887},{"verse_id":19,"verse_start":139.623},{"verse_id":20,"verse_start":148.689},{"verse_id":21,"verse_start":155},{"verse_id":22,"verse_start":165.861},{"verse_id":23,"verse_start":176.781},{"verse_id":24,"verse_start":180.583},{"verse_id":25,"verse_start":189.185},{"verse_id":26,"verse_start":197.675},{"verse_id":27,"verse_start":204.132},{"verse_id":28,"verse_start":214.768},{"verse_id":29,"verse_start":221.318},{"verse_id":30,"verse_start":227.45},{"verse_id":31,"verse_start":236.04},{"verse_id":32,"verse_start":244.305},{"verse_id":33,"verse_start":253.225},{"verse_id":34,"verse_start":256.384},{"verse_id":35,"verse_start":264.371},{"verse_id":36,"verse_start":271.57},{"verse_id":37,"verse_start":277.093},{"verse_id":38,"verse_start":282.98},{"verse_id":39,"verse_start":288.834},{"verse_id":40,"verse_start":298.079},{"verse_id":41,"verse_start":304.119}]}
        ,{src: "B04___10_John________ENGESVN2DA.mp3", data:[{"verse_id":1,"verse_start":2.556},{"verse_id":2,"verse_start":12.795},{"verse_id":3,"verse_start":17.371},{"verse_id":4,"verse_start":24.702},{"verse_id":5,"verse_start":31.623},{"verse_id":6,"verse_start":37.927},{"verse_id":7,"verse_start":43.781},{"verse_id":8,"verse_start":50.609},{"verse_id":9,"verse_start":56.053},{"verse_id":10,"verse_start":64.079},{"verse_id":11,"verse_start":72.066},{"verse_id":12,"verse_start":77.821},{"verse_id":13,"verse_start":88.556},{"verse_id":14,"verse_start":93.384},{"verse_id":15,"verse_start":99.238},{"verse_id":16,"verse_start":104.94},{"verse_id":17,"verse_start":116.967},{"verse_id":18,"verse_start":123.477},{"verse_id":19,"verse_start":136.848},{"verse_id":20,"verse_start":140.702},{"verse_id":21,"verse_start":146.834},{"verse_id":22,"verse_start":156.172},{"verse_id":23,"verse_start":162.795},{"verse_id":24,"verse_start":166.742},{"verse_id":25,"verse_start":175.053},{"verse_id":26,"verse_start":184.159},{"verse_id":27,"verse_start":187.596},{"verse_id":28,"verse_start":192.742},{"verse_id":29,"verse_start":199.013},{"verse_id":30,"verse_start":206.305},{"verse_id":31,"verse_start":209.371},{"verse_id":32,"verse_start":213},{"verse_id":33,"verse_start":220.424},{"verse_id":34,"verse_start":233.662},{"verse_id":35,"verse_start":240.437},{"verse_id":36,"verse_start":246.609},{"verse_id":37,"verse_start":255.808},{"verse_id":38,"verse_start":260.914},{"verse_id":39,"verse_start":273.132},{"verse_id":40,"verse_start":277.411},{"verse_id":41,"verse_start":283.583},{"verse_id":42,"verse_start":290.503}]}
        ,{src: "B04___11_John________ENGESVN2DA.mp3", data:[{"verse_id":1,"verse_start":3.503},{"verse_id":2,"verse_start":9.887},{"verse_id":3,"verse_start":16.596},{"verse_id":4,"verse_start":23.199},{"verse_id":5,"verse_start":33.596},{"verse_id":6,"verse_start":37.464},{"verse_id":7,"verse_start":43.225},{"verse_id":8,"verse_start":48.94},{"verse_id":9,"verse_start":57.172},{"verse_id":10,"verse_start":67.795},{"verse_id":11,"verse_start":73.106},{"verse_id":12,"verse_start":81.954},{"verse_id":13,"verse_start":87.477},{"verse_id":14,"verse_start":93.238},{"verse_id":15,"verse_start":97.675},{"verse_id":16,"verse_start":104.358},{"verse_id":17,"verse_start":114.503},{"verse_id":18,"verse_start":120.026},{"verse_id":19,"verse_start":123.397},{"verse_id":20,"verse_start":128.503},{"verse_id":21,"verse_start":135.199},{"verse_id":22,"verse_start":143.424},{"verse_id":23,"verse_start":149.887},{"verse_id":24,"verse_start":154.397},{"verse_id":25,"verse_start":162.914},{"verse_id":26,"verse_start":172.874},{"verse_id":27,"verse_start":179.318},{"verse_id":28,"verse_start":189},{"verse_id":29,"verse_start":198.795},{"verse_id":30,"verse_start":202.199},{"verse_id":31,"verse_start":208.199},{"verse_id":32,"verse_start":218.49},{"verse_id":33,"verse_start":230.795},{"verse_id":34,"verse_start":239.199},{"verse_id":35,"verse_start":247.596},{"verse_id":36,"verse_start":249.199},{"verse_id":37,"verse_start":254.106},{"verse_id":38,"verse_start":262.887},{"verse_id":39,"verse_start":270.132},{"verse_id":40,"verse_start":287.146},{"verse_id":41,"verse_start":294.344},{"verse_id":42,"verse_start":303.252},{"verse_id":43,"verse_start":311.927},{"verse_id":44,"verse_start":319.967},{"verse_id":45,"verse_start":331.795},{"verse_id":46,"verse_start":338.556},{"verse_id":47,"verse_start":342.781},{"verse_id":48,"verse_start":351.411},{"verse_id":49,"verse_start":359.146},{"verse_id":50,"verse_start":366.132},{"verse_id":51,"verse_start":375.265},{"verse_id":52,"verse_start":383},{"verse_id":53,"verse_start":389.848},{"verse_id":54,"verse_start":393.344},{"verse_id":55,"verse_start":405.106},{"verse_id":56,"verse_start":413.225},{"verse_id":57,"verse_start":421.768}]}
        ,{src: "B04___12_John________ENGESVN2DA.mp3", data:[{"verse_id":1,"verse_start":3.437},{"verse_id":2,"verse_start":11.887},{"verse_id":3,"verse_start":18.94},{"verse_id":4,"verse_start":31.397},{"verse_id":5,"verse_start":38.265},{"verse_id":6,"verse_start":44.252},{"verse_id":7,"verse_start":53.914},{"verse_id":8,"verse_start":60.649},{"verse_id":9,"verse_start":66.079},{"verse_id":10,"verse_start":75.596},{"verse_id":11,"verse_start":79.411},{"verse_id":12,"verse_start":84.517},{"verse_id":13,"verse_start":89.715},{"verse_id":14,"verse_start":102.808},{"verse_id":15,"verse_start":107.596},{"verse_id":16,"verse_start":114.477},{"verse_id":17,"verse_start":124.874},{"verse_id":18,"verse_start":132.212},{"verse_id":19,"verse_start":137.185},{"verse_id":20,"verse_start":146.927},{"verse_id":21,"verse_start":151.901},{"verse_id":22,"verse_start":159.702},{"verse_id":23,"verse_start":164.305},{"verse_id":24,"verse_start":170.384},{"verse_id":25,"verse_start":181.583},{"verse_id":26,"verse_start":188.914},{"verse_id":27,"verse_start":202.013},{"verse_id":28,"verse_start":213.119},{"verse_id":29,"verse_start":223.636},{"verse_id":30,"verse_start":232.265},{"verse_id":31,"verse_start":237.384},{"verse_id":32,"verse_start":243.185},{"verse_id":33,"verse_start":248.755},{"verse_id":34,"verse_start":252.649},{"verse_id":35,"verse_start":265.517},{"verse_id":36,"verse_start":279.821},{"verse_id":37,"verse_start":290.119},{"verse_id":38,"verse_start":294.437},{"verse_id":39,"verse_start":304.967},{"verse_id":40,"verse_start":309.066},{"verse_id":41,"verse_start":319},{"verse_id":42,"verse_start":323.464},{"verse_id":43,"verse_start":332.834},{"verse_id":44,"verse_start":338},{"verse_id":45,"verse_start":345.795},{"verse_id":46,"verse_start":349.702},{"verse_id":47,"verse_start":356.795},{"verse_id":48,"verse_start":366.185},{"verse_id":49,"verse_start":374.675},{"verse_id":50,"verse_start":383.914}]}
        ,{src: "B04___13_John________ENGESVN2DA.mp3", data:[{"verse_id":1,"verse_start":3.437},{"verse_id":2,"verse_start":15.596},{"verse_id":3,"verse_start":21.689},{"verse_id":4,"verse_start":29.026},{"verse_id":5,"verse_start":35.795},{"verse_id":6,"verse_start":42.808},{"verse_id":7,"verse_start":49.543},{"verse_id":8,"verse_start":56.887},{"verse_id":9,"verse_start":67.331},{"verse_id":10,"verse_start":75.093},{"verse_id":11,"verse_start":86.185},{"verse_id":12,"verse_start":91.662},{"verse_id":13,"verse_start":100.411},{"verse_id":14,"verse_start":104.914},{"verse_id":15,"verse_start":111.146},{"verse_id":16,"verse_start":117.04},{"verse_id":17,"verse_start":125.675},{"verse_id":18,"verse_start":130.742},{"verse_id":19,"verse_start":143.093},{"verse_id":20,"verse_start":151.781},{"verse_id":21,"verse_start":161.675},{"verse_id":22,"verse_start":173.742},{"verse_id":23,"verse_start":177.318},{"verse_id":24,"verse_start":182.517},{"verse_id":25,"verse_start":187.119},{"verse_id":26,"verse_start":193.94},{"verse_id":27,"verse_start":206.623},{"verse_id":28,"verse_start":216.834},{"verse_id":29,"verse_start":220.424},{"verse_id":30,"verse_start":229.053},{"verse_id":31,"verse_start":234.861},{"verse_id":32,"verse_start":242.159},{"verse_id":33,"verse_start":249.808},{"verse_id":34,"verse_start":264.252},{"verse_id":35,"verse_start":273.861},{"verse_id":36,"verse_start":280.238},{"verse_id":37,"verse_start":292.159},{"verse_id":38,"verse_start":300.053}]}
        ,{src: "B04___14_John________ENGESVN2DA.mp3", data:[{"verse_id":1,"verse_start":3.464},{"verse_id":2,"verse_start":9.543},{"verse_id":3,"verse_start":17.437},{"verse_id":4,"verse_start":27.424},{"verse_id":5,"verse_start":30.901},{"verse_id":6,"verse_start":38.795},{"verse_id":7,"verse_start":47.53},{"verse_id":8,"verse_start":56.026},{"verse_id":9,"verse_start":61.927},{"verse_id":10,"verse_start":74.331},{"verse_id":11,"verse_start":86.45},{"verse_id":12,"verse_start":94.199},{"verse_id":13,"verse_start":106.132},{"verse_id":14,"verse_start":112.636},{"verse_id":15,"verse_start":117.093},{"verse_id":16,"verse_start":120.623},{"verse_id":17,"verse_start":126.53},{"verse_id":18,"verse_start":138.411},{"verse_id":19,"verse_start":143.238},{"verse_id":20,"verse_start":151.649},{"verse_id":21,"verse_start":158.331},{"verse_id":22,"verse_start":170.358},{"verse_id":23,"verse_start":178.305},{"verse_id":24,"verse_start":188.331},{"verse_id":25,"verse_start":196.781},{"verse_id":26,"verse_start":200.874},{"verse_id":27,"verse_start":211.371},{"verse_id":28,"verse_start":224.371},{"verse_id":29,"verse_start":238.172},{"verse_id":30,"verse_start":244.901},{"verse_id":31,"verse_start":251.954}]}
        ,{src: "B04___15_John________ENGESVN2DA.mp3", data:[{"verse_id":1,"verse_start":3.252},{"verse_id":2,"verse_start":7.609},{"verse_id":3,"verse_start":16.57},{"verse_id":4,"verse_start":21.358},{"verse_id":5,"verse_start":32.874},{"verse_id":6,"verse_start":44.397},{"verse_id":7,"verse_start":53.768},{"verse_id":8,"verse_start":60.967},{"verse_id":9,"verse_start":67.98},{"verse_id":10,"verse_start":74.212},{"verse_id":11,"verse_start":81.914},{"verse_id":12,"verse_start":88.517},{"verse_id":13,"verse_start":93.384},{"verse_id":14,"verse_start":99.013},{"verse_id":15,"verse_start":102.954},{"verse_id":16,"verse_start":115.45},{"verse_id":17,"verse_start":127.609},{"verse_id":18,"verse_start":132.265},{"verse_id":19,"verse_start":137.742},{"verse_id":20,"verse_start":148.093},{"verse_id":21,"verse_start":161.702},{"verse_id":22,"verse_start":168.199},{"verse_id":23,"verse_start":176.609},{"verse_id":24,"verse_start":180.225},{"verse_id":25,"verse_start":189.477},{"verse_id":26,"verse_start":196.755},{"verse_id":27,"verse_start":206.927}]}
        ,{src: "B04___16_John________ENGESVN2DA.mp3", data:[{"verse_id":1,"verse_start":3.344},{"verse_id":2,"verse_start":7.477},{"verse_id":3,"verse_start":15.649},{"verse_id":4,"verse_start":20.477},{"verse_id":5,"verse_start":32.132},{"verse_id":6,"verse_start":37.238},{"verse_id":7,"verse_start":41.517},{"verse_id":8,"verse_start":53.914},{"verse_id":9,"verse_start":60.093},{"verse_id":10,"verse_start":63.384},{"verse_id":11,"verse_start":68.225},{"verse_id":12,"verse_start":72.861},{"verse_id":13,"verse_start":78.106},{"verse_id":14,"verse_start":92.185},{"verse_id":15,"verse_start":98.45},{"verse_id":16,"verse_start":104.623},{"verse_id":17,"verse_start":111.04},{"verse_id":18,"verse_start":127.146},{"verse_id":19,"verse_start":134.715},{"verse_id":20,"verse_start":148.093},{"verse_id":21,"verse_start":158.728},{"verse_id":22,"verse_start":170.848},{"verse_id":23,"verse_start":179.53},{"verse_id":24,"verse_start":188.49},{"verse_id":25,"verse_start":195.742},{"verse_id":26,"verse_start":205.914},{"verse_id":27,"verse_start":211.623},{"verse_id":28,"verse_start":218.358},{"verse_id":29,"verse_start":227},{"verse_id":30,"verse_start":233.45},{"verse_id":31,"verse_start":243.159},{"verse_id":32,"verse_start":246.914},{"verse_id":33,"verse_start":259.821}]}
        ,{src: "B04___17_John________ENGESVN2DA.mp3", data:[{"verse_id":1,"verse_start":3.344},{"verse_id":2,"verse_start":15.04},{"verse_id":3,"verse_start":21.636},{"verse_id":4,"verse_start":28.609},{"verse_id":5,"verse_start":34.172},{"verse_id":6,"verse_start":41.556},{"verse_id":7,"verse_start":50.94},{"verse_id":8,"verse_start":54.384},{"verse_id":9,"verse_start":65.199},{"verse_id":10,"verse_start":73.424},{"verse_id":11,"verse_start":78.437},{"verse_id":12,"verse_start":91.477},{"verse_id":13,"verse_start":103.185},{"verse_id":14,"verse_start":111.781},{"verse_id":15,"verse_start":118.702},{"verse_id":16,"verse_start":123.477},{"verse_id":17,"verse_start":126.874},{"verse_id":18,"verse_start":131.517},{"verse_id":19,"verse_start":135.649},{"verse_id":20,"verse_start":141.728},{"verse_id":21,"verse_start":147.901},{"verse_id":22,"verse_start":158.318},{"verse_id":23,"verse_start":164.344},{"verse_id":24,"verse_start":174.609},{"verse_id":25,"verse_start":186.728},{"verse_id":26,"verse_start":195.185}]}
        ,{src: "B04___18_John________ENGESVN2DA.mp3", data:[{"verse_id":1,"verse_start":3.291},{"verse_id":2,"verse_start":12.344},{"verse_id":3,"verse_start":19.265},{"verse_id":4,"verse_start":28.609},{"verse_id":5,"verse_start":36.079},{"verse_id":6,"verse_start":48.384},{"verse_id":7,"verse_start":53.675},{"verse_id":8,"verse_start":61.477},{"verse_id":9,"verse_start":68.675},{"verse_id":10,"verse_start":75.464},{"verse_id":11,"verse_start":83.675},{"verse_id":12,"verse_start":91.344},{"verse_id":13,"verse_start":97.119},{"verse_id":14,"verse_start":102.914},{"verse_id":15,"verse_start":109.424},{"verse_id":16,"verse_start":119.636},{"verse_id":17,"verse_start":131.305},{"verse_id":18,"verse_start":141.57},{"verse_id":19,"verse_start":152.212},{"verse_id":20,"verse_start":156.57},{"verse_id":21,"verse_start":168},{"verse_id":22,"verse_start":174.596},{"verse_id":23,"verse_start":183.967},{"verse_id":24,"verse_start":194.424},{"verse_id":25,"verse_start":198.225},{"verse_id":26,"verse_start":210.119},{"verse_id":27,"verse_start":218.98},{"verse_id":28,"verse_start":223.914},{"verse_id":29,"verse_start":236.954},{"verse_id":30,"verse_start":244.026},{"verse_id":31,"verse_start":250.146},{"verse_id":32,"verse_start":261.384},{"verse_id":33,"verse_start":267.887},{"verse_id":34,"verse_start":275.781},{"verse_id":35,"verse_start":282.57},{"verse_id":36,"verse_start":293.477},{"verse_id":37,"verse_start":308.384},{"verse_id":38,"verse_start":328.212},{"verse_id":39,"verse_start":340.57},{"verse_id":40,"verse_start":351.94}]}
        ,{src: "B04___19_John________ENGESVN2DA.mp3", data:[{"verse_id":1,"verse_start":3.384},{"verse_id":2,"verse_start":6.596},{"verse_id":3,"verse_start":13},{"verse_id":4,"verse_start":22.013},{"verse_id":5,"verse_start":32.411},{"verse_id":6,"verse_start":41.98},{"verse_id":7,"verse_start":59.901},{"verse_id":8,"verse_start":71.424},{"verse_id":9,"verse_start":76.119},{"verse_id":10,"verse_start":84.238},{"verse_id":11,"verse_start":96.874},{"verse_id":12,"verse_start":108.755},{"verse_id":13,"verse_start":123.159},{"verse_id":14,"verse_start":133.093},{"verse_id":15,"verse_start":144.57},{"verse_id":16,"verse_start":162.901},{"verse_id":17,"verse_start":168.94},{"verse_id":18,"verse_start":177.252},{"verse_id":19,"verse_start":183.94},{"verse_id":20,"verse_start":192.026},{"verse_id":21,"verse_start":201.583},{"verse_id":22,"verse_start":211.57},{"verse_id":23,"verse_start":215.662},{"verse_id":24,"verse_start":229.821},{"verse_id":25,"verse_start":249.093},{"verse_id":26,"verse_start":257.45},{"verse_id":27,"verse_start":270.318},{"verse_id":28,"verse_start":281.795},{"verse_id":29,"verse_start":292.662},{"verse_id":30,"verse_start":301.437},{"verse_id":31,"verse_start":317.318},{"verse_id":32,"verse_start":330.874},{"verse_id":33,"verse_start":337.609},{"verse_id":34,"verse_start":342.715},{"verse_id":35,"verse_start":349.543},{"verse_id":36,"verse_start":358.689},{"verse_id":37,"verse_start":366.04},{"verse_id":38,"verse_start":372.437},{"verse_id":39,"verse_start":388.689},{"verse_id":40,"verse_start":398.358},{"verse_id":41,"verse_start":406.477},{"verse_id":42,"verse_start":414.278}]}
        ,{src: "B04___20_John________ENGESVN2DA.mp3", data:[{"verse_id":1,"verse_start":2.874},{"verse_id":2,"verse_start":12.026},{"verse_id":3,"verse_start":23.954},{"verse_id":4,"verse_start":28.517},{"verse_id":5,"verse_start":34.04},{"verse_id":6,"verse_start":39.57},{"verse_id":7,"verse_start":45.967},{"verse_id":8,"verse_start":53.636},{"verse_id":9,"verse_start":60.093},{"verse_id":10,"verse_start":64.914},{"verse_id":11,"verse_start":68.132},{"verse_id":12,"verse_start":73.967},{"verse_id":13,"verse_start":81.543},{"verse_id":14,"verse_start":93.57},{"verse_id":15,"verse_start":100.397},{"verse_id":16,"verse_start":117.954},{"verse_id":17,"verse_start":127.702},{"verse_id":18,"verse_start":142.199},{"verse_id":19,"verse_start":151.212},{"verse_id":20,"verse_start":164.517},{"verse_id":21,"verse_start":172.172},{"verse_id":22,"verse_start":181.318},{"verse_id":23,"verse_start":188.702},{"verse_id":24,"verse_start":197.066},{"verse_id":25,"verse_start":203.053},{"verse_id":26,"verse_start":220.927},{"verse_id":27,"verse_start":234.225},{"verse_id":28,"verse_start":247.411},{"verse_id":29,"verse_start":253.623},{"verse_id":30,"verse_start":262.252},{"verse_id":31,"verse_start":268.808}]}
        ,{src: "B04___21_John________ENGESVN2DA.mp3", data:[{"verse_id":1,"verse_start":3.291},{"verse_id":2,"verse_start":11.146},{"verse_id":3,"verse_start":21.45},{"verse_id":4,"verse_start":34.636},{"verse_id":5,"verse_start":41.278},{"verse_id":6,"verse_start":50.066},{"verse_id":7,"verse_start":62.649},{"verse_id":8,"verse_start":76.477},{"verse_id":9,"verse_start":84.98},{"verse_id":10,"verse_start":91.252},{"verse_id":11,"verse_start":96.225},{"verse_id":12,"verse_start":106.901},{"verse_id":13,"verse_start":117.53},{"verse_id":14,"verse_start":122.371},{"verse_id":15,"verse_start":129.053},{"verse_id":16,"verse_start":146.702},{"verse_id":17,"verse_start":163.834},{"verse_id":18,"verse_start":189.291},{"verse_id":19,"verse_start":203.954},{"verse_id":20,"verse_start":213.199},{"verse_id":21,"verse_start":224.026},{"verse_id":22,"verse_start":229.596},{"verse_id":23,"verse_start":238.185},{"verse_id":24,"verse_start":252.583},{"verse_id":25,"verse_start":260.755}]}
    ];

    var bookIndex = 4;
    var chunks = [];
    var temp = [];

    _.each(john, function(chapter){
        var src = chapter.src;

        _.each(chapter.data, function(item, index, list){

            temp.push(item);

            if(index % 2 == 1){

                // get end of chunk
                var endTime = (list[index+1]) ? list[index+1].verse_start : null;

                chunks.push({book:bookIndex, chunk: bookIndex + "_" + chunks.length + 1, completed: false, src: src, start:temp[0].verse_start, end: endTime});

                temp.length=0;
            }
        });
    });

    //console.table(chunks);

    //console.log(JSON.stringify(chunks));

    _.each(chunks, function(chunk){
        ChunkList.insert(chunk);
    });
}