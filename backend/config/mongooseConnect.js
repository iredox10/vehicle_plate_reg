import mongoose from 'mongoose'
const mongooseConnect = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('mongoose connected')
    }catch(err){
        console.log(err)
    }
}

export default mongooseConnect