function createData(obj) {

    var data = obj;

    return {
        set: function (key, val){

            if( key && val ){
                data[key] = val;
            }
        },

        get: function get(name){
            return data[name];
        }
    }

}

var data = createData({});

data.set("name", "Janek");

console.log( data.get("name") );