let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let com = [".com",".org",".es"];

let domainGenerator = () => {
    pronoun.forEach(e => {
        adj.forEach(i => {
            noun.forEach(j =>{
                com.forEach(k =>{
                    console.log(`${e}${i}${j}${k}`); 
                })
            })
        }) 
    });
}
console.log(domainGenerator(pronoun,adj,noun,com))




