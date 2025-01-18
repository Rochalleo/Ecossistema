# Projeto: Ecossistema Virtual
# Descrição: Este é o arquivo inicial do ecossistema virtual, onde criaturas evoluem e interagem.

import random
import json

class Criatura:
    def __init__(self, id, energia, posicao):
        self.id = id
        self.energia = energia
        self.posicao = posicao

    def mover(self, largura, altura):
        movimentos = [(-1, 0), (1, 0), (0, -1), (0, 1)]
        dx, dy = random.choice(movimentos)
        nova_posicao = (
            max(0, min(self.posicao[0] + dx, largura - 1)),
            max(0, min(self.posicao[1] + dy, altura - 1))
        )
        self.posicao = nova_posicao

    def consumir_energia(self):
        self.energia -= 1

    def reproduzir(self):
        if self.energia > 20:
            self.energia -= 10
            return Criatura(random.randint(1000, 9999), 10, self.posicao)
        return None

    def __repr__(self):
        return f"Criatura {self.id} (Energia: {self.energia}, Posicao: {self.posicao})"

class Ecossistema:
    def __init__(self, largura, altura, num_criaturas):
        self.largura = largura
        self.altura = altura
        self.criaturas = [
            Criatura(i, energia=random.randint(5, 15), posicao=(random.randint(0, largura - 1), random.randint(0, altura - 1)))
            for i in range(num_criaturas)
        ]

    def simular_interacoes(self):
        for criatura in self.criaturas:
            criatura.mover(self.largura, self.altura)
            criatura.consumir_energia()

            # Reprodução
            nova_criatura = criatura.reproduzir()
            if nova_criatura:
                self.criaturas.append(nova_criatura)

            # Criaturas morrem se energia for <= 0
            self.criaturas = [c for c in self.criaturas if c.energia > 0]

    def salvar_estado(self, arquivo):
        estado = {
            "criaturas": [
                {
                    "id": c.id,
                    "energia": c.energia,
                    "posicao": c.posicao
                } for c in self.criaturas
            ]
        }
        with open(arquivo, 'w') as f:
            json.dump(estado, f, indent=4)

if __name__ == "__main__":
    largura = 50
    altura = 50
    num_criaturas = 10

    ecossistema = Ecossistema(largura, altura, num_criaturas)

    for rodada in range(10):
        print(f"Rodada {rodada + 1}")
        ecossistema.simular_interacoes()
        ecossistema.salvar_estado(f"estado_rodada_{rodada + 1}.json")
        print(f"Estado salvo: rodada {rodada + 1}")

    print("Simulação concluída.")
