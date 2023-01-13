import { 
  // Model, model, models, isValidObjectId, UpdateQuery, 
  Schema, 
} from 'mongoose';
import IPayment from '../Interfaces/IPayment';
import AbstractODM from './AbstractODM';

class PaymentODM extends AbstractODM<IPayment> {
  constructor() {
    const schema = new Schema<IPayment>({
      payByPerson: { type: String, required: true },
      payToPerson: { type: String, required: true },
      amount: { type: Number, required: true },
      key: { type: String, required: true },
      status: { type: Number },
    });
    super(schema, 'Payment');
  }
  // private schema: Schema; // atributo para o "molde"
  // private model: Model<IPayment>; // atributo para criar coleção e fornecer acesso ao banco

  // constructor() {
  //   this.schema = new Schema<IPayment>({
  //     payByPerson: { type: String, required: true },
  //     payToPerson: { type: String, required: true },
  //     amount: { type: Number, required: true },
  //     key: { type: String, required: true },
  //     status: { type: Number },
  //   });
  //   this.model = models.Payment || model('Payment', this.schema); // Antes de criar o Schema, verificar se o schema já existe. Caso não exista, o schema será criado. 
  // }

  // public async create(payment: IPayment): Promise<IPayment> {
  //   return this.model.create({ ...payment });
  // }

  // public async update(id: string, obj: Partial<IPayment>)
  //   : Promise<IPayment | null> {
  //   if (!isValidObjectId(id)) throw Error('Invalid Mongo id');
  //   return this.model.findByIdAndUpdate(
  //     { _id: id },
  //     { ...obj } as UpdateQuery<IPayment>,
  //     { new: true },
  //   );
  // }

  public async getAll() {
    return this.model.find();
  }

  public async getByKey(key: string) {
    return this.model.find({ key });
  }
}
export default PaymentODM;