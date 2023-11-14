import { Schema, model, Document } from 'mongoose';
import { ObjectId } from "mongoose";

export interface IArticle extends Document {
    _id: ObjectId;
    title: string;
    keyword: string;
    description?: string;
    content?: string;
    date: Date;
}

const articleSchema = new Schema<IArticle>({
    title: {
        type: String,
        required: true,
        trim: true, 
        minlength: 5, 
        maxlength: 100 
    },
    keyword: {
        type: String,
        required: true,
        unique: true,
        lowercase: true 
    },
    description: {
        type: String,
        required: false,
        default: "No description"
    },
    content: {
        type: String,
        required: false,
        validate: {
            validator: (value: string) => {
                return value.length <= 500; // Giá trị không vượt quá 500 ký tự
            },
            message: 'Content must not exceed 500 characters' 
        }
    },
    date: {
        type: Date,
        required: true
    }
});

const Article = model<IArticle>('Article', articleSchema);
export default Article;