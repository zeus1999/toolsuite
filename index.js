module.exports = {
 
    isVarArray: function(a){

        return a.constructor === Array ? true : false; 

    },

    getMinValueFromArray: function(a){

        if(!this.isVarArray(a)){
            return null;
        }

        var min = { id: null, value: Number.MAX_SAFE_INTEGER };

        for(var i = 0; i < a.length; i++){

            var val = parseFloat(a[i]);

            if(val < min.value){
                min.value = val;
                min.id = i;
            }

        }

        if(min.id === null){
            min = null;
        }

        return min;

    },

    getMinValueFromObjectArray: function(a, key){

        if(!this.isVarArray(a)){
            return null;
        }

        var min = { id: null, value: Number.MAX_SAFE_INTEGER, obj: null };

        for(var i = 0; i < a.length; i++){

            var val = a[i];

            var dottedann = key.split(".");
            for(var j = 0; j < dottedann.length; j++){
                if(dottedann[j] in val){
                    val = val[dottedann[j]];               
                }
            }

            if(val < min.value){
                min.value = val;
                min.id = i;
                min.obj = a[i];
            }

        }

        if(min.id === null){
            min = null;
        }

        return min;

    },

    getMaxValueFromArray: function(a){

        if(!this.isVarArray(a)){
            return null;
        }

        var max = { id: null, value: Number.MIN_SAFE_INTEGER };

        for(var i = 0; i < a.length; i++){

            var val = parseFloat(a[i]);

            if(val > max.value){
                max.value = val;
                max.id = i;
            }

        }

        if(max.id === null){
            max = null;
        }

        return max;

    },

    getMaxValueFromObjectArray: function(a, key){

        if(!this.isVarArray(a)){
            return null;
        }

        var max = { id: null, value: Number.MIN_SAFE_INTEGER, obj: null };

        for(var i = 0; i < a.length; i++){

            var val = a[i];

            var dottedann = key.split(".");
            for(var j = 0; j < dottedann.length; j++){
                if(dottedann[j] in val){
                    val = val[dottedann[j]];               
                }
            }            

            if(val > max.value){
                max.value = val;
                max.id = i;
                max.obj = a[i];
            }

        }

        if(max.id === null){
            max = null;
        }

        return max;

    },

    intBreakDown: function(a, b){

        var tmp = a;

        if(tmp < 0){
            while(tmp < 0){
                tmp += b;
            }
        }

        for(var i = 0; i < parseInt(a/b); i++){
            tmp -= b;
        }

        return tmp;

    }


}