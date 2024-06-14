# Kassiopeia Tools

Um pacote de ferramentas para facilitar sua vida no front-end. Utilizado na construção de minhas plataformas, resolvi exportar como lib.

# Documentação

[NPM](https://www.npmjs.com/package/kassiopeia-tools)

**Atenção!** Evite usar o construtor das ferramentas, pois há a implementação do padrão Singleton. Use sempre o método static `get`.

Como instalar:

```
npm install kassiopeia-tools
```

OU

```
yarn add kassiopeia-tools
```

## AnimationKassiopeiaTool

AnimationKassiopeiaTool é uma ferramenta que permite animar elementos HTML.
Para tal, usamos a lib [Animate.css](https://animate.style/).

**Como usar?**

```TypeScript
import { AnimationKassiopeiaTool } from "kassiopeia-tools";

// Receba o singleton através do método static get
const anim = AnimationKassiopeiaTool.get();
```

A partir da instância, você terá vários métodos de animações, como:

```TypeScript
anim.shakeX(element)
```

Os métodos de animações recebem os seguintes parâmetros:
`element: HTMLElement, focus?: boolean, time?: number`

- `element`: o elemento HTML a qual receberá a animação
- `focus`: se você não informar um valor, _focus_ por padrão é _true_. Ele indica se o _element_ receberá focus através do método _element.focus()_
- `time`: duração da animação em milissegundos. Por padrão é _1010_

Além dos métodos de animações, exitem:

- `destroy`: método usado para remover fragmentos da ferramenta do seu HTML.
- `rebuild`: Faz o oposto de _destroy_
- `clean`: este, por sua vez, remove as animações em um elemento:

```TypeScript
anim.clean(element)
```

## ToasterKassiopeiaTool

Esta ferramenta é usada para criar notificações personalizadas na tela do usuário

**Como usar?**

```TypeScript
import { ToasterKassiopeiaTool } from "kassiopeia-tools";

const toaster = ToasterKassiopeiaTool.get();

toaster.success("Toaster funcionando!").listeners(
  () => console.log("toaster fechado"),
  () => console.log("Cliquei no toaster")
);
```

Os métodos seguem os seguintes parâmetros: `(message: string, timeInMilliseconds?: number)`

Além dessa forma de usar, existe a opção de personalizar. Veja a interface a seguir:

```TypeScript
interface IToasterConfig {
  container?: {
    position3D: Vec3D;
    maxWidth?: string;
    useVectorWithPercentage?: boolean;
    centerOnScreen?: boolean;
    border?: { size: number; color: string };
    boundary?: { x: 'start' | 'end'; y: 'top' | 'bottom' };
    outSide?: 'top' | 'bottom' | 'start' | 'end';
  };
  background?: {
    info: IToasterBG;
    success: IToasterBG;
    danger: IToasterBG;
    warn: IToasterBG;
  };
  text?: {
    info: IToasterFont;
    success: IToasterFont;
    danger: IToasterFont;
    warn: IToasterFont;
  };
  icon?: {
    info: IToasterIcon;
    success: IToasterIcon;
    danger: IToasterIcon;
    warn: IToasterIcon;
  };
  progressBar?: {
    info: IToasterBar;
    success: IToasterBar;
    danger: IToasterBar;
    warn: IToasterBar;
  };
  hideOnClick: boolean;
}
```

Agora veja como é a implementação padrão:

```TypeScript
{
      container: {
        position3D: Vec3D.of(5, 5, 999),
        useVectorWithPercentage: true,
        centerOnScreen: false,
        boundary: { x: 'end', y: 'top' },
        outSide: 'end',
      },
      background: {
        info: { color: '#3c48af', useVectorWithRem: true, padding: Vec2D.of(1, 1) },
        success: { color: '#3dbe41', useVectorWithRem: true, padding: Vec2D.of(1, 1) },
        danger: { color: '#ca4141', useVectorWithRem: true, padding: Vec2D.of(1, 1) },
        warn: { color: '#d1c717', useVectorWithRem: true, padding: Vec2D.of(1, 1) },
      },
      text: {
        info: { color: '#ffffff', size: 14, font: 'JetBrains Mono' },
        success: { color: '#f9f9f9', size: 14, font: 'JetBrains Mono' },
        danger: { color: '#f5f5f5', size: 14, font: 'JetBrains Mono' },
        warn: { color: '#1c2003', size: 14, font: 'JetBrains Mono' },
      },
      icon: {
        info: { source: infoIcon('#ffffff'), type: 'innerHTML' },
        success: { source: successIcon('#f9f9f9'), type: 'innerHTML' },
        danger: { source: dangerIcon('#f5f5f5'), type: 'innerHTML' },
        warn: { source: warnIcon('#1c2003'), type: 'innerHTML' },
      },
      progressBar: {
        info: { color: '#ffffff', height: 2, time: 10000 },
        success: { color: '#f9f9f9', height: 2, time: 10000 },
        danger: { color: '#f5f5f5', height: 2, time: 10000 },
        warn: { color: '#1c2003', height: 2, time: 10000 },
      },
      hideOnClick: true,
    };
```

A partir dos exemplos acima você pode perceber que existem 4 tipos de notificações: `info`, `success`, `danger`, `warn`.

[Veja mais das interfaces aqui](https://github.com/oGabrielSilva/kassiopeia-tools/blob/main/src/modules/toaster/types.ts)

**Vamos testar??**

Execute e veja o resultado!

```JavaScript
import { ToasterKassiopeiaTool, Vec2D, Vec3D } from "kassiopeia-tools";

// toaster.success("Toaster funcionando!").listeners(
//   () => console.log("toaster fechado"),
//   () => console.log("Cliquei no toaster")
// );

toaster.customToaster(
  "Testando uma notificação personalizada",
  {
    background: {
      color: "#000000",
      padding: Vec2D.of(1, 1),
      useVectorWithRem: true,
      opacity: 0.8,
    }, // Esta é a configuração do background ou o corpo visível da mensagem
    hideOnClick: true, // Aqui estou dizendo que a notificação será fechada ao ser clicada pelo user
    text: { color: "#ffffff", font: "JetBrains Mono" }, //Personalize o texto
    container: {
      position3D: Vec3D.of(5, 5, 999), //Os valores são a posição no x, y e o zIndex do container da notificação
      boundary: { x: "end", y: "top" }, //Aqui estamos indicando a posição nos limites da tela. Nesta config, estou dizendo que o toaster estará no final da tela no x e no começo no y. Ou seja, direita superior
      outSide: "top", //Por qual lado o toaster sairá ao ser destruído
      useVectorWithPercentage: true, //Usado junto da opção position3D, indicando se os valores do x e y serão tratados como porcentagem ou px
    },
  },
  10000
);
```

_Espero que você seja melhor que eu personalizando isso_

## Licença

[MIT](https://github.com/oGabrielSilva/kassiopeia-tools/blob/main/LICENSE)
