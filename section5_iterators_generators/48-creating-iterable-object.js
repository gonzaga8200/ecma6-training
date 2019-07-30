let norriture = {
    nom : 'viande',
    features: ['Chaude', 'froide', 'mauvais','bonne' ],
    [Symbol.iterator] : function () {
        let i = 0;
        let features = this.features;
        return {
            next: function () {
                let value = features[i];
                i++;
                return {
                    done: i > features.length ? true : false,
                    value: value
                }
            }
        }
    }
};


let couleurs = {
    couleursArray: ['jaune', 'vert', 'rouge', 'bleu'],
    [Symbol.iterator] : function () {
        return {
            next: function () {
                return {
                    done: true,
                    value: ['lo que quiera']
                }
            }
        }
    }
}

for (let feature of norriture) {
    console.log(feature)
}


for (let couleur of couleurs) {
    console.log(couleur)
}