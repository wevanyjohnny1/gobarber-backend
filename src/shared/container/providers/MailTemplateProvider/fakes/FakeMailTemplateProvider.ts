import IMailtTemplateProvider from '../models/IMailTemplateProvider';

class FakeMailTemplateProvider implements IMailtTemplateProvider {
  public async parse(): Promise<string> {
    return 'Mail content';
  }
}

export default FakeMailTemplateProvider;
