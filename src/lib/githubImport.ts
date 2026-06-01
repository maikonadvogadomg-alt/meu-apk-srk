// src/lib/githubImport.ts

import { GhRepo } from './github'; // Certifique-se de que a interface GhRepo está exportada corretamente

export async function importGitHubRepo(token: string, owner: string, repo: string): Promise<GhRepo> {
    const url = `https://api.github.com/repos/${owner}/${repo}`;
    
    try {
        const response = await fetch(url, {
            headers: {
                Accept: "application/vnd.github.v3+json",
                Authorization: `token ${token}`,
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Erro ao importar repositório: ${errorData.message || response.statusText}`);
        }

        const repoData: GhRepo = await response.json();
        console.log('Repositório importado com sucesso:', JSON.stringify(repoData, null, 2));
        return repoData;
    } catch (error) {
        console.error('Erro na importação do repositório:', error);
        throw error;
    }
}