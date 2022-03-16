import questoes from "../bancoDeQuestoes";

export default (req, res) => {
  const idSel = +req.query.id;

  const unica = questoes.filter((questao) => questao.id === idSel);
  if (unica.length === 1) {
    const selecionada = unica[0].embaralharRespostas();
    res.status(200).json(selecionada.paraObjeto());
  } else {
    res.status(204).send();
  }
};
