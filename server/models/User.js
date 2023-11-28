import { Schema, model, Types} from 'mongoose';

const schemas = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: false,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post',
    }]
},
{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
)


export default model('User', schemas)