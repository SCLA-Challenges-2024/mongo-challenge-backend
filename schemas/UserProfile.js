import { model, Schema } from 'mongoose';

const schema = new Schema(
    {
      name: { type: String, default: '' },
      description: { type: String, default: '' },
    }
  );
  
  const UserModel = model('UserProfile', schema);
  
  export default UserModel;
  