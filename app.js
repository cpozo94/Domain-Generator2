let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let com = [".com",".org",".es"];


let domainGenerator = (pronoun, adj, noun, com) => {
    for (let i = 0; i < pronoun.length; i++ ) {
      for (let j = 0; j < adj.length; j++) {
          for (let k = 0; k < noun.length; k++) {
            for(let h = 0; h < com.length; h++){
                console.log( pronoun[i] + adj[j] + noun[k] + com[h]);
            }
          
          }
      }
    }
    
    };
    domainGenerator(pronoun, adj, noun, com);