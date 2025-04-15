import assembly from './assets/img/640px-VB.png';
import "./App.css";

function App() {
  return (
    <>
      <header>
        <nav>
          <div>
            <img src={assembly} alt="logo do seu trabalho" className='assembly' />
          </div>
          <div>
            <h1>Visual Basic</h1>
          </div>
          <div></div>
        </nav>
      </header>
      <main>
        <div className="historia">
          <h2>História</h2>
          <ul>
            <li>A história do Visual Basic (VB) começa nos anos 1990 e está profundamente ligada à popularização da programação para usuários comuns e desenvolvedores iniciantes. Baseado na linguagem BASIC, o VB introduziu um ambiente de desenvolvimento visual que permitia criar interfaces gráficas de forma simples, usando o método de arrastar e soltar componentes. A primeira versão, o Visual Basic 1.0, foi lançada para o Windows e rapidamente evoluiu, com versões como o VB 3.0 (1993), que trouxe suporte a banco de dados Access, e o VB 6.0 (1998), a mais popular da era "clássica", ainda usada em sistemas legados. Em 2002, com a chegada da plataforma .NET, o Visual Basic foi reformulado e deu origem ao VB.NET, uma linguagem totalmente orientada a objetos e integrada ao framework .NET. Essa mudança, embora poderosa, quebrou a compatibilidade com versões anteriores, o que gerou resistência por parte de muitos desenvolvedores. Desde então, o VB.NET continua sendo mantido, mas perdeu espaço para outras linguagens como o C#, que se tornaram o foco principal da Microsoft dentro do ecossistema .NET. Ainda assim, o legado do Visual Basic permanece como um marco na popularização da programação no ambiente Windows. 
            </li>
          </ul>
        </div>
        <div className='comofuncionadiv'>
          <h2 className='comoFunciona'>Como funciona</h2>
          <ul>
            <li>Funciona como uma linguagem de programação orientada a eventos, focada na criação de aplicações com interface gráfica de forma simples e intuitiva. Ele é usado dentro do ambiente de desenvolvimento Visual Studio, onde o programador pode montar a interface do programa arrastando e soltando componentes visuais, como botões, caixas de texto e rótulos. Cada componente possui eventos (como cliques, digitação, etc.), e o programador escreve o código necessário para definir o que deve acontecer quando esses eventos ocorrem. Por exemplo, ao clicar em um botão, o código pode realizar um cálculo ou exibir uma mensagem. Após a criação da interface e da lógica, o projeto é compilado, gerando um executável que pode ser executado em computadores com Windows. Além disso, o Visual Basic permite acesso a bancos de dados, arquivos e serviços externos por meio de recursos da plataforma .NET, o que amplia suas possibilidades de uso. Simples, visual e eficiente, o Visual Basic é ideal para quem deseja desenvolver aplicações de forma prática e rápida.</li>
          </ul>
        </div>
      </main>
      <footer>
        <h3>Desenvolvido por: Pedro / 2°C TEC</h3>
      </footer>
    </>
  );
}

export default App;
