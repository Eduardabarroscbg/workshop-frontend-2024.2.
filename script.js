document.addEventListener('DOMContentLoaded', () => {
    const agentData = [
        {
            displayName: "Sage",
            role: { displayName: "Sentinela" },
            description: "Como uma verdadeira fortaleza chinesa, Sage traz segurança para si mesma e para a equipe aonde quer que vá. Capaz de reviver aliados e rechaçar investidas agressivas, ela oferece um centro de calmaria em meio ao caos da batalha",
            image: "https://i.pinimg.com/originals/af/d0/c6/afd0c6d9c2e0fc3d5443d802f092e8f7.png"
        },
        {
            displayName: "Viper",
            role: { displayName: "Controladora" },
            description: "Viper, a química dos Estados Unidos, emprega uma variedade de dispositivos químicos venenosos para controlar o campo de batalha e prejudicar a visão do inimigo. Se as toxinas não matarem a presa, seus jogos mentais certamente o farão.",
            image: "https://i.imgur.com/rgGmQXm.png"
        },
        {
            displayName: "Omen",
            role: { displayName: "Controladora" },
            description: "Omen, uma lembrança fantasmagórica, caça nas sombras. Ele cega os inimigos, teleporta-se pelo campo e deixa a paranoia assumir o controle enquanto o adversário tenta descobrir de onde virá seu próximo ataque.",
            image: "https://i.imgur.com/SirP0je.png"
        },
        {
            displayName: "Sova",
            role: { displayName: "Iniciador" },
            description: "Nascido sob o eterno inverno das tundras russas, Sova rastreia, encontra e elimina inimigos com eficiência e precisão implacáveis. Seu arco personalizado e suas habilidades inigualáveis de reconhecimento garantem que nenhuma presa escape.",
            image: "https://i.imgur.com/RmZZTSxg.jpg"
        },
        {
            displayName: "Jett",
            role: { displayName: "Duelista" },
            description: "Representando a Coreia do Sul, sua terra natal, Jett tem um estilo de luta ágil e evasivo que permite que ela assuma riscos como ninguém. Ela corre em meio a qualquer confronto, cortando os inimigos antes mesmo que eles percebam quem ou o que os atingiu.",
            image: "https://wallpapercave.com/wp/wp6404236.png"
        },
        {
            displayName: "Reyna",
            role: { displayName: "Duelista" },
            description: "Criada no coração do México, Reyna domina o combate individual, destacando-se a cada abate efetuado. Sua capacidade só é limitada por sua própria perícia, tornando-a bastante dependente de desempenho.",
            image: "https://i.imgur.com/62xT3em.png"
        }
    ];

    const agentCardsContainer = document.getElementById('agent-cards');

    agentData.forEach(agent => {
        const card = document.createElement('div');
        card.classList.add('agent-card');
        
        card.innerHTML = `
            <img src="${agent.image}" alt="${agent.displayName}">
            <h3>${agent.displayName}</h3>
            <p class="role">Função: ${agent.role.displayName}</p>
            <p>${agent.description}</p>
        `;

        agentCardsContainer.appendChild(card);
    });
});

function scrollToCards() {
    document.getElementById('agent-cards').scrollIntoView({ behavior: 'smooth' });
}

