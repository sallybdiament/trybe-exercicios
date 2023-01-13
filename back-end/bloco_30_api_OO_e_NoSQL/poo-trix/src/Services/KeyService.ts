import Key from '../Domain/Key/Key';
import KeyFactory from '../Domain/Key/KeyFactory';
import IKey from '../Interfaces/IKey';
import KeyODM from '../Models/KeyODM';

class KeyService {
  private createKeyDomain(key: IKey | null): Key | null {
    if (key) {
      return new Key(
        key.value,
        key.owner,
        key.type,
        key.id,
      );
    }
    return null;
  }

  public async register(key: IKey) {
    const typedKey = KeyFactory.create(key);
    const keyODM = new KeyODM();
    const newKey = await keyODM.create(typedKey);
    return this.createKeyDomain(newKey);
  }

  public async getByValue(value:string) {
    const keyODM = new KeyODM();
    const key = await keyODM.findByValue(value);
    return this.createKeyDomain(key);
  }

  public async getByOwner(owner: string) {
    // if (!this.isValidKey(key)) throw new Error('Invalid Key!');
    const keyODM = new KeyODM();
    const keysByOwner = await keyODM.getByOwner(owner);
    const ownersArr = keysByOwner.map((key) => 
      this.createKeyDomain(key));
    return ownersArr;
  }
}

export default KeyService;