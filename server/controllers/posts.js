import PostMessage from "../models/postMessage.js";

export const getPosts = (req, res) => {
    try{
       const postMessages = PostMessage.find() ;

       console.log(postMessages)
    } catch (error){
        res.status(404).json({Error: error.message})
    }
    
}
export const createPost = (req, res) => {
    res.send('Post Creation');
}