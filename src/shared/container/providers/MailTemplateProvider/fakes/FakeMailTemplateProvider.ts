import IParseMailTemplateDTO from '../dtos/IParseMailTemplateDTO';
import IMailtTemplateProvider from '../models/IMailTemplateProvider';

class FakeMailTemplateProvider implements IMailtTemplateProvider {
  public async parse({ template }: IParseMailTemplateDTO): Promise<string> {
    return template;
  }
}

export default FakeMailTemplateProvider;
