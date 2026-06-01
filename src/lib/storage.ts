function clearSession() {
  const sessionExists = checkSession(); // Função fictícia para verificar se a sessão existe
  if (sessionExists) {
    // Lógica para limpar a sessão
  } else {
    console.warn("Nenhuma sessão encontrada para limpar.");
  }
}
