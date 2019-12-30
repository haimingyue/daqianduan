import mongoose from '../config/DBHelper';

const Schema = mongoose.Schema;

const TestSchema = new Schema({
    'name': { type: String},
    'age': { type: Number},
    'email': { type: String}
})

const TestModel = mongoose.model('user', TestSchema)

export default TestModel;