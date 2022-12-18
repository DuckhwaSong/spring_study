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
    
async function getData(url){
  let response = fetch(url);
  return response;
}

async function $api(url, method, data) {
        return (
          await axios({
            method: method,
            url,
            data,
          }).catch((e) => {
            console.log(e);
          })
        ).data;
      }

async function $apiGet(url) {
        return (
          await axios.get(url).catch((e) => {
            console.log(e);
          })
        ).data;
      }
async function axiosGet(url){
        //this.jsonData.axData = await this.$api("https://api.github.com/users/hadley/orgs","get");
        axiosData = await this.$apiGet(url);
        return axiosData;
      }


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