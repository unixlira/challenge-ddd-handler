# Domain Events in Customer Aggregate

## Overview

Este desafio foi concluído como parte do aprendizado sobre Eventos de Domínio no contexto de Domain-Driven Design (DDD) utilizando TypeScript. Foram implementados dois eventos de domínio específicos para o agregado de Customer, acompanhados de manipuladores de eventos (`handlers`) para reagir a esses eventos.

### Eventos Implementados

1. **CustomerCreatedEvent**: Disparado quando um novo cliente (Customer) é criado.
2. **CustomerAddressChangedEvent**: Disparado quando o endereço de um cliente existente é alterado através do método `changeAddress()`.

### Handlers Implementados

Para o evento **CustomerCreatedEvent**, foram criados dois `handlers`:

- `EnviaConsoleLog1Handler`: Exibe a mensagem "Esse é o primeiro console.log do evento: CustomerCreated".
- `EnviaConsoleLog2Handler`: Exibe a mensagem "Esse é o segundo console.log do evento: CustomerCreated".

Para o evento **CustomerAddressChangedEvent**, foi criado um `handler`:

- `EnviaConsoleLogHandler`: Exibe a mensagem "Endereço do cliente: {id}, {nome} alterado para: {endereco}", onde `{id}`, `{nome}` e `{endereco}` são substituídos pelos dados reais do cliente.

## Testes

Todos os eventos e manipuladores foram testados para garantir seu correto funcionamento. Os testes incluem:

- Registro e desregistro de manipuladores de eventos.
- Verificação da notificação adequada dos manipuladores ao disparar eventos.
- Verificação da funcionalidade de desregistrar todos os manipuladores de eventos.

## Tecnologia

Este desafio foi implementado usando TypeScript, aproveitando suas funcionalidades de tipagem para garantir maior segurança e clareza no código.

## Como Executar os Testes

Para executar os testes, assegure-se de ter [Node.js](https://nodejs.org/) instalado em sua máquina. Então, execute os seguintes comandos no terminal:

```bash
npm install
npm run test
```
