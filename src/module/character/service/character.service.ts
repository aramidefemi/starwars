import { ICharacter } from '../interface/character.interface';
import Http from '../../../utils/http.helper';

class CharacterService {
  public static async fetchCharacter(url: string) {
    try {
      return await Http.get(url);
    } catch (e) {
      return e;
    }
  }
}
export default CharacterService;
