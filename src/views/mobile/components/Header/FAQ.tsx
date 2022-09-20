import { Drawer } from "@mui/material";
import { Fragment, useState } from "react";
import { BsChevronRight } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import styles from "./styles.module.scss";
import { SubDrawer } from "./SubDrawer";

interface FaqProps {
  isFaqOpen: boolean;
  setIsFaqOpen: (state: boolean) => void;
}

interface FaqMockProps {
  title: string;
  subtitle: string;
  content: string;
}

export const Faq: React.FC<FaqProps> = ({ isFaqOpen, setIsFaqOpen }) => {
  const [isSubDrawerOpen, setIsSubDrawerOpen] = useState<boolean>(false);
  const [subDrawerContent, setSubDrawerContent] = useState<FaqMockProps>({
    title: "Título",
    content: "Conteúdo",
    subtitle: "Subtítulo",
  });
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setIsFaqOpen(open);
    };

  const toggleSubDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setIsSubDrawerOpen(open);
    };

  const faqMock: FaqMockProps[] = [
    {
      title: "Devoluções",
      subtitle:
        "Nossos termos da Política de Devolução estão de acordo com o código do consumidor para assegurar tanto o cliente",
      content: `
      <p>Nossos termos da Política de Devolução estão de acordo com o código do consumidor para assegurar tanto o cliente quanto a empresa Veria.</p>
      <p>Não aceite um pedido com embalagem violada, na constatação de avarias, embalagem violada, itens faltantes, produto em desacordo com o pedido entre em contato conosco imediatamente que resolveremos seu problema.</p>
      <p>Para devoluções, disponibilizamos as opções Estorno em Dinheiro e Créditos na Veria. O tipo de devolução não pode ser alterado assim que a sua devolução solicitada for concluída.</p>
      <p>Os créditos serão alocados na sua conta cadastrada na Veria, lembrando que os créditos possuem 3 meses de validade.</p>
      <p>Se preferir, poderá optar pelo estorno em dinheiro referente ao seu modo de pagamento. Para cartão de crédito. você receberá seu reembolso na sua fatura, que será descontado em períodos caso a compra tenha sido parcelada. Caso seja boleto bancário ou cartão de débito, você receberá o estorno em sua conta bancária informada no formulário.</p>
      <p><b>Somente a primeira devolução do pedido será gratuita, a Veria não arca com o frete de devolução (estorno) após 7 dias de arrependimento.</b></p>
      <p><b>Devolução com estorno é direito do consumidor dentro dos 7 dias de arrependimento como consta no artigo 49 do Código de Defesa do Consumidor, saiba mais clicando aqui:&nbsp;</b><a href="http://www.procon.sp.gov.br/texto.asp?id=3316">http://www.procon.sp.gov.br/texto.asp?id=3316</a><b>. O prazo máximo para a postagem da devolução é de 15 dias. Solicitações de devolução fora destes prazos não será concedido o estorno do pedido.</b></p>
      <p>Para realizarmos o procedimento de devolução, você precisará enviar o produto com a nota fiscal para nós. Para a primeira solicitação de devolução, o envio não tem custo e enviaremos um código de postagem reversa, este código já está com os seus dados de remetente e o nosso de destinatário.</p>
      <p>A Devolução deve ser processada em crédito ou reembolso <strong>somente depois que o pedido chegar</strong> em nossa matriz e não for constatado nenhum sinal de uso, sendo o valor calculado de acordo com os itens devolvidos e valor da Nota Fiscal do cliente, ou seja, não inclui o desconto, valor do frete e os itens não devolvidos.</p>
      <p>Não realizamos devolução de produtos trocados;</p>
      <p>Não efetuaremos devolução de produtos nas seguintes condições:</p>
      <p>– Produtos com uso excessivo;</p>
      <p>– Produtos com sinais de danos causados por uso inadequado;</p>
      <p>– Produtos com sinais de perfuração por objetos pontiagudos ou cortantes (ex: perfuração da bolsa de ar);</p>
      <p>– Não serão aceitos itens que tenham sido alterados pela cliente (exemplos: bainha, ajuste de punho, etc.);</p>
      <p>– Produtos que não seguiram as instruções de lavagem fornecidas na peça;</p>
      <p>– Só serão aceitos produtos não lavados, não usados e sem odores;</p>  
      <p><strong>Comprei com desconto e quero fazer uma devolução, qual valor vou receber de volta?</strong></p>
      <p>– Se você comprou uma peça com desconto (seja na SALE, Black Friday ou usando algum cupom), receberá de volta o valor que você pagou pela peça (com desconto) via créditos ou estorno – o que você tiver escolhido.</p>
      <p>– Exemplo: se você comprou um blazer maxi que o valor original era R$299,00 e pagou R$239,00 recebe o segundo citado, pois esse foi o valor pago.</p>
      <p>Orientamos que fique atento aos itens abaixo a fim de evitar problemas com sua compra:</p>
      <p>– Escolha correta da opção de entrega (PAC e SEDEX);</p>
      <p>– Descrição, características e especificações do produto;</p>
      <p>– Foto: Cor e dimensões do produto (imagens meramente ilustrativas);</p>
      <p>– Escolha o tamanho ideal com nossa Guia de Medidas (as medidas podem sofrer variação por conta da produção em alta escala)</p>
      `,
    },
    {
      title: "Pagamentos",
      subtitle:
        "Você pode parcelar as suas compras em até 6x sem juros nos cartões de crédito Visa, Mastercard, American Express, Elo e Hipercard.",
      content: `
      <p>Você pode parcelar as suas compras em até 6x sem juros nos cartões de crédito Visa, Mastercard, American Express, Elo e Hipercard. Também aceitamos pagamentos por Boleto Bancário.</p>
      <p>Lembrando que o parcelamento mínimo do site é de R$40,00 por parcela.</p>
      `,
    },
    {
      title: "Envio e Prazo de Entrega",
      subtitle:
        "Nossos produtos ficam em um estoque separado somente para a loja virtual com envio em até 1 dia útil.",
      content: `
      <p>Nossos produtos ficam em um estoque separado somente para a loja virtual com envio em até 1 dia útil.</p>
      <p>Normalmente o envio é feito por PAC, que tem prazo médio de entrega de 5 dias úteis, mas se você quiser que a sua compra chegue mais rápido, solicite o envio por Sedex, neste caso o prazo de entrega é em média 2 dias úteis a partir da data de postagem.</p>
      <p>Se você ainda tiver alguma dúvida, entre em contato com a gente pelo:</p>
      <p>WhatsApp : (11) 971258755</p>
      <p>E-mail: sac@veria.com.br</p>
      <p>Nosso horário de atendimento é da segunda à sexta das 08h às 17h00 /
      Sábado das 08h às 14h</p>
      `,
    },
    {
      title: "Privacidade e Segurança",
      subtitle:
        "Para garantir uma compra 100% segura, a Veria conta com um conjunto de ações desenvolvidas a fim de oferecer a completa segurança em todas as suas compras",
      content: `
      <p>Para garantir uma compra 100% segura, a Veria conta com um conjunto de ações desenvolvidas a fim de oferecer a completa segurança em todas as suas compras, independentemente do meio de pagamento escolhido por você. Todos os dados que informar no processo de compra no site serão criptografados.</p>
      <p>Todas as informações que passam pelo processo de compra são automaticamente codificadas por um sistema tecnológico. Assim, seus dados pessoais, a forma de pagamento escolhida e toda outra informação passada à Veria durante o processo de compra serão codificados antes de serem transmitidos, assim ninguém terá acesso aos seus dados.</p>
      `,
    },
  ];

  return (
    <Fragment>
      <Drawer
        anchor="left"
        open={isFaqOpen}
        onClose={toggleDrawer(false)}
        className={styles.faqModal}
      >
        <section className={styles.faqSection}>
          <header>
            <input type="search" placeholder="Qual é sua dúvida?" />
            <GrClose onClick={toggleDrawer(false)} />
          </header>
          <ul>
            {faqMock?.map((faq, index) => (
              <li
                key={`Faq-${index}`}
                onClick={() => {
                  setSubDrawerContent(faq);
                  setIsSubDrawerOpen(true);
                }}
              >
                <p>
                  {faq.title} <BsChevronRight />
                </p>
                <small>{faq.subtitle}</small>
              </li>
            ))}
          </ul>
        </section>
      </Drawer>
      <SubDrawer
        isSubDrawerOpen={isSubDrawerOpen}
        toggleSubDrawer={toggleSubDrawer}
        title={subDrawerContent?.title}
      >
        {subDrawerContent?.content}
      </SubDrawer>
    </Fragment>
  );
};
