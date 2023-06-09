import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        unique: true
    },
    desc: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const model = await mongoose.model("Project", Schema);

export default model;