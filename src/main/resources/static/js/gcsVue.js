let gcsVue={
	data:{},	
	methods: {}
};
gcsVue.methods.getDataGET=function(url,callback){
        fetch(url)
        .then(response=>response.json())
        .then(json=>{
			gcsVue.data.result = json			
			//callback();
			})
        .catch(error=>{
            console.log(error);
        });
    };
gcsVue.methods.getDataPOST=function(){
        const data = {
            'got': 'hello~ world! 한글'
        }

        const option = {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            //body: JSON.stringify(data)
        }

        fetch('https://devcms.firstmall.kr/boarddata/catalog?board_seq=1&mn=14', option)
        .then(response=>response.json())
        .then(json=>this.students2 = json)
        .catch(error=>{
            console.log(error);
        });	
	};