if (!process.env.DATABASE_URL) {
  throw new Error("A variável de ambiente DATABASE_URL não está definida.");
}
// Outras verificações de segurança para variáveis de ambiente
