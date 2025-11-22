# 📘 CareerUp - IA para Desenvolvimento Profissional

## 🚀 Sobre o Projeto

Este projeto é uma plataforma mobile desenvolvida em **React Native + Expo**, integrada à **Google Gemini API**, que analisa o perfil profissional do usuário, identifica habilidades e recomenda caminhos de desenvolvimento alinhados às **tendências atuais e futuras** do mercado de trabalho.

O objetivo é ajudar estudantes, profissionais e pessoas em transição de carreira a compreender:

- **Onde estão hoje**
- **Para onde querem ir**
- **O que precisam desenvolver para chegar lá**

A IA recebe um prompt contendo *perfil + experiências + habilidades + objetivo profissional*, processa tudo e retorna um **JSON estruturado**, exibido no app como uma análise completa.

---

## 🤖 Como Funciona a IA

Utilizando o modelo **Google Gemini 2.5 Flash**, o sistema gera insights com base em:

- Tendências atuais do mercado de trabalho  
- Habilidades emergentes  
- Possíveis caminhos de carreira  
- Recomendações de aprendizado  
- Projeções futuras da área escolhida  

### 🔄 Retorno da IA (JSON)

```json
{
  "titulo": "Análise de Crescimento para Desenvolvedor Frontend",
  "descricao": "Markdown gerado pela IA contendo insights e recomendações.",
  "data": "Dia da análise"
}
```

---

## 🧠 Funcionalidades Principais

### ✔️ Análise de Perfil Profissional  
A IA gera uma análise completa com **insights e recomendações personalizadas** com base no objetivo do usuário.

### ✔️ Guia rápido de tendências  
Cards exibindo **habilidades em alta**, tecnologias emergentes e competências que estarão em destaque nos próximos anos.

### ✔️ Histórico de análises  
O usuário pode acessar análises realizadas anteriormente, que são **salvas localmente** no dispositivo.

### ✔️ Exibição em Markdown  
A análise final retornada pela IA é renderizada em **Markdown**, garantindo leitura clara e bem estruturada.

---

## 🛠️ Como Rodar o Projeto

### 1️⃣ Clone o repositório

```bash
git clone SEU_REPOSITORIO_AQUI
```

### 2️⃣ Instale as dependências

```bash
npm install --legacy-peer-deps
```
>⚠️ Importante: O --legacy-peer-deps é obrigatório para evitar conflitos de versão entre pacotes.

### 3️⃣ Execute o projeto
```bash
npx expo start -c
```

Abra no celular via Expo Go, ou em um emulador:

- 📱 Android Studio
- 🍏 Xcode (macOS)

---

## 🔑 Configuração da API Gemini

Gere sua chave gratuita:
👉 https://aistudio.google.com/app/apikey

Ao final do arquivo app.json, adicione sua API KEY na seguinte linha:

```bash
{
  "extra": {
    "GEMINI_API_KEY": "SUA_API_KEY_AQUI"
  }
}
```

---

## 👥 Integrantes do grupo

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/edvxndxvi">
        <img src="https://avatars.githubusercontent.com/u/109118071?v=4" width="100px;"/><br>
        <sub>
          <b>Edvan Davi - RM554733 - 2TDSPZ</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/rafaelromanini">
        <img src="https://avatars.githubusercontent.com/u/162237423?v=4" width="100px;"/><br>
        <sub>
          <b>Rafael Romanini - RM554637 - 2TDSPZ</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/ViniciusLABernardes">
        <img src="https://avatars.githubusercontent.com/u/111243990?v=4" width="100px;"/><br>
        <sub>
          <b>Vinicius Leandro - RM554728 - 2TDSPY</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
