// github.repository.ts
import { IGitHubDatasource } from '../github.datasource.interface';

export class GitHubRepository {
  private readonly datasource: IGitHubDatasource;

  constructor(datasource: IGitHubDatasource) {
    this.datasource = datasource;
  }

  public async getRepos(): Promise<any[]> {
    return this.datasource.getRepos();
  }
}