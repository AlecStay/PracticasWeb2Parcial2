// github.datasource.interface.ts
export interface IGitHubDatasource {
    getRepos(): Promise<any[]>;
  }