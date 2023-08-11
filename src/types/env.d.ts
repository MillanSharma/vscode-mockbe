declare namespace NodeJS {
    export interface ProcessEnv {
        GITHUB_CLIENT_SECRET: string,
        GITHUB_CLIENT_ID: string,
    }
    export interface Gist {
        // Define the properties of a Gist here, e.g., id, description, files, etc.
        id: string;
        description: string;
        files: Record<string, any>;
        // Add more properties as needed
      }
}