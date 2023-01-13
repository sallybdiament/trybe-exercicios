import { Schema } from 'mongoose';
import AbstractODM from './AbstractODM';
import IKey from '../Interfaces/IKey';

class KeyODM extends AbstractODM<IKey> {
  constructor() {
    const schema = new Schema<IKey>({
      value: { type: String, required: true },
      owner: { type: String, required: true },
      type: { type: String, required: true },
    });
    super(schema, 'Key');
  }

  public async findByValue(value: string): Promise<IKey | null> {
    return this.model.findOne({ value });
  }

  public async getByOwner(value: string): Promise<IKey[]> {
    return this.model.find({ owner: value });
  }
}

export default KeyODM;