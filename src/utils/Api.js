import React from "react";
import Config from "../Config";

class Api {
    getHome () {
        const url = `${Config.host}/api/home`;
        console.log('url', url);
        return fetch(url)
        .then(res => res.json())
        .then((json) => {
            console.log('json', json);
                return json.cities;
        })

    }
}

export default new Api ();


