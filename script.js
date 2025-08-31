// Variáveis globais
let heroName = "";
let heroXP = 0;
let heroLevel = "";

// Elementos DOM
const heroForm = document.getElementById('heroForm');
const heroNameInput = document.getElementById('heroName');
const heroXPInput = document.getElementById('heroXP');
const resultContainer = document.getElementById('result');
const heroResult = document.getElementById('heroResult');
const levelBadge = document.getElementById('levelBadge');

// Event listener para o formulário
heroForm.addEventListener('submit', function(event) {
    event.preventDefault();
    classifyHero();
});

// Função principal para classificar o herói
function classifyHero() {
    // Capturar valores dos inputs (utilizando variáveis)
    heroName = heroNameInput.value.trim();
    heroXP = parseInt(heroXPInput.value);
    
    // Validação básica
    if (!heroName || isNaN(heroXP) || heroXP < 0) {
        alert('Por favor, preencha todos os campos corretamente!');
        return;
    }
    
    // Determinar o nível usando estruturas de decisão
    heroLevel = determineLevel(heroXP);
    
    // Exibir resultado
    displayResult();
    
    // Opcional: Mostrar múltiplos heróis usando laços de repetição
    addToHeroHistory();
}

// Função para determinar o nível (estruturas de decisão)
function determineLevel(xp) {
    if (xp <= 1000) {
        return "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        return "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        return "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        return "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        return "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        return "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        return "Imortal";
    } else if (xp >= 10001) {
        return "Radiante";
    }
}

// Função para exibir o resultado
function displayResult() {
    // Mensagem conforme especificado no desafio
    const message = `O Herói de nome ${heroName} está no nível de ${heroLevel}`;
    
    heroResult.textContent = message;
    levelBadge.textContent = heroLevel;
    levelBadge.className = `level-badge ${heroLevel.toLowerCase()}`;
    
    // Mostrar container de resultado com animação
    resultContainer.classList.remove('hidden');
    resultContainer.scrollIntoView({ behavior: 'smooth' });
}

// Array para armazenar histórico de heróis (usando variáveis e operadores)
let heroHistory = [];

// Função para adicionar ao histórico (demonstra uso de laços de repetição)
function addToHeroHistory() {
    const hero = {
        name: heroName,
        xp: heroXP,
        level: heroLevel,
        timestamp: new Date().toLocaleString()
    };
    
    heroHistory.push(hero);
    
    // Demonstração de laço de repetição - atualizar console com histórico
    console.log('=== HISTÓRICO DE HERÓIS ===');
    for (let i = 0; i < heroHistory.length; i++) {
        console.log(`${i + 1}. ${heroHistory[i].name} - ${heroHistory[i].xp} XP - Nível ${heroHistory[i].level} (${heroHistory[i].timestamp})`);
    }
}

// Função adicional para demonstrar mais uso de laços de repetição
function simulateMultipleHeroes() {
    // Array com heróis de exemplo
    const exampleHeroes = [
        { name: "Arthur", xp: 1500 },
        { name: "Lancelot", xp: 6500 },
        { name: "Merlin", xp: 9500 },
        { name: "Guinevere", xp: 12000 },
        { name: "Percival", xp: 800 }
    ];
    
    console.log('=== SIMULAÇÃO DE MÚLTIPLOS HERÓIS ===');
    
    // Usando laço for para processar múltiplos heróis
    for (let i = 0; i < exampleHeroes.length; i++) {
        const hero = exampleHeroes[i];
        const level = determineLevel(hero.xp);
        console.log(`O Herói de nome ${hero.name} está no nível de ${level}`);
    }
    
    // Usando laço while para demonstrar outro tipo de repetição
    let contador = 0;
    while (contador < exampleHeroes.length) {
        const hero = exampleHeroes[contador];
        // Operadores de comparação e lógicos
        if (hero.xp > 5000 && hero.xp < 10000) {
            console.log(`${hero.name} está em um nível avançado!`);
        }
        contador++; // Operador de incremento
    }
}

