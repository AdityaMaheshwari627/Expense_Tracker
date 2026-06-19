import mongoose from 'mongoose';
export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://aditya27mh_db_user:jGSIFg3rzadVsNds@cluster0.bdwxuxb.mongodb.net/Expense")
    .then(() => console.log("DB Connected"));
}