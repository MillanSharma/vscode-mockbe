import axios from 'axios';
import { githubGistUrl } from '../constants';

interface Gist {
    // Define the properties of a Gist here, e.g., id, description, files, etc.
    id: string;
    description: string;
    files: Record<string, any>;
    // Add more properties as needed
  }

export const getAllGists = async ( userName: string, accessToken: string ) => {
    const URL = `${githubGistUrl}/users/${userName}/gists`;
    try {
        const response = await axios.get<Gist[]>(URL, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
    
        // Process the response data, which will be an array of gists
        const gists: Gist[] = response.data;
        return gists;
      } catch (error) {
        console.error('Error fetching gists:', error.message);
        return null;
      }
}