// Função para demonstrar operadores matemáticos
function calculateHeroStats() {
    if (heroHistory.length === 0) return;
    
    let totalXP = 0;
    let maxXP = 0;
    let minXP = Infinity;
    
    // Laço for para calcular estatísticas (usando operadores)
    for (let i = 0; i < heroHistory.length; i++) {
        const currentXP = heroHistory[i].xp;
        
        totalXP += currentXP; // Operador de adição
        
        if (currentXP > maxXP) { // Operador de comparação
            maxXP = currentXP;
        }
        
        if (currentXP < minXP) { // Operador de comparação
            minXP = currentXP;
        }
    }
    
    const averageXP = totalXP / heroHistory.length; // Operador de divisão
    
    console.log('=== ESTATÍSTICAS DOS HERÓIS ===');
    console.log(`Total de heróis: ${heroHistory.length}`);
    console.log(`XP total acumulado: ${totalXP}`);
    console.log(`XP médio: ${averageXP.toFixed(2)}`);
    console.log(`Maior XP: ${maxXP}`);
    console.log(`Menor XP: ${minXP}`);
}

// Event listeners adicionais para demonstrar interatividade
heroXPInput.addEventListener('input', function() {
    const xp = parseInt(this.value);
    if (!isNaN(xp) && xp >= 0) {
        const previewLevel = determineLevel(xp);
        console.log(`Preview: ${xp} XP = Nível ${previewLevel}`);
    }
});

// Função para limpar o formulário
function clearForm() {
    heroNameInput.value = '';
    heroXPInput.value = '';
    resultContainer.classList.add('hidden');
}

// Adicionar botão de limpar dinamicamente
window.addEventListener('load', function() {
    const clearButton = document.createElement('button');
    clearButton.textContent = 'Limpar Formulário';
    clearButton.type = 'button';
    clearButton.style.marginTop = '10px';
    clearButton.style.background = 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)';
    clearButton.addEventListener('click', clearForm);
    
    heroForm.appendChild(clearButton);
    
    // Executar simulação de exemplo ao carregar a página
    console.log('🎮 Classificador de Nível de Herói carregado!');
    console.log('Abra o console para ver demonstrações dos conceitos de programação.');
    
    // Demonstrar conceitos após um pequeno delay
    setTimeout(() => {
        simulateMultipleHeroes();
    }, 1000);
});

// Demonstração adicional de estruturas condicionais mais complexas
function getAdvancedHeroInfo(name, xp) {
    let level = determineLevel(xp);
    let message = "";
    let nextLevelXP = 0;
    
    // Estruturas de decisão aninhadas e operadores lógicos
    if (level === "Ferro") {
        nextLevelXP = 1001 - xp;
        message = `${name} precisa de ${nextLevelXP} XP para alcançar Bronze`;
    } else if (level === "Bronze") {
        nextLevelXP = 2001 - xp;
        message = `${name} precisa de ${nextLevelXP} XP para alcançar Prata`;
    } else if (level === "Prata") {
        nextLevelXP = 5001 - xp;
        message = `${name} precisa de ${nextLevelXP} XP para alcançar Ouro`;
    } else if (level === "Ouro") {
        nextLevelXP = 7001 - xp;
        message = `${name} precisa de ${nextLevelXP} XP para alcançar Platina`;
    } else if (level === "Platina") {
        nextLevelXP = 8001 - xp;
        message = `${name} precisa de ${nextLevelXP} XP para alcançar Ascendente`;
    } else if (level === "Ascendente") {
        nextLevelXP = 9001 - xp;
        message = `${name} precisa de ${nextLevelXP} XP para alcançar Imortal`;
    } else if (level === "Imortal") {
        nextLevelXP = 10001 - xp;
        message = `${name} precisa de ${nextLevelXP} XP para alcançar Radiante`;
    } else {
        message = `${name} já alcançou o nível máximo: Radiante!`;
    }
    
    return {
        level: level,
        message: message,
        nextLevelXP: nextLevelXP
    };
}
