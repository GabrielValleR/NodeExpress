module.exports = {

    posts:[
        {
            id:"asd",
            title:"Teste do mural",
            description:"descrição do mural"
        }
    ],

    getAll(){
        return this.posts;
    },

    newPost(title,description){

        this.posts.push({id: generateId(),title,description});
    }

}

function generateId(){
    return Math.random().toString(36).substring(2,9);
}