import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    numberOfViews: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        defalt: new Date()
    }
});

const PostMessage = mongoose.model('PostMongoose', postSchema);
export default PostMessage;