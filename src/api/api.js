class Api{
    constructor({url, token}) {
       this.url=url;
       this.token=token;
    }
    search(query){
        return fetch(`${this.url}/search/photos?query=${query}`,
            {
                headers:{
                    Authorization: `Client-ID ${this.token}`
                }
            }).then(res=>res.json())
    }
}

const config={
    url: 'https://api.unsplash.com',
    token: 'NcjEK1oa9wlXxDbNtNZr4bZb7uKMZK3E--6Hgp1X34Y'
}

const api=new Api(config);
export default api;
