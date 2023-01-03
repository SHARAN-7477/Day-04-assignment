// 1.Question :
// use the rest of countries in API URL

let xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open("GET","https://restcountries.com/v2/all");

// setup our listner to process the completet
xhr.onload=function(){
    if(xhr.status==200 && xhr.status<300){
        let jsonobj = JSON.parse(this.response);

        for (let i = 0; i < jsonobj.length; i++){
            console.log(jsonobj[i].flags.png)
        
        }

    }
}
xhr.send()

// 2.Use the rest of same countries and print all countries name ,region,sub-region and population

let xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open("GET","https://restcountries.com/v2/all");

// setup our listner to process the completet
xhr.onload=function(){
    if(xhr.status==200 && xhr.status<300){
        let jsonobj = JSON.parse(this.response);

        for (let i = 0; i < jsonobj.length; i++){
            console.log(jsonobj[i].name)
            console.log(jsonobj[i].region)
            console.log(jsonobj[i].subregion)
            console.log(jsonobj[i].population)

        
        }

    }
}
xhr.send()

